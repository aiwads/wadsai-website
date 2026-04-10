import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';

interface DemoConfig {
  businessName: string;
  tagline: string;
  phone: string;
  location: string;
  industry: string;
  accentColor: string;
  heroImage?: string;
  heroHeadline: string;
  heroSubtext: string;
  services: { title: string; description: string }[];
  stats: { value: string; label: string }[];
  testimonial: { quote: string; author: string };
  poweredBy: boolean;
}

function getDemoConfig(slug: string): DemoConfig | null {
  const filePath = path.join(process.cwd(), 'data', 'demos', `${slug}.json`);
  if (!fs.existsSync(filePath)) return null;
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

export async function generateStaticParams() {
  const demosDir = path.join(process.cwd(), 'data', 'demos');
  const files = fs.readdirSync(demosDir);
  return files
    .filter((f) => f.endsWith('.json') && !f.startsWith('_'))
    .map((f) => ({ slug: f.replace('.json', '') }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const config = getDemoConfig(slug);
  if (!config) return {};
  return {
    title: `${config.businessName} — ${config.tagline}`,
    description: config.heroSubtext,
  };
}

export default async function DemoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const config = getDemoConfig(slug);
  if (!config) notFound();

  const accent = config.accentColor;
  const accentLight = `${accent}18`;
  const accentMid = `${accent}30`;

  const heroImage = config.heroImage ?? '';

  return (
    <div style={{ fontFamily: 'var(--font-inter), sans-serif', background: '#e8e9e1', color: '#1a1a1a', minHeight: '100vh' }}>

      {/* Outer container — inset from page edges */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '16px 16px 0' }}>

        {/* Nav */}
        <header style={{ background: '#ffffff', borderRadius: 12, padding: '0 24px', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
          <span style={{ fontFamily: 'var(--font-jakarta), sans-serif', fontWeight: 700, fontSize: 17, color: '#1a1a1a' }}>
            {config.businessName}
          </span>
          <a
            href={`tel:${config.phone.replace(/\D/g, '')}`}
            style={{ background: '#1a1a1a', color: '#ffffff', fontWeight: 600, fontSize: 14, padding: '10px 22px', borderRadius: 999, textDecoration: 'none' }}
          >
            Call {config.phone}
          </a>
        </header>

        {/* Hero image container */}
        <section style={{
          position: 'relative',
          borderRadius: 16,
          overflow: 'hidden',
          height: 'clamp(480px, 72vh, 680px)',
          backgroundImage: heroImage ? `url(${heroImage})` : 'none',
          backgroundColor: heroImage ? undefined : accent,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
          {/* Dark gradient overlay — left and bottom emphasis */}
          <div style={{
            position: 'absolute', inset: 0,
            background: [
              'linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, transparent 75%)',
              'linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.25) 40%, transparent 70%)',
            ].join(', '),
          }} />

          {/* Content overlay — single left column */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            padding: '48px 48px',
          }}>
            <div style={{ maxWidth: 620 }}>
              <h1 style={{
                fontFamily: 'var(--font-jakarta), sans-serif',
                fontSize: 'clamp(48px, 6.5vw, 80px)',
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1.0,
                letterSpacing: '-0.03em',
                marginBottom: 16,
                textShadow: '0 2px 12px rgba(0,0,0,0.3)',
              }}>
                {config.heroHeadline}
              </h1>
              <p style={{
                color: 'rgba(255,255,255,0.8)',
                fontSize: 16,
                lineHeight: 1.65,
                maxWidth: 420,
                marginBottom: 28,
              }}>
                {config.heroSubtext}
              </p>
              <a
                href={`tel:${config.phone.replace(/\D/g, '')}`}
                style={{
                  background: accent,
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: 15,
                  padding: '14px 32px',
                  borderRadius: 999,
                  textDecoration: 'none',
                  display: 'inline-block',
                  boxShadow: `0 4px 20px ${accent}50`,
                }}
              >
                Call Now — {config.phone}
              </a>
            </div>
          </div>
        </section>

      </div>{/* end outer container */}

      {/* Stats Bar */}
      <section style={{ background: accent, padding: '40px 24px', marginTop: 0 }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, textAlign: 'center' }}>
          {config.stats.map((stat, i) => (
            <div key={i}>
              <div style={{ fontFamily: 'var(--font-jakarta), sans-serif', fontSize: 40, fontWeight: 800, color: '#ffffff', lineHeight: 1 }}>
                {stat.value}
              </div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.75)', marginTop: 6, fontWeight: 500 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" style={{ padding: '80px 24px', background: '#ffffff' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-jakarta), sans-serif', fontSize: 32, fontWeight: 800, color: '#0f172a', marginBottom: 8, textAlign: 'center', letterSpacing: '-0.02em' }}>
            What We Do
          </h2>
          <p style={{ color: '#6b7280', textAlign: 'center', marginBottom: 48, fontSize: 16 }}>
            {config.tagline}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
            {config.services.map((service, i) => (
              <div
                key={i}
                style={{ background: '#f8f9fa', border: '1px solid #e5e7eb', borderRadius: 12, padding: '28px 28px', borderLeft: `4px solid ${accent}` }}
              >
                <h3 style={{ fontFamily: 'var(--font-jakarta), sans-serif', fontWeight: 700, fontSize: 17, color: '#0f172a', marginBottom: 8 }}>
                  {service.title}
                </h3>
                <p style={{ color: '#6b7280', fontSize: 14, lineHeight: 1.6 }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Receptionist Callout */}
      {config.poweredBy && (
        <section style={{ background: accentLight, borderTop: `1px solid ${accentMid}`, borderBottom: `1px solid ${accentMid}`, padding: '64px 24px' }}>
          <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
            <div style={{ display: 'inline-block', background: accentMid, borderRadius: 999, padding: '4px 14px', fontSize: 12, fontWeight: 600, color: accent, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 20 }}>
              Always Available
            </div>
            <h2 style={{ fontFamily: 'var(--font-jakarta), sans-serif', fontSize: 28, fontWeight: 800, color: '#0f172a', marginBottom: 12, letterSpacing: '-0.02em' }}>
              We Never Miss a Call
            </h2>
            <p style={{ color: '#4b5563', fontSize: 16, lineHeight: 1.7, marginBottom: 28 }}>
              Every call gets answered — nights, weekends, and during showings. Our AI receptionist qualifies your lead and sends us an instant summary, so we can follow up fast.
            </p>
            <a
              href={`tel:${config.phone.replace(/\D/g, '')}`}
              style={{ background: accent, color: '#ffffff', fontWeight: 700, fontSize: 15, padding: '12px 28px', borderRadius: 8, textDecoration: 'none', display: 'inline-block' }}
            >
              Call Us Now
            </a>
          </div>
        </section>
      )}

      {/* Testimonial */}
      <section style={{ padding: '80px 24px', background: '#ffffff' }}>
        <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: 48, color: accent, lineHeight: 1, marginBottom: 20 }}>&ldquo;</div>
          <blockquote style={{ fontFamily: 'var(--font-jakarta), sans-serif', fontSize: 22, fontWeight: 600, color: '#1a1a1a', lineHeight: 1.5, marginBottom: 20 }}>
            {config.testimonial.quote}
          </blockquote>
          <cite style={{ fontSize: 14, color: '#6b7280', fontStyle: 'normal', fontWeight: 500 }}>
            — {config.testimonial.author}
          </cite>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ background: accent, padding: '72px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-jakarta), sans-serif', fontSize: 34, fontWeight: 800, color: '#ffffff', marginBottom: 14, letterSpacing: '-0.02em' }}>
            Ready to Get Started?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 17, marginBottom: 32, lineHeight: 1.6 }}>
            Give us a call — we pick up every time.
          </p>
          <a
            href={`tel:${config.phone.replace(/\D/g, '')}`}
            style={{ background: '#ffffff', color: accent, fontWeight: 800, fontSize: 18, padding: '16px 40px', borderRadius: 10, textDecoration: 'none', display: 'inline-block' }}
          >
            {config.phone}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#f8f9fa', borderTop: '1px solid #e5e7eb', padding: '32px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <div>
            <span style={{ fontFamily: 'var(--font-jakarta), sans-serif', fontWeight: 700, fontSize: 15, color: '#1a1a1a' }}>
              {config.businessName}
            </span>
            <span style={{ color: '#9ca3af', fontSize: 14, marginLeft: 12 }}>{config.phone}</span>
            <span style={{ color: '#9ca3af', fontSize: 14, marginLeft: 12 }}>{config.location}</span>
          </div>
          {config.poweredBy && (
            <a
              href="https://wads.ai"
              style={{ fontSize: 12, color: '#9ca3af', textDecoration: 'none' }}
            >
              Site by Wads AI
            </a>
          )}
        </div>
      </footer>

    </div>
  );
}
