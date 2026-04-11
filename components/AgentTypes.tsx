'use client';
import { motion } from 'framer-motion';
import { PhoneOff } from 'lucide-react';
import { startWebCall, isMobileDevice, prefetchToken } from './CallButton';

export default function AgentTypes() {
  return (
    <section style={{ background: '#DEDED8', paddingTop: '60px', paddingBottom: '0' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 24px' }}>

        {/* iPhone peek */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}
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
                boxShadow: 'none',
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
                    <div style={{
                      width: 70, height: 70, borderRadius: '50%', background: '#FF3B30',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                      boxShadow: '0 2px 8px rgba(255,59,48,0.4)',
                    }}>
                      <PhoneOff size={31} color="#fff" />
                    </div>
                    {/* Accept */}
                    <a
                      href="tel:+13103612756"
                      onMouseEnter={prefetchToken}
                      onClick={(e) => { if (!isMobileDevice()) { e.preventDefault(); startWebCall(); } }}
                      style={{
                        width: 70, height: 70, borderRadius: '50%', background: '#34C759',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                        textDecoration: 'none', animation: 'glowPulse 2s ease-in-out infinite',
                      }}
                    >
                      <img src="/wadsai-phone-icon.png" alt="" style={{ width: 38, height: 38, filter: 'brightness(0) invert(1)' }} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
