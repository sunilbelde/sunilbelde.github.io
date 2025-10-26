# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with **Next.js 16**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. The project is configured for static export to GitHub Pages.

## Development Commands

### Starting Development Server
```bash
npm run dev
```
Starts Next.js dev server on `http://localhost:3000` with hot module reloading.

### Building for Production
```bash
npm run build
```
Creates optimized static export in `out/` directory.

### Starting Production Server
```bash
npm start
```
Starts the Next.js production server.

### Deploy to GitHub Pages
```bash
npm run deploy
```
Builds and deploys the static site to GitHub Pages using gh-pages.

## Architecture

### Tech Stack

- **Framework**: Next.js 16 (static export mode)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom configuration
- **Animations**: Framer Motion
- **Icons**: Heroicons, React Social Icons
- **Forms**: React Hook Form
- **Type Animation**: React Simple Typewriter

### Project Structure

```
/
├── pages/
│   ├── index.tsx          # Main page component
│   └── _app.tsx           # Next.js app wrapper
├── components/
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section with typewriter
│   ├── About.tsx          # About section
│   ├── WorkExperience.tsx # Experience timeline
│   ├── ExperienceCard.tsx # Individual experience card
│   ├── Skills.tsx         # Skills grid
│   ├── Projects.tsx       # Projects showcase (currently disabled)
│   ├── ContactMe.tsx      # Contact form
│   └── BackgroundCircles.tsx # Animated background
├── data/
│   └── mockData.ts        # All portfolio data (pageInfo, experiences, skills, etc.)
├── utils/
│   ├── imageHelper.ts     # Image URL mapping utility
│   └── fetchData.ts       # Unified data fetching functions
├── styles/
│   └── globals.css        # Global Tailwind styles
├── public/
│   ├── profile_pic.png    # Profile picture
│   ├── full_profile_pic.jpeg # Full profile image
│   ├── uic.svg            # Company logos
│   └── ...                # Favicons and static assets
├── typings.d.ts           # TypeScript type definitions
├── tailwind.config.js     # Tailwind configuration
├── next.config.js         # Next.js configuration
└── package.json
```

## Key Design Patterns

### Component Architecture

All components are built with TypeScript and follow React functional component patterns:

- Components use typed props with TypeScript interfaces
- Framer Motion is used for animations and transitions
- Components are self-contained and reusable

### Data Fetching

The project uses Next.js's `getStaticProps` for static site generation with mock data:

- All data fetching happens at build time using functions from `utils/fetchData.ts`
- Portfolio data is stored in `data/mockData.ts` (pageInfo, experiences, skills, projects, socials)
- Each fetch function (fetchPageInfo, fetchExperiences, fetchSkills, fetchProjects, fetchSocials) returns data from mockData
- Type-safe data structures defined in `typings.d.ts`
- All fetch functions include a small delay to simulate async behavior

### Image Management

Images are managed through the `imageHelper.ts` utility:

- Maps image references to URLs
- Supports local images in `/public` directory
- Uses CDN (jsdelivr) for technology icons
- Placeholder images for missing assets

### Styling

- **Tailwind CSS**: Utility-first CSS framework
- **Custom Colors**: Defined in `tailwind.config.js` (darkGreen, lightGreen, etc.)
- **Responsive Design**: Mobile-first with Tailwind breakpoints (sm, md, lg, xl, 2xl)
- **Custom Scrollbar**: Tailwind scrollbar plugin for styled scrollbars

### Animations

Framer Motion is used throughout for smooth animations:

- Page transitions
- Scroll-triggered animations with `whileInView`
- Stagger effects for lists
- Hover and tap interactions

## Customization

### Updating Content

All portfolio content is centralized in `data/mockData.ts`. Update the following:

- **Personal Info**: Edit `mockPageInfo` in `data/mockData.ts` (name, role, email, phone, address, bio)
- **Work Experience**: Edit `mockExperiences` array in `data/mockData.ts`
- **Skills**: Edit `mockSkills` array in `data/mockData.ts`
- **Technologies**: Edit `mockTechnologies` array in `data/mockData.ts`
- **Projects**: Edit `mockProjects` array in `data/mockData.ts`
- **Social Links**: Edit `mockSocials` array in `data/mockData.ts`
- **Page Title**: Update in `pages/index.tsx` (line 51)
- **Images**: Add images to `public/` and map references in `utils/imageHelper.ts`

Note: The Projects section is currently commented out in `pages/index.tsx:78-80` but the component and data are available.

### Styling Changes

- **Theme Colors**: Update `tailwind.config.js` colors
- **Component Styles**: Edit Tailwind classes in component files
- **Global Styles**: Modify `styles/globals.css`

### Adding New Sections

1. Create component in `components/`
2. Add TypeScript types in `typings.d.ts` if needed
3. Add mock data to `data/mockData.ts`
4. Create fetch function in `utils/fetchData.ts` if needed
5. Add section to `pages/index.tsx`
6. Update `getStaticProps` in `pages/index.tsx` to fetch the new data
7. Style with Tailwind CSS

### Data Structure

**Skills**: The Skill interface represents skill categories with multiple sub-skills:
```typescript
{
  title: string;           // e.g., "Artificial Intelligence"
  experience: string;      // e.g., "≈ 4 Years XP"
  icon: string;           // Icon identifier
  skills: SkillItem[];    // Array of individual skills with name and level
}
```

**Experiences**: Each experience includes technologies, tags, and detailed points
**Technologies**: Reusable technology objects with images and progress levels

## Deployment

### GitHub Pages Configuration

The site is configured for GitHub Pages deployment:

- Static export enabled in `next.config.js`
- Deploy script uses `gh-pages` package
- Output directory: `out/`
- `.nojekyll` file prevents Jekyll processing

### Environment Setup

- No environment variables required
- All content is statically generated
- Images served from `/public` directory

## Contact Form

The contact form uses `mailto:` links:
- Form data is collected with React Hook Form
- On submit, opens default email client with pre-filled content
- Email address: `sunil.belde102@gmail.com`

## Browser Support

- Modern browsers with ES6+ support
- CSS Grid and Flexbox
- Tailwind CSS compatibility
- Framer Motion animations

## TypeScript

- Strict type checking enabled
- All components fully typed
- Type definitions in `typings.d.ts`
- No `any` types used
