'use client';
import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

const P = 5; // each sprite "pixel" = 5×5 real pixels

// ─────────────────────────────────────────────
// Owner palette  (1–8)
// ─────────────────────────────────────────────
const OWN: Record<number, string> = {
  1: '#0A0A0A', // near-black  — hair outline, pupils
  2: '#CB9670', // warm tan    — skin
  3: '#1A1A1A', // dark charcoal — shirt
  4: '#5C3A1E', // dark brown  — stubble, eyebrows
  5: '#2D1A0A', // deep brown  — hair fill
  6: '#E8CAAA', // light tan   — skin highlight (unused visually, reserved)
  7: '#C0C0C0', // light gray  — collar / undershirt
  8: '#3A3A3A', // mid gray    — shirt shadow
};

// Hologram clone palette — same indices, cyan-tinted
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

// Incoming-item palette
const ITEM: Record<number, string> = {
  1: '#1A1A16',
  2: '#6A6A62',
  3: '#C8C8C0',
};

// ─────────────────────────────────────────────
// Asian male owner — 13 cols × 21 rows
// ─────────────────────────────────────────────
const OWNER: number[][] = [
  // hair
  [0,0,5,5,5,5,5,5,5,5,5,0,0],
  [0,5,5,5,5,5,5,5,5,5,5,5,0],
  [0,5,5,5,5,5,5,5,5,5,5,5,0],
  // face
  [0,1,1,2,2,2,2,2,2,2,1,1,0],
  [0,1,2,2,2,2,2,2,2,2,2,1,0],
  [0,1,2,4,4,2,2,2,4,4,2,1,0], // eyebrows
  [0,1,2,1,2,2,2,2,1,2,2,1,0], // eyes
  [0,1,2,2,2,2,2,2,2,2,2,1,0],
  [0,1,2,2,4,2,2,4,2,2,2,1,0], // nostrils
  [0,1,2,4,4,4,2,4,4,4,2,1,0], // upper lip stubble
  [0,1,4,4,4,4,4,4,4,4,4,1,0], // jaw stubble
  [0,0,1,4,4,4,4,4,4,4,1,0,0], // chin
  // neck
  [0,0,0,1,2,2,1,2,2,1,0,0,0],
  // shirt / collar
  [0,0,1,3,3,7,7,3,3,3,1,0,0],
  [0,1,3,3,7,7,7,7,3,3,3,1,0],
  [1,3,3,3,3,3,3,3,3,3,3,3,1],
  [1,3,3,3,3,3,3,3,3,3,3,3,1],
  [1,3,3,3,3,3,3,3,3,3,3,3,1],
  [0,1,3,3,3,3,3,3,3,3,3,1,0],
  // legs
  [0,0,1,3,3,1,0,1,3,3,1,0,0],
  [0,0,1,1,1,0,0,0,1,1,1,0,0],
];

// Incoming item sprites
const PHONE: number[][] = [
  [1,1,1,1,1],
  [1,0,0,0,1],
  [1,0,0,0,1],
  [1,0,2,0,1],
  [1,1,1,1,1],
];

const ENVELOPE: number[][] = [
  [1,1,1,1,1,1,1],
  [1,2,0,0,0,2,1],
  [1,0,2,0,2,0,1],
  [1,0,0,2,0,0,1],
  [1,0,0,0,0,0,1],
  [1,1,1,1,1,1,1],
];

const MSG: number[][] = [
  [1,1,1,1,1,1],
  [1,2,0,2,0,1],
  [1,0,0,0,0,1],
  [1,1,1,1,1,1],
  [0,0,1,0,0,0],
];

const HAPPY: number[][] = [
  [0,1,1,1,1,1,0],
  [1,0,0,0,0,0,1],
  [1,0,3,0,3,0,1],
  [1,0,0,0,0,0,1],
  [1,3,0,0,0,3,1],
  [1,0,3,3,3,0,1],
  [0,1,0,0,0,1,0],
];

