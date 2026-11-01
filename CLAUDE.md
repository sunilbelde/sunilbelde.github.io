# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio for Sunil Belde, built with **Next.js 16** (pages router), **TypeScript** and **Tailwind CSS 3**, statically exported to GitHub Pages. Single page, light/dark themes, no animation library.

## Development Commands

- `npm run dev`: dev server on http://localhost:3000
- `npm run build`: static export to `out/`
- `npm run deploy`: build and publish `out/` to the `gh-pages` branch

## Project Structure

```
pages/
  index.tsx        # Page composition, SEO meta, JSON-LD
  _app.tsx         # Fonts (Inter, JetBrains Mono via next/font)
  _document.tsx    # Pre-paint script: sets `js` class + data-theme (no theme flash)
components/
  Nav.tsx          # Fixed header, section links, mobile menu, ThemeToggle
  Hero.tsx         # Intro, portrait, headline metrics (CSS-only entrance)
  About.tsx        # Summary paragraphs
  Work.tsx         # Capital One case studies
  Builds.tsx       # Personal agent platform: architecture diagram + principles (never name what it automates)
  Experience.tsx   # Job history
  Skills.tsx       # Grouped capabilities
  Background.tsx   # Research/projects, education, certifications
  Contact.tsx      # Email (mailto + copy), phone, social links
  Footer.tsx
  Section.tsx      # Shared numbered section header
  Reveal.tsx       # IntersectionObserver scroll reveal
  SocialIcon.tsx   # Inline GitHub/LinkedIn/Medium SVGs
  ThemeToggle.tsx
data/profile.ts    # ALL site content
typings.d.ts       # Content types
styles/globals.css # Color tokens + component classes
```

## Updating Content

All copy lives in `data/profile.ts` (`profile`, `heroMetrics`, `caseStudies`, `workStack`, `personalStack`, `experiences`, `skillGroups`, `sideProjects`, `education`, `certifications`, `socials`, `navLinks`). Components only render it. Company logos are referenced by path from `public/`.

Source of truth for career facts is `../job-hunt-hq/data/` (BASE.tex resume and PROFILE.md). Only use professional facts from there: never publish visa status, EEO answers, compensation, job-search activity or anything else from the application-answers sections.

## Styling

- Colors are RGB-channel CSS variables in `styles/globals.css` (`--bg`, `--surface`, `--raised`, `--line`, `--ink`, `--muted`, `--faint`, `--accent`), exposed as Tailwind colors (`bg-surface`, `text-muted`, `bg-accent/10`, ...). Change the palette there, for both `[data-theme="light"]` and `[data-theme="dark"]` (and the `prefers-color-scheme` fallback).
- Theme: `_document.tsx` applies saved preference or system setting before paint; `ThemeToggle` flips `data-theme` and saves to localStorage.
- Reusable classes: `.eyebrow`, `.chip`, `.btn-primary`, `.btn-ghost`, `.card`, `.grid-bg`.
- Motion: hero uses the `animate-rise` keyframe; other sections wrap content in `<Reveal>`. Content is only hidden pre-reveal when the `js` class is present, and all motion is disabled under `prefers-reduced-motion`.

## Deployment

### GitHub Pages Configuration

The site is configured for GitHub Pages deployment:

- Static export enabled in `next.config.js`
- Deploy script uses `gh-pages` package
- Output directory: `out/`
- `.nojekyll` file prevents Jekyll processing

### Environment Setup

- No environment variables required
- All content is statically generated
- Images served from `/public` directory

## Browser Support

- Modern browsers with ES6+ support
- CSS Grid and Flexbox
- Tailwind CSS compatibility

## TypeScript

- Strict type checking enabled
- All components fully typed
- Type definitions in `typings.d.ts`
- No `any` types used
- `npx tsc --noEmit` should pass before deploying
