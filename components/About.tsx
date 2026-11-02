import { profile } from "../data/profile";
import Reveal from "./Reveal";

export default function About() {
  const [lead, ...rest] = profile.summary;
  return (
    <section id="about" className="relative">
      <div className="mx-auto max-w-page px-4 py-20 sm:px-6 md:py-28">
        <Reveal>
          <div className="flex items-center gap-4 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-faint">
            <span className="text-accent">§00</span>
            <span>About</span>
            <span className="h-px flex-1 bg-ink/15" aria-hidden="true" />
          </div>
        </Reveal>
        <div className="mt-10 grid gap-10 md:grid-cols-12 md:gap-8">
          <Reveal className="md:col-span-8">
            <p className="display text-[2rem] leading-[1.12] sm:text-5xl sm:leading-[1.08]">
              <span className="float-left mr-3 mt-1 font-serif text-[4.6rem] italic leading-[0.8] text-accent sm:text-[6.5rem]" aria-hidden="true">
                {lead[0]}
              </span>
              <span className="sr-only">{lead[0]}</span>
              {lead.slice(1)}
            </p>
          </Reveal>
          <Reveal delay={0.08} className="space-y-5 md:col-span-4 md:pt-2">
            {rest.map((p, i) => (
              <p key={p.slice(0, 24)} className="text-[0.95rem] leading-relaxed text-muted">
                <span className="mr-2 font-mono text-[0.65rem] text-faint">{String.fromCharCode(97 + i)}.</span>
                {p}
              </p>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
