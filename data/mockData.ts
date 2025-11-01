import { PageInfo, Experience, Skill, Project, Social, Technology } from "../typings";

export const mockPageInfo: PageInfo = {
  _createdAt: new Date().toISOString(),
  _id: "pageInfo1",
  _rev: "1",
  _updatedAt: new Date().toISOString(),
  _type: "pageInfo",
  address: "Chicago, IL",
  backgroundInformation: `
I’m an ML Engineer 🤖 driven by curiosity for how intelligence can be systematized — from algorithms to automation. My work sits at the intersection of Generative AI 🧠, large language models, and data engineering ⚙️, where I design frameworks that help machines understand human intent and translate it into action.

I love building AI systems that don’t just process data but reason with it — combining retrieval, prompting, and evaluation to make workflows adaptive and self-improving. My interests span code generation, multi-agent orchestration, and the broader challenge of making machine learning infrastructure more explainable and efficient ☁️.

To me, building AI isn’t just about automation; it’s about alignment, accessibility, and the art of simplifying complexity ✨.
`,

  email: "sunil.belde102@gmail.com",
  role: "ML Engineer - GenAI/LLM Automation",
  heroImage: {
    _type: "image",
    asset: {
      _ref: "image-hero",
      _type: "reference"
    }
  },
  name: "Sunil Belde",
  phoneNumber: "(945) 244-4371",
  profilePic: {
    _type: "image",
    asset: {
      _ref: "image-profile",
      _type: "reference"
    }
  }
};

export const mockTechnologies: Technology[] = [
  {
    _createdAt: new Date().toISOString(),
    _id: "tech1",
    _rev: "1",
    _updatedAt: new Date().toISOString(),
    _type: "technology",
    image: {
      _type: "image",
      asset: {
        _ref: "tech-python",
        _type: "reference"
      }
    },
    progress: 95,
    title: "Python"
  },
  {
    _createdAt: new Date().toISOString(),
    _id: "tech2",
    _rev: "1",
    _updatedAt: new Date().toISOString(),
    _type: "technology",
    image: {
      _type: "image",
      asset: {
        _ref: "tech-pytorch",
        _type: "reference"
      }
    },
    progress: 90,
    title: "PyTorch"
  },
  {
    _createdAt: new Date().toISOString(),
    _id: "tech3",
    _rev: "1",
    _updatedAt: new Date().toISOString(),
    _type: "technology",
    image: {
      _type: "image",
      asset: {
        _ref: "tech-tensorflow",
        _type: "reference"
      }
    },
    progress: 85,
    title: "TensorFlow"
  },
  {
    _createdAt: new Date().toISOString(),
    _id: "tech4",
    _rev: "1",
    _updatedAt: new Date().toISOString(),
    _type: "technology",
    image: {
      _type: "image",
      asset: {
        _ref: "tech-aws",
        _type: "reference"
      }
    },
    progress: 88,
    title: "AWS"
  },
  {
    _createdAt: new Date().toISOString(),
    _id: "tech5",
    _rev: "1",
    _updatedAt: new Date().toISOString(),
    _type: "technology",
    image: {
      _type: "image",
      asset: {
        _ref: "tech-docker",
        _type: "reference"
      }
    },
    progress: 85,
    title: "Docker"
  }
];

export const mockSkills: Skill[] = [
  {
    title: "Artificial Intelligence",
    experience: "≈ 2 Years XP",
    icon: "brain",
    skills: [
      "LLMs",
      "RAG",
      "LangChain",
      "Agentic Workflows",
      "Prompt-Engineering",
    ],
  },
  {
    title: "Data Science",
    experience: "≈ 5+ Years XP",
    icon: "network",
    skills: [
      "NLP",
      "CV",
      "Data Modeling",
      "PyTorch",
      "TensorFlow",
    ],
  },
  {
    title: "Data Engineering & Pipelines",
    experience: "≈ 2 Years XP",
    icon: "database",
    skills: ["PySpark", "SQL", "ETL", "DAGs", "Data Integration"],
  },
  {
    title: "Software Development",
    experience: "≈ 6 Years XP",
    icon: "code",
    skills: ["Python", "Java", "Angular", "Spring Boot", "System Design"],
  },
  {
    title: "Cloud & DevOps",
    experience: "≈ 3 Years XP",
    icon: "cloud",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "ELK Stack"],
  },
  {
    title: "Data Visualization & Tools",
    experience: "≈ 3 Years XP",
    icon: "barchart3",
    skills: ["Tableau", "Power BI", "Kibana", "MLflow", "Three.js"],
  },
];





