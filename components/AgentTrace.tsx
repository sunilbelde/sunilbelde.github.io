import { useEffect, useState } from "react";

/*
 * Illustrative two-phase run of the work behind the case studies:
 *   01 Conversion Mapping Engine: a ReAct agent with MCP tools drafts a source-to-target mapping,
 *      critiques it, and an analyst approves it. The approved mapping becomes the intent.
 *   02 ETL generation: the intent becomes PySpark, checked deterministically, staged for sign-off.
 */

type Tone = "ok" | "err" | "accent";
type Line = { step: string; text: string; tone?: Tone; ms?: string };
type NodeState = "idle" | "active" | "done" | "fail";
type GraphNode = { id: string; label: string; x: number; y: number; failLabel?: string; okLabel?: string };
type Edge = { d: string; at: number; loop?: boolean };
type Phase = {
  key: string;
  title: string;
  lines: Line[];
  nodes: GraphNode[];
  edges: Edge[];
  /** Node state after `n` log lines. */
  state: (id: string, n: number) => NodeState;
  /** Validation-style nodes that show their okLabel once this many lines have run. */
  passedAt: Record<string, number>;
  notes: { text: string; x: number; y: number; from: number; to: number; anchor?: "start" | "middle" | "end" }[];
  stamp: { lines: [string, string]; x: number; y: number };
};

const W = 76;
const H = 28;

// Activates a node on its listed steps, then marks it done.
const at =
  (table: Record<string, { active: number[]; fail?: number[] }>) =>
  (id: string, n: number): NodeState => {
    const t = table[id];
    if (!t) return "idle";
    if (t.fail?.includes(n)) return "fail";
    if (t.active.includes(n)) return "active";
    return n > Math.min(...t.active) ? "done" : "idle";
  };

const MAPPING: Phase = {
  key: "map",
  title: "conversion mapping · human-in-the-loop",
  lines: [
    { step: "require", text: "legacy.accounts → target.account", tone: "accent" },
    { step: "thought", text: "need the meaning of status_cd" },
    { step: "catalog", text: "find(\"legacy.accounts\") → 42 fields", ms: "0.3s" },
    { step: "search", text: "\"account status conversion\" → spec", ms: "0.5s" },
    { step: "query", text: "distinct status_cd → A, C, D", ms: "1.2s" },
    { step: "propose", text: "account.status ← status_cd · C → closed", ms: "2.4s" },
    { step: "critique", text: "✗ code D (dormant) unmapped → refine", tone: "err" },
    { step: "analyst", text: "✓ mapping approved → handed off as intent", tone: "ok" },
  ],
  nodes: [
    { id: "catalog", label: "catalog", x: 8, y: 8 },
    { id: "search", label: "search", x: 112, y: 8 },
    { id: "query", label: "query", x: 216, y: 8 },
    { id: "req", label: "require", x: 8, y: 76 },
    { id: "agent", label: "react agent", x: 112, y: 76 },
    { id: "map", label: "mapping", x: 216, y: 76, failLabel: "✗ mapping", okLabel: "✓ mapping" },
    { id: "human", label: "analyst", x: 216, y: 140 },
  ],
  edges: [
    { d: "M84 90 H112", at: 2 },
    { d: "M140 76 V57 H46 V36", at: 3 },
    { d: "M150 76 V36", at: 4 },
    { d: "M160 76 V57 H254 V36", at: 5 },
    { d: "M188 90 H216", at: 6 },
    { d: "M232 104 C232 130 150 130 150 104", at: 7, loop: true },
    { d: "M270 104 V140", at: 8 },
    { d: "M254 168 V182", at: 8 },
  ],
  state: at({
    req: { active: [1] },
    agent: { active: [2, 7] },
    catalog: { active: [3] },
    search: { active: [4] },
    query: { active: [5] },
    map: { active: [6, 8], fail: [7] },
    human: { active: [8] },
  }),
  passedAt: { map: 8 },
  notes: [
    { text: "mcp tools", x: 207, y: 53, from: 3, to: 5, anchor: "middle" },
    { text: "↺ critique · refine", x: 191, y: 136, from: 7, to: 8, anchor: "middle" },
    { text: "intent ⟶ etl", x: 248, y: 180, from: 8, to: 8, anchor: "end" },
  ],
  stamp: { lines: ["mapping", "approved"], x: 108, y: 156 },
};

