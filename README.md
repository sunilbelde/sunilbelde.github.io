# Sunil Belde's Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, Framer Motion, and Tailwind CSS.

## Overview

This portfolio showcases my projects, skills, and professional experience. Built with modern web technologies to provide a smooth, interactive user experience with engaging animations and a clean design.

**Live Site:** [sunilbelde.github.io](https://sunilbelde.github.io)

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) - React framework with server-side rendering
- **Language:** [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Animations:** [Framer Motion](https://www.framer.com/motion/) - Production-ready motion library
- **Icons:** [Heroicons](https://heroicons.com/) - Beautiful hand-crafted SVG icons
- **Forms:** [React Hook Form](https://react-hook-form.com/) - Performant form validation

## Features

- ⚡️ Fast page loads with Next.js SSR and optimization
- 🎨 Modern, responsive design with Tailwind CSS
- ✨ Smooth animations and transitions with Framer Motion
- 📱 Mobile-first responsive layout
- 🎯 Type-safe development with TypeScript
- 🔍 SEO optimized
- ♿️ Accessible components

## Repository Structure

This repository uses a simple structure:

- **`master`** - Contains all source code and development files. Deployments are triggered automatically via GitHub Actions when PRs are merged into master.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sunilbelde/sunilbelde.github.io.git
cd sunilbelde.github.io
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

### Running the Development Server

Start the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the portfolio.

The page auto-updates as you edit files - changes will be reflected instantly.

### Building for Production

Create an optimized production build:

```bash
npm run build
npm start
```

## Project Structure

```
sunilbelde.github.io/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section with animated intro
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills showcase
│   ├── WorkExperience.tsx  # Work experience timeline
│   ├── ExperienceCard.tsx  # Individual experience card
│   ├── Projects.tsx    # Project portfolio (currently disabled)
│   ├── ContactMe.tsx   # Contact form
│   └── BackgroundCircles.tsx  # Animated background circles
├── pages/              # Next.js pages
│   ├── _app.tsx        # App wrapper
│   └── index.tsx       # Home page
├── data/               # Portfolio content
│   └── mockData.ts     # All portfolio data (experiences, skills, projects, etc.)
├── utils/              # Utility functions
│   ├── fetchData.ts    # Data fetching functions
│   └── imageHelper.ts  # Image URL mapping utility
├── styles/             # Global styles
│   └── globals.css     # Tailwind CSS imports
├── public/             # Static assets (images, favicons)
└── typings.d.ts        # TypeScript type definitions
```

## Customization

### Update Content

All portfolio content is centralized in `data/mockData.ts`. Update:

- **Personal Info:** Edit `mockPageInfo` (name, role, email, phone, address, bio)
- **Work Experience:** Edit `mockExperiences` array
- **Skills:** Edit `mockSkills` array (categories with multiple sub-skills)
- **Technologies:** Edit `mockTechnologies` array
- **Projects:** Edit `mockProjects` array
- **Social Links:** Edit `mockSocials` array
- **Images:** Add images to `public/` and map references in `utils/imageHelper.ts`

### Styling

- **Theme Colors:** Update Tailwind configuration in `tailwind.config.js`
- **Component Styles:** Modify Tailwind classes in component files
- **Global Styles:** Customize in `styles/globals.css`

### Add New Sections

1. Create a new component in `components/`
2. Add TypeScript types in `typings.d.ts` if needed
3. Add data to `data/mockData.ts`
4. Create fetch function in `utils/fetchData.ts` if needed
5. Import and add section to `pages/index.tsx`
6. Update `getStaticProps` to fetch the new data
7. Style using Tailwind CSS classes

## Deployment

### GitHub Pages

The site is automatically deployed to GitHub Pages using GitHub Actions:

1. Make your changes in a feature branch
2. Create a pull request to `master`
3. Once the PR is merged, GitHub Actions automatically builds and deploys the site

The deployment workflow is triggered on every merge to the `master` branch.

### Manual Deployment

If you need to deploy manually, you can build the project locally:

```bash
npm run build
```

This creates an optimized static export in the `out/` directory.

## Contributing

Feel free to fork this project and customize it for your own portfolio!

## License

MIT

## Contact

Sunil Belde - [GitHub](https://github.com/sunilbelde)

Project Link: [https://github.com/sunilbelde/sunilbelde.github.io](https://github.com/sunilbelde/sunilbelde.github.io)
