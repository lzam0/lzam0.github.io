# Design

The visual system for the whole site. New pages and components should reuse
these tokens and patterns rather than introduce new ones.

## Colour

White is the main colour. Light blue is the accent, used sparingly.

| Token | Hex | Use |
| --- | --- | --- |
| `white` | `#ffffff` | Page background, cards |
| `sky-50` | `#f3f9ff` | Tinted panels, hover backgrounds |
| `sky-100` | `#e3f1fd` | Borders, dividers, background glows |
| `sky-200` | `#c6e3fb` | Primary buttons, number badges, photo offset blocks |
| `sky-300` | `#9dcff7` | Primary button hover, quote box accent |
| `sky-500` | `#3b9be6` | Highlighted words in headings, bullet markers, status dots |
| `sky-700` | `#1d5f99` | Small labels, tags, icon colour |
| `ink` | `#0f1b2d` | Text. Use opacity for hierarchy: `ink/70` body, `ink/60` secondary, `ink/40` labels |

Tokens live in `tailwind.config.ts`.

## Typography

| Role | Font | Classes |
| --- | --- | --- |
| Headings | Plus Jakarta Sans (`font-display`) | `font-bold tracking-[-0.01em]` |
| Body | Inter (`font-inter`, default) | `leading-relaxed` |
| Small labels | Inter | `text-xs font-semibold tracking-[0.15em] uppercase text-ink/40` |

Sizes:

- Page title / hero: `text-4xl sm:text-5xl` (hero goes to `lg:text-6xl`)
- Section heading: `text-3xl sm:text-4xl`
- Card heading: `text-lg`–`text-xl`, `font-semibold`

Don't tighten letter spacing beyond `-0.01em`; Plus Jakarta Sans gets cramped.

## Layout

- Content width: `max-w-6xl mx-auto px-4 sm:px-6`
- Section spacing: `py-20` on the home page, `space-y-24` between case study
  sections
- Header is sticky, white with blur, `h-16`, `border-b border-sky-100`
- Every layout must work at 390px wide with no horizontal scroll

## Components

**Buttons**

- Primary: `rounded-full bg-sky-200 hover:bg-sky-300 text-ink text-sm font-medium px-5 py-2.5`
- Pill / secondary: `rounded-full border border-sky-200 bg-sky-50 text-sky-700 text-xs font-medium px-3 py-1.5`
- Social: `rounded-full border border-sky-200 bg-white` with a `sky-700` icon

**Cards**

- `rounded-3xl border border-sky-100`, white or `bg-sky-50`, padding `p-6 sm:p-8`
- Hoverable cards add `hover:border-sky-200 hover:shadow-lg hover:shadow-sky-100`

**Tags**: `text-xs font-medium text-sky-700 bg-sky-50 px-2.5 py-1 rounded-full`

**Number badges**: `w-8 h-8 rounded-full bg-sky-200 text-sky-700 font-display font-bold`

**Photos**: rounded (`rounded-[2rem]`), `border-4 border-white`, a soft
`shadow-sky-200/50` shadow, and a `bg-sky-200` block offset behind them.

**Background glow**: a large blurred `bg-sky-100` circle in a top corner of
hero-style sections (`blur-3xl opacity-60`).

## Motion

- **Splash** (`components/Splash.tsx`): first load only. "leihl." with a
  filling bar, fades out after ~1s.
- **Reveal** (`components/Reveal.tsx`): wrap blocks so they fade up as they
  scroll into view. Stagger siblings with `delay={i * 100}`.
- The 👋 in the hero waves twice on load.
- Everything respects `prefers-reduced-motion`.

## Voice

First person, plain and direct, British spelling. Only real facts and
figures.
