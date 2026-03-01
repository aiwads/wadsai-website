import Link from 'next/link';
import { ArrowRight, Phone, Zap, Star, MessageSquare, Play, Check } from 'lucide-react';

const heroWave = [8, 18, 30, 42, 36, 24, 40, 50, 44, 30, 20, 38, 48, 40, 28, 16, 34, 46, 38, 22];

const trustItems = [
  '24/7 Coverage',
  '48-Hour Setup',
  'English & Spanish',
  'Lead Qualification',
  'CRM Integration',
  '30-Day Guarantee',
];

const stats = [
  { value: '67%', label: 'of calls to real estate agents go unanswered' },
  { value: '78%', label: 'of buyers work with the first agent who responds' },
  { value: '$7,500', label: 'average cost of a single missed lead' },
];

const services = [
  {
    icon: Phone,
    name: 'AI Receptionist',
    tag: 'Primary Asset',
    description: 'Answers every call 24/7. Qualifies buyers and sellers in English and Spanish. Sends instant lead summaries — name, number, property interest — directly to you.',
    price: '$297/mo',
    features: ['Answers every call 24/7', 'Qualifies in English & Spanish', 'Instant lead summary to your phone', 'Integrates with your CRM'],
    bg: '#ebf4f5',
    full: true,
  },
  {
    icon: Zap,
    name: 'AI Reactivation Agent',
    tag: 'Offense',
    description: 'Outbound calls that re-engage cold leads and past clients. Turns a dead database into live conversations and booked callbacks.',
    price: 'From $1,500',
    features: ['Custom outbound script', 'Campaign execution & reporting', 'Past client re-engagement'],
    bg: 'rgba(181, 198, 224, 0.2)',
    full: false,
  },
  {
    icon: Star,
    name: 'Google Review Agent',
    tag: 'Reputation',
    description: 'Routes satisfied clients to leave reviews. Intercepts unhappy ones before they go public. Protects and grows your reputation automatically.',
    price: '$147/mo',
    features: ['Sentiment filtering', 'Routes happy clients to Google', 'Flags unhappy clients privately'],
    bg: 'rgba(16, 55, 131, 0.05)',
    full: false,
  },
  {
    icon: MessageSquare,
    name: 'Text-Based AI Agent',
    tag: 'SMS Defense',
    description: 'Handles inbound texts 24/7. Qualifies leads and holds the conversation until you\'re ready. Never leave a message unanswered.',
    price: '$197/mo',
    features: ['Instant SMS response 24/7', 'Qualifies leads via text', 'Works alongside your AI Receptionist'],
    bg: '#ebf4f5',
    full: true,
  },
];

