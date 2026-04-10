'use client';
import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

const P = 5;

// ── Same owner + hologram palettes as InboundBackground ──
const OWN: Record<number, string> = {
  1: '#0A0A0A',
  2: '#CB9670',
  3: '#1A1A1A',
  4: '#5C3A1E',
  5: '#2D1A0A',
  6: '#E8CAAA',
  7: '#C0C0C0',
  8: '#3A3A3A',
};

const HOLO: Record<number, string> = {
  1: '#0D3A4A',
  2: '#10CDE8',
  3: '#061522',
  4: '#08A8C0',
  5: '#0A1F30',
  6: '#80E8F8',
  7: '#C0F4FF',
  8: '#1A3848',
};

// Recipient silhouette palette
const RECIP: Record<number, string> = {
  1: '#1A1A16',
  2: '#6A6A62',
};

// Asian male owner — 13 cols × 21 rows (identical to InboundBackground)
const OWNER: number[][] = [
  [0,0,5,5,5,5,5,5,5,5,5,0,0],
  [0,5,5,5,5,5,5,5,5,5,5,5,0],
  [0,5,5,5,5,5,5,5,5,5,5,5,0],
  [0,1,1,2,2,2,2,2,2,2,1,1,0],
  [0,1,2,2,2,2,2,2,2,2,2,1,0],
  [0,1,2,4,4,2,2,2,4,4,2,1,0],
  [0,1,2,1,2,2,2,2,1,2,2,1,0],
  [0,1,2,2,2,2,2,2,2,2,2,1,0],
  [0,1,2,2,4,2,2,4,2,2,2,1,0],
  [0,1,2,4,4,4,2,4,4,4,2,1,0],
  [0,1,4,4,4,4,4,4,4,4,4,1,0],
  [0,0,1,4,4,4,4,4,4,4,1,0,0],
  [0,0,0,1,2,2,1,2,2,1,0,0,0],
  [0,0,1,3,3,7,7,3,3,3,1,0,0],
  [0,1,3,3,7,7,7,7,3,3,3,1,0],
  [1,3,3,3,3,3,3,3,3,3,3,3,1],
  [1,3,3,3,3,3,3,3,3,3,3,3,1],
  [1,3,3,3,3,3,3,3,3,3,3,3,1],
  [0,1,3,3,3,3,3,3,3,3,3,1,0],
  [0,0,1,3,3,1,0,1,3,3,1,0,0],
  [0,0,1,1,1,0,0,0,1,1,1,0,0],
];

// Simple recipient silhouette
const RECIPIENT: number[][] = [
  [0,0,1,1,0,0],
  [0,0,1,1,0,0],
  [0,1,1,1,1,0],
  [1,1,1,1,1,1],
  [0,1,1,1,1,0],
  [0,0,1,0,1,0],
  [0,0,1,0,1,0],
];

function sw(s: number[][]): number { return (s[0]?.length ?? 0) * P; }
function sh(s: number[][]): number { return s.length * P; }

function drawSprite(
  ctx: CanvasRenderingContext2D,
  sprite: number[][],
  x: number, y: number,
  palette: Record<number, string>,
) {
  for (let r = 0; r < sprite.length; r++) {
    for (let c = 0; c < sprite[r].length; c++) {
      const v = sprite[r][c];
      if (v > 0 && palette[v]) {
        ctx.fillStyle = palette[v];
        ctx.fillRect(Math.floor(x) + c * P, Math.floor(y) + r * P, P, P);
      }
    }
  }
}

function drawHologramBot(
  ctx: CanvasRenderingContext2D,
  x: number, y: number,
  baseAlpha: number,
  time: number,
) {
  const sprW = sw(OWNER), sprH = sh(OWNER);
  const sx = Math.floor(x - sprW / 2);
  const sy = Math.floor(y - sprH / 2);

  // Cyan glow
  ctx.globalAlpha = baseAlpha * 0.4;
  const grad = ctx.createRadialGradient(x, y, 0, x, y, sprW * 0.7);
  grad.addColorStop(0, 'rgba(16,205,232,0.55)');
  grad.addColorStop(1, 'rgba(16,205,232,0)');
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(x, y, sprW * 0.7, 0, Math.PI * 2);
  ctx.fill();

  // Sprite
  ctx.globalAlpha = baseAlpha * 0.68;
  drawSprite(ctx, OWNER, sx, sy, HOLO);

  // Scanlines
  ctx.globalAlpha = baseAlpha * 0.1 * (0.5 + 0.5 * Math.sin(time * 3 + x));
  ctx.fillStyle = 'rgba(160,240,255,1)';
  for (let row = sy; row < sy + sprH; row += 3) {
    ctx.fillRect(sx, row, sprW, 1);
  }

  // "AI" label
  ctx.globalAlpha = baseAlpha * 0.55;
  ctx.fillStyle = '#10CDE8';
  ctx.font = `bold ${P * 2}px monospace`;
  ctx.textAlign = 'center';
  ctx.fillText('AI', x, sy + sprH + P * 2.2);
  ctx.textAlign = 'left';
}

