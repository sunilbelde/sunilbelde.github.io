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

This repository uses a two-branch structure:

- **`master`** - Contains the built static site (deployed to GitHub Pages)
- **`source`** - Contains the source code, development files, and configuration

**To work on this project, always use the `source` branch!**

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
│   ├── Projects.tsx    # Project portfolio
│   └── ContactMe.tsx   # Contact form
├── pages/              # Next.js pages
│   ├── _app.tsx        # App wrapper
│   ├── index.tsx       # Home page
│   └── api/            # API routes
├── styles/             # Global styles
│   └── globals.css     # Tailwind CSS imports
├── utils/              # Utility functions
├── data/               # Mock data
├── public/             # Static assets
└── typings.d.ts        # TypeScript type definitions
```

## Customization

### Update Content

- **Personal Info:** Edit the data in `data/mockData.ts`
- **Components:** Modify components in the `components/` directory
- **Styling:** Update Tailwind configuration in `tailwind.config.js`
- **Colors & Theme:** Customize in `styles/globals.css`

### Add New Sections

1. Create a new component in `components/`
2. Import and add it to `pages/index.tsx`
3. Style using Tailwind CSS classes

## Deployment

### GitHub Pages

This project is configured for deployment to GitHub Pages:

```bash
npm run build
# Deploy the 'out' directory to gh-pages branch
```

### Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import the project in Vercel
3. Vercel will automatically detect Next.js and deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/sunilbelde/sunilbelde.github.io)

## Contributing

Feel free to fork this project and customize it for your own portfolio!

## License

MIT

## Contact

Sunil Belde - [GitHub](https://github.com/sunilbelde)

Project Link: [https://github.com/sunilbelde/sunilbelde.github.io](https://github.com/sunilbelde/sunilbelde.github.io)
