'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: 'rgba(255, 255, 255, 0.92)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(181, 198, 224, 0.5)',
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: '1.15rem', color: '#2d2d2d', letterSpacing: '-0.01em' }}>
            WADS<span style={{ color: '#103783' }}>AI</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {[['Home', '/'], ['Services', '/services'], ['Blog', '/blog'], ['Contact', '/contact']].map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="transition-colors hover:text-[#103783]"
              style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.9rem', color: 'rgba(45,45,45,0.6)', fontWeight: 500 }}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="transition-all hover:border-[#103783] hover:text-[#103783]"
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontSize: '0.85rem',
              fontWeight: 600,
              color: '#2d2d2d',
              padding: '9px 24px',
              borderRadius: '100px',
              border: '1.5px solid rgba(45,45,45,0.3)',
            }}
          >
            Book Free Demo
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          style={{ color: '#2d2d2d', background: 'none', border: 'none', cursor: 'pointer' }}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden px-6 py-8 flex flex-col gap-5"
          style={{ background: '#fff', borderTop: '1px solid rgba(181,198,224,0.4)' }}
        >
          {[['Home', '/'], ['Services', '/services'], ['Blog', '/blog'], ['Contact', '/contact']].map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="transition-colors hover:text-[#103783]"
              style={{ color: 'rgba(45,45,45,0.6)', fontFamily: 'var(--font-space-grotesk)', fontSize: '0.95rem', fontWeight: 500 }}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary justify-center text-center" onClick={() => setOpen(false)}>
            Book Free Demo
          </Link>
        </div>
      )}
    </nav>
  );
}
