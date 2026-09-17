# SOLO — Learner Landing Page (React)

A single-page React recreation of the SOLO learner landing page, built with
Vite, plain embedded CSS (no Tailwind/UI kit), and Framer Motion for
animation.

## Getting started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/
    HomePage/          every section used on the landing page lives here,
                        one folder per component (Hero, Journey, Showcase, ...)
                        — grouped this way so a future second page (e.g.
                        DashboardPage/) can sit next to it without mixing files
  data/content.js       all page copy & sample data — edit this to change text
  index.css              design tokens (colors, type, spacing) + shared classes
  App.jsx                 assembles every HomePage section in order
public/
  images/
    avatars/            person photos used in the hero (see below)
    logos/              organization/course logos used in cards (see below)
```

Every component's CSS lives right next to it (e.g. `Hero.jsx` + `Hero.css`)
and is imported directly — nothing is loaded from a CDN or framework.

## Adding your own images

I couldn't generate real photos or logos, so the project uses clean colored
placeholders (initials in a circle) everywhere a real image belongs. Drop
files at the paths below and they'll show up automatically — no code changes
needed unless you rename something.

**Logo:** the "SOLO" wordmark is built from styled text in
`src/components/HomePage/Logo/Logo.jsx` (colored per letter using the brand
palette), so no logo file is required. If you'd rather use a real logo file,
replace the markup in that component with an `<img>` tag pointing at
`/public/images/logos/solo-logo.svg`.

**Hero floating cards** (`src/data/content.js` → `heroFloatingCards`):
- `/public/images/avatars/jane.jpg`
- `/public/images/avatars/molly.jpg`
- `/public/images/avatars/christina.jpg`

These aren't wired to an `<img>` tag yet (the placeholder is a colored
initials badge in `Hero.jsx`) — once you add the files, swap the
`avatar-placeholder` div for `<img src={card.image} className="avatar-img" />`
in `src/components/HomePage/Hero/Hero.jsx`.

**Course / opportunity / project logos** (`src/data/content.js` → `courses`,
`opportunities`, `projectSpotlight`): each entry has a `logo` path such as
`/public/images/logos/sayfol.png`. Same deal — add the file, then swap the
`logo-placeholder` div in `src/components/HomePage/EntryCard/EntryCard.jsx`
for an `<img>` tag.

## Editing copy

Everything you see on the page — headings, card text, stats, footer links —
comes from `src/data/content.js`. Change it there rather than in the
component files.

## Notes on the build

- **Animation:** Framer Motion powers the hero's staggered entrance and
  floating/parallax cards, scroll-triggered reveals on every section, the
  journey stepper's animated progress bar, and the drag-to-swipe + button
  carousel used for courses and opportunities.
- **Carousel centering:** the card sitting in the middle slot is always the
  one rendered bigger — it's computed from the current scroll position in
  `Carousel.jsx`, not tied to a specific item, so it moves with you as you
  click through instead of staying fixed on one card.
- **Responsive:** breakpoints are set per component's CSS file (search for
  `@media`) and the carousel adjusts how many cards are visible (3 → 2 → 1)
  based on viewport width.
- **Reduced motion:** a `prefers-reduced-motion` rule in `index.css` shortens
  all animations to near-zero for people who've asked their OS for that.
