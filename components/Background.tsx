import { Award, GraduationCap } from "lucide-react";
import { certifications, education, sideProjects } from "../data/profile";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Background() {
  return (
    <Section
      id="background"
      index="05"
      eyebrow="Background"
      title="Research, projects & education"
      intro="The ML groundwork behind the GenAI work: research at UIC, and projects across NLP, graphs and vision."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {sideProjects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 0.05}>
            <article className="card h-full p-6 transition-colors hover:border-ink/25">
              <p className="eyebrow">{p.context}</p>
              <h3 className="mt-2 text-lg font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.summary}</p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <li key={t} className="rounded-md bg-raised px-2 py-1 text-xs text-muted">
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-12 grid gap-10 md:grid-cols-2">
        <Reveal>
          <h3 className="flex items-center gap-2 font-semibold">
            <GraduationCap className="h-4 w-4 text-accent" aria-hidden="true" /> Education
          </h3>
          <ul className="mt-4 divide-y divide-line border-y border-line">
            {education.map((e) => (
              <li key={e.school} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <div>
                  <p className="font-medium">{e.degree}</p>
                  <p className="text-sm text-muted">
                    {e.school} · {e.location}
                  </p>
                </div>
                <p className="shrink-0 font-mono text-xs text-faint">{e.period}</p>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.05}>
          <h3 className="flex items-center gap-2 font-semibold">
            <Award className="h-4 w-4 text-accent" aria-hidden="true" /> Certifications
          </h3>
          <ul className="mt-4 divide-y divide-line border-y border-line">
            {certifications.map((c) => (
              <li key={c.title} className="py-4">
                <p className="font-medium">{c.title}</p>
                <p className="text-sm text-muted">{c.issuer}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
