import { Image } from "../typings";

// Helper function to generate placeholder images based on the image reference
export const getImageUrl = (image: Image | undefined): string => {
  if (!image || !image.asset || !image.asset._ref) {
    return "https://via.placeholder.com/400x400?text=No+Image";
  }

  // Generate a placeholder image based on the reference ID
  const imageMap: Record<string, string> = {
    // Profile / Hero
    "image-hero": "/profile_pic.png",
    "image-profile": "/full_profile_pic.jpeg",
  
    // =============================
    // 🔹 TECH STACK (Core Techs)
    // =============================
    "tech-python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "tech-pytorch": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
    "tech-tensorflow": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    "tech-aws": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    "tech-docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  
    // =============================
    // 🧠 SKILLS
    // =============================
    "skill-python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "skill-java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    "skill-pyspark": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg",
    "skill-sql": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    "skill-transformersllms": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/huggingface.svg",
    "skill-promptengineering": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openai.svg",
    "skill-ragllamaindexlangchain": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openai.svg",
    "skill-tensorflow": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    "skill-pytorch": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
    "skill-aws": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    "skill-docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    "skill-kubernetes": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    "skill-gitcicd": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    "skill-springboot": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    "skill-mysqlpostgresqlmongodb": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
    "skill-elasticsearch": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg",
    "skill-vectordatabases": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", // No official vector DB icon
    "skill-networkx": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", // Placeholder
    "skill-mlflowdvc": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", // Placeholder
    "skill-tableaukibana": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/tableau.svg", // Using simple-icons for Tableau
  
    // =============================
    // 🏢 COMPANIES
    // =============================
    "company-capitalone": "https://static.cdnlogo.com/logos/c/97/capital-one.svg",
    "company-uic": "/uic.svg",
    "company-docskiff": "/company_docskiff.png",
    "company-appliedai": "/company_appliedai.png",
    "company-acheron": "/company_acheron.png",
  
    // =============================
    // 🚀 PROJECTS (Placeholders)
    // =============================
    "project-genai-etl": "https://via.placeholder.com/600x400?text=GenAI+ETL+Pipeline",
    "project-nlp-analysis": "https://via.placeholder.com/600x400?text=Political+Sentiment+Analysis",
    "project-document-intel": "https://via.placeholder.com/600x400?text=Document+Intelligence",
  };
  

  const ref = image.asset._ref;
  return imageMap[ref] || "https://via.placeholder.com/400x400?text=Image";
};
