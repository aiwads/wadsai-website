'use client';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import CallButton from './CallButton';

const stats = [
  { value: '62%', label: 'of callers won\'t leave a voicemail' },
  { value: '78%', label: 'of customers go with whoever responds first' },
  { value: '24/7', label: 'your AI never misses a lead' },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: 'easeOut' as const },
});

function WadsLogoIcon({ size = 18, color = '#fff' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.27-.27.67-.36 1-.23 1.12.4 2.33.63 3.6.63.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.27.2 2.5.57 3.65.1.32.03.7-.25.98L6.6 10.8z"
        fill={color}
      />
      <path d="M16.5 8a5.5 5.5 0 0 1 0 8" stroke={color} strokeWidth="1.6" strokeLinecap="round" fill="none" />
      <path d="M19.5 5.5a9 9 0 0 1 0 13" stroke={color} strokeWidth="1.6" strokeLinecap="round" fill="none" opacity="0.65" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="hero-section" style={{
      background: 'radial-gradient(ellipse at 50% 30%, rgba(26,26,22,0.06) 0%, transparent 60%), #E4E4DE',
      minHeight: '100vh',
      paddingTop: '160px',
      paddingLeft: 'clamp(20px, 6vw, 80px)',
      paddingRight: 'clamp(20px, 6vw, 80px)',
      paddingBottom: '100px',
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
    }}>

      {/* Paper plane spray — animated diagonal rain */}
      <div className="hero-paper-planes" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
      {[
        // top-left
        { left:  780, topOffset: -200, rotate: 50, size: 56, opacity: 0.21 },
        { left:  800, topOffset: -290, rotate: 50, size: 56, opacity: 0.22 },
        // top-right
        { left: 1090, topOffset: -330, rotate: 50, size: 56, opacity: 0.21 },
        { left: 1180, topOffset: -220, rotate: 50, size: 56, opacity: 0.20 },
        { left: 1250, topOffset:  -95, rotate: 50, size: 56, opacity: 0.21 },
        // bottom-left
        { left:  730, topOffset:  280, rotate: 50, size: 56, opacity: 0.21 },
        { left:  840, topOffset:  200, rotate: 50, size: 56, opacity: 0.22 },
        { left:  870, topOffset:  340, rotate: 50, size: 56, opacity: 0.20 },
        // middle scattered
        { left:  920, topOffset:  -75, rotate: 50, size: 56, opacity: 0.24 },
        { left:  970, topOffset:   65, rotate: 50, size: 56, opacity: 0.23 },
        { left: 1000, topOffset: -185, rotate: 50, size: 56, opacity: 0.23 },
        { left: 1035, topOffset:  175, rotate: 50, size: 56, opacity: 0.22 },
        { left: 1120, topOffset:   50, rotate: 50, size: 56, opacity: 0.22 },
        { left: 1200, topOffset:  155, rotate: 50, size: 56, opacity: 0.20 },
        // right extension
        { left: 1310, topOffset:  -60, rotate: 50, size: 56, opacity: 0.20 },
        { left: 1340, topOffset: -116, rotate: 50, size: 56, opacity: 0.19 },
        { left: 1380, topOffset:  200, rotate: 50, size: 56, opacity: 0.19 },
        { left: 1420, topOffset:   80, rotate: 50, size: 56, opacity: 0.18 },
        { left: 1460, topOffset: -140, rotate: 50, size: 56, opacity: 0.18 },
        { left: 1500, topOffset:  300, rotate: 50, size: 56, opacity: 0.17 },
        { left: 1520, topOffset:   10, rotate: 50, size: 56, opacity: 0.17 },
        // far right
        { left: 1580, topOffset: -200, rotate: 50, size: 52, opacity: 0.15 },
        { left: 1620, topOffset:  150, rotate: 50, size: 52, opacity: 0.15 },
        { left: 1660, topOffset:  -50, rotate: 50, size: 52, opacity: 0.14 },
        { left: 1700, topOffset:  280, rotate: 50, size: 50, opacity: 0.13 },
        { left: 1740, topOffset: -160, rotate: 50, size: 50, opacity: 0.13 },
        { left: 1780, topOffset:   80, rotate: 50, size: 48, opacity: 0.12 },
        { left: 1820, topOffset: -300, rotate: 50, size: 48, opacity: 0.11 },
      ].map((p, i) => {
        const duration = 3 + ((i * 17) % 40) / 10;   // 3.0–7.0s
        const delay    = ((i * 43) % 50) / 10;         // 0.0–4.9s
        const travel   = 80 + ((i * 7) % 41);          // 80–120px

        return (
          <motion.div
            key={i}
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={{
              x: [0, travel],
              y: [0, travel],
              opacity: [0, p.opacity, 0],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              position: 'absolute',
              left: `${(p.left / 1920 * 100).toFixed(1)}vw`,
              top: `calc(50% + ${p.topOffset}px)`,
              width: `clamp(${Math.round(p.size * 0.5)}px, ${(p.size / 16).toFixed(2)}vw, ${p.size}px)`,
              height: `clamp(${Math.round(p.size * 0.5)}px, ${(p.size / 16).toFixed(2)}vw, ${p.size}px)`,
              rotate: p.rotate,
              pointerEvents: 'none',
              zIndex: 0,
              background: 'transparent',
            }}
          >
            <img src="/paper-plane.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'contain', mixBlendMode: 'multiply' }} />
          </motion.div>
        );
      })}

      </div>

      {/* Hand — left side background */}
      <div className="hero-hand" style={{
        position: 'absolute',
        left: '24px',
        top: '50%',
        transform: 'translateY(-50%)',
        width: 'clamp(180px, 45vw, 720px)',
        height: 'clamp(180px, 45vw, 720px)',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.39,
        mixBlendMode: 'multiply',
      }}>
        <img
          src="/pointing-hand.png"
          alt=""
          style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'contrast(1.2) saturate(1.1)' }}
        />
      </div>

      {/* ── Centered content ── */}
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>

        {/* Badge */}
        <motion.div {...fadeUp(0)}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '6px 14px', borderRadius: '100px',
            background: 'rgba(26,26,22,0.07)',
            border: '1px solid rgba(26,26,22,0.18)',
            color: '#6A6A62', fontSize: '0.75rem', fontWeight: 600,
            letterSpacing: '0.12em', textTransform: 'uppercase',
            fontFamily: 'var(--font-inter)',
          }}>
            <span style={{
              width: '7px', height: '7px', borderRadius: '50%',
              background: '#22c55e', boxShadow: '0 0 0 2px rgba(34,197,94,0.25), 0 0 8px rgba(34,197,94,0.6)',
              display: 'inline-block',
              animation: 'green-pulse 2s ease-in-out infinite',
            }} />
            AI Agents · Always On
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1 {...fadeUp(0.1)} style={{
          fontFamily: 'var(--font-jakarta)', fontWeight: 800,
          fontSize: 'clamp(3.8rem, 7.5vw, 7rem)',
          color: '#1A1A16', lineHeight: 1.06,
          marginTop: '28px', marginBottom: '24px',
        }}>
          Every Customer Heard.<br />
          <span style={{ color: '#6A6A62' }}>Every Lead Handled.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p {...fadeUp(0.2)} style={{
          fontFamily: 'var(--font-inter)', fontSize: '1.1rem', lineHeight: 1.72,
          color: 'rgba(26,26,22,0.55)', maxWidth: '560px', marginBottom: '36px',
        }}>
          Never misses a call. Never forgets to follow up. Your AI keeps the conversation going so you never miss a dollar.
        </motion.p>

        {/* Buttons */}
        <motion.div {...fadeUp(0.3)} className="hero-buttons" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', marginBottom: '48px' }}>
          <CallButton
            defaultText="Call the AI Now"
            phoneSize={15}
            idleStyle={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: '#1A1A16', color: '#E4E4DE',
              fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '0.9rem',
              padding: '14px 28px', borderRadius: '100px',
              boxShadow: '0 4px 24px rgba(26,26,22,0.25)',
              textDecoration: 'none',
            }}
            className="hover:-translate-y-0.5"
          />
          <a href="#how-it-works" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            color: 'rgba(26,26,22,0.55)',
            fontFamily: 'var(--font-inter)', fontWeight: 500, fontSize: '0.9rem',
            padding: '13px 28px', borderRadius: '100px',
            border: '1px solid rgba(26,26,22,0.18)',
            transition: 'background 0.2s ease, border-color 0.2s ease, color 0.2s ease, transform 0.2s ease',
            textDecoration: 'none',
          }} className="hover:bg-[#E4E4DE] hover:border-[#E4E4DE] hover:text-[#1A1A16] hover:-translate-y-0.5">
            See how it works <ArrowRight size={14} />
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div {...fadeUp(0.4)} className="hero-stats" style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px',
          width: '100%', maxWidth: '760px',
        }}>
          {stats.map((s) => (
            <div key={s.value} style={{
              padding: '24px 32px',
              height: '120px',
              background: 'rgba(238,235,229,0.65)',
              border: '1px solid rgba(26,26,22,0.10)',
              borderRadius: '14px',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              textAlign: 'center',
            }}>
              <div style={{ fontFamily: 'var(--font-jakarta)', fontWeight: 900, fontSize: '2.4rem', color: '#1A1A16', lineHeight: 1 }}>
                {s.value}
              </div>
              <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.88rem', color: '#888880', lineHeight: 1.45, marginTop: '6px', maxWidth: '160px' }}>
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-section { padding-top: 100px !important; padding-bottom: 60px !important; }
          .hero-paper-planes { display: none !important; }
          .hero-hand { opacity: 0.15 !important; width: clamp(140px, 60vw, 280px) !important; height: clamp(140px, 60vw, 280px) !important; }
          .hero-stats { grid-template-columns: 1fr !important; }
          .hero-buttons { flex-direction: column !important; align-items: stretch !important; }
          .hero-buttons a, .hero-buttons button { width: 100% !important; justify-content: center !important; }
        }
        @media (max-width: 600px) {
          .hero-stats { grid-template-columns: 1fr !important; }
          .hero-hand { top: 50% !important; transform: translateY(-50%) !important; }
        }
        @keyframes green-pulse {
          0%, 100% { box-shadow: 0 0 0 2px rgba(34,197,94,0.25), 0 0 8px rgba(34,197,94,0.6); }
          50%       { box-shadow: 0 0 0 4px rgba(34,197,94,0.15), 0 0 14px rgba(34,197,94,0.9); }
        }
        @keyframes ping-slow {
          0%        { transform: scale(1);   opacity: 0.8; }
          80%, 100% { transform: scale(1.5); opacity: 0;   }
        }
        @keyframes glowPulse {
          0%, 100% {
            box-shadow:
              0 0 4px 1px rgba(52,199,89,0.9),
              0 0 12px 4px rgba(52,199,89,0.6),
              0 0 24px 8px rgba(52,199,89,0.35),
              0 0 40px 14px rgba(52,199,89,0.15);
          }
          50% {
            box-shadow:
              0 0 8px 3px rgba(52,199,89,1),
              0 0 20px 8px rgba(52,199,89,0.75),
              0 0 40px 16px rgba(52,199,89,0.45),
              0 0 64px 24px rgba(52,199,89,0.2);
          }
        }
      `}</style>
    </section>
  );
}
