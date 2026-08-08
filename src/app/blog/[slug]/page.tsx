import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostSlugList, getPostContent } from "@/lib/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getPostSlugList().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostContent(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt.slice(0, 160),
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostContent(slug);
  if (!post) notFound();

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
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance text-[var(--color-text-primary)]">
              {post.title}
            </h1>
            {post.date && (
              <time className="text-sm text-muted" dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("id-ID", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            )}
          </header>

          <div className="prose-custom" style={{ color: "var(--color-text-primary)" }}>
            <MDXRemote source={post.content} />
          </div>
        </article>
      </div>
    </div>
  );
}
