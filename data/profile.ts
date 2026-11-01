import type {
  Article,
  CaseStudy,
  Certification,
  Education,
  Experience,
  Metric,
  PersonalStack,
  Profile,
  SideProject,
  SkillGroup,
  Social,
} from "../typings";

/**
 * All portfolio content lives here. Every component reads from this file,
 * so updating the site is a matter of editing these objects.
 */

export const profile: Profile = {
  name: "Sunil Belde",
  role: "ML Engineer – GenAI/LLM Automation",
  company: "Capital One",
  location: "Chicago, IL",
  headline:
    "I build production GenAI systems: agents, retrieval and evaluation pipelines that turn plain-English intent into working data engineering.",
  summary: [
    "I design LLM systems that automate enterprise data migration at Capital One, and the evaluation work that proves they hold up in production.",
    "My work spans agentic workflows, retrieval-augmented generation, model benchmarking, AWS deployment and observability. I usually build the first prototype myself, then take it through to a system business teams rely on.",
    "Before GenAI, I spent years on the fundamentals: document intelligence with OCR, NER and computer vision at Dockskiff, large-scale NLP research at the University of Illinois Chicago, and full-stack and DevOps engineering at Acheron. That range shapes how I build: measured, observable, and grounded in real data.",
    "I care most about AI systems that reason with context rather than just generate, and about the evaluation work that proves they do.",
  ],
  email: "sunil.belde102@gmail.com",
  phone: "(945) 244-4371",
  phoneHref: "tel:+19452444371",
  portrait: "/full_profile_pic.jpeg",
};

export const heroMetrics: Metric[] = [
  { value: "70%+", label: "less ETL engineering effort" },
  { value: "5 mo → 4 wk", label: "pipeline delivery time" },
  { value: "75%", label: "source-field recall, mapping agent" },
  { value: "10M+", label: "tweets analyzed in NLP research" },
];

export const caseStudies: CaseStudy[] = [
  {
    id: "etl",
    kicker: "Capital One · GenAI platform",
    title: "GenAI ETL Automation Platform",
    summary:
      "Translates English business rules and metadata into production-ready PySpark and Scala, deployable as AWS Glue jobs, so teams can build ETL workflows without hand-writing code.",
    metric: { value: "5 mo → 4 wk", label: "delivery time, with 70%+ less engineering effort" },
    points: [
      "Two-phase design: Llama 3.3-70B translates pseudocode into code, then a deterministic orchestration engine assembles and executes the pipeline.",
      "Modeled ETL as a Python/NetworkX DAG across Source, Joiner, Filter, Transform, Target, Custom and Distinct components for fault-tolerant, lineage-aware runs.",
      "Agentic RAG with LangChain and SimSearch retrieval, few-shot and Chain-of-Thought prompting, plus automated validation and feedback-driven retry loops.",
      "Led benchmarking of Mixtral, Llama, GPT-OSS 120B and other open models on latency, accuracy, reasoning quality, hallucination rate and cost to choose the production model.",
      "Set throughput, latency and reliability SLAs through load testing with Apache JMeter.",
    ],
    stack: ["Llama 3.3-70B", "LangChain", "RAG", "NetworkX", "PySpark", "Scala", "AWS Glue", "JMeter"],
  },
  {
    id: "mapping",
    kicker: "Capital One · Agentic AI",
    title: "Conversion Mapping Engine",
    summary:
      "A human-in-the-loop assistant that uses ReAct workflows to propose, critique and refine source-to-target mappings for a large data migration, grounded in requirements and historical conversion knowledge.",
    metric: { value: "75%", label: "source-field recall on cross-domain benchmarks" },
    points: [
      "Integrated enterprise MCP tools (Exchange, Glean and Ask-Data) so the agent can discover registered data assets, search enterprise knowledge and query data context.",
      "Evaluated mapping accuracy across structural correctness, source-field selection and transformation conditions.",
      "Ran benchmark evaluations across models, reasoning settings and prompt versions, then fed results back into prompts and configuration.",
    ],
    stack: ["ReAct", "MCP", "Human-in-the-loop", "Benchmarking", "Python"],
  },
  {
    id: "edq",
    kicker: "Capital One · Data quality",
    title: "Enterprise Data Quality (EDQ) Workflow",
    summary:
      "Uses Claude, RAG and Claude Skills to generate data-quality validation rules grounded in conversion requirements, then produces pass/fail reports for human review.",
    metric: { value: "Grounded", label: "rules derived from requirements, not generated in isolation" },
    points: [
      "Generates conversion validation rules with Claude and retrieval over the conversion requirements.",
      "Built with Claude Skills and automation scripts.",
      "Produces pass/fail reports with a human review step.",
    ],
    stack: ["Claude", "Claude Skills", "RAG", "Python"],
  },
];

