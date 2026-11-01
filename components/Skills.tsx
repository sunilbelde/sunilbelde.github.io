import { skillGroups } from "../data/profile";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Skills() {
  return (
    <Section
      id="skills"
      index="04"
      eyebrow="Capabilities"
      title="What I work with"
      intro="Grouped by the part of the system they serve. Agents and evaluation are where I spend most of my time today."
    >
      <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} delay={(i % 4) * 0.04} className="bg-surface p-6">
            <p className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</p>
            <h3 className="mt-3 font-semibold tracking-tight">{g.title}</h3>
            <p className="mt-1 text-sm text-faint">{g.description}</p>
            <ul className="mt-5 flex flex-wrap gap-1.5">
              {g.items.map((item) => (
                <li key={item} className="rounded-md bg-raised px-2 py-1 text-xs text-muted">
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
