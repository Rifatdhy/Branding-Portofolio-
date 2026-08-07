import Link from "next/link";
import { getPosts } from "@/lib/blog";

export default function BlogPage() {
  const posts = getPosts();

  return (
    <div className="pt-28 md:pt-32 pb-24 md:pb-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 md:mb-16 flex flex-col gap-2">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
            Notes
          </span>
          <h1 className="font-display text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight text-balance">
            Blog.
          </h1>
          <p className="mt-4 leading-relaxed max-w-lg text-secondary">
            Catatan, eksperimen, dan hal-hal menarik seputar web development
            dan jaringan.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-lg text-muted">
              Belum ada tulisan. Nanti saya isi &mdash; pantau terus!
            </p>
          </div>
        ) : (
          <div className="divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
            {posts.map((post, i) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group py-6 md:py-8 grid grid-cols-[auto_1fr] sm:grid-cols-[3rem_8rem_1fr] items-baseline gap-x-4 md:gap-x-6 transition-opacity duration-300 hover:opacity-70"
              >
                <span className="font-display text-xs font-semibold tracking-[0.2em] text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {post.date && (
                  <span className="font-mono text-[11px] text-muted hidden sm:block">
                    {post.date}
                  </span>
                )}
                <span>
                  <span className="font-display text-lg md:text-xl font-bold tracking-tight">
                    {post.title}
                    <i
                      aria-hidden="true"
                      className="ph-bold ph-arrow-up-right text-base ml-1.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 inline-block"
                    />
                  </span>
                  <span className="block mt-1 text-sm leading-relaxed text-secondary">
                    {post.excerpt}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