/** Shared tooling across the Capital One work above. */
export const workStack = [
  "Python",
  "Claude",
  "LangGraph",
  "FastAPI",
  "AWS",
  "W&B Weave",
  "Arize Phoenix",
  "pytest",
  "JMeter",
];

/**
 * Personal agent platform, described by its architecture only.
 * Deliberately says nothing about what it automates.
 */
export const personalStack: PersonalStack = {
  intro:
    "Outside work, I run a small self-hosted agent platform for my own automations. No single task is the point. It's where I work out the patterns that make agents safe to leave running: isolation, independent verification and a human approval step.",
  zones: [
    {
      label: "Edge",
      note: "the only part reachable from the internet",
      nodes: [
        {
          title: "Web research agent",
          detail: "Gathers and checks information in its own browser, then hands results in over HTTPS.",
        },
        {
          title: "Allowlisted gateway",
          detail: "Four public routes behind an API key. Every other path returns 404, whatever the headers say.",
          tags: ["Tailscale Funnel", "API key"],
        },
      ],
    },
    {
      label: "Self-hosted core",
      note: "always-on Mac mini, launchd service",
      nodes: [
        {
          title: "Orchestrator",
          detail: "Async jobs with status polling, safe retries and a crash-safe store.",
          tags: ["FastAPI", "SQLite"],
        },
        {
          title: "Sandboxed workers",
          detail:
            "Claude Code skills run headless, each in a throwaway folder with no web or MCP tools and no credentials.",
          tags: ["Claude Code", "Skills"],
        },
        {
          title: "Independent judge",
          detail: "A second model sees only the evidence, never the untrusted input, and must cite what it relies on.",
        },
        {
          title: "Verification gate",
          detail:
            "Deterministic checks re-run outside the sandbox with their own copy of the rules. Nothing that fails is kept.",
        },
      ],
    },
    {
      label: "Operator",
      note: "local only, never exposed",
      nodes: [
        {
          title: "Review console",
          detail: "A loopback-only dashboard to inspect each run's output, scores and gaps, and to start the next step.",
        },
        {
          title: "Browser agent + custom extension",
          detail: "Claude in Chrome works through a Manifest V3 extension I built, which accepts only real clicks.",
          tags: ["Claude in Chrome", "Chrome MV3"],
        },
        {
          title: "Human approval",
          detail: "Nothing irreversible happens until I approve it. That permission never carries over between runs.",
        },
      ],
    },
  ],
  principles: [
    {
      title: "Treat inputs as untrusted",
      detail: "Anything that comes from the web is data, not instructions. Runs are sandboxed so a prompt injection has nothing to reach.",
    },
    {
      title: "Verify outside the model",
      detail: "LLM output passes through an independent judge and deterministic checks before anything is saved.",
    },
    {
      title: "Bound every run",
      detail: "Time limits and dollar caps on each job, so a runaway agent fails cleanly instead of burning budget.",
    },
    {
      title: "Keep the surface small",
      detail: "Only a few routes are public. Admin tools listen on loopback only, and the extension can't reach other sites.",
    },
    {
      title: "Spec first, then test",
      detail: "Every change starts as an OpenSpec proposal and ships with tests, including end-to-end runs in a real browser.",
    },
  ],
  metrics: [
    { value: "700+", label: "automated tests" },
    { value: "24", label: "spec-driven changes" },
    { value: "4", label: "public routes, all keyed" },
    { value: "0", label: "credentials exposed to agent tools" },
  ],
  stack: [
    "Claude Code",
    "Claude Skills",
    "Claude in Chrome",
    "FastAPI",
    "SQLite",
    "Chrome MV3",
    "Puppeteer",
    "pytest",
    "Tailscale",
    "launchd",
    "OpenSpec",
  ],
};