export default function Home() {
  return (
    <div style={{ background: '#ebf4f5' }}>

      {/* ── HERO ── */}
      <section
        style={{
          background: 'linear-gradient(145deg, #ffffff 0%, #ebf4f5 60%, #dce9f0 100%)',
          borderBottom: '1px solid rgba(181,198,224,0.5)',
          paddingTop: '100px',
          paddingBottom: '80px',
        }}
        className="px-6 md:px-12"
      >
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" style={{ minHeight: '78vh' }}>

          {/* Left: copy */}
          <div>
            <div className="reveal mb-6">
              <span className="pill-tag">
                <span
                  className="pulse-dot"
                  style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#22c55e', display: 'inline-block', flexShrink: 0 }}
                />
                Real Estate AI · Always On
              </span>
            </div>

            <h1
              className="reveal reveal-delay-1 font-black leading-[1.05] mb-5"
              style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(2.4rem, 5.5vw, 4.8rem)', color: '#2d2d2d' }}
            >
              <span style={{ color: '#103783' }}>The AI</span><br />
              Your Business<br />
              Deserves.
            </h1>

            <p
              className="reveal reveal-delay-2 mb-8 leading-relaxed"
              style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '1.05rem', color: 'rgba(45,45,45,0.58)', maxWidth: '460px' }}
            >
              While your competition misses calls at 9pm, your AI agent is already qualifying the lead and sending it straight to your phone.
            </p>

            <div className="reveal reveal-delay-3 flex flex-wrap gap-3 mb-10">
              <Link href="/contact" className="btn-primary">
                Deploy Your Agent <ArrowRight size={15} />
              </Link>
              <Link href="/services" className="btn-secondary">
                <Play size={13} fill="currentColor" /> Watch a Demo
              </Link>
            </div>

            {/* Social proof */}
            <div className="reveal reveal-delay-4 flex items-center gap-3">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={16} color="#f59e0b" fill="#f59e0b" />
                ))}
              </div>
              <span style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.85rem', color: 'rgba(45,45,45,0.55)' }}>
                Built for real estate agents
              </span>
            </div>
          </div>

          {/* Right: Live call visualization */}
          <div className="hidden lg:flex items-center justify-center" style={{ position: 'relative', height: '480px' }}>
            {/* Glow blob */}
            <div style={{
              position: 'absolute',
              width: '420px', height: '420px', borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(16,55,131,0.09) 0%, transparent 70%)',
              filter: 'blur(30px)',
            }} />

            {/* Live call card */}
            <div style={{
              background: '#fff',
              borderRadius: '24px',
              padding: '28px 28px 24px',
              boxShadow: '0 24px 80px rgba(16,55,131,0.14)',
              width: '340px',
              position: 'relative',
              zIndex: 1,
            }}>
              {/* Live indicator */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
                <span className="pulse-dot" style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', display: 'inline-block', flexShrink: 0 }} />
                <span style={{
                  fontSize: '0.7rem', fontWeight: 700, color: '#103783',
                  textTransform: 'uppercase', letterSpacing: '0.14em',
                  fontFamily: 'var(--font-space-grotesk)',
                }}>
                  Live · AI Qualifying Lead
                </span>
              </div>

              {/* Caller info */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '12px',
                  background: '#ebf4f5', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', flexShrink: 0,
                }}>
                  <Phone size={20} color="#103783" />
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, color: '#2d2d2d', fontSize: '1rem' }}>
                    Sarah M.
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'rgba(45,45,45,0.5)', fontFamily: 'var(--font-space-grotesk)' }}>
                    Phoenix, AZ · Inbound · 9:47 PM
                  </div>
                </div>
              </div>

              {/* Sound wave */}
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px', height: '56px', marginBottom: '20px' }}>
                {heroWave.map((h, i) => (
                  <div
                    key={i}
                    className="sound-wave-bar"
                    style={{
                      width: '3.5px',
                      height: `${h}px`,
                      background: `linear-gradient(180deg, #103783, #b5c6e0)`,
                      animationDuration: `${0.75 + (i % 5) * 0.16}s`,
                      animationDelay: `${i * 0.08}s`,
                    }}
                  />
                ))}
              </div>

              {/* Lead captured */}
              <div style={{ background: '#ebf4f5', borderRadius: '12px', padding: '14px 16px' }}>
                <div style={{
                  fontSize: '0.68rem', fontWeight: 700, color: '#103783',
                  textTransform: 'uppercase', letterSpacing: '0.13em',
                  marginBottom: '5px', fontFamily: 'var(--font-space-grotesk)',
                }}>
                  Lead Captured
                </div>
                <div style={{ fontSize: '0.87rem', color: '#2d2d2d', fontWeight: 500, fontFamily: 'var(--font-space-grotesk)' }}>
                  3BR/2BA · Budget $450K · Pre-approved
                </div>
              </div>
            </div>

            {/* Floating badge: Sent to agent */}
            <div style={{
              position: 'absolute', top: '60px', right: '10px',
              background: '#103783', color: '#fff',
              borderRadius: '100px', padding: '9px 18px',
              fontSize: '0.72rem', fontWeight: 700,
              boxShadow: '0 6px 24px rgba(16,55,131,0.35)',
              fontFamily: 'var(--font-space-grotesk)',
              zIndex: 2, letterSpacing: '0.03em',
            }}>
              ✓ Sent to Agent
            </div>

            {/* Floating badge: Competitor missed */}
            <div style={{
              position: 'absolute', bottom: '72px', left: '10px',
              background: '#fff', color: '#2d2d2d',
              borderRadius: '100px', padding: '9px 18px',
              fontSize: '0.72rem', fontWeight: 600,
              boxShadow: '0 6px 24px rgba(0,0,0,0.1)',
              fontFamily: 'var(--font-space-grotesk)',
              zIndex: 2,
            }}>
              🌙 Competitor missed this
            </div>
          </div>

        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <div style={{ background: '#2d2d2d', overflowX: 'auto' }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-5 flex items-center justify-between gap-6 flex-wrap">
          {trustItems.map((item, i) => (
            <div key={item} className="flex items-center gap-6">
              <span style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.7)',
                whiteSpace: 'nowrap',
              }}>
                {item}
              </span>
              {i < trustItems.length - 1 && (
                <span style={{ width: '1px', height: '16px', background: 'rgba(255,255,255,0.15)', flexShrink: 0 }} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── STATS ── */}
      <section style={{ background: '#ffffff' }} className="px-6 md:px-12 py-20">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((s) => (
            <div key={s.value} style={{
              background: '#ebf4f5',
              borderRadius: '20px',
              padding: '32px',
              borderLeft: '4px solid #103783',
            }}>
              <div style={{
                fontFamily: 'var(--font-syne)',
                fontSize: 'clamp(2.8rem, 4.5vw, 3.8rem)',
                fontWeight: 800,
                color: '#103783',
                lineHeight: 1,
                marginBottom: '10px',
              }}>
                {s.value}
              </div>
              <div style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.9rem', color: 'rgba(45,45,45,0.6)', lineHeight: 1.55 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section style={{ background: '#ffffff' }} className="px-6 md:px-12 pb-24">
        <div className="max-w-[1280px] mx-auto">

          {/* Header */}
          <div className="text-center mb-14">
            <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#2d2d2d', marginBottom: '12px' }}>
              Deploy the Right Agent
            </h2>
            <p style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '1rem', color: 'rgba(45,45,45,0.55)', maxWidth: '520px', margin: '0 auto', lineHeight: 1.65 }}>
              Every agent is custom-built for your business. No off-the-shelf bots.
            </p>
          </div>

          {/* Card grid */}
          <div className="flex flex-col gap-6">

            {/* Row 1: AI Receptionist — full width */}
            <div
              className="feature-card grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
              style={{ background: '#ebf4f5' }}
            >
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: '#103783', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Phone size={18} color="#fff" />
                  </div>
                  <span className="pill-tag">Primary Asset</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-syne)', fontSize: '1.75rem', fontWeight: 800, color: '#2d2d2d', marginBottom: '10px', lineHeight: 1.15 }}>
                  AI Receptionist
                </h3>
                <p style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.95rem', color: 'rgba(45,45,45,0.58)', lineHeight: 1.7, marginBottom: '20px' }}>
                  Answers every call 24/7. Qualifies buyers and sellers in English and Spanish. Sends instant lead summaries — name, number, property interest — directly to you.
                </p>
                <div className="flex flex-col gap-2">
                  {['Answers every call 24/7', 'Qualifies in English & Spanish', 'Instant lead summary to your phone', 'Integrates with your CRM'].map((f) => (
                    <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Check size={14} color="#103783" strokeWidth={2.5} />
                      <span style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.88rem', color: '#2d2d2d' }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual: Stats panel */}
              <div style={{ background: '#fff', borderRadius: '20px', padding: '28px', boxShadow: '0 4px 24px rgba(16,55,131,0.08)' }}>
                <div style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.72rem', fontWeight: 700, color: '#103783', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '20px' }}>
                  Live Performance
                </div>
                {[
                  { label: 'Calls Answered', value: '2,847', pct: 100 },
                  { label: 'Leads Captured', value: '156', pct: 68 },
                  { label: 'Response Time', value: '< 1 sec', pct: 99 },
                ].map((row) => (
                  <div key={row.label} style={{ marginBottom: '18px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <span style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.82rem', color: 'rgba(45,45,45,0.65)' }}>{row.label}</span>
                      <span style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: '0.9rem', color: '#103783' }}>{row.value}</span>
                    </div>
                    <div style={{ height: '6px', background: 'rgba(181,198,224,0.4)', borderRadius: '100px', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${row.pct}%`, background: '#103783', borderRadius: '100px' }} />
                    </div>
                  </div>
                ))}
                {/* Sound wave mini */}
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '2px', height: '32px', marginTop: '20px' }}>
                  {[6, 12, 20, 28, 22, 16, 24, 30, 26, 18, 12, 22, 28, 24, 16, 10, 20, 28, 22, 14].map((h, i) => (
                    <div
                      key={i}
                      className="sound-wave-bar"
                      style={{
                        width: '3px', height: `${h}px`,
                        background: '#103783', opacity: 0.5,
                        animationDuration: `${0.9 + (i % 4) * 0.18}s`,
                        animationDelay: `${i * 0.07}s`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Row 2: Reactivation + Review — two columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Reactivation Agent */}
              <div className="feature-card flex flex-col justify-between" style={{ background: 'rgba(181, 198, 224, 0.25)' }}>
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: '#103783', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Zap size={18} color="#fff" />
                    </div>
                    <span className="pill-tag">Offense</span>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-syne)', fontSize: '1.5rem', fontWeight: 800, color: '#2d2d2d', marginBottom: '10px', lineHeight: 1.2 }}>
                    AI Reactivation Agent
                  </h3>
                  <p style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.92rem', color: 'rgba(45,45,45,0.58)', lineHeight: 1.7, marginBottom: '16px' }}>
                    Outbound calls that re-engage cold leads and past clients. Turns a dead database into live conversations.
                  </p>
                  <div className="flex flex-col gap-2">
                    {['Custom outbound script', 'Campaign execution & reporting', 'Past client re-engagement'].map((f) => (
                      <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Check size={13} color="#103783" strokeWidth={2.5} />
                        <span style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.85rem', color: '#2d2d2d' }}>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Review Agent */}
              <div className="feature-card flex flex-col justify-between" style={{ background: 'rgba(16, 55, 131, 0.05)' }}>
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: '#103783', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Star size={18} color="#fff" />
                    </div>
                    <span className="pill-tag">Reputation</span>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-syne)', fontSize: '1.5rem', fontWeight: 800, color: '#2d2d2d', marginBottom: '10px', lineHeight: 1.2 }}>
                    Google Review Agent
                  </h3>
                  <p style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.92rem', color: 'rgba(45,45,45,0.58)', lineHeight: 1.7, marginBottom: '16px' }}>
                    Routes satisfied clients to leave reviews. Intercepts unhappy ones before they go public. Protect your reputation on autopilot.
                  </p>
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={18} color="#f59e0b" fill="#f59e0b" />)}
                    <span style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.85rem', color: 'rgba(45,45,45,0.6)', marginLeft: '6px', alignSelf: 'center' }}>5.0 avg</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    {['Sentiment filtering', 'Routes happy clients to Google', 'Flags unhappy clients privately'].map((f) => (
                      <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Check size={13} color="#103783" strokeWidth={2.5} />
                        <span style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.85rem', color: '#2d2d2d' }}>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Row 3: Text Agent — full width */}
            <div
              className="feature-card grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
              style={{ background: '#ebf4f5' }}
            >
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: '#103783', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <MessageSquare size={18} color="#fff" />
                  </div>
                  <span className="pill-tag">SMS Defense</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-syne)', fontSize: '1.75rem', fontWeight: 800, color: '#2d2d2d', marginBottom: '10px', lineHeight: 1.15 }}>
                  Text-Based AI Agent
                </h3>
                <p style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.95rem', color: 'rgba(45,45,45,0.58)', lineHeight: 1.7, marginBottom: '20px' }}>
                  Handles inbound texts 24/7. Qualifies leads and holds the conversation until you&apos;re ready. Never leave a message unanswered again.
                </p>
                <div className="flex flex-col gap-2">
                  {['Instant SMS response 24/7', 'Qualifies leads via text conversation', 'Custom responses for your business', 'Works alongside your AI Receptionist'].map((f) => (
                    <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Check size={14} color="#103783" strokeWidth={2.5} />
                      <span style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.88rem', color: '#2d2d2d' }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual: Chat bubbles */}
              <div style={{ background: '#fff', borderRadius: '20px', padding: '28px', boxShadow: '0 4px 24px rgba(16,55,131,0.08)' }}>
                <div style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.72rem', fontWeight: 700, color: '#103783', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '20px' }}>
                  Live Conversation
                </div>
                {[
                  { from: 'lead', text: 'Hi, is the property on Oak St still available?' },
                  { from: 'ai', text: 'Yes! Are you looking to buy or just exploring? I can pull the details for you.' },
                  { from: 'lead', text: 'Looking to buy. Budget around $380K.' },
                  { from: 'ai', text: 'Got it — I\'m sending your info to the agent now. They\'ll reach out within the hour!' },
                ].map((msg, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      justifyContent: msg.from === 'ai' ? 'flex-end' : 'flex-start',
                      marginBottom: '10px',
                    }}
                  >
                    <div style={{
                      background: msg.from === 'ai' ? '#103783' : '#ebf4f5',
                      color: msg.from === 'ai' ? '#fff' : '#2d2d2d',
                      borderRadius: msg.from === 'ai' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                      padding: '10px 14px',
                      fontSize: '0.82rem',
                      fontFamily: 'var(--font-space-grotesk)',
                      maxWidth: '82%',
                      lineHeight: 1.5,
                    }}>
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div className="text-center mt-10">
            <Link href="/services" className="btn-secondary">
              View Full Pricing & Specs <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ background: '#ebf4f5' }} className="px-6 md:px-12 py-24">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-14">
            <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#2d2d2d', marginBottom: '12px' }}>
              Operational in 48 Hours
            </h2>
            <p style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '1rem', color: 'rgba(45,45,45,0.55)', maxWidth: '480px', margin: '0 auto', lineHeight: 1.65 }}>
              From your first call to a fully deployed AI agent — in two days flat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { n: '01', tag: 'Recon',   title: 'Book the demo',       body: '10 minutes. We show you the system live using your actual business name, market, and use case. No fluff.' },
              { n: '02', tag: 'Build',   title: 'We deploy your agent', body: 'Custom-built in 24–48 hours. Integrated with your existing phone system and CRM.' },
              { n: '03', tag: 'Execute', title: 'Go live',              body: 'Your agent answers every call from day one. Instant lead notifications sent straight to your phone.' },
            ].map((s) => (
              <div
                key={s.n}
                style={{
                  background: '#fff',
                  borderRadius: '20px',
                  padding: '36px 32px',
                  boxShadow: '0 2px 16px rgba(16,55,131,0.06)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                }}
                className="hover:-translate-y-1"
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <div className="step-number">{s.n}</div>
                  <span className="pill-tag">{s.tag}</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-syne)', fontSize: '1.25rem', fontWeight: 800, color: '#2d2d2d', marginBottom: '10px' }}>
                  {s.title}
                </h3>
                <p style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.9rem', color: 'rgba(45,45,45,0.58)', lineHeight: 1.7 }}>
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: '#103783' }} className="px-6 md:px-12 py-28">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-16 items-center">
          <div>
            <h2
              style={{
                fontFamily: 'var(--font-syne)',
                fontSize: 'clamp(2.5rem, 7vw, 6rem)',
                fontWeight: 800,
                color: '#fff',
                lineHeight: 1.0,
                marginBottom: '16px',
              }}
            >
              One Lead Pays<br />
              <span style={{ color: '#b5c6e0' }}>For a Year.</span>
            </h2>
            <p style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.6)' }}>
              Your competition is already moving.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '16px', padding: '20px 22px', border: '1px solid rgba(255,255,255,0.15)' }}>
              <p style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.9rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.65 }}>
                Custom-built for your business. Walk away if it doesn&apos;t deliver results in 30 days.
              </p>
            </div>
            <Link
              href="/contact"
              style={{
                background: '#fff',
                color: '#103783',
                fontFamily: 'var(--font-space-grotesk)',
                fontWeight: 700,
                fontSize: '0.85rem',
                letterSpacing: '0.04em',
                padding: '14px 28px',
                borderRadius: '100px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
            >
              Deploy Now <ArrowRight size={15} />
            </Link>
            <p style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.35)' }}>
              30-day guarantee
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
