import type { Metadata } from 'next';
import Link from 'next/link';
import { getBlogPost, getAllPosts } from '@/lib/blog';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Wads AI`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} — Wads AI`,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { '@type': 'Organization', name: 'Wads AI' },
    publisher: { '@type': 'Organization', name: 'Wads AI' },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div style={{ background: '#E4E4DE', minHeight: '100vh', paddingTop: '96px' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', padding: '48px 24px 100px' }}>

          {/* Back link */}
          <Link href="/blog" style={{
            display: 'inline-block', marginBottom: '40px',
            fontFamily: 'var(--font-inter)', fontSize: '0.875rem',
            color: 'rgba(26,26,22,0.45)', textDecoration: 'none',
            transition: 'color 0.2s ease',
          }}
            className="hover:text-[#1A1A16]"
          >
            ← Back to Blog
          </Link>

          {/* Category + date */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', flexWrap: 'wrap' }}>
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
              fontFamily: 'var(--font-inter)', fontSize: '0.8rem',
              color: 'rgba(26,26,22,0.35)',
            }}>
              {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
          </div>

          {/* Title */}
          <h1 style={{
            fontFamily: 'var(--font-jakarta)', fontWeight: 800,
            fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
            color: '#1A1A16', lineHeight: 1.15, marginBottom: '16px',
          }}>
            {post.title}
          </h1>

          {/* Excerpt */}
          <p style={{
            fontFamily: 'var(--font-inter)', fontSize: '1.05rem',
            color: 'rgba(26,26,22,0.55)', lineHeight: 1.7,
            marginBottom: '48px',
            paddingBottom: '40px',
            borderBottom: '1px solid rgba(26,26,22,0.10)',
          }}>
            {post.excerpt}
          </p>

          {/* MDX Content */}
          <div className="blog-prose">
            <MDXRemote source={post.content} />
          </div>

          {/* CTA */}
          <div style={{
            marginTop: '64px',
            background: 'rgba(255,255,255,0.70)',
            border: '1px solid rgba(26,26,22,0.09)',
            borderRadius: '16px',
            padding: '36px',
            textAlign: 'center',
            boxShadow: '0 2px 10px rgba(26,26,22,0.06)',
          }}>
            <h3 style={{
              fontFamily: 'var(--font-jakarta)', fontWeight: 800,
              fontSize: '1.3rem', color: '#1A1A16', marginBottom: '10px',
            }}>
              Ready to put this into practice?
            </h3>
            <p style={{
              fontFamily: 'var(--font-inter)', fontSize: '0.9rem',
              color: 'rgba(26,26,22,0.55)', lineHeight: 1.65, marginBottom: '24px',
            }}>
              Book a free 15-minute call and see exactly how AI can work for your business.
            </p>
            <a href="#book-a-call" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: '#1A1A16', color: '#E4E4DE',
              fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '0.9rem',
              padding: '13px 32px', borderRadius: '100px',
              textDecoration: 'none',
              boxShadow: '0 4px 20px rgba(26,26,22,0.20)',
            }}>
              Book a Free Call
            </a>
          </div>

        </div>
      </div>
    </>
  );
}
