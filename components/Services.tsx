'use client';
import { motion } from 'framer-motion';
import { PhoneIncoming, PhoneOutgoing, Headphones, Clock, Zap, Star, PhoneOff } from 'lucide-react';
import { startWebCall, stopWebCall, isMobileDevice } from './CallButton';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay },
});

/* ── Badge pill ── */
function Badge({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: '8px',
      padding: '8px 18px', borderRadius: '100px',
      background: 'rgba(26,26,22,0.07)', border: '1px solid rgba(26,26,22,0.18)',
      fontFamily: 'var(--font-inter)', fontSize: '0.78rem', fontWeight: 700,
      letterSpacing: '0.14em', textTransform: 'uppercase', color: '#6A6A62',
    }}>
      {icon}
      {label}
    </span>
  );
}

/* ── Product Card ── */
function Card({
  name,
  description,
  icon,
  delay,
  badge,
}: {
  name: string;
  description: React.ReactNode;
  icon: React.ReactNode;
  delay: number;
  badge?: string;
}) {
  return (
    <motion.div
      {...fadeUp(delay)}
      style={{
        padding: '28px 28px 24px 25px',
        borderRadius: '16px',
        background: 'rgba(255,255,255,0.70)',
        border: '1px solid rgba(26,26,22,0.09)',
        borderLeft: '3px solid rgba(26,26,22,0.18)',
        boxShadow: '0 2px 10px rgba(26,26,22,0.06)',
        display: 'flex',
        flexDirection: 'column',
        outline: 'none',
      }}
    >
      {/* Name row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '11px', marginBottom: '12px' }}>
        <div style={{
          width: '34px', height: '34px', borderRadius: '9px', flexShrink: 0,
          background: 'rgba(26,26,22,0.07)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          {icon}
        </div>
        <p style={{
          fontFamily: 'var(--font-jakarta)', fontWeight: 800, fontSize: '1.15rem',
          color: '#1A1A16', lineHeight: 1.15, margin: 0,
        }}>
          {name}
        </p>
      </div>

      {/* Description */}
      <p style={{
        fontFamily: 'var(--font-inter)', fontSize: '0.875rem',
        color: 'rgba(26,26,22,0.58)', lineHeight: 1.72,
        paddingLeft: '45px', margin: 0, flex: 1,
      }}>
        {description}
      </p>

      {/* Badge callout */}
      {badge && (
        <div style={{ marginTop: '14px', paddingLeft: '45px' }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '5px',
            padding: '4px 10px', borderRadius: '100px',
            background: 'rgba(26,26,22,0.07)', border: '1px solid rgba(26,26,22,0.18)',
            fontFamily: 'var(--font-inter)', fontSize: '0.68rem', fontWeight: 700,
            letterSpacing: '0.10em', textTransform: 'uppercase', color: '#1A1A16',
          }}>
            <Star size={10} strokeWidth={2.5} />
            {badge}
          </span>
        </div>
      )}

    </motion.div>
  );
}

