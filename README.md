# Portfolio Website

A modern, responsive personal portfolio website built with vanilla JavaScript, HTML, and CSS.

## Features

- Responsive design with mobile-first approach
- Modular CSS architecture for easy maintenance
- Component-based JavaScript structure
- Dark mode support (follows system preference)
- Smooth scrolling navigation
- Mobile-friendly hamburger menu
- Contact form with validation

## Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher)
- npm (comes with Node.js)

## Setup

1. **Clone or download this repository**

2. **Install dependencies**
   ```bash
   npm install
   ```

## Running the Project

### Development Mode

Start the development server with hot module reloading:

```bash
npm run dev
```

This will start the Vite dev server at `http://localhost:3000` and automatically open it in your browser.

### Build for Production

Create an optimized production build:

```bash
npm run build
```

The build output will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## Customization

### Update Personal Information

1. **Edit basic info**: Open `index.html` and update:
   - Your name in the hero section
   - About section content
   - Contact information

2. **Update projects**: Edit `src/js/data/projects.js` to add your projects

3. **Update skills**: Edit `src/js/data/skills.js` to list your skills

### Styling

- **Colors and design tokens**: Modify `src/styles/variables.css`
- **Component styles**: Edit files in `src/styles/components/`
- **Add new sections**: Follow the pattern in existing components

## Project Structure

```
/
├── index.html              # Main HTML file
├── src/
│   ├── js/
│   │   ├── main.js        # JavaScript entry point
│   │   ├── components/    # Component modules
│   │   └── data/          # Data files for projects and skills
│   └── styles/
│       ├── main.css       # CSS entry point
│       ├── variables.css  # Design tokens
│       ├── components/    # Component styles
│       └── utilities.css  # Utility classes
├── package.json
└── vite.config.js
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run format` | Format code with Prettier |
| `npm run lint:css` | Lint CSS files |

## Deployment

After running `npm run build`, deploy the `dist/` folder to any static hosting service:

- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)
- [GitHub Pages](https://pages.github.com/)
- [Cloudflare Pages](https://pages.cloudflare.com/)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

Requires support for CSS Grid, CSS Custom Properties, and ES6+ JavaScript modules.

## Contributing

Feel free to fork this project and customize it for your own portfolio!

## License

MIT
