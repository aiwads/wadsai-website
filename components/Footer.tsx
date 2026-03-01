import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ background: '#2d2d2d', color: '#fff' }}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Brand */}
        <div>
          <span style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: '1.15rem', color: '#fff', letterSpacing: '-0.01em', display: 'block', marginBottom: '12px' }}>
            WADS<span style={{ color: '#b5c6e0' }}>AI</span>
          </span>
          <p style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.88rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.65 }}>
            AI voice agents that answer every call, qualify every lead, and never take a day off.
          </p>
        </div>

        {/* Nav */}
        <div>
          <h4 style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: '20px', fontWeight: 600 }}>
            Navigation
          </h4>
          <div className="flex flex-col gap-3">
            {[['Home', '/'], ['Services', '/services'], ['Blog', '/blog'], ['Contact', '/contact']].map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="transition-colors hover:text-white"
                style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)' }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Connect */}
        <div>
          <h4 style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: '20px', fontWeight: 600 }}>
            Connect
          </h4>
          <div className="flex flex-col gap-3">
            <Link href="/contact" className="transition-colors hover:text-white" style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)' }}>
              Book a Demo
            </Link>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white" style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)' }}>
              Instagram
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white" style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)' }}>
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div
        className="max-w-[1280px] mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-2"
        style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
      >
        <p style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.75rem', color: 'rgba(255,255,255,0.2)', letterSpacing: '0.08em' }}>
          © {new Date().getFullYear()} WADS AI. ALL RIGHTS RESERVED.
        </p>
        <p style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.75rem', color: 'rgba(255,255,255,0.2)', letterSpacing: '0.08em' }}>
          BUILT FOR REAL ESTATE AGENTS.
        </p>
      </div>
    </footer>
  );
}
