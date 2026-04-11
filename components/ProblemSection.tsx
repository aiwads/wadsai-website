'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PhoneOff } from 'lucide-react';
import { startWebCall, stopWebCall, prefetchToken, subscribe } from './CallButton';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay },
});

const stats = [
  {
    value: '62%',
    headline: 'of callers won\'t leave a voicemail',
    body: 'If you miss the call, you lose the lead — full stop. Most people move on to the next result.',
  },
  {
    value: '78%',
    headline: 'of customers go with whoever responds first',
    body: 'Speed wins. The business that picks up — or follows up fastest — almost always gets the job.',
  },
  {
    value: '$240K+',
    headline: 'lost annually from missed calls alone',
    body: 'For the average service business, missed calls aren\'t a minor leak. They\'re a major revenue drain.',
  },
];

export default function ProblemSection() {
  const [callState, setCallState] = useState<'idle' | 'connecting' | 'active'>('idle');
  useEffect(() => subscribe(setCallState), []);

  return (
    <section style={{ background: '#DEDAD3', padding: '100px 0 0' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <motion.div {...fadeUp(0)} style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '6px 16px', borderRadius: '100px',
            background: 'rgba(26,26,22,0.07)', border: '1px solid rgba(26,26,22,0.15)',
            fontFamily: 'var(--font-inter)', fontSize: '0.72rem', fontWeight: 700,
            letterSpacing: '0.16em', textTransform: 'uppercase', color: '#6A6A62',
            marginBottom: '20px',
          }}>
            The Real Cost of Missing Calls
          </span>
          <h2 style={{
            fontFamily: 'var(--font-jakarta)', fontWeight: 800,
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: '#1A1A16', lineHeight: 1.1, marginBottom: '16px',
          }}>
            Every missed call is a<br />missed paycheck.
          </h2>
          <p style={{
            fontFamily: 'var(--font-inter)', fontSize: '1rem',
            color: 'rgba(26,26,22,0.50)', maxWidth: '480px',
            margin: '0 auto', lineHeight: 1.7,
          }}>
            You're not just missing calls. You're handing customers directly to your competitors — and most of them never call back.
          </p>
        </motion.div>

        {/* Stat cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
          {stats.map((s, i) => (
            <motion.div
              key={s.value}
              {...fadeUp(0.1 + i * 0.08)}
              style={{
                background: 'rgba(26,26,22,0.04)',
                border: '1px solid rgba(26,26,22,0.09)',
                borderTop: '3px solid rgba(26,26,22,0.18)',
                borderRadius: '16px',
                padding: '36px 32px',
              }}
            >
              <div style={{
                fontFamily: 'var(--font-jakarta)', fontWeight: 800,
                fontSize: '3rem', color: '#1A1A16', lineHeight: 1,
                marginBottom: '12px',
              }}>
                {s.value}
              </div>
              <p style={{
                fontFamily: 'var(--font-inter)', fontWeight: 700,
                fontSize: '0.95rem', color: '#1A1A16',
                lineHeight: 1.4, marginBottom: '10px',
              }}>
                {s.headline}
              </p>
              <p style={{
                fontFamily: 'var(--font-inter)', fontSize: '0.875rem',
                color: 'rgba(26,26,22,0.50)', lineHeight: 1.7, margin: 0,
              }}>
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing line */}
        <motion.p
          {...fadeUp(0.4)}
          style={{
            textAlign: 'center', marginTop: '56px',
            fontFamily: 'var(--font-inter)', fontSize: '1.05rem',
            color: 'rgba(26,26,22,0.55)', lineHeight: 1.7,
          }}
        >
          The good news? Every single one of these problems is solved the moment your AI goes live.
        </motion.p>

        {/* iPhone peek */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          style={{ marginTop: '64px' }}
        >
          <div style={{ position: 'relative', width: '100%', height: 245, overflow: 'hidden' }}>
            <div style={{ position: 'relative', width: 700, height: 1443, margin: '0 auto' }}>

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
                    {/* Decline / End call */}
                    <button
                      onClick={callState !== 'idle' ? stopWebCall : undefined}
                      style={{
                        width: 70, height: 70, borderRadius: '50%', background: '#FF3B30',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                        boxShadow: '0 2px 8px rgba(255,59,48,0.4)',
                        border: 'none', padding: 0,
                        cursor: callState !== 'idle' ? 'pointer' : 'default',
                        opacity: callState !== 'idle' ? 1 : 0.5,
                        transition: 'opacity 0.2s ease',
                      }}
                    >
                      <PhoneOff size={31} color="#fff" />
                    </button>
                    {/* Accept / Call active */}
                    <button
                      onMouseEnter={callState === 'idle' ? prefetchToken : undefined}
                      onClick={callState === 'idle' ? startWebCall : undefined}
                      style={{
                        width: 70, height: 70, borderRadius: '50%',
                        background: callState === 'active' ? '#22a84a' : '#34C759',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                        border: 'none', cursor: callState === 'idle' ? 'pointer' : 'default', padding: 0,
                        animation: callState === 'idle' ? 'glowPulse 2s ease-in-out infinite' : 'none',
                        transition: 'background 0.2s ease',
                      }}
                    >
                      <img src="/wadsai-phone-icon.png" alt="" style={{ width: 38, height: 38, filter: 'brightness(0) invert(1)' }} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Gradient fade — phone dissolves into section bg */}
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              height: '80px', pointerEvents: 'none',
              background: 'linear-gradient(to bottom, transparent, #DEDAD3)',
            }} />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
