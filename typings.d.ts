export interface Profile {
  name: string;
  role: string;
  company: string;
  location: string;
  headline: string;
  summary: string[];
  email: string;
  phone: string;
  phoneHref: string;
  portrait: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface PointGroup {
  label: string;
  points: string[];
  /** Work in progress; rendered with a live marker. */
  live?: boolean;
}

export interface CaseStudy {
  id: string;
  title: string;
  kicker: string;
  summary: string;
  metric: Metric;
  points: string[];
  /** Optional labelled sections for a fuller write-up, rendered after `points`. */
  groups?: PointGroup[];
  /** One line on how this system connects to another case study. */
  related?: string;
  stack: string[];
}

export interface Experience {
  company: string;
  companyNote?: string;
  logo?: string;
  role: string;
  location: string;
  start: string;
  end: string;
  summary: string;
  points: string[];
  tags: string[];
}

export interface SkillGroup {
  title: string;
  description: string;
  items: string[];
}

export interface SideProject {
  title: string;
  context: string;
  summary: string;
  tags: string[];
  code?: string;
  article?: string;
}

export interface Article {
  title: string;
  publication: string;
  date: string;
  url: string;
}

export interface Education {
  school: string;
  degree: string;
  location: string;
  period: string;
}

export interface Certification {
  title: string;
  issuer: string;
}

export type SocialKind = "github" | "linkedin" | "medium";

export interface Social {
  kind: SocialKind;
  label: string;
  handle: string;
  url: string;
}


export interface ArchNode {
  title: string;
  detail: string;
  tags?: string[];
}

export interface ArchZone {
  label: string;
  note: string;
  nodes: ArchNode[];
}

export interface Principle {
  title: string;
  detail: string;
}

export interface PersonalStack {
  intro: string;
  zones: ArchZone[];
  principles: Principle[];
  metrics: Metric[];
  stack: string[];
}
