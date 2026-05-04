# AGENTS.md

This document provides an overview of the EZABLACK project structure for developers and AI agents.

## Project Overview

EZABLACK is a luxury fashion portfolio and marketing site for a haute couture brand by Sumit. It uses a dark (#010101 background), gold (#D4AF37 accent) aesthetic to convey exclusivity. Built with TanStack Start and deployed on Netlify. No backend or database — pure marketing/portfolio site with inquiry flows via Instagram DM.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 + custom CSS classes |
| Language | TypeScript 5.7 (strict mode) |
| Deployment | Netlify |

## Directory Structure

```
src/
├── routes/
│   ├── __root.tsx              # Root HTML shell — sets global head (title, Font Awesome CDN)
│   ├── index.tsx               # EZABLACK homepage (hero, celebrities, collection, CTA)
│   └── products/$productId.tsx # Individual piece detail page
├── data/
│   └── products.ts             # EZABLACK collection items — name, price, description, image
└── styles.css                  # All global styles — dark luxury theme + gold accents
```

## Key Concepts

### File-Based Routing (TanStack Router)

Routes are defined by files in `src/routes/`:

- `__root.tsx` - Root layout wrapping all pages; sets meta and CDN links
- `index.tsx` - Route for `/` — the full EZABLACK marketing homepage
- `products/$productId.tsx` - Individual piece detail page for deep-linking

### Styling Approach

Custom CSS classes in `styles.css` are used for component-level styles (`.celeb-card`, `.buy-btn`, `.product-card`, etc.) rather than inline Tailwind utilities — this keeps the luxury design tokens centralized. Key design tokens:

- Gold accent: `#D4AF37`
- Backgrounds: `#010101` / `#070707` / `#111`
- Font: Inter (Google Fonts, loaded in `styles.css`)
- Icons: Font Awesome 6 via CDN (added in `__root.tsx` head)

## Configuration Files

| File | Purpose |
|------|---------|
| `vite.config.ts` | Vite plugins: TanStack Start, Netlify, Tailwind |
| `tsconfig.json` | TypeScript config with `@/*` path alias for `src/*` |
| `netlify.toml` | Build command, output directory, dev server settings |
| `styles.css` | Tailwind import + all luxury custom CSS |

## Development Commands

```bash
npm run dev      # Start dev server (port 3000)
netlify dev      # Netlify CLI dev with emulation (port 8888)
npm run build    # Production build → dist/client/
```

## Conventions

### Naming
- Routes: kebab-case files
- Data arrays: plain TypeScript arrays in `src/data/`
- No component folder — inline component functions in route files

### Non-Obvious Decisions

- Font Awesome is loaded as a CDN link in `__root.tsx` rather than npm — avoids bundling the full icon library
- The `products/$productId` route enables deep-linking to individual pieces; the homepage does not currently link there but the data and route are wired for future use
- Toast notifications for user feedback use a simple `useState` pattern in `index.tsx` — no modal or routing needed

## Application Name

The application is named **EZABLACK by Sumit**. It appears in:
- `src/routes/__root.tsx` — `<title>` meta tag
- `src/routes/index.tsx` — navbar logo and content
