import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), "src/content/blog");
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.endsWith(".md")).map((f) => ({
    slug: f.replace(".md", ""),
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "src/content/blog", `${slug}.md`);

  if (!fs.existsSync(filePath)) notFound();

  const source = fs.readFileSync(filePath, "utf-8");
  const title =
    source.match(/^#\s(.+)$/m)?.[1] || slug.replace(/-/g, " ");

  return (
    <div className="pt-28 md:pt-32 pb-24 md:pb-32">
      <div className="max-w-3xl mx-auto px-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm font-medium mb-8 hover:opacity-60 transition-opacity"
          style={{ color: "var(--color-text-secondary)" }}
        >
          <i className="ph-bold ph-arrow-left" />
          Kembali ke blog
        </Link>

        <article>
          <header className="mb-10">
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
              {title}
            </h1>
            <div
              className="section-divider"
            />
          </header>

          <div
            className="prose-custom"
            style={{ color: "var(--color-text-primary)" }}
          >
            <MDXRemote source={source.replace(/^---[\s\S]*?---\n/, "")} />
          </div>
        </article>
      </div>
    </div>
  );
}
