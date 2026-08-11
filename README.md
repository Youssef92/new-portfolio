# Youssef Hassan — Portfolio

A personal portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:5173 to view it.

## Build for production

```bash
npm run build
```

The output will be in the `dist/` folder — ready to deploy on Vercel, Netlify, or any static host.

## Project structure

```
src/
  components/   -> Navbar, Hero, About, Skills, Projects, ProjectCard, Contact, Footer
  data/         -> projects.js (edit this to update project content)
  assets/       -> project screenshots
```

## Customizing

- Update your info in `src/components/Hero.jsx` and `About.jsx`
- Update your projects in `src/data/projects.js`
- Update contact links in `src/components/Contact.jsx`
- Colors and fonts are defined as CSS variables (`@theme`) in `src/index.css`
