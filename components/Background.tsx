import { ArrowUpRight, Award, GraduationCap, PenLine } from "lucide-react";
import { articles, certifications, education, sideProjects } from "../data/profile";
import Reveal from "./Reveal";
import Section from "./Section";
import SocialIcon from "./SocialIcon";

const linkClass =
  "inline-flex items-center gap-1.5 border border-ink/20 px-2.5 py-1 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-muted transition-colors hover:border-accent hover:bg-accent hover:text-accent-ink";

export default function Background() {
  return (
    <Section
      id="background"
      index="05"
      eyebrow="Projects"
      title="Research, projects *& writing*"
      intro="The ML groundwork behind the GenAI work: research at UIC, open-source projects across NLP, vision and search, and articles on how I built them."
    >
      <div className="border-t border-ink/15">
        {sideProjects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) * 0.03}>
            <article className="group grid gap-3 border-b border-ink/15 py-7 transition-colors hover:bg-ink/[0.025] md:grid-cols-12 md:gap-8">
              <p className="font-mono text-xs text-faint md:col-span-1 md:pt-2">
                <span className="text-accent">{String(i + 1).padStart(2, "0")}</span>
              </p>
              <div className="md:col-span-4">
                <h3 className="display text-2xl leading-tight sm:text-[1.7rem]">{p.title}</h3>
                <p className="eyebrow mt-2">{p.context}</p>
              </div>
              <div className="md:col-span-5">
                <p className="text-[0.95rem] leading-relaxed text-muted">{p.summary}</p>
                <p className="mt-3 font-mono text-[0.7rem] text-faint">{p.tags.join("  /  ")}</p>
              </div>
              <div className="flex flex-wrap gap-2 md:col-span-2 md:flex-col md:items-end md:pt-1">
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
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        <Reveal>
          <h3 className="display flex items-center gap-2 text-2xl">
            <PenLine className="h-4 w-4 text-accent" aria-hidden="true" /> Writing
          </h3>
          <ul className="mt-4 divide-y divide-ink/15 border-y border-ink/15">
            {articles.map((a) => (
              <li key={a.url}>
                <a href={a.url} target="_blank" rel="noreferrer" className="group flex items-start justify-between gap-4 py-4">
                  <span>
                    <span className="block font-medium leading-snug transition-colors group-hover:text-accent">{a.title}</span>
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
          <h3 className="display flex items-center gap-2 text-2xl">
            <GraduationCap className="h-4 w-4 text-accent" aria-hidden="true" /> Education
          </h3>
          <ul className="mt-4 divide-y divide-ink/15 border-y border-ink/15">
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
          <h3 className="display flex items-center gap-2 text-2xl">
            <Award className="h-4 w-4 text-accent" aria-hidden="true" /> Certifications
          </h3>
          <ul className="mt-4 divide-y divide-ink/15 border-y border-ink/15">
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
