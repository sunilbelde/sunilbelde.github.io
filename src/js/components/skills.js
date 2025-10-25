// Skills component
import { skillsData } from '../data/skills.js';

export function initSkills() {
  const skillsGrid = document.getElementById('skills-grid');

  if (!skillsGrid) return;

  // Render skills
  skillsData.forEach((skill) => {
    const skillItem = createSkillItem(skill);
    skillsGrid.appendChild(skillItem);
  });
}

function createSkillItem(skill) {
  const item = document.createElement('div');
  item.className = 'skill-item';

  const name = document.createElement('div');
  name.className = 'skill-item__name';
  name.textContent = skill;

  item.appendChild(name);

  return item;
}
