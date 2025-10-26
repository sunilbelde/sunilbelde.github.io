import { Image } from "../typings";

// Helper function to generate placeholder images based on the image reference
export const getImageUrl = (image: Image | undefined): string => {
  if (!image || !image.asset || !image.asset._ref) {
    return "https://via.placeholder.com/400x400?text=No+Image";
  }

  // Generate a placeholder image based on the reference ID
  const imageMap: Record<string, string> = {
    "image-hero": "/profile_pic.png",
    "image-profile": "/full_profile_pic.jpeg",
    // Technologies
    "tech-python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "tech-pytorch": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
    "tech-tensorflow": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    "tech-aws": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    "tech-docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    // Skills
    "skill-python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "skill-pytorch": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
    "skill-tensorflow": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    "skill-aws": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    "skill-docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    "skill-kubernetes": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    "skill-pyspark": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg",
    "skill-sql": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    // Companies
    "company-capitalone": "https://static.cdnlogo.com/logos/c/97/capital-one.svg",
    "company-uic": "/uic.svg",
    "company-docskiff": "/company_docskiff.png",
    "company-appliedai": "/company_appliedai.png",
    "company-acheron":"/company_acheron.png",
    // Projects
    "project-genai-etl": "https://via.placeholder.com/600x400?text=GenAI+ETL+Pipeline",
    "project-nlp-analysis": "https://via.placeholder.com/600x400?text=Political+Sentiment+Analysis",
    "project-document-intel": "https://via.placeholder.com/600x400?text=Document+Intelligence",
  };

  const ref = image.asset._ref;
  return imageMap[ref] || "https://via.placeholder.com/400x400?text=Image";
};
