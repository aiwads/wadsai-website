'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { startWebCall, isMobileDevice, prefetchToken } from './CallButton';
import { openContactModal } from './ContactModal';

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50" style={{
      background: 'rgba(228,228,222,0.92)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(26,26,22,0.08)',
    }}>
      <div className="w-full h-16 flex items-center justify-between" style={{ paddingLeft: 'clamp(24px, 5vw, 80px)', paddingRight: 'clamp(24px, 5vw, 80px)' }}>

        {/* Logo — far left */}
        <Link href="/" style={{ fontFamily: 'var(--font-jakarta)', fontWeight: 800, fontSize: '1.1rem', color: '#1A1A16' }}>
          Wads<span style={{ color: '#6A6A62' }}>AI</span>
        </Link>

        {/* Nav links + CTA — grouped together, far right */}
        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-8">
            {[['Services', '/#services'], ['How It Works', '/#how-it-works'], ['Blog', '/blog']].map(([label, href]) => (
              <a key={label} href={href} style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9rem', color: 'rgba(26,26,22,0.55)', fontWeight: 500 }}
                className="hover:text-black transition-colors">
                {label}
              </a>
            ))}
            <button onClick={openContactModal} style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9rem', color: 'rgba(26,26,22,0.55)', fontWeight: 500, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
              className="hover:text-black transition-colors">
              Contact
            </button>
            <a
              href="tel:+13103612756"
              onMouseEnter={prefetchToken}
              onFocus={prefetchToken}
              onClick={(e) => { if (isMobileDevice()) return; e.preventDefault(); startWebCall(); }}
              style={{
                fontFamily: 'var(--font-inter)', fontSize: '0.85rem', fontWeight: 600,
                color: '#E4E4DE', background: '#1A1A16',
                padding: '9px 22px', borderRadius: '100px',
                transition: 'background 0.2s ease, transform 0.2s ease',
                boxShadow: '0 4px 16px rgba(26,26,22,0.20)',
                cursor: 'pointer', textDecoration: 'none', display: 'inline-block',
              }} className="hover:-translate-y-0.5 active:scale-95">
              Try the Demo
            </a>
          </div>

          <button className="md:hidden" onClick={() => setOpen(!open)} style={{ color: 'rgba(26,26,22,0.55)', background: 'none', border: 'none', cursor: 'pointer' }}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

      </div>

      {open && (
        <div className="md:hidden px-6 py-6 flex flex-col gap-5" style={{ background: '#E4E4DE', borderTop: '1px solid rgba(26,26,22,0.08)' }}>
          {[['Services', '/#services'], ['How It Works', '/#how-it-works'], ['Blog', '/blog']].map(([label, href]) => (
            <a key={label} href={href} style={{ color: 'rgba(26,26,22,0.55)', fontFamily: 'var(--font-inter)', fontSize: '0.95rem' }}
              onClick={() => setOpen(false)} className="hover:text-black transition-colors">
              {label}
            </a>
          ))}
          <button onClick={() => { setOpen(false); openContactModal(); }} style={{ color: 'rgba(26,26,22,0.55)', fontFamily: 'var(--font-inter)', fontSize: '0.95rem', background: 'none', border: 'none', cursor: 'pointer', padding: 0, textAlign: 'left' }}
            className="hover:text-black transition-colors">
            Contact
          </button>
          <a
            href="tel:+13103612756"
            onClick={(e) => { setOpen(false); if (isMobileDevice()) return; e.preventDefault(); startWebCall(); }}
            style={{
              background: '#1A1A16', color: '#E4E4DE', fontFamily: 'var(--font-inter)', fontWeight: 600,
              fontSize: '0.9rem', padding: '12px 24px', borderRadius: '100px', textAlign: 'center',
              cursor: 'pointer', textDecoration: 'none', display: 'block',
            }}>
            Try the Demo
          </a>
        </div>
      )}
    </nav>
  );
}