const ETL: Phase = {
  key: "etl",
  title: "etl generation · llm + checks",
  lines: [
    { step: "intent", text: "approved mapping: join txns, drop closed + dormant, dedupe", tone: "accent" },
    { step: "plan", text: "Source → Joiner → Filter → Distinct → Target", ms: "0.4s" },
    { step: "retrieve", text: "6 similar pipelines · vector top-k", ms: "0.2s" },
    { step: "generate", text: "pyspark · open llm", ms: "3.1s" },
    { step: "validate", text: "✗ txn_dt is string, target expects date", tone: "err" },
    { step: "retry", text: "regenerate with schema context", ms: "2.7s" },
    { step: "validate", text: "✓ schema  ✓ types  ✓ lineage", tone: "ok" },
    { step: "review", text: "glue job staged · awaiting human approval", tone: "accent" },
  ],
  nodes: [
    { id: "intent", label: "intent", x: 8, y: 14 },
    { id: "plan", label: "plan", x: 112, y: 14 },
    { id: "retrieve", label: "retrieve", x: 216, y: 14 },
    { id: "generate", label: "generate", x: 8, y: 104 },
    { id: "validate", label: "validate", x: 112, y: 104, failLabel: "✗ validate", okLabel: "✓ validate" },
    { id: "review", label: "review", x: 216, y: 104 },
  ],
  edges: [
    { d: "M84 28 H112", at: 2 },
    { d: "M188 28 H216", at: 3 },
    { d: "M254 42 V73 H46 V104", at: 4 },
    { d: "M84 118 H112", at: 5 },
    { d: "M150 132 C150 172 46 172 46 132", at: 6, loop: true },
    { d: "M188 118 H216", at: 8 },
  ],
  state: at({
    intent: { active: [1] },
    plan: { active: [2] },
    retrieve: { active: [3] },
    generate: { active: [4, 6] },
    validate: { active: [7], fail: [5, 6] },
    review: { active: [8] },
  }),
  passedAt: { validate: 7 },
  notes: [
    { text: "txn_dt: string ≠ date", x: 150, y: 99, from: 5, to: 6, anchor: "middle" },
    { text: "↺ retry · +schema", x: 98, y: 179, from: 6, to: 8 },
  ],
  stamp: { lines: ["awaiting", "human sign-off"], x: 254, y: 160 },
};

const PHASES = [MAPPING, ETL];
const STEP_MS = 750;
const HANDOFF_MS = 2200;
const HOLD_MS = 4200;

/** Drives the run. Starts on the completed mapping phase so SSR / no-JS shows a finished picture. */
function useRun() {
  const [phase, setPhase] = useState(0);
  const [shown, setShown] = useState(MAPPING.lines.length);
  const [run, setRun] = useState(7);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let p = 0;
    let n = 0;
    let timer: number;
    const tick = () => {
      n += 1;
      setShown(n);
      if (n < PHASES[p].lines.length) {
        timer = window.setTimeout(tick, STEP_MS);
        return;
      }
      const last = p === PHASES.length - 1;
      timer = window.setTimeout(
        () => {
          p = last ? 0 : p + 1;
          n = 0;
          setPhase(p);
          setShown(0);
          if (last) setRun((r) => r + 1);
          timer = window.setTimeout(tick, STEP_MS);
        },
        last ? HOLD_MS : HANDOFF_MS
      );
    };
    setShown(0);
    timer = window.setTimeout(tick, 600);
    return () => window.clearTimeout(timer);
  }, []);

  return { phase, shown, run };
}

