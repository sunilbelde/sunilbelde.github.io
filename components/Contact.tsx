import { ArrowUpRight, Check, Copy, Phone } from "lucide-react";
import { useState } from "react";
import { profile, socials } from "../data/profile";
import Reveal from "./Reveal";
import SocialIcon from "./SocialIcon";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" className="band relative overflow-hidden bg-ink text-bg">
      <div className="mx-auto max-w-page px-4 py-20 sm:px-6 md:py-32">
        <Reveal>
          <div className="flex items-center gap-4 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-bg/50">
            <span className="text-accent">§06</span>
            <span>Contact</span>
            <span className="h-px flex-1 bg-bg/20" aria-hidden="true" />
            <span className="hidden sm:inline">06 / 06</span>
          </div>

          <h2 className="display mt-10 max-w-5xl text-[clamp(3rem,9vw,7.5rem)] leading-[0.92]">
            Let&apos;s build something that <em className="italic text-accent">reasons.</em>
          </h2>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-bg/65 md:text-lg">
            I&apos;m always glad to talk about agentic systems, LLM evaluation, or hard data problems. Email is the
            fastest way to reach me.
          </p>

          <div className="mt-12 border-y border-bg/20 py-6">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-bg/50">Write to</p>
            <div className="mt-3 flex flex-wrap items-end justify-between gap-6">
              <a
                href={`mailto:${profile.email}`}
                className="group display break-all text-[clamp(1.6rem,5vw,3.75rem)] leading-none transition-colors hover:text-accent"
              >
                <span className="link-underline">{profile.email}</span>
                <ArrowUpRight
                  className="ml-2 inline h-[0.7em] w-[0.7em] align-baseline transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={copyEmail}
                  className="btn border border-bg/25 text-bg hover:border-bg"
                  aria-live="polite"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-accent" aria-hidden="true" /> Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" aria-hidden="true" /> Copy
                    </>
                  )}
                </button>
                <a href={profile.phoneHref} className="btn border border-bg/25 text-bg hover:border-bg">
                  <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                  {profile.phone}
                </a>
              </div>
            </div>
          </div>

          <ul className="grid sm:grid-cols-3">
            {socials.map((s, i) => (
              <li key={s.kind} className={`border-b border-bg/20 ${i > 0 ? "sm:border-l sm:pl-6" : ""}`}>
                <a href={s.url} target="_blank" rel="noreferrer" className="group flex items-center justify-between py-5 pr-4">
                  <span className="flex items-center gap-3">
                    <SocialIcon kind={s.kind} className="h-4 w-4 text-bg/60 transition-colors group-hover:text-accent" />
                    <span>
                      <span className="block text-sm">{s.label}</span>
                      <span className="block font-mono text-[0.7rem] text-bg/50">{s.handle}</span>
                    </span>
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 text-bg/40 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
