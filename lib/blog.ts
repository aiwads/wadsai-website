import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  content: string;
}

const POSTS_DIR = path.join(process.cwd(), 'content/blog');

export function getAllPosts(): Omit<BlogPost, 'content'>[] {
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith('.mdx'));
  const posts = files.map((file) => {
    const raw = fs.readFileSync(path.join(POSTS_DIR, file), 'utf-8');
    const { data } = matter(raw);
    return {
      slug: data.slug as string,
      title: data.title as string,
      excerpt: data.excerpt as string,
      date: data.date as string,
      category: data.category as string,
    };
  });
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPost(slug: string): BlogPost | null {
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith('.mdx'));
  for (const file of files) {
    const raw = fs.readFileSync(path.join(POSTS_DIR, file), 'utf-8');
    const { data, content } = matter(raw);
    if (data.slug === slug) {
      return {
        slug: data.slug as string,
        title: data.title as string,
        excerpt: data.excerpt as string,
        date: data.date as string,
        category: data.category as string,
        content,
      };
    }
  }
  return null;
}
