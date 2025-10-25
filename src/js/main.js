// Main application entry point
import { initNavigation } from './components/navigation.js';
import { initProjects } from './components/projects.js';
import { initSkills } from './components/skills.js';
import { initContactForm } from './components/contact.js';

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initProjects();
  initSkills();
  initContactForm();
});
