import { ArrowDown, ArrowRight, Globe, Server, UserCheck } from "lucide-react";
import type { ArchNode, ArchZone } from "../typings";
import { personalStack as ps } from "../data/profile";
import Reveal from "./Reveal";
import Section from "./Section";

const zoneIcons = [Globe, Server, UserCheck];

function Node({ node, n }: { node: ArchNode; n: number }) {
  return (
    <div className="relative rounded-xl border border-line bg-surface p-4">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md bg-raised font-mono text-[10px] text-muted">
          {n}
        </span>
        <div className="min-w-0">
          <p className="text-sm font-medium leading-snug">{node.title}</p>
          <p className="mt-1 text-[0.8rem] leading-relaxed text-muted">{node.detail}</p>
          {node.tags && (
            <ul className="mt-2.5 flex flex-wrap gap-1">
              {node.tags.map((t) => (
                <li key={t} className="rounded bg-raised px-1.5 py-0.5 font-mono text-[10px] text-faint">
                  {t}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

function Zone({ zone, index, start }: { zone: ArchZone; index: number; start: number }) {
  const Icon = zoneIcons[index] ?? Server;
  const core = index === 1;
  return (
    <div
      className={`flex h-full flex-col rounded-2xl border p-4 sm:p-5 ${
        core ? "border-accent/40 bg-accent/[0.05]" : "border-dashed border-line bg-bg/40"
      }`}
    >
      <div className="mb-4 flex items-center gap-2">
        <Icon className={`h-4 w-4 ${core ? "text-accent" : "text-faint"}`} aria-hidden="true" />
        <p className="font-mono text-xs uppercase tracking-[0.14em]">{zone.label}</p>
      </div>
      <p className="-mt-3 mb-4 pl-6 text-xs text-faint">{zone.note}</p>
      <div className={`grid flex-1 content-start gap-3 ${core ? "sm:grid-cols-2" : ""}`}>
        {zone.nodes.map((node, i) => (
          <Node key={node.title} node={node} n={start + i} />
        ))}
      </div>
    </div>
  );
}

function Connector() {
  return (
    <div className="flex items-center justify-center py-1 text-faint lg:px-1 lg:py-0" aria-hidden="true">
      <ArrowDown className="h-4 w-4 lg:hidden" />
      <ArrowRight className="hidden h-4 w-4 lg:block" />
    </div>
  );
}

export default function Builds() {
  const [edge, core, operator] = ps.zones;
  const starts = [1, 1 + edge.nodes.length, 1 + edge.nodes.length + core.nodes.length];

  return (
    <Section
      id="builds"
      index="02"
      eyebrow="How I build"
      title="A personal agent platform"
      intro={ps.intro}
    >
      <Reveal>
        <figure className="card overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line px-5 py-3.5 sm:px-6">
            <p className="eyebrow">Architecture</p>
            <p className="font-mono text-xs text-faint">numbers trace one request through the system</p>
          </div>
          <div className="grid-bg-soft p-4 sm:p-6">
            <div className="grid items-stretch lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,2fr)_auto_minmax(0,1fr)]">
              <Zone zone={edge} index={0} start={starts[0]} />
              <Connector />
              <Zone zone={core} index={1} start={starts[1]} />
              <Connector />
              <Zone zone={operator} index={2} start={starts[2]} />
            </div>
          </div>
          <figcaption className="sr-only">
            Architecture: an edge zone (web research agent, allowlisted gateway) feeds a self-hosted core
            (orchestrator, sandboxed Claude Code workers, independent judge, verification gate), which feeds a
            local operator zone (review console, browser agent with a custom extension, human approval).
          </figcaption>
        </figure>
      </Reveal>

      <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)]">
        <Reveal className="card p-6 sm:p-8">
          <h3 className="font-semibold">Principles I build agents by</h3>
          <ol className="mt-5 grid gap-x-8 gap-y-5 sm:grid-cols-2">
            {ps.principles.map((p, i) => (
              <li key={p.title} className="flex gap-3">
                <span className="font-mono text-xs leading-6 text-accent">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <p className="text-sm font-medium">{p.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{p.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={0.05} className="flex flex-col gap-6">
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line">
            {ps.metrics.map((m) => (
              <div key={m.label} className="bg-surface p-5">
                <dt className="sr-only">{m.label}</dt>
                <dd className="font-mono text-2xl font-medium tracking-tight">{m.value}</dd>
                <dd className="mt-1 text-xs leading-snug text-muted">{m.label}</dd>
              </div>
            ))}
          </dl>
          <ul className="flex flex-wrap gap-2" aria-label="Technologies">
            {ps.stack.map((t) => (
              <li key={t} className="chip font-mono">
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
