'use client';
import { motion } from 'framer-motion';
import {
  Phone, MessageSquare, Mail, MessageCircle, Star,
  Globe, Calendar, Users, Zap, Bell, Database,
} from 'lucide-react';

const OUTER_R = 150;
const INNER_R = 92;
const OUTER_DUR = 13;
const INNER_DUR = 21;
const CONTAINER = 380;

const outerIcons = [
  { Icon: Phone },
  { Icon: MessageSquare },
  { Icon: Mail },
  { Icon: MessageCircle },
  { Icon: Star },
  { Icon: Globe },
  { Icon: Calendar },
  { Icon: Users },
];

const innerIcons = [
  { Icon: Zap },
  { Icon: Bell },
  { Icon: Database },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay },
});

export default function OrbitalSection() {
  return (
    <section style={{ background: '#E4E4DE', padding: '100px 0 40px' }}>
      <style>{`
        @keyframes orbit-cw {
          from { transform: rotate(0deg) translateX(${OUTER_R}px); }
          to   { transform: rotate(360deg) translateX(${OUTER_R}px); }
        }
        @keyframes icon-upright-cw {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to   { transform: translate(-50%, -50%) rotate(-360deg); }
        }
        @keyframes orbit-ccw {
          from { transform: rotate(0deg) translateX(${INNER_R}px); }
          to   { transform: rotate(-360deg) translateX(${INNER_R}px); }
        }
        @keyframes icon-upright-ccw {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to   { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @media (max-width: 767px) {
          .orbital-wrapper {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
          }
        }
      `}</style>

      <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 24px' }}>

        {/* Text */}
        <motion.div {...fadeUp(0)} style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '6px 14px', borderRadius: '100px',
            background: 'rgba(26,26,22,0.07)',
            border: '1px solid rgba(26,26,22,0.18)',
            color: '#6A6A62', fontSize: '0.75rem', fontWeight: 600,
            letterSpacing: '0.12em', textTransform: 'uppercase',
            fontFamily: 'var(--font-inter)', marginBottom: '24px',
          }}>
            · ONE AI. CONNECTED TO EVERYTHING. ·
          </span>
          <h2 style={{
            fontFamily: 'var(--font-jakarta)', fontWeight: 800,
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: '#1A1A16', lineHeight: 1.1, marginBottom: '16px',
          }}>
            Plugged Into the Way You Already Work.
          </h2>
          <p style={{
            fontFamily: 'var(--font-inter)', fontSize: '1rem',
            color: 'rgba(26,26,22,0.50)', maxWidth: '520px',
            margin: '0 auto', lineHeight: 1.7,
          }}>
            Your AI agent connects to your phones, messages, email, calendar, CRM, and more. No complicated setup, no new software to learn.
          </p>
        </motion.div>

        {/* Orbital */}
        <div className="orbital-wrapper">
        <motion.div
          {...fadeUp(0.2)}
          style={{
            position: 'relative',
            width: CONTAINER,
            height: CONTAINER,
            margin: '0 auto',
            flexShrink: 0,
          }}
        >
          {/* Outer guide ring */}
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            width: OUTER_R * 2, height: OUTER_R * 2,
            transform: 'translate(-50%, -50%)',
            borderRadius: '50%',
            border: '1px solid rgba(26,26,22,0.10)',
            pointerEvents: 'none',
          }} />

          {/* Inner guide ring */}
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            width: INNER_R * 2, height: INNER_R * 2,
            transform: 'translate(-50%, -50%)',
            borderRadius: '50%',
            border: '1px solid rgba(26,26,22,0.07)',
            pointerEvents: 'none',
          }} />

          {/* Center W */}
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 56, height: 56, borderRadius: 16,
            background: '#1A1A16',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 2,
            boxShadow: '0 4px 20px rgba(26,26,22,0.22)',
          }}>
            <span style={{
              fontFamily: 'var(--font-jakarta)', fontWeight: 800,
              fontSize: '1.4rem', color: '#E4E4DE', lineHeight: 1,
            }}>W</span>
          </div>

          {/* Outer icons — clockwise */}
          {outerIcons.map(({ Icon }, i) => {
            const delay = -(OUTER_DUR * i / outerIcons.length);
            return (
              <div
                key={i}
                style={{
                  position: 'absolute', top: '50%', left: '50%',
                  width: 0, height: 0,
                  animation: `orbit-cw ${OUTER_DUR}s linear infinite`,
                  animationDelay: `${delay}s`,
                }}
              >
                <div style={{
                  position: 'absolute',
                  animation: `icon-upright-cw ${OUTER_DUR}s linear infinite`,
                  animationDelay: `${delay}s`,
                }}>
                  <div style={{
                    width: 38, height: 38, borderRadius: 11,
                    background: 'rgba(255,255,255,0.85)',
                    border: '1px solid rgba(26,26,22,0.09)',
                    boxShadow: '0 2px 8px rgba(26,26,22,0.08)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={16} color="#1A1A16" strokeWidth={1.8} />
                  </div>
                </div>
              </div>
            );
          })}

          {/* Inner icons — counter-clockwise */}
          {innerIcons.map(({ Icon }, i) => {
            const delay = -(INNER_DUR * i / innerIcons.length);
            return (
              <div
                key={i}
                style={{
                  position: 'absolute', top: '50%', left: '50%',
                  width: 0, height: 0,
                  animation: `orbit-ccw ${INNER_DUR}s linear infinite`,
                  animationDelay: `${delay}s`,
                }}
              >
                <div style={{
                  position: 'absolute',
                  animation: `icon-upright-ccw ${INNER_DUR}s linear infinite`,
                  animationDelay: `${delay}s`,
                }}>
                  <div style={{
                    width: 30, height: 30, borderRadius: 9,
                    background: 'rgba(255,255,255,0.70)',
                    border: '1px solid rgba(26,26,22,0.09)',
                    boxShadow: '0 1px 6px rgba(26,26,22,0.06)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={13} color="#1A1A16" strokeWidth={1.8} />
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
        </div>

      </div>
    </section>
  );
}
