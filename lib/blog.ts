import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { z } from "zod";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

/** Type-safe frontmatter contract for every post. */
const frontmatterSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "date must be YYYY-MM-DD"),
  tags: z.array(z.string()).default([]),
  cover: z.string().min(1),
  author: z.object({
    name: z.string(),
    role: z.string(),
    avatar: z.string().optional(),
  }),
  draft: z.boolean().default(false),
});

export type PostFrontmatter = z.infer<typeof frontmatterSchema>;

export interface PostMeta extends PostFrontmatter {
  slug: string;
  readingTime: string;
}

export interface Post extends PostMeta {
  content: string;
}

const isProd = process.env.NODE_ENV === "production";

function readPostFile(slug: string): Post {
  const fullPath = path.join(BLOG_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  const parsed = frontmatterSchema.parse(data);
  return {
    ...parsed,
    slug,
    content,
    readingTime: readingTime(content).text,
  };
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

/** All posts, newest first. Drafts are excluded in production builds. */
export function getAllPosts(): PostMeta[] {
  return getAllSlugs()
    .map((slug) => {
      const { content: _content, ...meta } = readPostFile(slug);
      void _content;
      return meta;
    })
    .filter((p) => !(isProd && p.draft))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): Post | null {
  try {
    const post = readPostFile(slug);
    if (isProd && post.draft) return null;
    return post;
  } catch {
    return null;
  }
}

/** Published slugs for generateStaticParams. */
export function getPublishedSlugs(): string[] {
  return getAllPosts().map((p) => p.slug);
}

export function getRelatedPosts(slug: string, tags: string[], limit = 3): PostMeta[] {
  return getAllPosts()
    .filter((p) => p.slug !== slug && p.tags.some((t) => tags.includes(t)))
    .slice(0, limit);
}

export function getAllTags(): string[] {
  const set = new Set<string>();
  for (const post of getAllPosts()) post.tags.forEach((t) => set.add(t));
  return Array.from(set).sort();
}
