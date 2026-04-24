import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PostRenderer } from "@/components/blog/PostRenderer";
import { getPost, getRelated, posts, toc } from "@/lib/blog";
import { site, whatsappLink } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const url = `${site.url}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.description,
      publishedTime: post.dateISO,
      authors: [site.legalName],
      section: post.category,
      locale: site.locale,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const sections = toc(post);
  const related = getRelated(post.slug, 2);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.dateISO,
    dateModified: post.dateISO,
    inLanguage: "es-MX",
    author: {
      "@type": "Organization",
      name: site.legalName,
      url: site.url,
    },
    publisher: {
      "@type": "Organization",
      name: site.legalName,
      logo: {
        "@type": "ImageObject",
        url: `${site.url}/logos/nanasolar-blue.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${site.url}/blog/${post.slug}`,
    },
    articleSection: post.category,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: site.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${site.url}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${site.url}/blog/${post.slug}`,
      },
    ],
  };

  return (
    <>
      {/* Hero */}
      <article className="bg-white">
        <header className="relative overflow-hidden border-b border-border">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.5] [background-image:radial-gradient(rgba(0,64,193,0.08)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:linear-gradient(to_bottom,black,transparent)]"
          />
          <div className="relative mx-auto max-w-4xl px-4 pb-12 pt-10 sm:px-6 sm:pt-14 lg:px-8">
            <nav
              aria-label="breadcrumb"
              className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground"
            >
              <ol className="flex items-center gap-2">
                <li>
                  <Link href="/" className="hover:text-foreground">
                    Inicio
                  </Link>
                </li>
                <li aria-hidden>·</li>
                <li>
                  <Link href="/blog" className="hover:text-foreground">
                    Blog
                  </Link>
                </li>
                <li aria-hidden>·</li>
                <li className="truncate text-foreground">{post.category}</li>
              </ol>
            </nav>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span
                className={
                  post.categoryColor === "pink"
                    ? "inline-flex items-center gap-2 rounded-full bg-brand-pink/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.15em] text-brand-pink ring-1 ring-brand-pink/20"
                    : "inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.15em] text-brand-blue ring-1 ring-brand-blue/20"
                }
              >
                {post.category}
              </span>
              <span className="inline-flex items-center gap-1.5 text-[12px] text-muted-foreground">
                <Clock className="h-3.5 w-3.5" aria-hidden />
                {post.readMin} min de lectura
              </span>
              <span className="text-[12px] text-muted-foreground">·</span>
              <time
                className="text-[12px] text-muted-foreground"
                dateTime={post.dateISO}
              >
                {post.date}
              </time>
            </div>

            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-5xl md:text-[3.5rem]">
              {post.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              {post.description}
            </p>
          </div>
        </header>

        {/* Body */}
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-[1fr_220px] md:gap-16 md:py-20 lg:px-8">
          <div className="min-w-0 max-w-2xl">
            <PostRenderer blocks={post.blocks} />

            {/* Inline CTA */}
            <div className="mt-14 overflow-hidden rounded-3xl bg-brand-blue p-8 text-white sm:p-10">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-brand-pink">
                    ¿Listo para cotizar?
                  </p>
                  <p className="mt-3 font-display text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                    Envíanos tu recibo de CFE.
                    <span className="block text-white/70">
                      Análisis técnico sin costo.
                    </span>
                  </p>
                </div>
                <Button
                  render={<Link href="/#cotiza" />}
                  size="lg"
                  className="h-12 shrink-0 rounded-full bg-brand-pink px-6 text-base hover:bg-brand-pink/90"
                >
                  Analiza mi recibo
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="order-first md:order-last md:sticky md:top-28 md:self-start">
            {sections.length > 0 && (
              <div className="rounded-2xl border border-border bg-white p-5">
                <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
                  En este artículo
                </p>
                <ol className="mt-4 space-y-2.5 border-l border-border pl-4">
                  {sections.map((s, i) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="block text-[13px] leading-snug text-foreground/75 hover:text-brand-blue"
                      >
                        <span className="mr-2 font-mono text-[10px] text-brand-pink">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {s.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            <div className="mt-5 rounded-2xl bg-brand-gray/50 p-5">
              <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
                ¿Prefieres hablar?
              </p>
              <p className="mt-2 text-sm text-foreground/80">
                Escríbenos directo por WhatsApp y adjunta tu recibo.
              </p>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue hover:underline"
              >
                Abrir WhatsApp →
              </a>
            </div>
          </aside>
        </div>
      </article>

      {/* Related */}
      {related.length > 0 && (
        <section className="border-t border-border bg-[#fafaf9] py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between">
              <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                Sigue leyendo
              </h2>
              <Link
                href="/blog"
                className="text-sm font-medium text-brand-blue hover:underline"
              >
                Ver todos →
              </Link>
            </div>
            <ul className="mt-10 grid gap-px overflow-hidden rounded-3xl bg-border/70 md:grid-cols-2">
              {related.map((p) => (
                <li key={p.slug} className="bg-white">
                  <Link
                    href={`/blog/${p.slug}`}
                    className="group flex h-full flex-col p-8 transition-colors duration-200 hover:bg-brand-gray/40 sm:p-10"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-brand-pink">
                        {p.category}
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-blue" />
                    </div>
                    <h3 className="mt-6 font-display text-xl font-semibold leading-snug tracking-tight">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                      {p.description}
                    </p>
                    <span className="mt-auto pt-8 text-[11px] uppercase tracking-wider text-muted-foreground">
                      {p.readMin} min de lectura
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <Script
        id={`schema-article-${post.slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(articleSchema)}
      </Script>
      <Script
        id={`schema-breadcrumb-${post.slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(breadcrumbSchema)}
      </Script>
    </>
  );
}
