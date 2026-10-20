# Build Page — updated components

Your zip only contained the four component folders (`HeroB`, `AboutB`,
`LiveProjectsB`, `ReviewB`), not the page file that assembles them or your
global stylesheet/tokens — so I worked from those four plus your screenshots
and the Learner Guide. Everything below drops into the same folder pattern
you're already using.

## What changed vs. new

**Enhanced (same folder name, same public API — drop-in replacement):**
- `HeroB` — added a secondary "See how it works" CTA, and the build board now
  shows a live pipeline (In progress → Feedback ready → Under assessment →
  Verified) instead of static labels.
- `AboutB` — the four format cards (now ordered Live Project, Hackathon, Team
  Build, Build for Free) got numbering, an arrow that reveals on hover, and a
  tightened headline ("Choose how you want to build.").
- `LiveProjectsB` — cards now show org, skill count, mode, hours, and cost
  (pulled from your existing listings — nothing invented), plus working
  category filter chips. Kept your existing screenshots and the light/dark
  toggle.
- `ReviewB` — kept the three-step row, added a mock review panel that loops
  between "needs iteration" and "approved" states (labelled "Example" so it
  reads as illustrative, not a live scoring system).

**New sections, in the order the story wants them:**
1. `HeroB`
2. `PhilosophyB` — "Learning gives you knowledge. Building gives you
   evidence." with the LEARN → BUILD → GET REVIEWED → PROVE → SHOWCASE strip.
3. `AboutB`
4. `LiveProjectsB`
5. `JourneyB` — the 7-step "brief to verified proof" timeline (`id="journey"`,
   linked from the hero's secondary CTA).
6. `ReviewB`
7. `EvidenceB` — Project → Evidence → Assessment → Verified credential →
   Profile, with a mock credential card.
8. `CareerB` — Build → Career ecosystem chain (Project → Skills → Credential
   → Profile → Resume → Opportunity).
9. `SkillGapB` — the Skill Match Analysis concept (matched / partially
   matched / missing) tied back to recommended builds.
10. `FinalCtaB` — closing full-width CTA.

If you already have a separate "Turn what you learn into trusted digital
proof" credential CTA elsewhere on this page (visible in your fifth
screenshot but not included in the zip), decide whether it's replaced by
`EvidenceB` + `FinalCtaB` or kept as a distinct section — I didn't touch it
since I don't have that file.

## Assumptions (couldn't verify without the rest of the repo)
- Global CSS tokens referenced (`--orange`, `--peach`, `--ink`, `--success`,
  `--gold`, `--blue`, `--night`, `--font-display`, `--font-mono`, `--radius-*`,
  `--shadow-*`, etc.) already exist, since your four original files use them.
  No new tokens were introduced.
- `container`, `eyebrow`, `btn`, `btn-primary` are existing global utility
  classes (used as-is). I added a local, scoped fallback for `.btn-ghost` in
  `HeroB.css` in case that utility doesn't exist yet — safe to delete once you
  confirm it does.
- `../../shared/ThemeToggle/ThemeToggle.jsx` exists at that path (referenced,
  not modified).
- `framer-motion`, `react-router-dom`, and `lucide-react` are already
  installed (all three were already imported in your original files).

## Wiring it up
In whatever file currently renders `<HeroB /><AboutB /><LiveProjectsB />
<ReviewB />` (a page component not included in the zip), import and render in
this order:

```jsx
import HeroB from './BuildPage/HeroB/HeroB.jsx'
import PhilosophyB from './BuildPage/PhilosophyB/PhilosophyB.jsx'
import AboutB from './BuildPage/AboutB/AboutB.jsx'
import LiveProjectsB from './BuildPage/LiveProjectsB/LiveProjectsB.jsx'
import JourneyB from './BuildPage/JourneyB/JourneyB.jsx'
import ReviewB from './BuildPage/ReviewB/ReviewB.jsx'
import EvidenceB from './BuildPage/EvidenceB/EvidenceB.jsx'
import CareerB from './BuildPage/CareerB/CareerB.jsx'
import SkillGapB from './BuildPage/SkillGapB/SkillGapB.jsx'
import FinalCtaB from './BuildPage/FinalCtaB/FinalCtaB.jsx'

function BuildPage() {
  return (
    <>
      <HeroB />
      <PhilosophyB />
      <AboutB />
      <LiveProjectsB />
      <JourneyB />
      <ReviewB />
      <EvidenceB />
      <CareerB />
      <SkillGapB />
      <FinalCtaB />
    </>
  )
}
```

No routes, nav, or existing functionality were touched — this only replaces
what's inside the Build page's section list.
