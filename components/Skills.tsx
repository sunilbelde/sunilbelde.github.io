import { skillGroups } from "../data/profile";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Skills() {
  return (
    <Section
      id="skills"
      index="04"
      eyebrow="Capabilities"
      title="What I *work with*"
      intro="Grouped by the part of the system they serve. Agents and evaluation are where I spend most of my time today."
    >
      <div className="grid border-t border-ink/15 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((g, i) => (
          <Reveal
            key={g.title}
            delay={(i % 4) * 0.04}
            className={`border-b border-ink/15 py-8 ${i % 2 === 0 ? "sm:pr-6" : "sm:border-l sm:px-6"} ${
              i % 4 === 0 ? "lg:border-l-0 lg:pl-0 lg:pr-6" : "lg:border-l lg:px-6"
            }`}
          >
            <p className="display text-3xl italic leading-none text-accent">{String(i + 1).padStart(2, "0")}</p>
            <h3 className="display mt-4 text-2xl leading-tight">{g.title}</h3>
            <p className="mt-1 text-sm text-faint">{g.description}</p>
            <ul className="mt-5 space-y-1.5 font-mono text-[0.75rem] text-muted">
              {g.items.map((item) => (
                <li key={item} className="flex items-baseline gap-2">
                  <span className="h-px w-2 shrink-0 translate-y-[-0.2rem] bg-ink/30" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