const ITEM_SPRITES = { phone: PHONE, envelope: ENVELOPE, message: MSG };

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

  // Cyan glow behind
  ctx.globalAlpha = baseAlpha * 0.45;
  const grad = ctx.createRadialGradient(x, y, 0, x, y, sprW * 0.7);
  grad.addColorStop(0, 'rgba(16,205,232,0.55)');
  grad.addColorStop(1, 'rgba(16,205,232,0)');
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(x, y, sprW * 0.7, 0, Math.PI * 2);
  ctx.fill();

  // Sprite with hologram palette
  ctx.globalAlpha = baseAlpha * 0.72;
  drawSprite(ctx, OWNER, sx, sy, HOLO);

  // Scanline shimmer — thin horizontal bands every 3px, pulsing
  ctx.globalAlpha = baseAlpha * 0.12 * (0.6 + 0.4 * Math.sin(time * 3 + x));
  ctx.fillStyle = 'rgba(160,240,255,1)';
  for (let row = sy; row < sy + sprH; row += 3) {
    ctx.fillRect(sx, row, sprW, 1);
  }

  // "AI" label below sprite
  ctx.globalAlpha = baseAlpha * 0.6;
  ctx.fillStyle = '#10CDE8';
  ctx.font = `bold ${P * 2}px monospace`;
  ctx.textAlign = 'center';
  ctx.fillText('AI', x, sy + sprH + P * 2.2);
  ctx.textAlign = 'left';
}

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────
interface Item {
  x: number; y: number;
  vx: number; vy: number;
  type: 'phone' | 'envelope' | 'message';
  phase: 'moving' | 'bursting' | 'happy';
  burstAge: number;
  alpha: number;
}

interface Bot { angle: number; orbitR: number; speed: number; }

interface ShieldImpact { angle: number; age: number; }

const SHIELD_R = 78; // hard barrier radius — nothing penetrates this

