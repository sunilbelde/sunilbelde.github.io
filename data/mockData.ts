import { PageInfo, Experience, Skill, Project, Social, Technology } from "../typings";

export const mockPageInfo: PageInfo = {
  _createdAt: new Date().toISOString(),
  _id: "pageInfo1",
  _rev: "1",
  _updatedAt: new Date().toISOString(),
  _type: "pageInfo",
  address: "Chicago, IL",
  backgroundInformation: `
  I’m an ML Engineer 🤖 specializing in Generative AI and LLM-driven automation, with experience designing and deploying production-grade data pipelines and intelligent systems. My work bridges machine learning 🧠, data engineering ⚙️, and cloud infrastructure ☁️ — enabling scalable, efficient, and explainable AI solutions.

  I’ve contributed to projects ranging from document intelligence 📄 and NLP research 💬 to building Generative AI platforms that empower business users to create and manage ETL pipelines through natural language. I’m passionate about transforming how humans interact with data 🌍 — making complex technical workflows accessible, adaptive, and intelligent ✨.
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
    _createdAt: new Date().toISOString(),
    _id: "skill1",
    _rev: "1",
    _updatedAt: new Date().toISOString(),
    _type: "skill",
    image: {
      _type: "image",
      asset: {
        _ref: "skill-python",
        _type: "reference"
      }
    },
    progress: 95,
    title: "Python"
  },
  {
    _createdAt: new Date().toISOString(),
    _id: "skill2",
    _rev: "1",
    _updatedAt: new Date().toISOString(),
    _type: "skill",
    image: {
      _type: "image",
      asset: {
        _ref: "skill-pytorch",
        _type: "reference"
      }
    },
    progress: 90,
    title: "PyTorch"
  },
  {
    _createdAt: new Date().toISOString(),
    _id: "skill3",
    _rev: "1",
    _updatedAt: new Date().toISOString(),
    _type: "skill",
    image: {
      _type: "image",
      asset: {
        _ref: "skill-tensorflow",
        _type: "reference"
      }
    },
    progress: 88,
    title: "TensorFlow"
  },
  {
    _createdAt: new Date().toISOString(),
    _id: "skill4",
    _rev: "1",
    _updatedAt: new Date().toISOString(),
    _type: "skill",
    image: {
      _type: "image",
      asset: {
        _ref: "skill-aws",
        _type: "reference"
      }
    },
    progress: 85,
    title: "AWS"
  },
  {
    _createdAt: new Date().toISOString(),
    _id: "skill5",
    _rev: "1",
    _updatedAt: new Date().toISOString(),
    _type: "skill",
    image: {
      _type: "image",
      asset: {
        _ref: "skill-docker",
        _type: "reference"
      }
    },
    progress: 82,
    title: "Docker"
  },
  {
    _createdAt: new Date().toISOString(),
    _id: "skill6",
    _rev: "1",
    _updatedAt: new Date().toISOString(),
    _type: "skill",
    image: {
      _type: "image",
      asset: {
        _ref: "skill-kubernetes",
        _type: "reference"
      }
    },
    progress: 80,
    title: "Kubernetes"
  },
  {
    _createdAt: new Date().toISOString(),
    _id: "skill7",
    _rev: "1",
    _updatedAt: new Date().toISOString(),
    _type: "skill",
    image: {
      _type: "image",
      asset: {
        _ref: "skill-pyspark",
        _type: "reference"
      }
    },
    progress: 85,
    title: "PySpark"
  },
  {
    _createdAt: new Date().toISOString(),
    _id: "skill8",
    _rev: "1",
    _updatedAt: new Date().toISOString(),
    _type: "skill",
    image: {
      _type: "image",
      asset: {
        _ref: "skill-sql",
        _type: "reference"
      }
    },
    progress: 90,
    title: "SQL"
  }
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
    tags: ["GenAI","LLMs","ETL Automation"]
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
    tags: ["LLMs","ETL Automation"]
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
    tags: ["GenAI","LLMs","ETL Automation"]
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
    tags: ["GenAI","LLMs","ETL Automation"]
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
    tags: ["GenAI","LLMs","ETL Automation"]
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
