import { experiences } from "../data/profile";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Experience() {
  return (
    <Section
      id="experience"
      index="03"
      eyebrow="Experience"
      title="Four teams *since 2019*"
      intro="From full-stack and DevOps, through document intelligence and NLP research, to production LLM systems."
    >
      <div className="relative">
        {/* Timeline spine */}
        <span className="absolute bottom-2 left-[5px] top-2 w-px bg-ink/15 md:left-[calc(25%+5px)]" aria-hidden="true" />
        {experiences.map((exp, i) => (
          <Reveal key={exp.company} delay={i * 0.04}>
            <article
              className={`relative grid gap-4 pl-8 md:grid-cols-12 md:gap-8 md:pl-0 ${
                i === experiences.length - 1 ? "" : "pb-14"
              }`}
            >
              <span
                className={`absolute left-0 top-2 h-[11px] w-[11px] rounded-full border-2 md:left-[25%] ${
                  i === 0 ? "border-accent bg-accent" : "border-ink/40 bg-bg"
                }`}
                aria-hidden="true"
              />
              <div className="md:col-span-3 md:pr-8 md:text-right">
                <p className="font-mono text-xs text-ink">
                  {exp.start} — <span className={i === 0 ? "text-accent" : ""}>{exp.end}</span>
                </p>
                <p className="mt-1 font-mono text-[0.7rem] text-faint">{exp.location}</p>
                <div className="mt-4 hidden h-10 w-10 place-items-center overflow-hidden border border-line bg-white p-1.5 md:ml-auto md:grid">
                  {exp.logo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={exp.logo} alt="" className="h-full w-full object-contain" loading="lazy" />
                  ) : (
                    <span className="font-mono text-sm text-neutral-700">{exp.company[0]}</span>
                  )}
                </div>
              </div>

              <div className="md:col-span-9 md:pl-8">
                <h3 className="display text-3xl leading-tight sm:text-4xl">
                  {exp.role}
                  <span className="italic text-muted"> at {exp.company}</span>
                </h3>
                {exp.companyNote && <p className="mt-1 font-mono text-[0.7rem] text-faint">{exp.companyNote}</p>}
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink/90">{exp.summary}</p>
                <ul className="mt-5 max-w-3xl space-y-2.5">
                  {exp.points.map((pt) => (
                    <li key={pt} className="grid grid-cols-[1.25rem_minmax(0,1fr)] text-[0.95rem] leading-relaxed text-muted">
                      <span className="text-accent" aria-hidden="true">
                        –
                      </span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
                <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Focus areas">
                  {exp.tags.map((t) => (
                    <li key={t} className="chip">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
