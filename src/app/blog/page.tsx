import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { posts } from "@/lib/blog";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog — Paneles solares en México",
  description:
    "Guías, precios y análisis sobre paneles solares en México: cuánto cuestan, cómo dimensionarlos y si conviene instalarlos en tu casa o negocio.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog Nanasolar — Paneles solares en México",
    description:
      "Guías, precios y análisis sobre paneles solares en México.",
    url: `${site.url}/blog`,
    type: "website",
  },
};

export default function BlogIndex() {
  const [featured, ...rest] = posts;
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden border-b border-border bg-white py-20 sm:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-60 [background-image:radial-gradient(rgba(0,64,193,0.08)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
        />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="breadcrumb" className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="hover:text-foreground">Inicio</Link>
              </li>
              <li aria-hidden>·</li>
              <li className="text-foreground">Blog</li>
            </ol>
          </nav>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.02] tracking-[-0.03em] sm:text-5xl md:text-6xl">
            El blog de{" "}
            <span className="italic text-brand-blue">Nanasolar.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Guías honestas sobre paneles solares en México — precios,
            dimensionamiento, retorno real y beneficios fiscales. Sin jerga
            innecesaria.
          </p>
        </div>
      </section>

      {/* Featured */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-brand-pink">
            <span className="h-px w-8 bg-brand-pink" aria-hidden />
            Destacado
          </span>

          <Link
            href={`/blog/${featured.slug}`}
            className="group mt-6 grid overflow-hidden rounded-3xl border border-border bg-white transition-shadow hover:shadow-xl md:grid-cols-[1.1fr_1fr]"
          >
            <div className="relative hidden bg-brand-blue p-10 md:block">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.1] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
              />
              <div className="relative flex h-full flex-col justify-between text-white">
                <div className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.15em] text-white/70">
                  <span className="h-px w-6 bg-white/50" aria-hidden />
                  Lectura destacada
                </div>
                <div>
                  <p className="font-display text-[9rem] font-semibold leading-none tracking-[-0.05em] text-brand-pink">
                    01
                  </p>
                  <p className="mt-4 text-sm text-white/70">
                    {featured.readMin} min · {featured.date}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between p-8 sm:p-10">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-brand-pink">
                    {featured.category}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-blue" />
                </div>
                <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl">
                  {featured.title}
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                  {featured.description}
                </p>
              </div>
              <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue">
                Leer artículo →
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Rest of posts */}
      <section className="bg-[#fafaf9] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              Más artículos
            </h2>
            <span className="text-sm text-muted-foreground">
              {posts.length} publicados
            </span>
          </div>
          <ul className="grid gap-px overflow-hidden rounded-3xl bg-border/70 md:grid-cols-2">
            {rest.map((p, i) => (
              <li key={p.slug} className="bg-white">
                <Link
                  href={`/blog/${p.slug}`}
                  className="group flex h-full flex-col p-8 transition-colors duration-200 hover:bg-brand-gray/40 sm:p-10"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span
                        className="font-mono text-[11px] tracking-wider text-brand-pink"
                        aria-hidden
                      >
                        0{i + 2}
                      </span>
                      <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
                        {p.category}
                      </span>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-blue" />
                  </div>
                  <h3 className="mt-10 font-display text-2xl font-semibold leading-snug tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                  <div className="mt-auto flex items-center gap-3 pt-10 text-[11px] uppercase tracking-wider text-muted-foreground">
                    <span>{p.readMin} min</span>
                    <span aria-hidden>·</span>
                    <span>{p.date}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
