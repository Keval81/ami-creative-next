import Link from "next/link";
import { BLOG_POSTS } from "@/lib/constants";

export default function Blog() {
  const featured = BLOG_POSTS[0];
  const secondary = BLOG_POSTS.slice(1);

  return (
    <section id="blog" className="bg-cream py-20 md:py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Header */}
        <div className="fade-up flex items-end justify-between">
          <div className="flex flex-col gap-2">
            <p className="text-xs tracking-widest uppercase text-primary font-medium">Insights</p>
            <h2 className="font-heading font-black text-5xl md:text-7xl text-navy leading-[1.05] tracking-tight">
              Thinking Out Loud
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-sm font-medium text-navy/60 hover:text-primary transition-colors whitespace-nowrap"
          >
            Read all insights →
          </Link>
        </div>

        {/* Grid */}
        <div className="fade-up grid grid-cols-1 lg:grid-cols-5 gap-6" style={{ transitionDelay: "150ms" }}>
          {/* Featured card */}
          <Link
            href="/blog"
            className="lg:col-span-3 relative rounded-2xl overflow-hidden bg-navy min-h-[400px] flex flex-col justify-end p-8 group"
          >
            <div className="absolute inset-0 bg-navy/60 z-10" />
            <div className="relative z-20 flex flex-col gap-3">
              <span className="text-xs tracking-widest uppercase text-primary font-medium">
                Featured · {featured.category}
              </span>
              <h3 className="font-heading font-bold text-white text-2xl md:text-3xl leading-tight group-hover:text-primary transition-colors">
                {featured.title}
              </h3>
              <p className="text-white/50 text-sm">{featured.readTime}</p>
            </div>
          </Link>

          {/* Secondary cards */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {secondary.map((post) => (
              <Link
                key={post.slug}
                href="/blog"
                className="flex-1 rounded-2xl border border-navy/10 bg-white p-6 flex flex-col gap-3 group hover:border-primary/30 transition-colors"
              >
                <span className="text-xs tracking-widest uppercase text-primary font-medium">
                  {post.category}
                </span>
                <h3 className="font-heading font-bold text-navy text-lg leading-snug group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm font-medium text-navy/50 uppercase tracking-widest mt-auto">
                  {post.readTime}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
