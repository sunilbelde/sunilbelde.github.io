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

export default function Section({ id, index, eyebrow, title, intro, children }: Props) {
  return (
    <section id={id} className="border-t border-line">
      <div className="mx-auto max-w-page px-4 py-20 sm:px-6 md:py-28">
        <Reveal className="mb-12 grid gap-4 md:mb-16 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:gap-12">
          <div>
            <p className="eyebrow">
              <span className="text-accent">{index}</span> / {eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
          </div>
          {intro && <p className="self-end text-base leading-relaxed text-muted md:text-lg">{intro}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
