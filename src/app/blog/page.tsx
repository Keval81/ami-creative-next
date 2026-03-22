import Link from "next/link";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-cream flex items-center justify-center px-6">
      <div className="text-center flex flex-col items-center gap-6 max-w-md">
        <p className="text-xs tracking-widest uppercase text-primary font-medium">Coming soon</p>
        <h1 className="font-heading font-black text-5xl text-navy leading-[1.05] tracking-tight">
          Insights
        </h1>
        <p className="text-navy/60 text-lg font-medium leading-relaxed">
          Nia&apos;s thinking on brand strategy, content, and creative work — coming soon.
        </p>
        <Link
          href="/"
          className="text-sm font-medium text-primary hover:underline"
        >
          ← Back to home
        </Link>
      </div>
    </main>
  );
}
