'use client';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay },
});

const testimonials = [
  {
    quote: "We were missing 30–40% of our calls every week. Since turning on the AI, every call gets answered. We booked 6 new jobs in the first two weeks that we would have completely missed.",
    name: 'Marcus T.',
    role: 'Owner, MT Plumbing Services',
    initials: 'MT',
  },
  {
    quote: "I used to lose leads on nights and weekends constantly. Now the AI answers at 11pm and schedules them directly into my calendar. It paid for itself in the first week.",
    name: 'Priya S.',
    role: 'Owner, Priya\'s Cleaning Co.',
    initials: 'PS',
  },
  {
    quote: "Honestly skeptical at first. But the AI sounds so natural that my customers don't even realize it's automated. It handles my FAQs, books estimates, and I just show up to the job.",
    name: 'Chris V.',
    role: 'Owner, Vega HVAC',
    initials: 'CV',
  },
];

function Stars() {
  return (
    <div style={{ display: 'flex', gap: '3px', marginBottom: '20px' }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} fill="#1A1A16" color="#1A1A16" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section style={{ background: '#DEDAD3', padding: '100px 0' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <motion.div {...fadeUp(0)} style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span style={{
            display: 'inline-block',
            padding: '6px 16px', borderRadius: '100px',
            background: 'rgba(26,26,22,0.07)', border: '1px solid rgba(26,26,22,0.15)',
            fontFamily: 'var(--font-inter)', fontSize: '0.72rem', fontWeight: 700,
            letterSpacing: '0.16em', textTransform: 'uppercase', color: '#6A6A62',
            marginBottom: '20px',
          }}>
            Real Results
          </span>
          <h2 style={{
            fontFamily: 'var(--font-jakarta)', fontWeight: 800,
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: '#1A1A16', lineHeight: 1.1, marginBottom: '16px',
          }}>
            Business owners love it.
          </h2>
          <p style={{
            fontFamily: 'var(--font-inter)', fontSize: '1rem',
            color: 'rgba(26,26,22,0.50)', maxWidth: '420px',
            margin: '0 auto', lineHeight: 1.7,
          }}>
            From plumbers to cleaners to HVAC contractors. Here's what happens when no call goes unanswered.
          </p>
        </motion.div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              {...fadeUp(0.1 + i * 0.08)}
              style={{
                background: 'rgba(255,255,255,0.55)',
                border: '1px solid rgba(26,26,22,0.09)',
                borderRadius: '20px',
                padding: '36px 32px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Stars />
              <p style={{
                fontFamily: 'var(--font-inter)', fontSize: '0.95rem',
                color: '#1A1A16', lineHeight: 1.75, flex: 1,
                marginBottom: '28px',
              }}>
                "{t.quote}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '40px', height: '40px', borderRadius: '50%', flexShrink: 0,
                  background: 'rgba(26,26,22,0.10)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-jakarta)', fontWeight: 700,
                    fontSize: '0.72rem', color: '#1A1A16',
                  }}>
                    {t.initials}
                  </span>
                </div>
                <div>
                  <div style={{
                    fontFamily: 'var(--font-inter)', fontWeight: 700,
                    fontSize: '0.875rem', color: '#1A1A16',
                  }}>
                    {t.name}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-inter)', fontSize: '0.78rem',
                    color: 'rgba(26,26,22,0.45)',
                  }}>
                    {t.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
