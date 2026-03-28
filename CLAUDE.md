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

**Next.js 16 personal portfolio + multi-version CV website** using the App Router, TypeScript, Tailwind CSS, and Framer Motion.

### Key structure

- `app/(home)/page.tsx` — Landing page with a custom typewriter effect (client component)
- `app/projects/[id]/page.tsx` — Portfolio gallery; fetches from `/api` on mount and renders animated cards
- `app/api/route.ts` — Single GET endpoint returning a hardcoded array of portfolio link objects `{ title, url, icon }`
- `app/layout.tsx` — Root layout with dark theme, Inter font, max-w-screen-2xl container
- `app/components/navigation.tsx` — Navigation component that exists but is **not currently used**
- `app/v1/page.tsx` — CV variant 1
- `app/v2/page.tsx` — CV variant 2 (teal theme) — enhanced with Particles, InfiniteMenu, Card, Tooltip
- `app/v3/page.tsx` — CV variant 3 (emerald theme) — **in progress: Excel/data focus, will show visual examples using `@/components/` and `@/ui/`**
- `app/v4/page.tsx` — CV variant 4 (amber theme) — international/global focus
- `app/v5/page.tsx` — CV variant 5 (violet theme) — **in progress: design & marketing focus, will showcase actual work/designs using `@/components/` and `@/ui/`**
- `app/v6/page.tsx` — CV variant 6 (yellow theme) — leadership & achievements focus

### Component library

**`components/`** — heavier, purpose-built interactive components:
- `InfiniteMenu.tsx` — WebGL 3D spinning globe menu; takes `items: { image, link, title, description }[]` and `scale`
- `GlassIcons.tsx` — Glass-morphism icon display
- `Antigravity.tsx` — Antigravity physics animation
- `Particles.tsx` — Canvas particle system (separate from the ui one)

**`ui/`** — lightweight shadcn-style primitives:
- `blur-fade.tsx` — Scroll/mount fade+blur animation; props: `delay`, `duration`, `direction` (`up`|`down`|`left`|`right`), `offset`, `inView`, `blur`
- `particles.tsx` — Mouse-reactive particle background; props: `quantity`, `color`, `staticity`, `ease`
- `card.tsx` — Card + CardHeader + CardContent + CardFooter + CardTitle + CardDescription
- `tooltip.tsx` — Tooltip + TooltipTrigger + TooltipContent + TooltipProvider (Radix-based)
- `carousel.tsx` — Embla carousel wrapper
- `separator.tsx`, `button.tsx`, `skeleton.tsx`, `input.tsx`, `label.tsx`, `textarea.tsx`
- `animated-theme-toggler.tsx` — Dark/light toggle button
- `navigation-menu.tsx`, `sheet.tsx`, `sidebar.tsx`, `chart.tsx`

### CV variant themes

| Route | Accent colour | Background | Focus |
|-------|--------------|------------|-------|
| `/v2` | Teal `#2dd4bf` | `neutral-950` | General — enhanced with InfiniteMenu, Tooltip, Card, Particles |
| `/v3` | Emerald `#34d399` | `zinc-950` | Excel & data operations — visual examples planned |
| `/v4` | Amber `#fbbf24` | `stone-950` | International & cross-cultural |
| `/v5` | Violet `#a78bfa` | `slate-950` | Design & marketing — design showcase planned |
| `/v6` | Yellow `#eab308` | `gray-950` | Leadership & achievements |

All CV variants share: `BlurFade` animations throughout, `Particles` background fixed to theme colour, `Separator` dividers.

### Planned work — v3 & v5

**v3 (Excel/data focus):**
- Will add visual demonstrations of Excel dashboards, data workflows, and reporting examples
- Use `@/components/` and `@/ui/` (e.g. charts, cards, carousel) to show work visually rather than just listing it as text

**v5 (design & marketing focus):**
- Will showcase actual design work, marketing materials, and creative output
- Use `@/components/` and `@/ui/` to present portfolio pieces (images from `public/images/`) in a visually rich way
- May use InfiniteMenu, carousel, or GlassIcons for interactive design galleries

### Public assets

Portfolio images live in `public/images/`: `finance.png`, `global.png`, `income-cal.png`, `jp-work-cats.png`, `kakao.jpg`, `kakao2.png`, `M&A.png`, `MY DESIGN.png`, `MY DESIGN-2.png`, `optimizing-market.png`

### Data flow

The projects page (`/projects/[id]`) calls `/api` via `fetch` in a `useEffect`, receives an array of portfolio items, and renders them in a responsive grid (1–5 columns) with Framer Motion staggered animations.

### Styling conventions

- Tailwind with custom breakpoints: `mobile` (320px), `tablet` (640px), `laptop` (1024px), `desktop` (1280px)
- Global custom class `.primary-btn` defined in `globals.css` (orange CTA button)
- Dark theme: `bg-neutral-900` base, purple-to-pink gradients for cards
- Path alias `@/*` maps to the project root
- URL paths are **lowercase** (`/v1`–`/v6`) — folders were renamed from uppercase to avoid 404s on Linux/Vercel
