# EZABLACK — Luxury Fashion by Sumit

A luxury fashion portfolio and marketing site for EZABLACK, a haute couture brand by Sumit. Features a dark, gold-accented aesthetic showcasing celebrity clients, limited-edition collections, and a direct inquiry experience.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 + custom CSS |
| Language | TypeScript 5.7 (strict mode) |
| Deployment | Netlify |

## Running Locally

```bash
npm install
npm run dev
```

The dev server starts at [http://localhost:3000](http://localhost:3000). If using the Netlify CLI for edge/function emulation:

```bash
netlify dev
# → http://localhost:8888
```

## Building for Production

```bash
npm run build
```

Output is placed in `dist/client/` as configured in `netlify.toml`.

## Project Structure

```
src/
├── routes/
│   ├── __root.tsx          # Root HTML shell, global head tags (fonts, FA icons)
│   ├── index.tsx           # EZABLACK homepage (hero, celebrities, collection, CTA)
│   └── products/$productId.tsx  # Individual product/piece detail page
├── data/
│   └── products.ts         # EZABLACK collection items (name, price, description, image)
└── styles.css              # Global styles — dark luxury theme, gold accents
```