interface Ring { radius: number; maxRadius: number; }
interface Bot { angle: number; dist: number; speed: number; maxDist: number; }

const RECIPIENT_ANGLES = [0.3, 1.1, 2.1, 2.9, 4.2, 5.1];

export default function OutboundBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: '-10%' });
  const stateRef = useRef({
    rings: [] as Ring[],
    bots: [] as Bot[],
    frameCount: 0,
    rafId: 0,
    time: 0,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const s = stateRef.current;
    s.bots = RECIPIENT_ANGLES.map((angle, i) => ({
      angle,
      dist: (i / RECIPIENT_ANGLES.length) * 120,
      speed: 0.5 + Math.random() * 0.3,
      maxDist: 160,
    }));
    s.rings = [];
    s.frameCount = 0;
    s.time = 0;

    const resize = () => {
      canvas.width  = container.offsetWidth;
      canvas.height = container.offsetHeight;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(container);

    function draw() {
      const ctx = canvas!.getContext('2d');
      if (!ctx) return;
      const W = canvas!.width, H = canvas!.height;
      if (W === 0 || H === 0) return;
      const cx = W / 2, cy = H / 2;
      s.time += 0.04;
      s.frameCount++;

      ctx.clearRect(0, 0, W, H);

      // Expanding rings
      if (s.frameCount % 70 === 0) {
        s.rings.push({ radius: 0, maxRadius: Math.min(W, H) * 0.52 });
      }
      s.rings = s.rings.filter(ring => {
        ring.radius += 1.4;
        const alpha = (1 - ring.radius / ring.maxRadius) * 0.12;
        if (alpha <= 0) return false;
        ctx.globalAlpha = alpha;
        ctx.strokeStyle = '#1A1A16';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(cx, cy, ring.radius, 0, Math.PI * 2);
        ctx.stroke();
        return ring.radius < ring.maxRadius;
      });

      // Owner at center
      ctx.globalAlpha = 0.28;
      const ow = sw(OWNER), oh = sh(OWNER);
      drawSprite(ctx, OWNER, cx - ow / 2, cy - oh / 2, OWN);

      // Recipient silhouettes at edges (fade in as bot approaches)
      RECIPIENT_ANGLES.forEach((angle, idx) => {
        const dist = Math.min(W, H) * 0.42;
        const rx = cx + Math.cos(angle) * dist;
        const ry = cy + Math.sin(angle) * dist;
        const botDist = s.bots[idx]?.dist ?? 0;
        const proximity = Math.max(0, 1 - Math.abs(botDist - 130) / 60);
        ctx.globalAlpha = 0.08 + proximity * 0.14;
        drawSprite(ctx, RECIPIENT, rx - sw(RECIPIENT) / 2, ry - sh(RECIPIENT) / 2, RECIP);
      });

      // Hologram bots moving outward
      s.bots.forEach(bot => {
        bot.dist += bot.speed;
        if (bot.dist >= bot.maxDist) {
          bot.dist = 0;
        }
        const bx = cx + Math.cos(bot.angle) * bot.dist;
        const by = cy + Math.sin(bot.angle) * bot.dist;
        const fadeAlpha = (1 - bot.dist / bot.maxDist) * 0.25 + 0.08;
        drawHologramBot(ctx, bx, by, fadeAlpha, s.time);
      });

      ctx.globalAlpha = 1;
      s.rafId = requestAnimationFrame(draw);
    }

    if (isInView) {
      s.rafId = requestAnimationFrame(draw);
    }

    return () => {
      cancelAnimationFrame(s.rafId);
      ro.disconnect();
    };
  }, [isInView]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%', imageRendering: 'pixelated' }} />
    </div>
  );
}
