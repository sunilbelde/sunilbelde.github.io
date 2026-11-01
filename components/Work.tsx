import { caseStudies, workStack } from "../data/profile";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Work() {
  return (
    <Section
      id="work"
      index="01"
      eyebrow="Selected work"
      title="Production GenAI at Capital One"
      intro="Three systems I've built for enterprise data migration and conversion, from first prototype to production. Each one pairs LLM reasoning with deterministic checks and human review."
    >
      <div className="space-y-6">
        {caseStudies.map((cs, i) => (
          <Reveal key={cs.id} delay={i * 0.05}>
            <article className="card grid overflow-hidden lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)]">
              <div className="flex flex-col justify-between gap-8 border-b border-line bg-raised/50 p-6 sm:p-8 lg:border-b-0 lg:border-r">
                <div>
                  <p className="eyebrow">{cs.kicker}</p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight">{cs.title}</h3>
                </div>
                <div>
                  <p className="font-mono text-4xl font-medium tracking-tight text-accent sm:text-5xl">
                    {cs.metric.value}
                  </p>
                  <p className="mt-2 max-w-xs text-sm text-muted">{cs.metric.label}</p>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <p className="text-base leading-relaxed text-ink/90 md:text-lg">{cs.summary}</p>
                <ul className="mt-6 space-y-3">
                  {cs.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-sm leading-relaxed text-muted sm:text-[0.95rem]">
                      <span className="mt-2 h-1 w-3 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
                  {cs.stack.map((t) => (
                    <li key={t} className="chip font-mono">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <p className="eyebrow shrink-0">Shared stack</p>
        <p className="text-sm text-muted">{workStack.join(" · ")}</p>
      </Reveal>
    </Section>
  );
}
