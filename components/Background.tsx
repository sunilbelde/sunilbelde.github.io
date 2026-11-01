import { ArrowUpRight, Award, GraduationCap, PenLine } from "lucide-react";
import { articles, certifications, education, sideProjects } from "../data/profile";
import Reveal from "./Reveal";
import Section from "./Section";
import SocialIcon from "./SocialIcon";

const linkClass =
  "inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-xs font-medium text-muted transition-colors hover:border-ink/40 hover:text-ink";

export default function Background() {
  return (
    <Section
      id="background"
      index="05"
      eyebrow="Projects"
      title="Research, projects & writing"
      intro="The ML groundwork behind the GenAI work: research at UIC, open-source projects across NLP, vision and search, and articles on how I built them."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sideProjects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) * 0.05}>
            <article className="card flex h-full flex-col p-6 transition-colors hover:border-ink/25">
              <p className="eyebrow">{p.context}</p>
              <h3 className="mt-2 text-lg font-semibold leading-snug tracking-tight">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.summary}</p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <li key={t} className="rounded-md bg-raised px-2 py-1 text-xs text-muted">
                    {t}
                  </li>
                ))}
              </ul>
              {(p.code || p.article) && (
                <div className="mt-auto flex flex-wrap gap-2 pt-5">
                  {p.code && (
                    <a href={p.code} target="_blank" rel="noreferrer" className={linkClass}>
                      <SocialIcon kind="github" className="h-3.5 w-3.5" />
                      Code
                      <span className="sr-only"> for {p.title} on GitHub</span>
                    </a>
                  )}
                  {p.article && (
                    <a href={p.article} target="_blank" rel="noreferrer" className={linkClass}>
                      <PenLine className="h-3.5 w-3.5" aria-hidden="true" />
                      Article
                      <span className="sr-only"> about {p.title} on Medium</span>
                    </a>
                  )}
                </div>
              )}
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        <Reveal>
          <h3 className="flex items-center gap-2 font-semibold">
            <PenLine className="h-4 w-4 text-accent" aria-hidden="true" /> Writing
          </h3>
          <ul className="mt-4 divide-y divide-line border-y border-line">
            {articles.map((a) => (
              <li key={a.url}>
                <a href={a.url} target="_blank" rel="noreferrer" className="group flex items-start justify-between gap-4 py-4">
                  <span>
                    <span className="block font-medium leading-snug group-hover:text-accent">{a.title}</span>
                    <span className="mt-1 block text-sm text-muted">
                      {a.publication} · {a.date}
                    </span>
                  </span>
                  <ArrowUpRight
                    className="mt-1 h-4 w-4 shrink-0 text-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.05}>
          <h3 className="flex items-center gap-2 font-semibold">
            <GraduationCap className="h-4 w-4 text-accent" aria-hidden="true" /> Education
          </h3>
          <ul className="mt-4 divide-y divide-line border-y border-line">
            {education.map((e) => (
              <li key={e.school} className="py-4">
                <p className="font-medium">{e.degree}</p>
                <p className="text-sm text-muted">{e.school}</p>
                <p className="mt-1 font-mono text-xs text-faint">
                  {e.location} · {e.period}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
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
