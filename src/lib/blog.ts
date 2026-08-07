import fs from "fs";
import path from "path";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

function readSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getPosts(): BlogPost[] {
  return readSlugs()
    .map((slug) => {
      const content = fs.readFileSync(path.join(BLOG_DIR, `${slug}.md`), "utf-8");
      return {
        slug,
        title: content.match(/^title:\s(.+)$/m)?.[1]?.trim() || slug.replace(/-/g, " "),
        date: content.match(/^date:\s(.+)$/m)?.[1]?.trim() || "",
        excerpt:
          content
            .replace(/^---[\s\S]*?---\n/, "")
            .replace(/^#\s.+$/m, "")
            .trim()
            .split("\n")
            .slice(0, 3)
            .join(" ")
            .slice(0, 150) + "...",
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPostSlugList(): string[] {
  return readSlugs();
}

export function getPostContent(slug: string): string | null {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  return fs.readFileSync(filePath, "utf-8");
}