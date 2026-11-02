import { caseStudies, workStack } from "../data/profile";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Work() {
  return (
    <Section
      id="work"
      index="01"
      eyebrow="Selected work"
      title="Production GenAI at *Capital One*"
      intro="Three systems I've built for enterprise data migration and conversion, from first prototype to production. Each one pairs LLM reasoning with deterministic checks and human review."
    >
      <div className="border-t border-ink/15">
        {caseStudies.map((cs, i) => (
          <Reveal key={cs.id} delay={i * 0.04}>
            <article className="group relative grid gap-8 border-b border-ink/15 py-10 md:grid-cols-12 md:gap-8 md:py-14">
              <span
                className="absolute left-0 top-[-1px] h-px w-0 bg-accent transition-[width] duration-700 ease-out group-hover:w-full"
                aria-hidden="true"
              />
              <div className="md:sticky md:top-24 md:col-span-5 md:self-start">
                <div className="flex items-baseline gap-4">
                  <span className="display text-6xl italic leading-none text-accent/90 sm:text-7xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="eyebrow">{cs.kicker}</p>
                </div>
                <h3 className="display mt-6 text-3xl leading-tight sm:text-4xl">{cs.title}</h3>
                <div className="mt-8 border-l-2 border-accent pl-4">
                  <p className="display text-4xl leading-none sm:text-5xl">{cs.metric.value}</p>
                  <p className="mt-2 max-w-xs font-mono text-xs leading-relaxed text-muted">{cs.metric.label}</p>
                </div>
              </div>

              <div className="md:col-span-7 md:pt-2">
                <p className="text-lg leading-relaxed text-ink/90">{cs.summary}</p>
                {cs.points.length > 0 && (
                  <ol className="mt-7 space-y-3.5">
                    {cs.points.map((pt, j) => (
                      <li key={pt} className="grid grid-cols-[1.75rem_minmax(0,1fr)] text-[0.95rem] leading-relaxed text-muted">
                        <span className="pt-[0.2rem] font-mono text-[0.68rem] text-faint">{String.fromCharCode(97 + j)}.</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ol>
                )}

                {cs.groups && (
                  <div className="mt-8 border-t border-dashed border-ink/15">
                    {cs.groups.map((g) => (
                      <section key={g.label} className="grid gap-3 border-b border-dashed border-ink/15 py-5 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-6">
                        <h4 className="flex items-center gap-2 self-start font-mono text-[0.68rem] uppercase tracking-[0.14em] text-faint sm:pt-1">
                          {g.live && (
                            <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
                              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                            </span>
                          )}
                          <span className={g.live ? "text-accent" : ""}>{g.label}</span>
                        </h4>
                        <ul className="space-y-2.5">
                          {g.points.map((pt) => (
                            <li key={pt} className="grid grid-cols-[1.25rem_minmax(0,1fr)] text-[0.95rem] leading-relaxed text-muted">
                              <span className="text-accent" aria-hidden="true">
                                –
                              </span>
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </section>
                    ))}
                  </div>
                )}

                {cs.related && (
                  <p className="mt-6 flex items-start gap-2 font-mono text-[0.72rem] leading-relaxed text-ink">
                    <span className="text-accent" aria-hidden="true">
                      ⟶
                    </span>
                    {cs.related}
                  </p>
                )}
                <p className="mt-7 font-mono text-[0.72rem] leading-relaxed text-faint" aria-label="Technologies">
                  {cs.stack.map((t, k) => (
                    <span key={t}>
                      {k > 0 && <span className="mx-1.5 text-ink/25">/</span>}
                      <span className="text-muted">{t}</span>
                    </span>
                  ))}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-8 flex flex-col gap-2 font-mono text-xs sm:flex-row sm:items-center sm:gap-4">
        <p className="eyebrow shrink-0">Shared stack →</p>
        <p className="text-muted">{workStack.join("  ·  ")}</p>
      </Reveal>
    </Section>
  );
}
