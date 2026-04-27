# Design V2 — Brutalism+ Plan

> Direction: **C (cinético híbrido) + heavy A (system aesthetic) + heavy B (sticker/zine)**
> Mobile-first conscious. Animation budget: generous.

---

## 1. Global / Layout

### New components
- **`SideRail.tsx`** — fixed vertical strip on the right (desktop only) with rotating coordinates `[X:0247 Y:1832]` updating on mousemove + a vertical mini-marquee of section codes
- **`SystemTicker.tsx`** — top-right corner: live time `HH:MM:SS` + `STATUS: ONLINE` blinking dot (placed in Header)
- **`SectionMarker.tsx`** — reusable: `// SECTION_0X` + section code + animated underline. Replaces current `01 / INTRO` style with more system-y look

### Global CSS additions
- `@keyframes glitch-skew` — for 1-frame skew on hover
- `@keyframes blink-strong` — for status dots
- `@keyframes slow-spin` — for rotating badges
- New utility: `.tilted-pos` / `.tilted-neg` — rotation -3deg / +3deg
- `.brutalist-shadow` — hard shadow `4px 4px 0 var(--accent-r)` (no blur)
- Dotted/dashed border utilities
- `cursor-blink-strong` for tickers

---

## 2. Hero (`page.tsx`)

### Adds
- **System header bar** at very top: `[ PORTFOLIO::v2.0 ]` left · `LIVE` blinking dot center · `LISBON_BR-RJ // 22°54'S` right (tickers updating)
- **Counter** below scramble name: counts up from `0000` → years coding (`004`), projects shipped (`012`), commits this year (live increment), wrapped in `[ ... ]` brackets, mono
- **Coordinate corners** on hero section: tiny `0,0` top-left, `1920,1080` bottom-right (responsive)
- **Tilted sticker** floating: `// FRONTEND_DEV` rotated `-4deg` with hard `--accent-r` shadow, animated `wiggle` loop on hover
- **Letter-by-letter scramble** for the SOFTWARE/ENGINEER headlines (replace clip-reveal — much more brutalist feel)
- Magnetic buttons stay, but add `glitch-skew` on hover

### Mobile
- Side rail hidden, system header bar collapses to single line `[ v2.0 // LIVE ]`
- Counter stays full-width
- Tilted sticker shrinks but stays visible

---

## 3. Skills (`Skills.tsx`)

### Adds
- Section header: replace `02 / Skills` with `[ SECTION_02 // SKILLS_REGISTRY.json ]` + animated bracket pulse
- **Each category number** (01, 02...) becomes massive (8rem) outline number, rotated `-2deg`, peeking outside the card border (`overflow: visible`)
- **Skill tiles**: hover stays (already CSS), but add **1-frame glitch-skew** on hover + brand-color glow at corners
- **Sticker badges** floating between cards: `// FAVORITE`, `// LEARNING`, rotated, with hard shadow
- **Live counter** at end: `[ TECHNOLOGIES_TRACKED: XX ]` total skills count
- Replace category section divider with dashed border in some places (zine feel)

### Mobile
- Big outline numbers reduce to 5rem, still rotated
- Sticker badges hidden on `< sm:` (would clutter)

---

## 4. Experience (`experience/page.tsx`)

### Adds (this is where C gets cinematic)
- **Scroll-driven date line**: `NOV 2023 ──── PRESENT` line fills based on scroll progress. Add scrubber dot moving along
- **Sticky-pinned role title**: `FRONTEND DEVELOPER @ BANCO BARI` sticks to top while user scrolls through achievements (uses `position: sticky`)
- **Achievement cards** become tilted (`-1.5deg`, `+1.5deg` alternating) with hard `--accent-r` shadow on hover. Each gets a **giant outline number** (12rem) behind it, rotated
- **Tech stack badges**: replace flat row with rotated stickers (each at random `±3deg`), with hard shadow on hover. Hover deforms slightly
- **Vertical marquee** (desktop only): runs alongside achievements with `// BANCO_BARI · BANCO_BARI ·` repeating
- Section gets `[ COORDINATES: 22°54'S, 43°10'W ]` corner annotation
- Add a `// 1.5 YEARS_ACTIVE` ticker that counts months in real-time

### Mobile
- Sticky title still works but with reduced size
- Vertical marquee hidden
- Cards still tilted but reduced rotation (`±1deg`) for legibility

---

## 5. Projects (`projects/page.tsx`)

### Adds
- **Project numbers** become MASSIVE (10rem, outline only) — kind of a list with project numbers as the primary visual element
- **`IN PROGRESS` badge**: replace flat with rotating sticker (`slow-spin` animation, ~20s rotation), hard shadow, brutalist
- **Hover state** (already CSS): add letter-scramble for the title on hover (briefly scrambles then settles)
- **Tech tag stickers**: rotated random `±2deg`, hover scales + skews
- **Magnetic arrow** `↗` (already animates) — add letter trail effect on hover
- Section header: `// PROJECT_REGISTRY.git` style

### Mobile
- Numbers reduce to 6rem
- Rotations reduced to ±1deg max

---

## 6. CallToAction

### Adds
- Add a **giant rotating badge** in the corner: `[ AVAILABLE FOR HIRE ]` slow-spinning, brutalist hard shadow
- `LET'S TALK` headline gets the letter-scramble treatment on whileInView
- Buttons add glitch-skew on hover

---

## 7. Footer

### Adds
- Replace footer with system bar: `[ © 2026 ] [ BUILT_WITH: Next.js + ❤ ] [ STATUS: ONLINE ●blink● ] [ LAST_UPDATE: <date> ]`
- Coordinates at bottom corners
- Mini ticker: rolling status messages every 5s

---

## 8. New custom hooks / utilities

- **`useScramble(text)`** — generalize the existing scramble for reuse (Hero, headlines, hover effects)
- **`useCounter(target, duration)`** — animated number counter for tickers
- **`useLiveTime()`** — time HH:MM:SS, updates every 1s
- **`useGlitch(trigger)`** — CSS class toggle for 1-frame glitch-skew

---

## 9. Animation inventory (the dot)

| Where | Animation |
|---|---|
| Hero | Status dot blinking, counter ticking up, scramble headlines, tilted sticker wiggle |
| Skills | Hover glitch-skew, category number rotation, sticker pulse |
| Experience | Scroll-driven line fill, sticky pin, tilted card hover lift, vertical marquee |
| Projects | Spinning IN_PROGRESS badge, scramble title hover, magnetic arrow, tilted tags |
| CTA | Spinning AVAILABLE badge, scramble headline, glitch buttons |
| Global | Custom cursor (already), scroll progress (already), grain (already), side rail mouse-tracking |

---

## 10. Mobile checklist (always)

- All rotations reduced or removed if `< 640px`
- Side rail / vertical marquees hidden
- Coordinate corners simplified to single line
- Sticker badges either hidden or repositioned
- Counters and tickers stay (small footprint)
- Sticky pin in Experience tested on touch — fallback to non-sticky if it conflicts with scroll

---

## Libraries

**No new deps.** Everything via Framer Motion + CSS keyframes. Stays lean.