export const experiences: Experience[] = [
  {
    company: "Capital One",
    logo: "/company_capital_one.png",
    role: "ML Engineer – GenAI/LLM Automation",
    location: "Chicago, IL",
    start: "Jul 2024",
    end: "Present",
    summary:
      "Production GenAI for enterprise data migration and conversion: retrieval, agent workflows, evaluation, AWS deployment and observability.",
    points: [
      "Architected a GenAI ETL platform that turns natural-language mapping instructions into PySpark deployable as AWS Glue jobs, cutting engineering effort by over 70% and delivery time from about 5 months to 4 weeks.",
      "Built a ReAct-based, human-in-the-loop Conversion Mapping Engine with enterprise MCP tools, reaching 75% source-field recall on cross-domain benchmarks.",
      "Developed an enterprise data-quality workflow with Claude Skills that generates validation rules and pass/fail reports for human review.",
      "Led LLM regression testing and benchmarking of open models to select the production model for code generation.",
    ],
    tags: ["LLMs", "Agents", "RAG", "MCP", "Evaluation", "PySpark", "AWS"],
  },
  {
    company: "University of Illinois Chicago",
    logo: "/uic.svg",
    role: "Graduate Research Assistant",
    location: "Chicago, IL",
    start: "Jan 2023",
    end: "May 2024",
    summary: "NLP and network-science research on large-scale social media data.",
    points: [
      "Built end-to-end NLP pipelines with HuggingFace Transformers, spaCy and scikit-learn to analyze political trends across 10M+ tweets; insights contributed to published academic research.",
      "Implemented scraping, text normalization, sentiment analysis, LDA topic modeling and visualization with Pandas, Matplotlib and Seaborn.",
      "Built a social-influence prediction model using graph embeddings (node2vec, DeepWalk) and centrality features to quantify user impact and information diffusion.",
    ],
    tags: ["NLP", "Transformers", "Topic modeling", "Graph embeddings"],
  },
  {
    company: "Dockskiff",
    companyNote: "A Jaggaer company",
    logo: "/company_docskiff.png",
    role: "Machine Learning Engineer",
    location: "Hyderabad, India",
    start: "Jul 2020",
    end: "Jul 2022",
    summary: "Document intelligence for contract analytics: OCR, NER, layout analysis and clause classification.",
    points: [
      "Built document-intelligence pipelines combining NER, OCR and NLP to extract contract metadata with PyTorch, Tesseract and regex post-processing.",
      "Increased classification throughput by 30% with Faster-RCNN segmentation of headers, tables, clause blocks, footers and signature sections.",
      "Developed a Clause Classification Engine using Legal-BERT and FAISS semantic search for compliance validation and risk scoring.",
      "Designed a Prodigy auto-labeling pipeline for NER that cut manual annotation effort by 60%.",
      "Enabled structured ingestion of contract tables into analytics databases, cutting manual entry and review time by 70%.",
    ],
    tags: ["Document AI", "OCR", "Computer vision", "Legal-BERT", "FAISS"],
  },
  {
    company: "Acheron Software Consultancy",
    logo: "/company_acheron.png",
    role: "Associate Software Developer",
    location: "Hyderabad, India",
    start: "Jan 2019",
    end: "Apr 2020",
    summary: "Grew from DevOps intern to full-time engineer across app development, deployment and monitoring.",
    points: [
      "Built an internal TimeSheets app and workflow applications with Spring Boot, Angular 8 and MySQL, delivering secure REST APIs used across project teams.",
      "Automated document-centric approval workflows on OpenText AppWorks BPM for enterprise clients.",
      "Set up a centralized ELK observability stack on GCP and migrated legacy systems to Kubernetes with Helm, cutting infrastructure costs by 15%.",
    ],
    tags: ["Spring Boot", "Angular", "Kubernetes", "ELK", "GCP"],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Agents & LLM applications",
    description: "Multi-step agent systems that take real actions safely.",
    items: [
      "LangGraph",
      "LangChain",
      "LlamaIndex",
      "Claude API & Agent SDK",
      "Model Context Protocol",
      "ReAct",
      "Tool calling",
      "Structured outputs",
      "Multi-agent orchestration",
      "Guardrails",
      "Context engineering",
    ],
  },
  {
    title: "Retrieval & prompting",
    description: "Grounding generation in the right context.",
    items: [
      "RAG",
      "Chunking & embedding selection",
      "Reranking",
      "ChromaDB",
      "FAISS",
      "Few-shot & Chain-of-Thought",
      "Prompt-injection defenses",
    ],
  },
  {
    title: "Evaluation & observability",
    description: "Proving a system works, and noticing when it stops.",
    items: [
      "LLM-as-a-judge",
      "Golden datasets",
      "Model regression benchmarking",
      "W&B Weave",
      "Arize Phoenix",
      "pytest",
      "Apache JMeter",
      "SLA metrics",
    ],
  },
  {
    title: "Models & serving",
    description: "Choosing, tuning and running models in production.",
    items: [
      "Claude",
      "Llama 3.3-70B",
      "Mixtral",
      "GPT-OSS 120B",
      "AWS Bedrock",
      "vLLM",
      "Ollama",
      "Supervised fine-tuning",
      "PyTorch",
      "TensorFlow",
      "HF Transformers",
    ],
  },
  {
    title: "Data engineering",
    description: "Pipelines with lineage, fault tolerance and scale.",
    items: ["PySpark", "Scala", "SQL", "AWS Glue", "Databricks", "Snowflake", "NetworkX DAGs", "ETL design"],
  },
  {
    title: "ML, NLP & vision",
    description: "The fundamentals underneath the LLM layer.",
    items: [
      "NER",
      "BERT / Legal-BERT",
      "Topic modeling",
      "Faster-RCNN",
      "OCR & preprocessing",
      "Graph embeddings",
      "XGBoost",
      "Prodigy",
    ],
  },
  {
    title: "Cloud & software",
    description: "Shipping and operating the systems around the models.",
    items: [
      "Python",
      "Java",
      "TypeScript",
      "FastAPI",
      "Spring Boot",
      "AWS (SageMaker, Lambda, S3)",
      "GCP",
      "Docker",
      "Kubernetes & Helm",
      "CI/CD",
      "ELK",
    ],
  },
  {
    title: "AI-native development",
    description: "Two-plus years of daily work with coding agents.",
    items: [
      "Claude Code",
      "Claude in Chrome",
      "OpenAI Codex",
      "GitHub Copilot",
      "MCP servers",
      "Claude Skills",
      "Spec-driven development",
    ],
  },
];