export const mockExperiences: Experience[] = [
  {
    _createdAt: new Date().toISOString(),
    _id: "exp1",
    _rev: "1",
    _updatedAt: new Date().toISOString(),
    _type: "experience",
    company: "Capital One",
    description: "Leveraging Generative AI and LLMs to revolutionize ETL automation and enhance data engineering workflows.",
    companyImage: {
      _type: "image",
      asset: {
        _ref: "company-capitalone",
        _type: "reference"
      }
    },
    dateStarted: "2024-07-01" as any,
    dateEnded: new Date().toISOString() as any,
    isCurrentlyWorkingHere: true,
    jobTitle: "ML Engineer - GenAI/LLM Automation",
    points: [
      "Built a GenAI-powered platform that auto-generates end-to-end ETL pipeline code (PySpark/Scala) deployable via GitHub, enabling business users with SQL knowledge to build production-grade data pipelines through a UI",
      "Designed modular pipeline components (Source, Joiner, Filter, Transform, Target) and orchestrated them with DAG logic using Python and NetworkX",
      "Implemented a Retrieval-Augmented Generation (RAG) system using SimSearch and LlamaIndex for context-aware prompt injection; used Few-Shot and Chain-of-Thought prompting to guide LLM-based code generation",
      "Integrated an automated evaluation engine to validate generated code with retry-feedback loops, improving reliability and reducing developer intervention",
      "Collaborated cross-functionally to evaluate GenAI research, design trade-offs, and architecture"
    ],
    technologies: [mockTechnologies[0], mockTechnologies[1], mockTechnologies[3], mockTechnologies[4]],
    tags: ["GenAI", "LLMs", "ETL Automation", "RAG", "Prompt Engineering", "Data Engineering", "Python"]
  },
  {
    _createdAt: new Date().toISOString(),
    _id: "exp2",
    _rev: "1",
    _updatedAt: new Date().toISOString(),
    _type: "experience",
    company: "University of Illinois Chicago",
    description: "Performed advanced NLP research to extract insights from large-scale social media datasets.",
    companyImage: {
      _type: "image",
      asset: {
        _ref: "company-uic",
        _type: "reference"
      }
    },
    dateStarted: "2023-01-01" as any,
    dateEnded: "2024-05-31" as any,
    isCurrentlyWorkingHere: false,
    jobTitle: "Graduate Research Assistant",
    points: [
      "Built end-to-end NLP pipelines using HuggingFace Transformers, SpaCy, and scikit-learn to analyze political trends from 10M+ tweets",
      "Implemented scalable preprocessing modules including scraping, text normalization, sentiment analysis, topic modeling (LDA), and visualization with Pandas, Matplotlib, Seaborn",
      "Insights contributed to published academic research"
    ],
    technologies: [mockTechnologies[0], mockTechnologies[1], mockTechnologies[2]],
    tags: ["NLP", "Text Mining", "Transformers", "Data Analysis", "Visualization"]
  },
  {
    _createdAt: new Date().toISOString(),
    _id: "exp3",
    _rev: "1",
    _updatedAt: new Date().toISOString(),
    _type: "experience",
    company: "Docskiff (A Jaggaer Company)",
    description: "Engineered intelligent document processing systems to optimize contract metadata extraction.",
    companyImage: {
      _type: "image",
      asset: {
        _ref: "company-docskiff",
        _type: "reference"
      }
    },
    dateStarted: "2021-06-01" as any,
    dateEnded: "2022-07-31" as any,
    isCurrentlyWorkingHere: false,
    jobTitle: "Machine Learning Engineer",
    points: [
      "Built document intelligence pipelines combining NER, OCR, and NLP to extract contract metadata using PyTorch, Tesseract, and regex-based postprocessing",
      "Increased classification throughput by 30% through document segmentation using Faster-RCNN",
      "Enhanced OCR quality with custom image preprocessing techniques (denoising, deskewing) to improve text accuracy"
    ],
    technologies: [mockTechnologies[0], mockTechnologies[1]],
    tags: ["Document Intelligence", "OCR", "Computer Vision", "NER", "PyTorch", "Automation"]
  },
  {
    _createdAt: new Date().toISOString(),
    _id: "exp4",
    _rev: "1",
    _updatedAt: new Date().toISOString(),
    _type: "experience",
    company: "Applied AI",
    description: "Completed an intensive ML program and developed real-world projects in Machine Learning and NLP.",
    companyImage: {
      _type: "image",
      asset: {
        _ref: "company-appliedai",
        _type: "reference"
      }
    },
    dateStarted: "2020-05-01" as any,
    dateEnded: "2021-06-31" as any,
    isCurrentlyWorkingHere: false,
    jobTitle: "Machine Learning Intern",
    points: [
      "Completed a 12-month ML program with 250+ hours of content and 30+ coding assignments on Machine Learning, Deep Learning, NLP, and CV.",
      "Built end-to-end ML and NLP projects with real-world datasets and published technical blogs",
    ],
    technologies: [mockTechnologies[0], mockTechnologies[1]],
    tags: ["Machine Learning", "Deep Learning", "NLP", "CV"]
  },
  {
    _createdAt: new Date().toISOString(),
    _id: "exp5",
    _rev: "1",
    _updatedAt: new Date().toISOString(),
    _type: "experience",
    company: "Acheron Software Consultancy",
    description: "Developed enterprise-grade software solutions and optimized infrastructure for cost efficiency.",
    companyImage: {
      _type: "image",
      asset: {
        _ref: "company-acheron",
        _type: "reference"
      }
    },
    dateStarted: "2019-01-01" as any,
    dateEnded: "2020-04-30" as any,
    isCurrentlyWorkingHere: false,
    jobTitle: "Associate Software Developer",
    points: [
      "Built enterprise-grade applications using Spring Boot, MySQL, and Angular 8, delivering production-ready backend APIs and responsive UIs",
      "Set up a centralized observability stack using the ELK suite (Elasticsearch, Logstash, Kibana) on GCP",
      "Migrated legacy systems to Kubernetes using Helm, reducing deployment overhead and cutting infra costs by 15%"
    ],
    technologies: [mockTechnologies[4]],
    tags: ["Backend Development", "Spring Boot", "Kubernetes", "DevOps", "ELK Stack", "Cloud"]
  }
];

