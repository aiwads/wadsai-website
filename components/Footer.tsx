'use client';
import Link from 'next/link';
import { openContactModal } from './ContactModal';

export default function Footer() {
  return (
    <footer style={{ background: '#D6D6CF', color: '#1A1A16' }}>
      <div style={{
        maxWidth: '100%',
        paddingLeft: 'clamp(24px, 5vw, 80px)',
        paddingRight: 'clamp(24px, 5vw, 80px)',
        paddingTop: '48px',
        paddingBottom: '64px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '48px',
      }}
        className="footer-grid"
      >

        {/* Brand */}
        <div>
          <span style={{ fontFamily: 'var(--font-jakarta)', fontWeight: 800, fontSize: '1.15rem', color: '#1A1A16', display: 'block', marginBottom: '12px' }}>
            Wads<span style={{ color: '#6A6A62' }}>AI</span>
          </span>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.88rem', color: 'rgba(26,26,22,0.50)', lineHeight: 1.65 }}>
            AI agents that answer every call, qualify every lead, and never take a day off.
          </p>
        </div>

        {/* Nav */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <h4 style={{ fontFamily: 'var(--font-inter)', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(26,26,22,0.35)', marginBottom: '20px', fontWeight: 600 }}>
            Navigation
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}>
            {[['Home', '/'], ['Services', '/#services'], ['Blog', '/blog'], ['Privacy Policy', '/privacy']].map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="transition-colors hover:text-black"
                style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9rem', color: 'rgba(26,26,22,0.50)' }}
              >
                {label}
              </Link>
            ))}
            <button onClick={openContactModal} className="transition-colors hover:text-black" style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9rem', color: 'rgba(26,26,22,0.50)', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
              Contact
            </button>
          </div>
        </div>

        {/* Connect */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <h4 style={{ fontFamily: 'var(--font-inter)', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(26,26,22,0.35)', marginBottom: '20px', fontWeight: 600 }}>
            Connect
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}>
            <Link href="/#book-a-call" className="transition-colors hover:text-black" style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9rem', color: 'rgba(26,26,22,0.50)' }}>
              Book a Demo
            </Link>
            <a href="https://www.instagram.com/evan.wada/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-black" style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9rem', color: 'rgba(26,26,22,0.50)' }}>
              Instagram
            </a>
            <a href="https://www.linkedin.com/in/evanwada/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-black" style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9rem', color: 'rgba(26,26,22,0.50)' }}>
              LinkedIn
            </a>
          </div>
        </div>

      </div>

      <div style={{
        borderTop: '1px solid rgba(26,26,22,0.10)',
        paddingTop: '20px',
        paddingBottom: '20px',
        textAlign: 'center',
      }}>
        <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', color: 'rgba(26,26,22,0.35)' }}>
          © 2025 Wads AI. All rights reserved.
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </footer>
  );
}
