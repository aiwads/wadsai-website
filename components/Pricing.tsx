'use client';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay },
});

const plans = [
  {
    name: 'Starter',
    price: '$297',
    period: '/mo',
    description: 'Perfect for solo operators and small businesses getting started with AI.',
    features: [
      'Inbound AI receptionist',
      'Call answering & lead capture',
      'Appointment booking',
      'SMS & email lead summaries',
      'FAQ handling',
      'Up to 500 minutes/mo',
    ],
    cta: 'Get started',
    href: 'tel:3103612756',
    featured: false,
  },
  {
    name: 'Growth',
    price: '$597',
    period: '/mo',
    description: 'The full inbound + outbound stack. Handles everything in and out.',
    features: [
      'Everything in Starter',
      'Outbound reactivation agent',
      'Google review automation',
      'After-hours & weekend coverage',
      'WhatsApp, DM & email channels',
      'Up to 1,500 minutes/mo',
      'Priority setup & support',
    ],
    cta: 'Get started',
    href: 'tel:3103612756',
    featured: true,
  },
  {
    name: 'Pro',
    price: '$997',
    period: '/mo',
    description: 'For high-volume businesses that need full AI coverage across every channel.',
    features: [
      'Everything in Growth',
      'Custom AI voice & persona',
      'Multi-location support',
      'CRM & calendar integrations',
      'Dedicated account manager',
      'Unlimited minutes',
    ],
    cta: 'Talk to us',
    href: 'tel:3103612756',
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" style={{ background: '#E4E4DE', padding: '100px 0' }}>
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
            Simple Pricing
          </span>
          <h2 style={{
            fontFamily: 'var(--font-jakarta)', fontWeight: 800,
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: '#1A1A16', lineHeight: 1.1, marginBottom: '16px',
          }}>
            No hidden fees. No surprises.
          </h2>
          <p style={{
            fontFamily: 'var(--font-inter)', fontSize: '1rem',
            color: 'rgba(26,26,22,0.50)', maxWidth: '440px',
            margin: '0 auto', lineHeight: 1.7,
          }}>
            Flat monthly pricing. Cancel anytime. Most businesses recover the cost in their first week.
          </p>
        </motion.div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px, 100%), 1fr))',
          gap: '20px',
          alignItems: 'start',
        }}>
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              {...fadeUp(0.1 + i * 0.08)}
              style={{
                borderRadius: '20px',
                padding: plan.featured ? '40px 32px' : '36px 32px',
                background: plan.featured ? '#1A1A16' : 'rgba(26,26,22,0.04)',
                border: plan.featured ? 'none' : '1px solid rgba(26,26,22,0.09)',
                position: 'relative',
                boxShadow: plan.featured ? '0 16px 48px rgba(26,26,22,0.22)' : 'none',
                transform: plan.featured ? 'translateY(-8px)' : 'none',
              }}
            >
              {/* Most popular badge */}
              {plan.featured && (
                <div style={{
                  position: 'absolute', top: '-14px', left: '50%',
                  transform: 'translateX(-50%)',
                  padding: '5px 16px', borderRadius: '100px',
                  background: '#ffffff', color: '#1A1A16',
                  fontFamily: 'var(--font-inter)', fontSize: '0.68rem',
                  fontWeight: 700, letterSpacing: '0.12em',
                  textTransform: 'uppercase', whiteSpace: 'nowrap',
                }}>
                  Most Popular
                </div>
              )}

              <div style={{
                fontFamily: 'var(--font-inter)', fontWeight: 700,
                fontSize: '0.8rem', letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: plan.featured ? 'rgba(255,255,255,0.50)' : '#6A6A62',
                marginBottom: '12px',
              }}>
                {plan.name}
              </div>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '8px' }}>
                <span style={{
                  fontFamily: 'var(--font-jakarta)', fontWeight: 800,
                  fontSize: '2.75rem', lineHeight: 1,
                  color: plan.featured ? '#ffffff' : '#1A1A16',
                }}>
                  {plan.price}
                </span>
                <span style={{
                  fontFamily: 'var(--font-inter)', fontSize: '0.9rem',
                  color: plan.featured ? 'rgba(255,255,255,0.45)' : 'rgba(26,26,22,0.40)',
                }}>
                  {plan.period}
                </span>
              </div>

              <p style={{
                fontFamily: 'var(--font-inter)', fontSize: '0.875rem',
                color: plan.featured ? 'rgba(255,255,255,0.50)' : 'rgba(26,26,22,0.50)',
                lineHeight: 1.65, marginBottom: '28px',
              }}>
                {plan.description}
              </p>

              <div style={{ borderTop: `1px solid ${plan.featured ? 'rgba(255,255,255,0.10)' : 'rgba(26,26,22,0.08)'}`, marginBottom: '24px' }} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                {plan.features.map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <Check
                      size={14}
                      strokeWidth={2.5}
                      style={{ flexShrink: 0, marginTop: '2px' }}
                      color={plan.featured ? '#ffffff' : '#1A1A16'}
                    />
                    <span style={{
                      fontFamily: 'var(--font-inter)', fontSize: '0.875rem',
                      color: plan.featured ? 'rgba(255,255,255,0.70)' : 'rgba(26,26,22,0.65)',
                      lineHeight: 1.5,
                    }}>
                      {f}
                    </span>
                  </div>
                ))}
              </div>

              <a href={plan.href} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                padding: '14px 24px', borderRadius: '100px',
                background: plan.featured ? '#ffffff' : 'rgba(26,26,22,0.08)',
                color: plan.featured ? '#1A1A16' : '#1A1A16',
                fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '0.9rem',
                textDecoration: 'none',
                border: plan.featured ? 'none' : '1px solid rgba(26,26,22,0.12)',
                transition: 'opacity 0.2s ease',
              }}>
                {plan.cta} <ArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          {...fadeUp(0.4)}
          style={{
            textAlign: 'center', marginTop: '48px',
            fontFamily: 'var(--font-inter)', fontSize: '0.82rem',
            color: 'rgba(26,26,22,0.35)', lineHeight: 1.6,
          }}
        >
          All plans include a 24-hour setup guarantee. Cancel anytime — no contracts, no lock-in.
        </motion.p>

      </div>
    </section>
  );
}