export const mockProjects: Project[] = [
  {
    _createdAt: new Date().toISOString(),
    _id: "project1",
    _rev: "1",
    _updatedAt: new Date().toISOString(),
    _type: "project",
    title: "GenAI ETL Pipeline Generator",
    linkToBuild: "https://github.com/sunilbelde",
    image: {
      _type: "image",
      asset: {
        _ref: "project-genai-etl",
        _type: "reference"
      }
    },
    summary: "GenAI-powered platform that auto-generates production-grade ETL pipeline code (PySpark/Scala) from business user input. Features RAG-based context injection, modular component design, and automated code validation with retry-feedback loops.",
    technologies: [mockTechnologies[0], mockTechnologies[1], mockTechnologies[3]]
  },
  {
    _createdAt: new Date().toISOString(),
    _id: "project2",
    _rev: "1",
    _updatedAt: new Date().toISOString(),
    _type: "project",
    title: "Political Sentiment Analysis",
    linkToBuild: "https://github.com/sunilbelde",
    image: {
      _type: "image",
      asset: {
        _ref: "project-nlp-analysis",
        _type: "reference"
      }
    },
    summary: "End-to-end NLP pipeline analyzing 10M+ tweets for political trends using HuggingFace Transformers, SpaCy, and scikit-learn. Implemented sentiment analysis, topic modeling (LDA), and advanced visualization techniques.",
    technologies: [mockTechnologies[0], mockTechnologies[1], mockTechnologies[2]]
  },
  {
    _createdAt: new Date().toISOString(),
    _id: "project3",
    _rev: "1",
    _updatedAt: new Date().toISOString(),
    _type: "project",
    title: "Document Intelligence System",
    linkToBuild: "https://github.com/sunilbelde",
    image: {
      _type: "image",
      asset: {
        _ref: "project-document-intel",
        _type: "reference"
      }
    },
    summary: "Intelligent document processing pipeline combining NER, OCR, and NLP to extract contract metadata. Achieved 30% throughput increase using Faster-RCNN for document segmentation and custom preprocessing techniques.",
    technologies: [mockTechnologies[0], mockTechnologies[1]]
  }
];

export const mockSocials: Social[] = [
  {
    _createdAt: new Date().toISOString(),
    _id: "social1",
    _rev: "1",
    _updatedAt: new Date().toISOString(),
    _type: "social",
    title: "GitHub",
    url: "https://github.com/sunilbelde"
  },
  {
    _createdAt: new Date().toISOString(),
    _id: "social2",
    _rev: "1",
    _updatedAt: new Date().toISOString(),
    _type: "social",
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/sunil-belde-1b4151129/"
  },
  {
    _createdAt: new Date().toISOString(),
    _id: "social3",
    _rev: "1",
    _updatedAt: new Date().toISOString(),
    _type: "social",
    title: "Medium",
    url: "https://medium.com/@sunil-belde102"
  }
];
