import { profile } from "../data/profile";
import Reveal from "./Reveal";

export default function About() {
  const [lead, ...rest] = profile.summary;
  return (
    <section id="about" className="border-t border-line">
      <div className="mx-auto grid max-w-page gap-8 px-4 py-20 sm:px-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:gap-12 md:py-28">
        <Reveal>
          <p className="eyebrow">
            <span className="text-accent">00</span> / About
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="text-2xl font-medium leading-snug tracking-tight sm:text-3xl">{lead}</p>
          {rest.map((p) => (
            <p key={p.slice(0, 24)} className="mt-6 text-base leading-relaxed text-muted md:text-lg">
              {p}
            </p>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
