'use client';
import { motion } from 'framer-motion';
import { Phone, Cpu, BellRing, ArrowRight } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay },
});

const steps = [
  {
    n: '01',
    icon: Phone,
    title: 'We build your AI in 1 week',
    body: 'Book a short call. We learn your business, script your AI, and have it answering calls and messages live within seven business days.',
  },
  {
    n: '02',
    icon: Cpu,
    title: 'Your AI handles everything',
    body: 'Calls, texts, DMs, email, WhatsApp: your AI answers instantly, sounds like a real person, and handles the full conversation from start to finish.',
  },
  {
    n: '03',
    icon: BellRing,
    title: 'You get every lead, in real time',
    body: 'After every interaction, you get a text or email with the lead\'s name, number, and what they need, so you\'re always in the loop.',
  },
];

const dotGridBg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Ccircle cx='1' cy='1' r='1' fill='rgba(0%2C0%2C0%2C0.07)'/%3E%3C/svg%3E")`;

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" style={{ background: '#DEDAD3', padding: '16px 0 100px', position: 'relative' }}>
      <style>{`
        @media (max-width: 768px) {
          .hiw-grid { grid-template-columns: 1fr !important; }
          .hiw-arrow { display: none !important; }
          .hiw-inner { padding: 0 20px !important; }
          .hiw-cta a { width: 100% !important; justify-content: center !important; }
        }
        @keyframes arrowPulse {
          0%, 100% { opacity: 0.4; }
          50%       { opacity: 1; }
        }
      `}</style>

      {/* Dot grid texture */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
        backgroundImage: dotGridBg,
        backgroundRepeat: 'repeat',
      }} />

      <div className="hiw-inner" style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <motion.div {...fadeUp(0)} style={{ textAlign: 'center', marginBottom: '64px', paddingTop: '40px' }}>
          <span style={{
            display: 'inline-block',
            padding: '6px 16px', borderRadius: '100px',
            background: 'rgba(26,26,22,0.07)', border: '1px solid rgba(26,26,22,0.15)',
            fontFamily: 'var(--font-inter)', fontSize: '0.72rem', fontWeight: 700,
            letterSpacing: '0.16em', textTransform: 'uppercase', color: '#6A6A62',
            marginBottom: '20px',
          }}>
            LIVE IN 7 DAYS. ZERO TECH REQUIRED.
          </span>
          <h2 style={{
            fontFamily: 'var(--font-jakarta)', fontWeight: 800,
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: '#1A1A16', lineHeight: 1.1, marginBottom: '16px',
          }}>
            Live in 3 steps.
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="hiw-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0', alignItems: 'stretch' }}>
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.n} style={{ display: 'flex', alignItems: 'stretch' }}>
                <motion.div
                  {...fadeUp(0.1 + i * 0.1)}
                  style={{
                    flex: 1,
                    background: '#f9f8f6',
                    border: '1px solid rgba(26,26,22,0.09)',
                    borderTop: '1px solid rgba(109,144,185,0.25)',
                    borderRadius: '24px',
                    padding: '28px',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.07), inset 0 1px 0 rgba(255,255,255,0.6)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                  }}
                >
                  {/* Icon */}
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '12px',
                    background: '#1a1a1a',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '20px',
                    boxShadow: '0 0 12px rgba(109,144,185,0.3)',
                  }}>
                    <Icon size={20} color="#ffffff" />
                  </div>

                  {/* Step label */}
                  <div style={{
                    fontFamily: 'monospace', fontSize: '0.68rem', fontWeight: 700,
                    letterSpacing: '0.14em', textTransform: 'uppercase',
                    color: 'rgba(26,26,22,0.50)', marginBottom: '10px',
                  }}>
                    Step {step.n}
                  </div>

                  <h3 style={{
                    fontFamily: 'var(--font-jakarta)', fontWeight: 700,
                    fontSize: '1.15rem', color: '#1A1A16',
                    marginBottom: '12px', lineHeight: 1.3,
                  }}>
                    {step.title}
                  </h3>
                  <p style={{
                    fontFamily: 'var(--font-inter)', fontSize: '0.875rem',
                    color: 'rgba(26,26,22,0.55)', lineHeight: 1.72, margin: 0,
                  }}>
                    {step.body}
                  </p>
                </motion.div>

                {/* Animated arrow connector */}
                {i < steps.length - 1 && (
                  <div
                    className="hiw-arrow"
                    style={{
                      padding: '0 10px', marginTop: '48px', flexShrink: 0,
                      color: 'rgba(109,144,185,0.8)',
                      animation: 'arrowPulse 1.5s ease-in-out infinite',
                    }}
                  >
                    <ArrowRight size={28} strokeWidth={2.5} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          {...fadeUp(0.45)}
          style={{ textAlign: 'center', marginTop: '48px' }}
        >
          <div style={{
            borderTop: '1px solid rgba(26,26,22,0.10)',
            marginBottom: '40px',
          }} />
          <a href="#book-a-call" style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            background: '#1A1A16', color: '#E4E4DE',
            fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '0.95rem',
            padding: '15px 48px', borderRadius: '100px',
            boxShadow: '0 4px 28px rgba(26,26,22,0.20)',
            textDecoration: 'none',
            transition: 'transform 0.2s ease',
          }}>
            Book a Free Call
          </a>
          <p style={{
            fontFamily: 'var(--font-inter)', fontSize: '0.82rem',
            color: 'rgba(26,26,22,0.35)', marginTop: '14px',
          }}>
            A quick 15-minute call to see how it works for your business.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
