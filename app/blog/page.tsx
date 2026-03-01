import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog — Wads AI | AI for Real Estate Agents',
  description: 'Insights on AI voice agents, lead capture, and how real estate agents can use AI to never miss another call.',
};

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Blog</h1>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            AI insights for real estate agents who want to capture more leads and close more deals.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-zinc-900/50 border border-zinc-800 hover:border-violet-800/50 rounded-2xl p-8 transition-colors block"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-medium text-violet-400 bg-violet-950/50 border border-violet-800/30 px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-zinc-500 text-xs">{post.readTime}</span>
                <span className="text-zinc-600 text-xs">
                  {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </span>
              </div>
              <h2 className="text-white font-bold text-xl mb-2 group-hover:text-violet-300 transition-colors">
                {post.title}
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed">{post.description}</p>
              <div className="text-violet-400 text-sm mt-4 font-medium">Read more →</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