/* ── Section ── */
export default function Services() {
  return (
    <section id="services" style={{ background: '#E4E4DE', marginTop: '-40px', paddingTop: '0' }}>
      <style>{`
        @media (max-width: 768px) {
          .services-grid { grid-template-columns: 1fr !important; }
          .services-col { padding: 32px 20px 28px !important; border-right: none !important; }
          .services-col:not(:last-child) { border-bottom: 1px solid rgba(26,26,22,0.10); }
          .services-split-bg { background: #EDEAE3 !important; }
          .services-header { padding: 48px 20px 40px !important; }
        }
        .svc-phone-clip  { position: relative; width: 100%; height: 245px; overflow: hidden; }
        .svc-phone-inner { position: relative; width: 700px; height: 1443px; margin: 0 auto; transform-origin: top center; }
        @media (max-width: 768px) {
          .svc-phone-wrapper { overflow: hidden !important; }
          .svc-phone-clip {
            width: clamp(280px, 80vw, 500px) !important;
            max-width: 100% !important;
            margin: 0 auto !important;
            overflow: hidden !important;
            height: 180px !important;
          }
          .svc-phone-inner {
            position: absolute !important;
            left: 50% !important;
            margin: 0 !important;
            transform: translateX(-350px) scale(0.55) !important;
            transform-origin: top center !important;
          }
        }
        @media (max-width: 480px) {
          .svc-phone-clip  { height: 155px !important; }
          .svc-phone-inner { transform: translateX(-350px) scale(0.48) !important; }
        }
        @media (max-width: 390px) {
          .svc-phone-clip  { height: 140px !important; }
          .svc-phone-inner { transform: translateX(-350px) scale(0.43) !important; }
        }
        @keyframes glowPulse {
          0%, 100% {
            box-shadow: 0 0 4px 1px rgba(52,199,89,0.9), 0 0 12px 4px rgba(52,199,89,0.6),
              0 0 24px 8px rgba(52,199,89,0.35), 0 0 40px 14px rgba(52,199,89,0.15);
          }
          50% {
            box-shadow: 0 0 8px 3px rgba(52,199,89,1), 0 0 20px 8px rgba(52,199,89,0.75),
              0 0 40px 16px rgba(52,199,89,0.45), 0 0 64px 24px rgba(52,199,89,0.2);
          }
        }
      `}</style>

      {/* Centered header */}
      <motion.div
        {...fadeUp(0)}
        className="services-header"
        style={{ textAlign: 'center', padding: '72px 24px 56px' }}
      >
        <h2 style={{
          fontFamily: 'var(--font-jakarta)', fontWeight: 800,
          fontSize: 'clamp(1.9rem, 3.5vw, 2.75rem)',
          color: '#1A1A16', lineHeight: 1.1, marginBottom: '14px',
        }}>
          Two Agents. Every Direction Covered.
        </h2>
        <p style={{
          fontFamily: 'var(--font-inter)', fontSize: '1rem',
          color: 'rgba(26,26,22,0.50)', lineHeight: 1.65,
        }}>
          One handles everything coming in. The other handles everything going out.
        </p>
      </motion.div>

      {/* Two-column grid + iPhone — wrapped so split background extends through phone area */}
      <div className="services-split-bg" style={{ background: 'linear-gradient(to right, #EDEAE3 50%, #E0DDD6 50%)', overflow: 'hidden' }}>
      <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>

        {/* ── Inbound — lighter ── */}
        <div className="services-col" style={{
          padding: '48px 60px 32px',
          background: '#EDEAE3',
          borderRight: '1px solid rgba(26,26,22,0.10)',
        }}>
          <motion.div {...fadeUp(0.05)} style={{ marginBottom: '32px' }}>
            <div style={{ marginBottom: '16px' }}>
              <Badge icon={<PhoneIncoming size={12} strokeWidth={2.5} />} label="Inbound AI Agents" />
            </div>
            <p style={{
              fontFamily: 'var(--font-inter)', fontSize: '0.88rem',
              color: 'rgba(26,26,22,0.48)', lineHeight: 1.65, maxWidth: '360px',
            }}>
              Handles everything coming in: calls, texts, website chat, DMs, WhatsApp, and email.
            </p>
          </motion.div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Card
              name="AI Receptionist"
              description="Answers calls and messages, books appointments, routes inquiries, handles FAQs, and captures lead info automatically."
              icon={<Headphones size={16} color="#1A1A16" strokeWidth={2} />}
              delay={0.10}
              badge="Never Goes to Voicemail"
            />
            <Card
              name="Speed to Lead Agent"
              description="The moment someone fills out your Facebook ad, Google ad, or website form, your AI calls them within 60 seconds. Before they move on to your competitor."
              icon={<Zap size={16} color="#1A1A16" strokeWidth={2} />}
              delay={0.18}
              badge="Calls Within 60 Seconds"
            />
          </div>
        </div>

        {/* ── Outbound — darker ── */}
        <div className="services-col" style={{
          padding: '48px 60px 32px',
          background: '#E0DDD6',
        }}>
          <motion.div {...fadeUp(0.10)} style={{ marginBottom: '32px' }}>
            <div style={{ marginBottom: '16px' }}>
              <Badge icon={<PhoneOutgoing size={12} strokeWidth={2.5} />} label="Outbound AI Agents" />
            </div>
            <p style={{
              fontFamily: 'var(--font-inter)', fontSize: '0.88rem',
              color: 'rgba(26,26,22,0.48)', lineHeight: 1.65, maxWidth: '360px',
            }}>
              Handles everything going out: calls, texts, emails, and review requests.
            </p>
          </motion.div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Card
              name="Reactivation Agent"
              description="Re-engages old leads and past customers with follow-up sequences, nurtures prospects, and confirms appointments automatically."
              icon={<Zap size={16} color="#1A1A16" strokeWidth={2} />}
              delay={0.18}
              badge="Revenue Recovery"
            />
            <Card
              name="Google Review Agent"
              description={
                <>
                  Reaches out after every job,{' '}
                  filters sentiment,
                  {' '}routes happy customers to leave a Google review, and flags unhappy ones for personal follow-up before they go public.
                </>
              }
              icon={<Star size={16} color="#1A1A16" strokeWidth={2} />}
              delay={0.26}
              badge="Reputation Protection"
            />
          </div>
        </div>

      </div>

      {/* iPhone peek */}
      <motion.div
        className="svc-phone-wrapper"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7 }}
        style={{ paddingTop: '30px' }}
      >
        <div className="svc-phone-clip">
          <div className="svc-phone-inner">

            {/* Volume up */}
            <div style={{
              position: 'absolute', left: -5, top: 110, width: 5, height: 56,
              background: 'linear-gradient(180deg, #d8cce8 0%, #b0a0c4 6%, #8a7898 14%, #6a5880 28%, #524868 50%, #2e2244 100%)',
              borderRadius: '3px 0 0 3px',
              boxShadow: 'inset 0 2px 2px rgba(230,215,255,0.45), 0 -1px 0 rgba(210,195,235,0.35)',
            }} />
            {/* Volume down */}
            <div style={{
              position: 'absolute', left: -5, top: 176, width: 5, height: 56,
              background: 'linear-gradient(180deg, #c8b8d8 0%, #a090b8 6%, #7a6888 14%, #5e4a74 28%, #3e3454 50%, #1e1630 100%)',
              borderRadius: '3px 0 0 3px',
              boxShadow: 'inset 0 2px 2px rgba(215,200,240,0.4), 0 -1px 0 rgba(200,185,225,0.3)',
            }} />
            {/* Antenna slot — top edge */}
            <div style={{ position: 'absolute', top: 0, left: 558, width: 10, height: 5, background: '#352d48', zIndex: 2 }} />
            {/* Antenna slot — right edge */}
            <div style={{ position: 'absolute', top: 132, right: 0, width: 5, height: 10, background: '#352d48', zIndex: 2 }} />

            {/* iPhone frame */}
            <div style={{
              position: 'absolute', inset: 0, borderRadius: 68,
              background: [
                'linear-gradient(#352d48, #352d48) padding-box',
                'linear-gradient(145deg, #b4a8c8 0%, #a898be 15%, #8a7aaa 30%, #726292 50%, #584870 70%, #40305c 85%, #2c2248 100%) border-box',
              ].join(', '),
              border: '3px solid transparent',
              overflow: 'hidden',
            }}>
              {/* Mic slot */}
              <div style={{
                position: 'absolute', top: 5, left: '50%', transform: 'translateX(-50%)',
                width: 160, height: 7,
                background: 'linear-gradient(180deg, #0e0e0e 0%, #1c1a20 100%)',
                clipPath: 'polygon(0% 0%, 100% 0%, 96% 100%, 4% 100%)',
                zIndex: 1,
                borderLeft: '0.5px solid rgba(255,255,255,0.18)',
                borderRight: '0.5px solid rgba(255,255,255,0.18)',
                borderBottom: '0.5px solid rgba(255,255,255,0.18)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)',
              }} />
              {/* Screen */}
              <div style={{
                position: 'absolute', top: 22, left: 22, right: 22, bottom: 22,
                borderRadius: 46, background: '#f2f2f2', overflow: 'hidden',
                boxShadow: '0 0 0 17px #0a0a0a',
              }}>
                {/* Pill notification bar */}
                <div style={{
                  position: 'absolute', top: 24, left: '50%', transform: 'translateX(-50%)',
                  width: '90%', height: 128,
                  background: '#1c1c1e', borderRadius: 50,
                  border: '1px solid rgba(255,255,255,0.11)',
                  display: 'flex', alignItems: 'center',
                  paddingLeft: 20, paddingRight: 20, gap: 20,
                  boxShadow: '0 2px 14px rgba(0,0,0,0.18)',
                }}>
                  {/* W circle */}
                  <div style={{
                    width: 78, height: 78, borderRadius: '50%', background: '#555555',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                  }}>
                    <span style={{ fontFamily: 'var(--font-inter)', fontSize: '2rem', fontWeight: 600, color: '#ffffff', lineHeight: 1 }}>W</span>
                  </div>
                  {/* Text */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontFamily: 'var(--font-inter)', fontSize: '1.23rem', color: 'rgba(255,255,255,0.38)', fontWeight: 500, lineHeight: 1.2, letterSpacing: '0.01em' }}>Wads AI</div>
                    <div style={{ fontFamily: 'var(--font-jakarta)', fontSize: '2.05rem', fontWeight: 700, color: '#ffffff', lineHeight: 1.25, marginTop: 1 }}>Talk to AI</div>
                  </div>
                  {/* Decline */}
                  <div
                    onClick={stopWebCall}
                    style={{
                      width: 70, height: 70, borderRadius: '50%', background: '#FF3B30',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                      boxShadow: '0 2px 8px rgba(255,59,48,0.4)', cursor: 'pointer',
                    }}
                  >
                    <PhoneOff size={31} color="#fff" />
                  </div>
                  {/* Accept */}
                  <button
                    onClick={() => { if (isMobileDevice()) { window.location.href = 'tel:+13103612756'; } else { startWebCall(); } }}
                    style={{
                      width: 70, height: 70, borderRadius: '50%', background: '#34C759',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                      animation: 'glowPulse 2s ease-in-out infinite',
                      cursor: 'pointer', border: 'none', padding: 0,
                    }}
                  >
                    <img src="/wadsai-phone-icon.png" alt="" style={{ width: 38, height: 38, filter: 'brightness(0) invert(1)' }} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Gradient fade to OrbitalSection */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            height: '80px', pointerEvents: 'none',
            background: 'linear-gradient(to bottom, transparent, #E4E4DE)',
          }} />
        </div>
      </motion.div>
      </div>

    </section>
  );
}
