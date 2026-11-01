import { ArrowRight, MapPin } from "lucide-react";
import { heroMetrics, profile, socials } from "../data/profile";
import SocialIcon from "./SocialIcon";

// Hero uses a CSS-only entrance (animate-rise) so it renders visibly even before JavaScript loads.
export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-page px-4 pb-16 pt-14 sm:px-6 md:pb-24 md:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
          <div>
            <div style={{ animationDelay: "0s" }} className="animate-rise flex flex-wrap items-center gap-2">
              <span className="chip gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                {profile.role} · {profile.company}
              </span>
              <span className="chip gap-1.5">
                <MapPin className="h-3 w-3" aria-hidden="true" />
                {profile.location}
              </span>
            </div>

            <h1 style={{ animationDelay: "0.08s" }} className="animate-rise mt-6 text-5xl font-semibold tracking-tightest sm:text-6xl lg:text-7xl"
            >
              {profile.name}
            </h1>

            <p style={{ animationDelay: "0.16s" }} className="animate-rise mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
              {profile.headline}
            </p>

            <div style={{ animationDelay: "0.24s" }} className="animate-rise mt-8 flex flex-wrap items-center gap-3">
              <a href="#work" className="btn-primary">
                See selected work <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href="#contact" className="btn-ghost">
                Get in touch
              </a>
              <div className="ml-1 flex items-center gap-1">
                {socials.map((s) => (
                  <a
                    key={s.kind}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="grid h-10 w-10 place-items-center rounded-full text-muted transition-colors hover:bg-raised hover:text-ink"
                  >
                    <SocialIcon kind={s.kind} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div
            style={{ animationDelay: "0.1s" }}
            className="animate-rise relative mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-none"
          >
            <div className="absolute -inset-3 rounded-[2rem] bg-accent/10 blur-2xl" aria-hidden="true" />
            <div className="card relative overflow-hidden rounded-[1.75rem] p-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={profile.portrait}
                alt={`Portrait of ${profile.name}`}
                width={768}
                height={1024}
                className="aspect-[4/5] w-full rounded-[1.4rem] object-cover object-[50%_35%]"
              />
            </div>
          </div>
        </div>

        <dl
          style={{ animationDelay: "0.32s" }}
          className="animate-rise mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4"
        >
          {heroMetrics.map((m) => (
            <div key={m.label} className="bg-surface p-5 sm:p-6">
              <dt className="sr-only">{m.label}</dt>
              <dd className="font-mono text-2xl font-medium tracking-tight sm:text-3xl">{m.value}</dd>
              <dd className="mt-1.5 text-sm text-muted">{m.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
