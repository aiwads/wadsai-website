'use client';
import { motion } from 'framer-motion';
import { CalendarCheck, Cpu, Bell } from 'lucide-react';

const steps = [
  {
    n: '01',
    icon: CalendarCheck,
    title: 'Book a quick call',
    body: 'Tell us about your business. We\'ll build your custom AI agent and have it live within 24 hours — no tech knowledge needed.',
  },
  {
    n: '02',
    icon: Cpu,
    title: 'Your AI goes live',
    body: 'Your AI agent answers every call, sounds like a real person, knows your business, and handles the conversation start to finish.',
  },
  {
    n: '03',
    icon: Bell,
    title: 'You get every lead',
    body: 'You receive a text or email with the caller\'s name, number, and what they need — so you can follow up when you\'re ready.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{ background: '#E4E4DE', padding: '100px 0' }}>
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#6A6A62', marginBottom: '12px' }}>
            Simple setup. Real results.
          </p>
          <h2 style={{ fontFamily: 'var(--font-jakarta)', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1A1A16', lineHeight: 1.1 }}>
            Live in 3 steps.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                style={{
                  background: 'rgba(26,26,22,0.04)',
                  border: '1px solid rgba(26,26,22,0.08)',
                  borderRadius: '20px',
                  padding: '36px 32px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                whileHover={{ y: -4, borderColor: 'rgba(26,26,22,0.28)' } as never}
              >
                {/* Step number watermark */}
                <div style={{
                  position: 'absolute', top: '20px', right: '24px',
                  fontFamily: 'var(--font-jakarta)', fontWeight: 800, fontSize: '3.5rem',
                  color: 'rgba(26,26,22,0.06)', lineHeight: 1, userSelect: 'none',
                }}>
                  {step.n}
                </div>

                <div style={{
                  width: '48px', height: '48px', borderRadius: '14px',
                  background: 'rgba(26,26,22,0.08)', border: '1px solid rgba(26,26,22,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '20px',
                }}>
                  <Icon size={22} color="#1A1A16" />
                </div>

                <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#6A6A62', marginBottom: '10px' }}>
                  Step {step.n}
                </div>
                <h3 style={{ fontFamily: 'var(--font-jakarta)', fontWeight: 700, fontSize: '1.2rem', color: '#1A1A16', marginBottom: '12px', lineHeight: 1.3 }}>
                  {step.title}
                </h3>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9rem', color: 'rgba(26,26,22,0.55)', lineHeight: 1.7 }}>
                  {step.body}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <a href="tel:3103612756" style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            background: '#1A1A16', color: '#E4E4DE',
            fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '0.95rem',
            padding: '15px 36px', borderRadius: '100px',
            boxShadow: '0 4px 28px rgba(26,26,22,0.20)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          }} className="hover:-translate-y-0.5">
            Call 310-361-2756 to try it now
          </a>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.82rem', color: 'rgba(26,26,22,0.35)', marginTop: '14px' }}>
            No commitment. Hear your AI agent live in under a minute.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
