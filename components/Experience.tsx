import { experiences } from "../data/profile";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Experience() {
  return (
    <Section
      id="experience"
      index="03"
      eyebrow="Experience"
      title="Four teams since 2019"
      intro="From full-stack and DevOps, through document intelligence and NLP research, to production LLM systems."
    >
      <div className="space-y-4">
        {experiences.map((exp, i) => (
          <Reveal key={exp.company} delay={i * 0.04}>
            <article className="card grid gap-6 p-6 sm:p-8 md:grid-cols-[13rem_minmax(0,1fr)] md:gap-10">
              <div className="flex items-start gap-4 md:flex-col md:gap-5">
                <div className="grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-xl border border-line bg-white p-1.5">
                  {exp.logo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={exp.logo} alt="" className="h-full w-full object-contain" loading="lazy" />
                  ) : (
                    <span className="font-mono text-sm text-neutral-700">{exp.company[0]}</span>
                  )}
                </div>
                <div>
                  <p className="font-mono text-xs text-faint">
                    {exp.start} — {exp.end}
                  </p>
                  <p className="mt-1 text-sm text-muted">{exp.location}</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold tracking-tight">
                  {exp.role}
                  <span className="text-muted"> · {exp.company}</span>
                </h3>
                {exp.companyNote && <p className="mt-0.5 text-sm text-faint">{exp.companyNote}</p>}
                <p className="mt-3 text-base leading-relaxed text-ink/90">{exp.summary}</p>
                <ul className="mt-5 space-y-2.5">
                  {exp.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-sm leading-relaxed text-muted sm:text-[0.95rem]">
                      <span className="mt-[0.6rem] h-1 w-1 shrink-0 rounded-full bg-faint" aria-hidden="true" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Focus areas">
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
