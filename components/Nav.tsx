import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { navLinks } from "../data/profile";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 8);
        const max = document.documentElement.scrollHeight - window.innerHeight;
        if (progressRef.current) {
          progressRef.current.style.transform = `scaleX(${max > 0 ? Math.min(y / max, 1) : 0})`;
        }
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Highlight the section currently in the middle of the viewport.
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const sections = navLinks
      .map((l) => document.querySelector<HTMLElement>(l.href))
      .filter((el): el is HTMLElement => el !== null);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "border-b border-ink/10 bg-bg/85 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-page items-center justify-between px-4 sm:px-6" aria-label="Main">
        <a href="#top" className="group flex items-baseline gap-2">
          <span className="display text-2xl leading-none">
            S<em className="italic text-accent">B</em>
          </span>
          <span className="hidden font-mono text-[0.68rem] uppercase tracking-[0.16em] text-faint transition-colors group-hover:text-ink sm:inline">
            Field notes
          </span>
        </a>

        <div className="flex items-center gap-1 sm:gap-2">
          <ul className="mr-3 hidden items-center md:flex">
            {navLinks.map((link, i) => {
              const isActive = active === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? "location" : undefined}
                    className={`group relative flex items-baseline gap-1 px-3 py-2 font-mono text-[0.7rem] uppercase tracking-[0.12em] transition-colors ${
                      isActive ? "text-ink" : "text-muted hover:text-ink"
                    }`}
                  >
                    <span className={isActive ? "text-accent" : "text-faint"}>{String(i + 1).padStart(2, "0")}</span>
                    {link.label}
                    <span
                      className={`absolute inset-x-3 bottom-0.5 h-px origin-left bg-accent transition-transform duration-300 ${
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                      aria-hidden="true"
                    />
                  </a>
                </li>
              );
            })}
          </ul>
          <ThemeToggle />
          <button
            type="button"
            className="grid h-9 w-9 place-items-center border border-ink/20 text-muted md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <div
        ref={progressRef}
        className="absolute bottom-[-1px] left-0 h-px w-full origin-left scale-x-0 bg-accent"
        aria-hidden="true"
      />

      {open && (
        <ul id="mobile-menu" className="mx-auto max-w-page border-t border-ink/10 px-4 pb-4 pt-2 sm:px-6 md:hidden">
          {navLinks.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-3 border-b border-ink/10 py-3.5 text-muted hover:text-ink"
              >
                <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
                <span className="display text-2xl text-ink">{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
