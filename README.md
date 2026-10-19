<p align="center">
  <img src="https://i.imgur.com/DXU7DlO.png" height="120" alt="EZSauce logo" />
</p>

<h1 align="center">EZSauce</h1>

<p align="center">
  A curated collection of resources to help you grow as a developer and designer.
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  <img alt="React" src="https://img.shields.io/badge/React-18-149ECA?logo=react&logoColor=white" />
  <img alt="Vite" src="https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white" />
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind-3-06B6D4?logo=tailwindcss&logoColor=white" />
</p>

---

EZSauce is a fast, accessible directory of hand-picked tools, design assets,
templates and learning material. Filter by category, search across every
resource, and switch between light and dark themes. Filters are stored in the
URL, so any view can be shared.

## Features

- 🔍 Instant multi-word search across names, tags, categories and domains
- 🏷️ Category filters with live counts
- 🌓 Light / dark theme that follows your OS until you choose manually
- 🔗 Shareable filter URLs (`?q=icons&category=Design%20Stuff`)
- 📱 Responsive grid with infinite scroll and a keyboard-friendly "Load more"
- ⚡ Optimised WebP thumbnails with responsive `srcset` and native lazy loading
- ♿ Semantic landmarks, keyboard-visible focus states and reduced-motion support

## Tech stack

| Layer      | Choice                                        |
| ---------- | --------------------------------------------- |
| UI         | React 18 (function components, hooks)         |
| Build      | Vite 5                                        |
| Styling    | Tailwind CSS 3 + `clsx` / `tailwind-merge`    |
| Data       | A single JSON file validated at build time    |
| Assets     | Local WebP derivatives generated with `sharp` |
| Animations | CSS keyframes (no animation runtime)          |

The whole app ships as **~200 kB of JS (64 kB gzip)** with no animation or
component-library runtime.

## Getting started

Requires Node.js 18.17+ and npm 9+.

```bash
git clone https://github.com/farhanf7n/ezsauce.git
cd ezsauce
npm install
npm run dev
```

Open http://localhost:5173.

## Scripts

| Command            | What it does                                        |
| ------------------ | --------------------------------------------------- |
| `npm run dev`      | Start the Vite dev server                           |
| `npm run build`    | Validate the data, then build for production        |
| `npm run preview`  | Preview the production build                        |
| `npm run lint`     | Run ESLint (zero warnings allowed)                  |
| `npm run format`   | Format the codebase with Prettier                   |
| `npm run validate` | Check `data.json` fields, links and image files     |
| `npm run images`   | Regenerate optimised WebP images from `assets-src/` |
| `npm run og`       | Regenerate the Open Graph image (`public/og.jpg`)   |

## Project structure

```
assets-src/              Original full-resolution image sources (not deployed)
public/
  assets/opt/            Generated WebP thumbnails (320w / 640w) and hero art
  fonts/                 Self-hosted Montserrat + Onest (woff2, latin subset)
  og.jpg                 Generated social preview image
scripts/                 Image pipeline, data validation, OG generation
src/
  components/            UI components
  data/data.json         The resource collection
  data/resources.js      Normalised resources, categories, search index
  lib/                   Theme store, scroll hooks, class-name helper
  index.css              Tailwind layers, fonts, animations
```

## Adding a resource

1. Drop the source screenshot into `assets-src/` (PNG or JPEG).
2. Add an entry to `src/data/data.json`:

   ```json
   {
     "name": "Example",
     "category": "Design Stuff",
     "tags": ["Inspiration"],
     "link": "https://example.com",
     "img": "/assets/example.png"
   }
   ```

   The `img` path only needs to point at the source file name.

3. Run `npm run images` — this writes the 320w/640w WebP derivatives and
   rewrites `img` in `data.json` to the generated files.
4. Run `npm run validate` (or just `npm run build`) to catch typos, duplicate
   links and missing images.

An optional `description` field is supported and included in search. Entries
with `"newTag": true` are pinned to the top of the list.

## Deployment

`npm run build` produces a fully static site in `dist/`. Deploy it to any static
host (Netlify, Vercel, Cloudflare Pages, GitHub Pages). Long-term caching works
out of the box for hashed JS/CSS; the files under `public/` keep stable names on
purpose so social previews and the image pipeline stay simple.

## Contributing

Contributions are welcome — bug reports, resource suggestions, accessibility
fixes and UI improvements alike.

1. Open an [issue](https://github.com/farhanf7n/ezsauce/issues/new) describing the change.
2. Fork the repo and create a branch.
3. Make your changes, run `npm run lint && npm run build`.
4. Open a pull request.

## License

[MIT](./LICENSE) © Farhan Ahmed