export default function InboundBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: '-10%' });
  const stateRef = useRef({
    bots: [] as Bot[],
    items: [] as Item[],
    impacts: [] as ShieldImpact[],
    frameCount: 0,
    rafId: 0,
    time: 0,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const s = stateRef.current;

    // Bots orbit just outside the shield
    s.bots = [
      { angle: 0,              orbitR: SHIELD_R + 14, speed: 0.009 },
      { angle: Math.PI * 0.5,  orbitR: SHIELD_R + 16, speed: -0.011 },
      { angle: Math.PI,        orbitR: SHIELD_R + 12, speed: 0.013 },
      { angle: Math.PI * 1.5,  orbitR: SHIELD_R + 15, speed: -0.008 },
    ];
    s.items = [];
    s.impacts = [];
    s.frameCount = 0;
    s.time = 0;

    const resize = () => {
      canvas.width  = container.offsetWidth;
      canvas.height = container.offsetHeight;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(container);

    function spawnItem(W: number, H: number) {
      const cx = W / 2, cy = H / 2;
      const edge = Math.floor(Math.random() * 4);
      let x = 0, y = 0;
      if (edge === 0) { x = Math.random() * W; y = -20; }
      else if (edge === 1) { x = W + 20; y = Math.random() * H; }
      else if (edge === 2) { x = Math.random() * W; y = H + 20; }
      else { x = -20; y = Math.random() * H; }
      const dx = cx - x, dy = cy - y;
      const len = Math.sqrt(dx * dx + dy * dy) || 1;
      const speed = 0.5 + Math.random() * 0.4;
      const types: Item['type'][] = ['phone', 'envelope', 'message'];
      s.items.push({
        x, y,
        vx: (dx / len) * speed,
        vy: (dy / len) * speed,
        type: types[Math.floor(Math.random() * types.length)],
        phase: 'moving',
        burstAge: 0,
        alpha: 1,
      });
    }

    function draw() {
      const ctx = canvas!.getContext('2d');
      if (!ctx) return;
      const W = canvas!.width, H = canvas!.height;
      if (W === 0 || H === 0) return;
      const cx = W / 2, cy = H / 2;
      s.time += 0.04;
      s.frameCount++;

      ctx.clearRect(0, 0, W, H);

      // ── Shield bubble ──
      const pulse = Math.sin(s.time * 1.2) * 4;
      const bubbleR = SHIELD_R + pulse;

      // Outer glow ring
      ctx.globalAlpha = 0.06;
      ctx.strokeStyle = '#1A1A16';
      ctx.lineWidth = 10;
      ctx.beginPath();
      ctx.arc(cx, cy, bubbleR + 6, 0, Math.PI * 2);
      ctx.stroke();

      // Main shield ring
      ctx.globalAlpha = 0.18;
      ctx.strokeStyle = '#6A6A62';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(cx, cy, bubbleR, 0, Math.PI * 2);
      ctx.stroke();

      // Inner shimmer ring
      ctx.globalAlpha = 0.07;
      ctx.strokeStyle = '#C8C8C0';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(cx, cy, bubbleR - 6, 0, Math.PI * 2);
      ctx.stroke();

      // ── Shield impact flashes ──
      s.impacts = s.impacts.filter(imp => {
        imp.age++;
        const progress = imp.age / 24;
        const alpha = (1 - progress) * 0.55;
        if (alpha <= 0) return false;

        // Arc flash at impact point
        ctx.globalAlpha = alpha;
        ctx.strokeStyle = '#C8C8C0';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(cx, cy, bubbleR, imp.angle - 0.25, imp.angle + 0.25);
        ctx.stroke();

        // Pixel sparks expanding outward from impact
        const sparkR = progress * 22;
        ctx.fillStyle = '#6A6A62';
        for (let i = -2; i <= 2; i++) {
          const a = imp.angle + i * 0.12;
          ctx.fillRect(
            Math.floor(cx + Math.cos(a) * (bubbleR + sparkR)) - P / 2,
            Math.floor(cy + Math.sin(a) * (bubbleR + sparkR)) - P / 2,
            P, P,
          );
        }
        return true;
      });

      // ── Owner at center ──
      ctx.globalAlpha = 0.28;
      const ow = sw(OWNER), oh = sh(OWNER);
      drawSprite(ctx, OWNER, cx - ow / 2, cy - oh / 2, OWN);

      // ── Hologram bot clones orbiting the shield ──
      s.bots.forEach(bot => {
        bot.angle += bot.speed;
        const bx = cx + Math.cos(bot.angle) * bot.orbitR;
        const by = cy + Math.sin(bot.angle) * bot.orbitR;
        drawHologramBot(ctx, bx, by, 0.22, s.time);
      });

      // ── Spawn items ──
      if (s.frameCount % 150 === 0 && s.items.filter(i => i.phase !== 'happy' || i.alpha > 0.1).length < 4) {
        spawnItem(W, H);
      }

      // ── Update & draw items ──
      s.items = s.items.filter(item => {
        if (item.phase === 'moving') {
          item.x += item.vx;
          item.y += item.vy;

          // ── HARD BARRIER — stop at shield edge ──
          const dx = item.x - cx, dy = item.y - cy;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist <= SHIELD_R + 4) {
            // Clamp exactly to shield surface
            const angle = Math.atan2(dy, dx);
            item.x = cx + Math.cos(angle) * (SHIELD_R + 4);
            item.y = cy + Math.sin(angle) * (SHIELD_R + 4);
            item.vx = 0;
            item.vy = 0;
            item.phase = 'bursting';
            item.burstAge = 0;

            // Register shield impact flash
            s.impacts.push({ angle, age: 0 });
          }

          ctx.globalAlpha = 0.22;
          const spr = ITEM_SPRITES[item.type];
          drawSprite(ctx, spr, item.x - sw(spr) / 2, item.y - sh(spr) / 2, ITEM);

        } else if (item.phase === 'bursting') {
          item.burstAge++;
          const progress = item.burstAge / 18;
          const colors = ['#1A1A16', '#6A6A62', '#C8C8C0', '#1A1A16'];
          for (let i = 0; i < 8; i++) {
            const angle = (i / 8) * Math.PI * 2;
            const r = progress * 26;
            ctx.globalAlpha = (1 - progress) * 0.3;
            ctx.fillStyle = colors[i % colors.length];
            ctx.fillRect(
              Math.floor(item.x + Math.cos(angle) * r),
              Math.floor(item.y + Math.sin(angle) * r),
              P, P,
            );
          }
          if (item.burstAge >= 18) {
            // Item is intercepted — send happy face floating outward
            const angle = Math.atan2(item.y - cy, item.x - cx);
            item.vx = Math.cos(angle) * 0.6;
            item.vy = Math.sin(angle) * 0.6;
            item.phase = 'happy';
          }

        } else if (item.phase === 'happy') {
          item.x += item.vx;
          item.y += item.vy;
          item.alpha -= 0.008;
          if (item.alpha <= 0) return false;
          ctx.globalAlpha = item.alpha * 0.22;
          drawSprite(ctx, HAPPY, item.x - sw(HAPPY) / 2, item.y - sh(HAPPY) / 2, ITEM);
        }

        if (item.x < -60 || item.x > W + 60 || item.y < -60 || item.y > H + 60) return false;
        return true;
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
