import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostSlugList, getPostContent } from "@/lib/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getPostSlugList().map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const source = getPostContent(slug);

  if (!source) notFound();

  const title =
    source.match(/^title:\s(.+)$/m)?.[1]?.trim() || slug.replace(/-/g, " ");

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
          <header className="mb-10 flex flex-col gap-2">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
              Journal
            </span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
              {title}
            </h1>
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
