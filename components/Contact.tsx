import { ArrowUpRight, Check, Copy, Mail, Phone } from "lucide-react";
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
    <section id="contact" className="border-t border-line">
      <div className="mx-auto max-w-page px-4 py-20 sm:px-6 md:py-28">
        <Reveal className="card relative overflow-hidden p-8 sm:p-12 md:p-16">
          <div className="grid-bg pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
          <div className="relative">
            <p className="eyebrow">
              <span className="text-accent">06</span> / Contact
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tightest sm:text-5xl md:text-6xl">
              Let&apos;s build something that reasons.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              I&apos;m always glad to talk about agentic systems, LLM evaluation, or hard data problems. Email is the
              fastest way to reach me.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href={`mailto:${profile.email}`} className="btn-primary">
                <Mail className="h-4 w-4" aria-hidden="true" />
                {profile.email}
              </a>
              <button type="button" onClick={copyEmail} className="btn-ghost" aria-live="polite">
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-accent" aria-hidden="true" /> Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" aria-hidden="true" /> Copy email
                  </>
                )}
              </button>
              <a href={profile.phoneHref} className="btn-ghost">
                <Phone className="h-4 w-4" aria-hidden="true" />
                {profile.phone}
              </a>
            </div>

            <ul className="mt-10 grid gap-3 sm:grid-cols-3">
              {socials.map((s) => (
                <li key={s.kind}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between rounded-xl border border-line bg-bg/60 px-4 py-3.5 transition-colors hover:border-ink/30"
                  >
                    <span className="flex items-center gap-3">
                      <SocialIcon kind={s.kind} className="h-5 w-5 text-muted group-hover:text-ink" />
                      <span>
                        <span className="block text-sm font-medium">{s.label}</span>
                        <span className="block font-mono text-xs text-faint">{s.handle}</span>
                      </span>
                    </span>
                    <ArrowUpRight
                      className="h-4 w-4 text-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
