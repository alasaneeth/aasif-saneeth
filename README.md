# Al. Aasif Saneeth — Portfolio

React + Tailwind CSS portfolio site.

## Run locally

```bash
npm install
npm run dev
```

Opens at http://localhost:5173

## Build for production

```bash
npm run build
```

Output goes to the `dist/` folder — deploy it to Vercel, Netlify, GitHub Pages, or any static host.

## Structure

```
src/
  App.jsx          → main page (all sections)
  main.jsx         → React entry point
  index.css        → Tailwind directives
  assets/
    profile.jpg    → profile photo
```

## Edit content

All text content (experience, projects, skills, education) lives in the data
arrays near the top of `src/App.jsx` — edit those directly, no need to touch
the JSX layout.
