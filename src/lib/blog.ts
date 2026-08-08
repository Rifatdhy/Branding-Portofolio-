import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}

export interface BlogPost extends BlogMeta {
  content: string;
}

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

function readSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getPosts(): BlogMeta[] {
  return readSlugs()
    .map((slug) => {
      const raw = fs.readFileSync(path.join(BLOG_DIR, `${slug}.md`), "utf-8");
      const { data, content } = matter(raw);
      const date = data.date instanceof Date
        ? data.date.toISOString().split("T")[0]
        : String(data.date || "");
      return {
        slug,
        title: data.title || slug.replace(/-/g, " "),
        date,
        excerpt:
          content.replace(/^#\s.+$/m, "").trim().slice(0, 160) + "...",
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPostSlugList(): string[] {
  return readSlugs();
}

export function getPostContent(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const date = data.date instanceof Date
    ? data.date.toISOString().split("T")[0]
    : String(data.date || "");
  return {
    slug,
    title: data.title || slug.replace(/-/g, " "),
    date,
    excerpt:
      content.replace(/^#\s.+$/m, "").trim().slice(0, 160) + "...",
    content,
  };
}
