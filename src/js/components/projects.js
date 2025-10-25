// Projects component
import { projectsData } from '../data/projects.js';

export function initProjects() {
  const projectsGrid = document.getElementById('projects-grid');

  if (!projectsGrid) return;

  // Render projects
  projectsData.forEach((project) => {
    const projectCard = createProjectCard(project);
    projectsGrid.appendChild(projectCard);
  });
}

function createProjectCard(project) {
  const card = document.createElement('div');
  card.className = 'project-card';

  const title = document.createElement('h3');
  title.className = 'project-card__title';
  title.textContent = project.title;

  const description = document.createElement('p');
  description.className = 'project-card__description';
  description.textContent = project.description;

  const tagsContainer = document.createElement('div');
  tagsContainer.className = 'project-card__tags';

  project.tags.forEach((tag) => {
    const tagElement = document.createElement('span');
    tagElement.className = 'project-card__tag';
    tagElement.textContent = tag;
    tagsContainer.appendChild(tagElement);
  });

  card.appendChild(title);
  card.appendChild(description);
  card.appendChild(tagsContainer);

  // Add link if available
  if (project.link) {
    const link = document.createElement('a');
    link.className = 'project-card__link';
    link.href = project.link;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = 'View Project →';
    card.appendChild(link);
  }

  return card;
}
