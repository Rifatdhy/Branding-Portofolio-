import fs from "fs";
import path from "path";
import Link from "next/link";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}

function getPosts(): BlogPost[] {
  const dir = path.join(process.cwd(), "src/content/blog");
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));
  return files.map((file) => {
    const content = fs.readFileSync(path.join(dir, file), "utf-8");
    const title = content.match(/^#\s(.+)$/m)?.[1] || file.replace(".md", "");
    const date = content.match(/^date:\s(.+)$/m)?.[1] || "";
    const excerpt =
      content
        .replace(/^---[\s\S]*?---\n/, "")
        .replace(/^#\s.+$/m, "")
        .trim()
        .split("\n")
        .slice(0, 3)
        .join(" ")
        .slice(0, 150) + "...";
    return { slug: file.replace(".md", ""), title, date, excerpt };
  }).sort((a, b) => b.date.localeCompare(a.date));
}

export default function BlogPage() {
  const posts = getPosts();

  return (
    <div className="pt-28 md:pt-32 pb-24 md:pb-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 md:mb-20">
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            Blog.
          </h1>
          <div
            className="section-divider"
          />
          <p
            className="mt-4 leading-relaxed max-w-lg"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Catatan, eksperimen, dan hal-hal menarik seputar web development
            dan jaringan.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-20">
            <p
              className="text-lg"
              style={{ color: "var(--color-text-muted)" }}
            >
              Belum ada tulisan. Nanti saya isi &mdash; pantau terus!
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-5">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block p-6 md:p-8 rounded-lg transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "var(--color-surface-card)",
                  border: "1px solid var(--color-border)",
                }}
              >
                {post.date && (
                  <p
                    className="text-xs font-mono mb-3"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {post.date}
                  </p>
                )}
                <h2 className="font-display text-xl md:text-2xl font-bold">
                  {post.title}
                </h2>
                <p
                  className="mt-2 text-sm leading-relaxed"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {post.excerpt}
                </p>
                <span
                  className="inline-flex items-center gap-1 mt-4 text-sm font-medium"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  Baca selengkapnya
                  <i className="ph-bold ph-arrow-right text-sm" />
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