export const sideProjects: SideProject[] = [
  {
    title: "Political discourse at scale",
    context: "UIC research",
    summary:
      "Sentiment, topic modeling and trend analysis over 10M+ tweets with Transformers, spaCy and LDA, contributing to published research.",
    tags: ["NLP", "Transformers", "LDA"],
  },
  {
    title: "Social influence prediction",
    context: "UIC research",
    summary:
      "Graph embeddings (node2vec, DeepWalk) and centrality features to model user impact and information diffusion across large social networks.",
    tags: ["Graph ML", "node2vec", "Network science"],
  },
  {
    title: "Neural machine translation",
    context: "Open source",
    summary:
      "English-to-Hindi and English-to-Telugu translation with a Bahdanau-attention seq2seq model in TensorFlow. I built the Telugu corpus myself using the Google Translate API.",
    tags: ["Seq2Seq", "Attention", "TensorFlow"],
    code: "https://github.com/sunilbelde/neural-machine-translation-english-to-hindi-telugu",
  },
  {
    title: "Image denoising with DnCNN & RIDNet",
    context: "Open source · Article",
    summary:
      "Implemented DnCNN and RIDNet from their papers, trained on 85K patches from BSDS500, and compared quantized versions. DnCNN lifted a noisy image from 20.5 to 31.2 dB PSNR.",
    tags: ["Computer vision", "Keras", "Quantization"],
    code: "https://github.com/sunilbelde/Imagedenoising-dncnn-ridnet-keras",
    article: "https://medium.com/analytics-vidhya/noise-removal-in-images-using-deep-learning-models-3972544372d2",
  },
  {
    title: "Multi-label classification of harassment reports",
    context: "Open source · Article",
    summary:
      "Classifies personal stories from the SafeCity platform into multiple harassment categories at once, to help surface crime patterns, with a demo web app on top.",
    tags: ["NLP", "Multi-label", "Deployment"],
    code: "https://github.com/sunilbelde/safecity-multilabel-classification",
    article: "https://medium.com/analytics-vidhya/multilabel-classification-of-sexual-harassment-personal-stories-metoo-19443ee0c763",
  },
  {
    title: "Apparel search engine",
    context: "Open source",
    summary:
      "Low-latency product search using Elasticsearch and Universal Sentence Encoder embeddings, run as Docker containers on AWS with images served from S3.",
    tags: ["Search", "Elasticsearch", "Docker", "AWS"],
    code: "https://github.com/sunilbelde/apparel-search-engine-Elasticsearch",
  },
];