function LogView({ ph, shown }: { ph: Phase; shown: number }) {
  return (
    <ol className="space-y-1.5 px-4 pb-4 pt-2 font-mono text-[0.72rem] leading-relaxed sm:text-xs" aria-label={`Illustrative ${ph.title} run`}>
      {ph.lines.map((l, i) => (
        <li
          key={`${ph.key}-${i}`}
          className={`grid grid-cols-[4.75rem_minmax(0,1fr)_auto] gap-2 transition-opacity duration-300 ${
            i < shown ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="text-faint">{l.step}</span>
          <span className={l.tone === "err" ? "text-accent" : l.tone ? "text-ink" : "text-muted"}>
            {l.text}
            {i === shown - 1 && <span className="caret" aria-hidden="true" />}
          </span>
          <span className="text-faint">{l.ms ?? ""}</span>
        </li>
      ))}
    </ol>
  );
}

const boxClass: Record<NodeState, string> = {
  idle: "fill-bg stroke-ink/15",
  active: "fill-accent/10 stroke-accent",
  done: "fill-surface stroke-ink/50",
  fail: "fill-accent/15 stroke-accent",
};
const textClass: Record<NodeState, string> = {
  idle: "fill-faint",
  active: "fill-ink",
  done: "fill-ink",
  fail: "fill-accent",
};

function GraphView({ ph, shown }: { ph: Phase; shown: number }) {
  const current = ph.lines[Math.max(0, shown - 1)];
  const finished = shown >= ph.lines.length;

  return (
    <div className="px-4 pb-3 pt-2">
      <svg
        key={ph.key}
        viewBox="0 0 300 182"
        className="w-full overflow-visible font-mono"
        role="img"
        aria-label={`Illustrative ${ph.title} run as a graph`}
      >
        {ph.edges.map((e, i) => {
          const on = shown >= e.at;
          return (
            <g key={i}>
              <path d={e.d} className="fill-none stroke-ink/10" strokeWidth={1} />
              <path
                d={e.d}
                pathLength={1}
                strokeDasharray="1"
                strokeDashoffset={on ? 0 : 1}
                className={`fill-none transition-[stroke-dashoffset] duration-700 ease-out ${e.loop ? "stroke-accent" : "stroke-ink/60"}`}
                strokeWidth={1}
              />
              {shown === e.at && <path d={e.d} className="flow fill-none stroke-accent" strokeWidth={1.5} strokeDasharray="3 5" />}
            </g>
          );
        })}

        {ph.nodes.map((nd) => {
          const st = ph.state(nd.id, shown);
          const passed = ph.passedAt[nd.id] !== undefined && shown >= ph.passedAt[nd.id];
          const label = st === "fail" ? nd.failLabel ?? nd.label : passed ? nd.okLabel ?? nd.label : nd.label;
          return (
            <g key={nd.id}>
              {st === "active" && (
                <rect x={nd.x - 3} y={nd.y - 3} width={W + 6} height={H + 6} className="pulse-ring fill-none stroke-accent/50" />
              )}
              <rect x={nd.x} y={nd.y} width={W} height={H} className={`transition-colors duration-300 ${boxClass[st]}`} strokeWidth={1} />
              <text
                x={nd.x + W / 2}
                y={nd.y + H / 2 + 3}
                textAnchor="middle"
                className={`text-[8.5px] uppercase tracking-[0.06em] transition-colors duration-300 ${textClass[st]}`}
              >
                {label}
              </text>
            </g>
          );
        })}

        {ph.notes.map((nt) => (
          <text
            key={nt.text}
            x={nt.x}
            y={nt.y}
            textAnchor={nt.anchor ?? "start"}
            className={`fill-accent text-[7.5px] transition-opacity duration-300 ${
              shown >= nt.from && shown <= nt.to ? "opacity-100" : "opacity-0"
            }`}
          >
            {nt.text}
          </text>
        ))}

        <g className={`stamp ${finished ? "stamp-in" : ""}`} style={{ transformOrigin: `${ph.stamp.x}px ${ph.stamp.y}px`, transformBox: "view-box" }}>
          <rect x={ph.stamp.x - 51} y={ph.stamp.y - 14} width="102" height="28" className="fill-bg/85 stroke-accent" strokeWidth={1.25} />
          <rect x={ph.stamp.x - 48} y={ph.stamp.y - 11} width="96" height="22" className="fill-none stroke-accent" strokeWidth={0.5} />
          {ph.stamp.lines.map((t, i) => (
            <text
              key={t}
              x={ph.stamp.x}
              y={ph.stamp.y - 1 + i * 9}
              textAnchor="middle"
              className="fill-accent text-[7px] font-semibold uppercase tracking-[0.18em]"
            >
              {t}
            </text>
          ))}
        </g>
      </svg>

      <p className="mt-2 flex min-h-[2.5rem] items-start gap-2 border-t border-dashed border-ink/15 pt-2.5 font-mono text-[0.7rem] leading-relaxed">
        <span className="shrink-0 text-accent">›</span>
        <span className="shrink-0 text-faint">{shown > 0 ? current.step : "idle"}</span>
        <span className={current.tone === "err" && shown > 0 ? "text-accent" : "text-muted"}>
          {shown > 0 ? current.text : "waiting"}
          <span className="caret" aria-hidden="true" />
        </span>
      </p>
    </div>
  );
}

export default function AgentTrace() {
  const { phase, shown, run } = useRun();
  const [view, setView] = useState<"graph" | "log">("graph");
  const ph = PHASES[phase];
  const done = phase === PHASES.length - 1 && shown >= ph.lines.length;

  return (
    <div className="crop-marks">
    <figure className="ink-panel border border-ink/15 bg-surface shadow-[0_24px_60px_-28px_rgba(20,16,10,0.55)]">
      <div className="flex items-center justify-between gap-3 border-b border-ink/10 px-4 py-2">
        <p className="flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-faint">
          <span className={`h-1.5 w-1.5 rounded-full ${done ? "bg-accent" : "animate-pulse bg-ink/50"}`} aria-hidden="true" />
          agent.run <span className="text-muted">#{String(run).padStart(3, "0")}</span>
        </p>
        <div className="flex border border-ink/15 font-mono text-[0.62rem] uppercase tracking-[0.12em]" role="group" aria-label="Trace view">
          {(["graph", "log"] as const).map((v) => (
            <button
              key={v}
              type="button"
              aria-pressed={view === v}
              onClick={() => setView(v)}
              className={`px-2 py-0.5 transition-colors ${view === v ? "bg-ink text-bg" : "text-faint hover:text-ink"}`}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      {/* Phase rail: mapping hands its approved output to ETL as the intent. */}
      <div className="flex items-center gap-2 px-4 pt-3 font-mono text-[0.62rem] uppercase tracking-[0.12em]">
        {PHASES.map((p, i) => (
          <span key={p.key} className="flex items-center gap-2 whitespace-nowrap">
            {i > 0 && <span className={`h-px w-5 ${phase >= i ? "bg-accent" : "bg-ink/20"}`} aria-hidden="true" />}
            <span className={phase === i ? "text-ink" : phase > i ? "text-muted" : "text-faint"}>
              <span className={phase === i ? "text-accent" : ""}>{String(i + 1).padStart(2, "0")}</span> {p.key === "map" ? "mapping" : "etl"}
            </span>
          </span>
        ))}
        <span className="ml-auto hidden whitespace-nowrap normal-case tracking-normal text-faint sm:inline">{ph.title.split(" · ")[1]}</span>
      </div>

      <div className="min-h-[17rem]">{view === "graph" ? <GraphView ph={ph} shown={shown} /> : <LogView ph={ph} shown={shown} />}</div>
      <figcaption className="border-t border-ink/10 px-4 py-2 font-mono text-[0.65rem] text-faint">
        fig. 02 — an analyst and an agent agree the mapping; that becomes the intent the ETL agent builds from
      </figcaption>
    </figure>
    </div>
  );
}
