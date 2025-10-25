# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with vanilla JavaScript, HTML, and CSS. The project uses Vite as a development server and build tool for fast development and optimized production builds.

## Development Commands

### Starting Development Server
```bash
npm run dev
```
Starts Vite dev server on `http://localhost:3000` with hot module reloading.

### Building for Production
```bash
npm run build
```
Creates optimized production build in `dist/` directory.

### Preview Production Build
```bash
npm run preview
```
Serves the production build locally for testing before deployment.

### Code Quality
```bash
npm run format     # Format code with Prettier
npm run lint:css   # Lint CSS files with Stylelint
```

## Architecture

### CSS Architecture (Modular CSS)

The project uses a modular CSS architecture with separate files for different concerns:

- **Entry Point**: `src/styles/main.css` imports all CSS modules
- **Foundation**:
  - `reset.css` - CSS reset for consistent cross-browser styling
  - `variables.css` - CSS custom properties (colors, spacing, typography, etc.)
  - `base.css` - Base styles and common layout patterns
- **Components**: `src/styles/components/` contains scoped styles for each UI component
  - Each component has its own CSS file (e.g., `header.css`, `nav.css`, `hero.css`)
  - Component classes use BEM-like naming (e.g., `.nav__menu`, `.hero__title`)
- **Utilities**: `utilities.css` provides utility classes for spacing and alignment

**Adding New Components**:
1. Create component CSS file in `src/styles/components/`
2. Import it in `src/styles/main.css`
3. Use consistent naming conventions (component__element pattern)

### JavaScript Architecture

The project follows a component-based JavaScript architecture:

- **Entry Point**: `src/js/main.js` initializes all components
- **Components**: `src/js/components/` contains individual feature modules
  - Each component is a self-contained module with init function
  - Components handle their own DOM manipulation and event listeners
- **Data**: `src/js/data/` contains static data files for projects and skills
  - Export data as named exports for easy importing

**Adding New Components**:
1. Create component file in `src/js/components/`
2. Export an initialization function (e.g., `export function initComponentName()`)
3. Import and call it in `src/js/main.js`

### Project Structure

```
/
├── index.html              # Main HTML entry point
├── src/
│   ├── js/
│   │   ├── main.js        # JS entry point
│   │   ├── components/    # Feature modules (navigation, projects, etc.)
│   │   └── data/          # Static data files
│   └── styles/
│       ├── main.css       # CSS entry point (imports all modules)
│       ├── reset.css      # CSS reset
│       ├── variables.css  # CSS custom properties
│       ├── base.css       # Base styles
│       ├── components/    # Component-specific styles
│       └── utilities.css  # Utility classes
├── vite.config.js         # Vite configuration
└── package.json
```

## Key Design Patterns

### CSS Custom Properties
All design tokens (colors, spacing, typography) are defined as CSS variables in `variables.css`. Update these variables to change the design system globally.

### Responsive Design
- Mobile-first approach with breakpoint at 768px
- Navigation transforms to mobile menu below 768px
- Grid layouts use `auto-fill` for responsive columns

### Dark Mode Support
The site includes dark mode support via `prefers-color-scheme` media query in `variables.css`. Dark mode variables automatically apply based on user's system preference.

### Component Initialization
All interactive components follow the same pattern:
1. Export an `init` function from the component module
2. Function queries required DOM elements
3. Early return if elements don't exist (graceful degradation)
4. Attach event listeners and set up component behavior

## Customization

### Updating Content
- **Personal Info**: Edit text in `index.html`
- **Projects**: Modify `src/js/data/projects.js`
- **Skills**: Modify `src/js/data/skills.js`

### Styling Changes
- **Colors/Spacing**: Update CSS variables in `src/styles/variables.css`
- **Component Styles**: Edit corresponding file in `src/styles/components/`

### Adding Sections
1. Add HTML structure in `index.html`
2. Create component CSS file in `src/styles/components/`
3. Import CSS in `src/styles/main.css`
4. Create JS component if interactive behavior needed
5. Initialize component in `src/js/main.js`

## Contact Form
The contact form in `src/js/components/contact.js` currently shows an alert on submission. To implement actual form submission:
- Replace the TODO comment with your preferred backend (email service, serverless function, etc.)
- Consider services like Formspree, EmailJS, or Netlify Forms for static hosting

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and Custom Properties support required
- JavaScript ES6+ modules
