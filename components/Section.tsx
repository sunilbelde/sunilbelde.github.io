import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Props = {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
};

/** Renders a title, setting any *starred* phrase in italic accent, editorial style. */
export function Headline({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*[^*]+\*)/).map((part, i) =>
        part.startsWith("*") ? (
          <em key={i} className="italic text-accent">
            {part.slice(1, -1)}
          </em>
        ) : (
          part
        )
      )}
    </>
  );
}

export default function Section({ id, index, eyebrow, title, intro, children }: Props) {
  return (
    <section id={id} className="relative">
      <div className="mx-auto max-w-page px-4 py-20 sm:px-6 md:py-28">
        <Reveal>
          <div className="flex items-center gap-4 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-faint">
            <span className="text-accent">§{index}</span>
            <span>{eyebrow}</span>
            <span className="h-px flex-1 bg-ink/15" aria-hidden="true" />
            <span className="hidden sm:inline">{index} / 06</span>
          </div>
          <div className="mb-12 mt-8 grid gap-6 md:mb-16 md:grid-cols-12 md:gap-8">
            <h2 className="display text-5xl leading-[0.95] sm:text-6xl md:col-span-7 lg:text-7xl">
              <Headline text={title} />
            </h2>
            {intro && (
              <p className="self-end text-base leading-relaxed text-muted md:col-span-5 md:text-[1.05rem]">{intro}</p>
            )}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
