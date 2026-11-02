import { ArrowUp } from "lucide-react";
import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="band bg-ink text-bg">
      <div className="mx-auto max-w-page px-4 pb-8 sm:px-6">
        <div
          className="display select-none overflow-hidden whitespace-nowrap text-[clamp(4rem,19vw,16rem)] leading-[0.8] text-bg/[0.07]"
          aria-hidden="true"
        >
          Sunil <em className="italic">Belde</em>
        </div>
        <div className="mt-6 flex flex-col items-start justify-between gap-4 border-t border-bg/20 pt-6 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-bg/50 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {profile.name} · {profile.location}
          </p>
          <p className="normal-case tracking-normal">Set in Instrument Serif, Geist &amp; Geist Mono. Built with Next.js.</p>
          <a href="#top" className="inline-flex items-center gap-1.5 hover:text-accent">
            Back to top <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
