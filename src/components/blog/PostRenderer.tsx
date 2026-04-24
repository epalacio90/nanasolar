import { Quote } from "lucide-react";
import type { ContentBlock } from "@/lib/blog";

export function PostRenderer({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="prose-custom">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "p": {
            const isLead = i === 0;
            return (
              <p
                key={i}
                className={
                  isLead
                    ? "first-letter:float-left first-letter:mr-2 first-letter:font-display first-letter:text-[4rem] first-letter:font-semibold first-letter:leading-[0.85] first-letter:text-brand-blue text-[19px] leading-relaxed text-foreground/85"
                    : "text-[17px] leading-[1.75] text-foreground/80"
                }
              >
                {b.text}
              </p>
            );
          }
          case "h2":
            return (
              <h2
                key={i}
                id={b.id}
                className="mt-14 scroll-mt-28 font-display text-[1.75rem] font-semibold leading-tight tracking-tight text-foreground sm:text-[2rem]"
              >
                {b.text}
              </h2>
            );
          case "h3":
            return (
              <h3
                key={i}
                id={b.id}
                className="mt-10 scroll-mt-28 font-display text-xl font-semibold tracking-tight text-foreground"
              >
                {b.text}
              </h3>
            );
          case "ul":
            return (
              <ul key={i} className="mt-2 space-y-2.5">
                {b.items.map((it, j) => (
                  <li
                    key={j}
                    className="flex gap-3 text-[17px] leading-relaxed text-foreground/80"
                  >
                    <span
                      aria-hidden
                      className="mt-[0.65rem] h-1.5 w-1.5 flex-none rounded-full bg-brand-pink"
                    />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            );
          case "callout": {
            const color = b.variant ?? "default";
            return (
              <aside
                key={i}
                className={
                  color === "pink"
                    ? "my-8 rounded-2xl border-l-4 border-brand-pink bg-brand-pink/5 p-6 text-foreground/90"
                    : color === "blue"
                    ? "my-8 rounded-2xl border-l-4 border-brand-blue bg-brand-blue/5 p-6 text-foreground/90"
                    : "my-8 rounded-2xl border-l-4 border-foreground/20 bg-foreground/5 p-6 text-foreground/90"
                }
              >
                <p className="text-[17px] leading-relaxed">{b.text}</p>
              </aside>
            );
          }
          case "quote":
            return (
              <figure key={i} className="my-10">
                <Quote
                  aria-hidden
                  className="h-6 w-6 text-brand-pink"
                />
                <blockquote className="mt-3 font-display text-2xl font-medium leading-snug tracking-tight text-foreground sm:text-3xl">
                  “{b.text}”
                </blockquote>
              </figure>
            );
          case "stat-grid":
            return (
              <div
                key={i}
                className="my-6 grid gap-px overflow-hidden rounded-2xl bg-border/70 sm:grid-cols-2"
              >
                {b.items.map((s, j) => (
                  <div
                    key={j}
                    className="flex items-baseline justify-between bg-white p-5"
                  >
                    <span className="text-sm text-muted-foreground">
                      {s.label}
                    </span>
                    <span className="font-display text-xl font-semibold tabular-nums text-brand-blue">
                      {s.value}
                    </span>
                  </div>
                ))}
              </div>
            );
          case "table":
            return (
              <div
                key={i}
                className="my-6 overflow-hidden rounded-2xl border border-border"
              >
                <table className="w-full text-left text-[15px]">
                  <thead className="bg-brand-gray/50 font-display">
                    <tr>
                      {b.headers.map((h, j) => (
                        <th
                          key={j}
                          className="px-5 py-3 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {b.rows.map((r, j) => (
                      <tr key={j} className="bg-white">
                        {r.map((c, k) => (
                          <td
                            key={k}
                            className="px-5 py-3 font-medium tabular-nums text-foreground"
                          >
                            {c}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
        }
      })}
    </div>
  );
}
