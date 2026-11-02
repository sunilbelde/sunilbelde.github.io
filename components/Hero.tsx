import { ArrowDownRight } from "lucide-react";
import { useEffect, useState } from "react";
import { heroMetrics, profile, socials } from "../data/profile";
import AgentTrace from "./AgentTrace";
import SocialIcon from "./SocialIcon";

function ChicagoTime() {
  const [time, setTime] = useState<string | null>(null);
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/Chicago",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    const update = () => setTime(fmt.format(new Date()));
    update();
    const id = window.setInterval(update, 15000);
    return () => window.clearInterval(id);
  }, []);
  return <span suppressHydrationWarning>{time ? `${time} CT` : "CT"}</span>;
}

// Hero uses a CSS-only entrance (animate-rise) so it renders visibly even before JavaScript loads.
export default function Hero() {
  const [first, ...rest] = profile.name.split(" ");
  const last = rest.join(" ");

  return (
    <section id="top" className="relative overflow-hidden pt-16">
      <div className="pointer-events-none absolute inset-0 mx-auto max-w-page px-4 sm:px-6" aria-hidden="true">
        <div className="column-guides h-full w-full" />
      </div>

      <div className="relative mx-auto max-w-page px-4 pb-14 pt-8 sm:px-6 md:pb-20 md:pt-10">
        {/* Masthead strip */}
        <div
          style={{ animationDelay: "0s" }}
          className="animate-rise flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-y border-ink/15 py-2.5 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted"
        >
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            {profile.role}
          </span>
          <span className="hidden sm:inline">{profile.company}</span>
          <span>
            {profile.location} · <ChicagoTime />
          </span>
        </div>

        <h1
          style={{ animationDelay: "0.06s" }}
          className="animate-rise display mt-8 text-[clamp(4.25rem,15vw,13.5rem)] leading-[0.82] md:mt-10"
        >
          {first}
          <br className="sm:hidden" />
          <span className="sm:ml-[0.18em] italic text-accent">{last}</span>
          <span className="text-accent">.</span>
        </h1>

        <div className="mt-10 grid gap-10 md:mt-14 lg:grid-cols-12 lg:gap-8">
          <div style={{ animationDelay: "0.14s" }} className="animate-rise lg:col-span-5">
            <p className="eyebrow">
              <span className="text-accent">§</span> Abstract
            </p>
            <p className="mt-3 text-xl leading-snug tracking-tight sm:text-2xl">{profile.headline}</p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#work" className="btn-primary">
                Selected work <ArrowDownRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
              <a href="#contact" className="btn-ghost">
                Get in touch
              </a>
            </div>
            <ul className="mt-6 flex items-center gap-5">
              {socials.map((s) => (
                <li key={s.kind}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 font-mono text-xs text-muted transition-colors hover:text-ink"
                  >
                    <SocialIcon kind={s.kind} className="h-3.5 w-3.5" />
                    <span className="link-underline">{s.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <figure
            style={{ animationDelay: "0.2s" }}
            className="animate-rise mx-auto w-full max-w-[18rem] lg:col-span-3 lg:max-w-none"
          >
            <div className="crop-marks group relative overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={profile.portrait}
                alt={`Portrait of ${profile.name}`}
                width={768}
                height={1024}
                className="aspect-[4/5] w-full object-cover object-[50%_35%] grayscale contrast-[1.08] transition-[filter] duration-700 group-hover:grayscale-0"
              />
              <div className="pointer-events-none absolute inset-0 bg-accent/20 mix-blend-multiply transition-opacity duration-700 group-hover:opacity-0" aria-hidden="true" />
            </div>
            <figcaption className="mt-3 flex justify-between font-mono text-[0.65rem] text-faint">
              <span>fig. 01 — the author</span>
              <span>CHI, IL</span>
            </figcaption>
          </figure>

          <div style={{ animationDelay: "0.28s" }} className="animate-rise lg:col-span-4">
            <AgentTrace />
          </div>
        </div>

        <dl
          style={{ animationDelay: "0.36s" }}
          className="animate-rise mt-16 grid grid-cols-2 gap-px border-y border-ink/15 bg-ink/15 md:mt-20 md:grid-cols-4"
        >
          {heroMetrics.map((m, i) => (
            <div key={m.label} className="bg-bg px-4 py-5 first:pl-0 md:px-6 md:py-6">
              <dt className="sr-only">{m.label}</dt>
              <dd className="font-mono text-[0.65rem] text-faint">{String(i + 1).padStart(2, "0")}</dd>
              <dd className="display mt-2 whitespace-nowrap text-[1.85rem] leading-none sm:text-5xl">{m.value}</dd>
              <dd className="mt-2 text-sm text-muted">{m.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
