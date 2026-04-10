import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — Wads AI',
  description: 'Privacy policy for Wads AI.',
};

export default function PrivacyPage() {
  return (
    <div style={{ background: '#E4E4DE', minHeight: '100vh', paddingTop: '96px' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '64px 24px 100px' }}>
        <h1 style={{
          fontFamily: 'var(--font-jakarta)', fontWeight: 800,
          fontSize: 'clamp(2rem, 4vw, 2.75rem)',
          color: '#1A1A16', lineHeight: 1.1, marginBottom: '24px',
        }}>
          Privacy Policy
        </h1>
        <p style={{
          fontFamily: 'var(--font-inter)', fontSize: '1rem',
          color: 'rgba(26,26,22,0.55)', lineHeight: 1.75,
        }}>
          This privacy policy will be updated soon.
        </p>
      </div>
    </div>
  );
}