export const articles: Article[] = [
  {
    title: "Noise removal in images using deep learning models",
    publication: "Analytics Vidhya",
    date: "Apr 2021",
    url: "https://medium.com/analytics-vidhya/noise-removal-in-images-using-deep-learning-models-3972544372d2",
  },
  {
    title: "Multi-label classification of sexual harassment personal stories",
    publication: "Analytics Vidhya",
    date: "Mar 2021",
    url: "https://medium.com/analytics-vidhya/multilabel-classification-of-sexual-harassment-personal-stories-metoo-19443ee0c763",
  },
];

export const education: Education[] = [
  {
    school: "University of Illinois Chicago",
    degree: "M.S. in Computer Science",
    location: "Chicago, IL",
    period: "2022 – 2024",
  },
  {
    school: "VNR Vignana Jyothi Institute of Engineering & Technology",
    degree: "B.Tech in Electronics & Communication Engineering",
    location: "Hyderabad, India",
    period: "2015 – 2019",
  },
];

export const certifications: Certification[] = [
  { title: "AWS Certified Solutions Architect – Associate", issuer: "Amazon Web Services" },
  { title: "Applied AI – Machine Learning Certification", issuer: "Applied AI · 2020 – 2021" },
  { title: "Building Chatbots with Watson and Python", issuer: "IBM" },
];

export const socials: Social[] = [
  { kind: "github", label: "GitHub", handle: "sunilbelde", url: "https://github.com/sunilbelde" },
  {
    kind: "linkedin",
    label: "LinkedIn",
    handle: "in/sunil-belde",
    url: "https://www.linkedin.com/in/sunil-belde-1b4151129/",
  },
  { kind: "medium", label: "Medium", handle: "@sunil-belde102", url: "https://medium.com/@sunil-belde102" },
];

export const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#builds", label: "Builds" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#background", label: "Projects" },
  { href: "#contact", label: "Contact" },
];
