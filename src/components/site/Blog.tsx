import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { posts } from "@/lib/blog";

export function Blog() {
  return (
    <section
      id="recursos"
      className="border-y border-border bg-[#fafaf9] py-24 sm:py-28"
      aria-labelledby="blog-title"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-brand-pink">
              <span className="h-px w-8 bg-brand-pink" aria-hidden />
              Recursos
            </span>
            <h2
              id="blog-title"
              className="mt-4 font-display text-3xl font-semibold leading-[1.05] tracking-tight sm:text-4xl md:text-[2.75rem]"
            >
              Antes de decidir,{" "}
              <span className="italic text-brand-blue">
                infórmate con datos reales.
              </span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm font-medium text-brand-blue hover:underline"
          >
            Ver todos los artículos →
          </Link>
        </div>

        <ul className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-border/70 md:grid-cols-3">
          {posts.map((p, i) => (
            <li key={p.slug} className="group relative bg-white">
              <Link
                href={`/blog/${p.slug}`}
                className="flex h-full flex-col p-7 transition-colors duration-200 hover:bg-brand-gray/40"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span
                      className="font-mono text-[11px] tracking-wider text-brand-pink"
                      aria-hidden
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
                      {p.category}
                    </span>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-blue" />
                </div>
                <h3 className="mt-12 font-display text-xl font-semibold leading-snug tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <span className="mt-auto pt-10 text-[11px] uppercase tracking-wider text-muted-foreground">
                  {p.readMin} min de lectura
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
