import type { Metadata } from 'next';
import Link from 'next/link';
import { getBlogPost, getAllPosts } from '@/lib/blog';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Wads AI`,
    description: post.description,
  };
}

function renderContent(content: string) {
  const lines = content.trim().split('\n');
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();

    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} className="text-2xl font-bold text-white mt-10 mb-4">
          {line.replace('## ', '')}
        </h2>
      );
    } else if (line.startsWith('- ')) {
      const listItems: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith('- ')) {
        listItems.push(lines[i].trim().replace('- ', ''));
        i++;
      }
      elements.push(
        <ul key={i} className="list-none flex flex-col gap-2 mb-4">
          {listItems.map((item, j) => (
            <li key={j} className="flex items-start gap-2 text-zinc-300">
              <span className="text-violet-400 mt-0.5 shrink-0">✓</span>
              <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>') }} />
            </li>
          ))}
        </ul>
      );
      continue;
    } else if (line.match(/^\[(.+)\]\((.+)\)$/)) {
      const match = line.match(/^\[(.+)\]\((.+)\)$/);
      if (match) {
        elements.push(
          <div key={i} className="mt-6">
            <Link href={match[2]} className="bg-violet-600 hover:bg-violet-500 text-white font-semibold px-8 py-3 rounded-xl transition-colors inline-block">
              {match[1]}
            </Link>
          </div>
        );
      }
    } else if (line.length > 0) {
      elements.push(
        <p key={i} className="text-zinc-400 leading-relaxed mb-4"
          dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>') }}
        />
      );
    }
    i++;
  }
  return elements;
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <div className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/blog" className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors mb-8 inline-block">
          ← Back to Blog
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-medium text-violet-400 bg-violet-950/50 border border-violet-800/30 px-3 py-1 rounded-full">
            {post.category}
          </span>
          <span className="text-zinc-500 text-xs">{post.readTime}</span>
          <span className="text-zinc-600 text-xs">
            {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">{post.title}</h1>
        <p className="text-zinc-400 text-lg mb-12 leading-relaxed">{post.description}</p>

        <div className="border-t border-zinc-800 pt-10">
          {renderContent(post.content)}
        </div>

        <div className="mt-16 bg-gradient-to-br from-violet-950/40 to-zinc-900/40 border border-violet-800/30 rounded-2xl p-8 text-center">
          <h3 className="text-white font-bold text-xl mb-2">Ready to stop missing leads?</h3>
          <p className="text-zinc-400 text-sm mb-6">Book a free 10-minute demo and see exactly how it would work for your business.</p>
          <Link href="/contact" className="bg-violet-600 hover:bg-violet-500 text-white font-semibold px-8 py-3 rounded-xl transition-colors inline-block">
            Book a Free Demo
          </Link>
        </div>
      </div>
    </div>
  );
}
