'use client';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import CallButton, { startWebCall, isMobileDevice, prefetchToken } from './CallButton';

const NUM_BARS = 72;
const bars = Array.from({ length: NUM_BARS }, (_, i) => {
  const center = (NUM_BARS - 1) / 2;
  const dist = Math.abs(i - center) / center;
  const maxH = 1 - dist * 0.45;
  return {
    maxH,
    duration: 0.6 + Math.random() * 0.8,
    delay: Math.random() * 0.6,
  };
});

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay },
});

const pills = [
  'Never calls in sick',
  'Never goes to voicemail',
  'Works 24/7/365',
  'Handles every channel',
  'No training required',
  'No benefits. No overhead.',
  'Books. Follows up. Converts.',
  'Sounds like a real person',
];

export default function EmployeeSection() {
  return (
    <section style={{ background: '#1c1c1c', padding: '100px 0', overflow: 'hidden' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <motion.div {...fadeUp(0)} style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span style={{
            display: 'inline-block',
            padding: '6px 16px', borderRadius: '100px',
            background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.14)',
            fontFamily: 'var(--font-inter)', fontSize: '0.72rem', fontWeight: 700,
            letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)',
            marginBottom: '24px',
          }}>
            Your AI Employee
          </span>
          <h2 style={{
            fontFamily: 'var(--font-jakarta)', fontWeight: 800,
            fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
            color: '#ffffff', lineHeight: 1.1, marginBottom: '20px',
          }}>
            Your best employee.<br />
            <span style={{ color: 'rgba(255,255,255,0.40)' }}>Minus the salary.</span>
          </h2>
          <p style={{
            fontFamily: 'var(--font-inter)', fontSize: '1rem',
            color: 'rgba(255,255,255,0.75)', maxWidth: '480px',
            margin: '0 auto', lineHeight: 1.7,
          }}>
            Hiring is expensive, unreliable, and slow. Your AI works from day one, handling every call, every message, every follow-up, without ever dropping the ball.
          </p>
        </motion.div>

        {/* Pill cloud */}
        <motion.div
          {...fadeUp(0.15)}
          style={{
            display: 'flex', flexWrap: 'wrap', justifyContent: 'center',
            gap: '10px', marginBottom: '64px',
          }}
        >
          {pills.map((pill, i) => (
            <motion.span
              key={pill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.05 }}
              style={{
                display: 'inline-flex', alignItems: 'center',
                padding: '10px 20px', borderRadius: '100px',
                background: 'rgba(255,255,255,0.10)',
                border: '1px solid rgba(255,255,255,0.20)',
                fontFamily: 'var(--font-inter)', fontSize: '0.875rem',
                fontWeight: 500, color: '#ffffff',
                letterSpacing: '0.01em',
              }}
            >
              {pill}
            </motion.span>
          ))}
        </motion.div>


        {/* CTA row */}
        <motion.div
          {...fadeUp(0.35)}
          style={{ textAlign: 'center' }}
        >
          <p style={{
            fontFamily: 'var(--font-inter)', fontWeight: 600,
            fontSize: '1rem', color: '#ffffff',
            marginBottom: '12px', letterSpacing: '0.02em',
          }}>
            Still hiring humans?
          </p>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            {/* Waveform */}
            <div aria-hidden style={{
              position: 'absolute', inset: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              gap: '3px', zIndex: 0, pointerEvents: 'none',
            }}>
              {bars.map((bar, i) => (
                <motion.div
                  key={i}
                  animate={{ scaleY: [0.15, bar.maxH, 0.15] }}
                  transition={{
                    duration: bar.duration,
                    delay: bar.delay,
                    repeat: Infinity,
                    repeatType: 'mirror',
                    ease: 'easeInOut',
                  }}
                  style={{
                    width: '3px',
                    height: '100%',
                    borderRadius: '2px',
                    background: 'rgba(109,144,185,0.35)',
                    transformOrigin: 'center',
                  }}
                />
              ))}
              {/* Edge fade */}
              <div style={{
                position: 'absolute', inset: 0, pointerEvents: 'none',
                background: 'linear-gradient(to right, #1c1c1c 0%, transparent 20%, transparent 80%, #1c1c1c 100%)',
              }} />
            </div>

            {/* Phone number */}
            <a
              href="tel:+13103612756"
              style={{
                position: 'relative', zIndex: 1,
                fontFamily: 'var(--font-jakarta)', fontWeight: 800,
                fontSize: 'clamp(2.8rem, 6vw, 5rem)', color: '#ffffff',
                lineHeight: 1, letterSpacing: '-0.02em',
                textDecoration: 'none', display: 'block',
                background: 'none', border: 'none', padding: 0, cursor: 'pointer',
              }}
            >
              310-361-2756
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
