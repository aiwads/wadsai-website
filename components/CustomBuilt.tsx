'use client';
import { motion } from 'framer-motion';
import Cal from '@calcom/embed-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay },
});

const pills = [
  '✓ Custom Built For You',
  '✓ Live Within a Week',
  '✓ No Long-Term Contracts',
];

export default function CustomBuilt() {
  return (
    <section style={{ background: '#E4E4DE', padding: '100px 0' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>

        {/* Badge */}
        <motion.div {...fadeUp(0)}>
          <span style={{
            display: 'inline-block',
            padding: '6px 14px', borderRadius: '100px',
            background: 'rgba(26,26,22,0.07)',
            border: '1px solid rgba(26,26,22,0.18)',
            color: '#6A6A62', fontSize: '0.75rem', fontWeight: 600,
            letterSpacing: '0.12em', textTransform: 'uppercase',
            fontFamily: 'var(--font-inter)', marginBottom: '24px',
          }}>
            · CUSTOM BUILT FOR YOUR BUSINESS ·
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          {...fadeUp(0.08)}
          style={{
            fontFamily: 'var(--font-jakarta)', fontWeight: 800,
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: '#1A1A16', lineHeight: 1.1, marginBottom: '20px',
          }}
        >
          Every Business Is Different.<br />Your AI Should Be Too.
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          {...fadeUp(0.14)}
          style={{
            fontFamily: 'var(--font-inter)', fontSize: '1rem',
            color: 'rgba(26,26,22,0.50)', maxWidth: '540px',
            margin: '0 auto 40px', lineHeight: 1.7,
          }}
        >
          We build every agent from scratch, trained on your business, your voice, and your customers. No templates. No one-size-fits-all. Just an AI that works exactly the way you need it to.
        </motion.p>

        {/* Feature pills */}
        <motion.div
          {...fadeUp(0.20)}
          style={{
            display: 'flex', flexWrap: 'wrap', justifyContent: 'center',
            gap: '10px', marginBottom: '44px',
          }}
        >
          {pills.map((pill) => (
            <span
              key={pill}
              style={{
                display: 'inline-flex', alignItems: 'center',
                padding: '10px 20px', borderRadius: '100px',
                background: 'rgba(26,26,22,0.05)',
                border: '1px solid rgba(26,26,22,0.12)',
                fontFamily: 'var(--font-inter)', fontSize: '0.875rem',
                fontWeight: 500, color: 'rgba(26,26,22,0.70)',
              }}
            >
              {pill}
            </span>
          ))}
        </motion.div>

        {/* Cal.com inline embed */}
        <motion.div
          id="book-a-call"
          {...fadeUp(0.26)}
          style={{
            maxWidth: '800px', margin: '0 auto',
            padding: '24px 0',
            background: 'rgba(255,255,255,0.50)',
            borderRadius: '20px',
            border: '1px solid rgba(26,26,22,0.08)',
            overflow: 'hidden',
          }}
        >
          <Cal calLink="wadsai/15min" config={{ theme: 'light' }} style={{ width: '100%' }} />
        </motion.div>

        {/* Reassurance line */}
        <motion.p
          {...fadeUp(0.32)}
          style={{
            fontFamily: 'var(--font-inter)', fontSize: '0.82rem',
            color: 'rgba(26,26,22,0.35)', marginTop: '24px',
          }}
        >
          No pressure. No pitch. Just a straight conversation about what your business needs.
        </motion.p>

      </div>
    </section>
  );
}
