'use client';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import CallButton from './CallButton';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay },
});

export default function FinalCTA() {
  return (
    <section style={{ background: '#1c1c1c', padding: '80px 0' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 clamp(24px, 5vw, 80px)', textAlign: 'center' }}>

        <motion.div {...fadeUp(0)}>
          <span style={{
            display: 'inline-block',
            padding: '6px 16px', borderRadius: '100px',
            background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.14)',
            fontFamily: 'var(--font-inter)', fontSize: '0.72rem', fontWeight: 700,
            letterSpacing: '0.16em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.40)', marginBottom: '32px',
          }}>
            Get Started Today
          </span>
        </motion.div>

        <motion.h2
          {...fadeUp(0.08)}
          style={{
            fontFamily: 'var(--font-jakarta)', fontWeight: 800,
            fontSize: 'clamp(2.4rem, 5vw, 4rem)',
            color: '#ffffff', lineHeight: 1.08,
            marginBottom: '24px',
          }}
        >
          The leads don't stop.<br />
          <span style={{ color: 'rgba(255,255,255,0.35)' }}>Neither should your business.</span>
        </motion.h2>

        <motion.p
          {...fadeUp(0.16)}
          style={{
            fontFamily: 'var(--font-inter)', fontSize: '1.05rem',
            color: 'rgba(255,255,255,0.45)', maxWidth: '480px',
            margin: '0 auto 48px', lineHeight: 1.7,
          }}
        >
          Your AI answers every call. Follows up with every lead. Requests reviews after every job.
        </motion.p>

        <motion.div
          {...fadeUp(0.24)}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', justifyContent: 'center' }}
        >
          <CallButton
            defaultText="Talk to Our AI Live"
            phoneSize={16}
            idleStyle={{
              display: 'inline-flex', alignItems: 'center', gap: '9px',
              background: '#ffffff', color: '#1A1A16',
              fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.95rem',
              padding: '16px 32px', borderRadius: '100px',
              textDecoration: 'none',
              boxShadow: '0 4px 32px rgba(255,255,255,0.12)',
            }}
          />
          <a href="#book-a-call" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            color: 'rgba(255,255,255,0.65)',
            fontFamily: 'var(--font-inter)', fontWeight: 500, fontSize: '0.9rem',
            padding: '15px 28px', borderRadius: '100px',
            border: '1px solid rgba(255,255,255,0.20)',
            textDecoration: 'none',
            transition: 'color 0.2s ease, border-color 0.2s ease',
          }}>
            Book a Strategy Call <ArrowRight size={14} />
          </a>
        </motion.div>

        <motion.p
          {...fadeUp(0.32)}
          style={{
            fontFamily: 'var(--font-inter)', fontSize: '0.8rem',
            color: 'rgba(255,255,255,0.25)', marginTop: '28px',
          }}
        >
          Live in 1 week · No contracts · Cancel anytime
        </motion.p>

      </div>
    </section>
  );
}
