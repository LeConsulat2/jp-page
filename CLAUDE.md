# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server with Turbopack
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

No test framework is configured.

## Architecture

**Next.js 15 personal portfolio website** using the App Router, TypeScript, Tailwind CSS, and Framer Motion.

### Key structure

- `app/(home)/page.tsx` — Landing page with a custom typewriter effect (client component)
- `app/projects/[id]/page.tsx` — Portfolio gallery; fetches from `/api` on mount and renders animated cards
- `app/api/route.ts` — Single GET endpoint returning a hardcoded array of portfolio link objects `{ title, url, icon }`
- `app/layout.tsx` — Root layout with dark theme, Inter font, max-w-screen-2xl container
- `app/components/navigation.tsx` — Navigation component that exists but is **not currently used**

### Data flow

The projects page (`/projects/[id]`) calls `/api` via `fetch` in a `useEffect`, receives an array of portfolio items, and renders them in a responsive grid (1–5 columns) with Framer Motion staggered animations.

### Styling conventions

- Tailwind with custom breakpoints: `mobile` (320px), `tablet` (640px), `laptop` (1024px), `desktop` (1280px)
- Global custom class `.primary-btn` defined in `globals.css` (orange CTA button)
- Dark theme: `bg-neutral-900` base, purple-to-pink gradients for cards
- Path alias `@/*` maps to the project root
