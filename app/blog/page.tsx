import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog — Wads AI',
  description: 'Tips, strategies, and updates on AI for small business owners. Learn how AI agents can answer calls, capture leads, and grow your business.',
  openGraph: {
    title: 'Blog — Wads AI',
    description: 'Tips, strategies, and updates on AI for small business owners.',
    type: 'website',
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div style={{ background: '#E4E4DE', minHeight: '100vh', paddingTop: '96px' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '64px 24px 100px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span style={{
            display: 'inline-block',
            padding: '6px 16px', borderRadius: '100px',
            background: 'rgba(26,26,22,0.07)', border: '1px solid rgba(26,26,22,0.15)',
            fontFamily: 'var(--font-inter)', fontSize: '0.72rem', fontWeight: 700,
            letterSpacing: '0.16em', textTransform: 'uppercase', color: '#6A6A62',
            marginBottom: '20px',
          }}>
            Wads AI Blog
          </span>
          <h1 style={{
            fontFamily: 'var(--font-jakarta)', fontWeight: 800,
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: '#1A1A16', lineHeight: 1.1, marginBottom: '16px',
          }}>
            Insights for Small Business Owners.
          </h1>
          <p style={{
            fontFamily: 'var(--font-inter)', fontSize: '1rem',
            color: 'rgba(26,26,22,0.50)', lineHeight: 1.65,
          }}>
            Tips, strategies, and updates on AI for your business.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '24px',
        }}>
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              style={{ textDecoration: 'none', display: 'block' }}
            >
              <div style={{
                background: 'rgba(255,255,255,0.70)',
                border: '1px solid rgba(26,26,22,0.09)',
                borderRadius: '16px',
                padding: '28px',
                boxShadow: '0 2px 10px rgba(26,26,22,0.06)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'box-shadow 0.2s ease, transform 0.2s ease',
              }}
                className="hover:-translate-y-0.5 hover:shadow-md"
              >
                {/* Category + date */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', flexWrap: 'wrap' }}>
                  <span style={{
                    display: 'inline-block',
                    padding: '4px 10px', borderRadius: '100px',
                    background: 'rgba(26,26,22,0.07)', border: '1px solid rgba(26,26,22,0.12)',
                    fontFamily: 'var(--font-inter)', fontSize: '0.68rem', fontWeight: 700,
                    letterSpacing: '0.10em', textTransform: 'uppercase', color: '#6A6A62',
                  }}>
                    {post.category}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-inter)', fontSize: '0.75rem',
                    color: 'rgba(26,26,22,0.35)',
                  }}>
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>

                {/* Title */}
                <h2 style={{
                  fontFamily: 'var(--font-jakarta)', fontWeight: 800,
                  fontSize: '1.1rem', color: '#1A1A16',
                  lineHeight: 1.3, marginBottom: '12px',
                }}>
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p style={{
                  fontFamily: 'var(--font-inter)', fontSize: '0.875rem',
                  color: 'rgba(26,26,22,0.55)', lineHeight: 1.72,
                  flex: 1,
                }}>
                  {post.excerpt}
                </p>

                {/* Read more */}
                <div style={{
                  marginTop: '20px',
                  fontFamily: 'var(--font-inter)', fontSize: '0.85rem',
                  fontWeight: 600, color: '#1A1A16',
                }}>
                  Read more →
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
