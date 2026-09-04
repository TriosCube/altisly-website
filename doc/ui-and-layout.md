# Altisly website: UI system and layout

A self-contained reference for anyone helping refine the design without repo access.
Everything below describes what is currently built and shipped.

Stack: Nuxt 3 (Vue 3, SSR on), Tailwind CSS v4 via `@tailwindcss/vite`, no component library.
Design tokens and custom utilities live in one file, `assets/css/main.css` (~950 lines).

---

## 1. Design tokens

### Fonts

| Role | Family | Notes |
| --- | --- | --- |
| Sans | `Onest` (300 to 800) | All headings and body. Loaded from Google Fonts. |
| Mono | `JetBrains Mono` (400, 500) | Eyebrows, labels, metrics, timestamps, stage names. Applied via the `font-code` utility. |

Body sets `font-feature-settings: 'ss01','ss03','cv11'` and antialiasing.

### Brand palette (fixed, both themes)

| Token | Value | Use |
| --- | --- | --- |
| `--brand` | `#C8F75D` | Lime. Primary accent, buttons, pills, active dots. |
| `--brand-soft` | `#E5FBA8` | Button hover. |
| `--brand-deep` | `#95C129` | Accent text on light backgrounds. Redefined to `#C8F75D` in dark theme so accent text stays readable. |
| `--on-brand` | `#0E2D22` (light) / `#061309` (dark) | Text placed on a lime surface. |
| `--positive` | `#2D8B5F` | |
| `--negative` | `#D14545` | |
| `--warn` | `#C99632` | |

### Surface tokens

Theme is set by `data-theme="light" \| "dark"` on `<html>`, written by an inline script in `<head>`
before paint (no flash). Preference persists to `localStorage` under `altisly-theme` with a third
`system` state. Cycle order on the toggle: light → dark → system.

| Token | Light | Dark |
| --- | --- | --- |
| `--bg` | `#F4F6F2` | `#0A1A12` |
| `--surface` | `#FFFFFF` | `#122A20` |
| `--surface-2` | `#ECEEEA` | `#163828` |
| `--surface-3` | `#E1E4DE` | `#1D4231` |
| `--text` | `#0F1410` | `#EFF2EC` |
| `--text-2` | `#2B3230` | `#D2D6CE` |
| `--muted` | `#6A716D` | `#8E9A91` |
| `--muted-2` | `#9CA09D` | `#6A766D` |
| `--border` | `#E3E6E0` | `#1B3527` |
| `--border-strong` | `#CDD0CB` | `#2A4E3A` |

### Invert tokens

The "invert" set is a deep green band used for full-width dark sections **inside** a light page. It
is not the dark theme. In dark theme it goes near-black so those bands still read as darker than the
page around them.

| Token | Light | Dark |
| --- | --- | --- |
| `--invert-bg` | `#0E2D22` | `#050C08` |
| `--invert-bg-2` | `#16382B` | `#0E2218` |
| `--invert-text` | `#EAEFE6` | `#EFF2EC` |
| `--invert-muted` | `rgba(234,239,230,0.62)` | `rgba(239,242,236,0.60)` |
| `--invert-border` | `rgba(234,239,230,0.10)` | `rgba(239,242,236,0.08)` |

### Radii and shadows

`--r-sm 8px`, `--r-md 12px`, `--r-lg 18px`, `--r-xl 28px`, `--r-pill 9999px`.

`--shadow-1` hairline, `--shadow-2` card lift, `--shadow-pop` `0 30px 80px -30px rgba(15,20,16,.32)`
for the big floating panels.

---

## 2. Custom utilities

Tailwind v4 `@utility` blocks, used instead of raw colour classes. Never use `bg-white`,
`text-gray-500` or a hex in a template; always a token utility.

**Surfaces** `bg-page` `bg-surface` `bg-surface-2` `bg-surface-3` `bg-invert` `bg-invert-2`
**Ink** `text-body` `text-subtle` `text-muted` `text-muted-2` `text-invert` `text-invert-muted` `text-on-brand` `text-brand-deep` `text-positive` `text-negative` `text-warn`
**Borders** `border-base` `border-strong` `border-invert`
**Shape** `rounded-pill` `rounded-isura-sm|md|lg|xl` `shadow-card` `shadow-pop` `shadow-nav`
**Type** `font-code` (mono), `text-display`, `section-title`, `section-sub`
**Layout** `container-isura` (max-width 1280px, 32px side padding, centred)
**Pieces** `btn-base` + `btn-lime|btn-ghost|btn-on-dark-ghost` + `btn-sm|btn-lg`, `chip`, `eyebrow-pill`, `bento-card`, `stage-card`, `panel`, `badge*`, `skeleton`, `prog-bar`/`prog-fill`, `theme-toggle`, `field-label`/`field-input`/`field-note`, `animate-marquee`

A large block of utilities (`kpi-*`, `view-tab*`, `dash-btn-*`, `side-buy`, `util-fill-*`, `sev-*`,
`live-chip`) was inherited from the app design system this stylesheet came from and is currently
**unused on the website**. It is dead weight and a candidate for deletion.

### Recurring patterns

- **Eyebrow**: `eyebrow-pill` containing a 24px lime circle with `✦`, then a short label. The `✦`
  glyph is the site's signature mark and recurs in headings, marquee separators and avatars.
- **Section label**: mono, 11px, `letter-spacing: .1em`, uppercase, `text-muted`.
- **Section heading**: `text-[clamp(32px,3.8vw,52px)] font-bold tracking-[-0.03em] leading-[1.05]`.
- **Hero heading**: `clamp(48px,6.4vw,92px)`, `tracking-[-0.035em]`, `leading-[0.98]`, with one
  phrase wrapped in a lime pill inline.
- **Numbered rows**: mono `01`, `02` in a 28px column, title, muted body, divided by `border-base`.

---

## 3. Chrome

**NavBar** (`components/layout/NavBar.vue`)
Sticky pill, `top: 14px`, max-width 1280px, translucent surface at 92% with 14px backdrop blur,
`rounded-pill`, `shadow-nav`. Left: logo. Centre: Work, About, Partnerships, Careers, Insights
(hidden below `md`). Right: theme toggle, ghost "Diagnose", lime "Talk to us".

**Footer** (`components/layout/AppFooter.vue`)
Four columns: brand blurb, The work (first four projects), Company, Legal. Bottom rule with
copyright and contact.

**Layout** `layouts/default.vue` is NavBar, slot, footer, on `bg-page`. Two pages opt out with
`definePageMeta({ layout: false })`: `/diagnose` (owns the viewport) and `/write` (private admin).

---

## 4. Page inventory

| Route | Purpose | Layout |
| --- | --- | --- |
| `/` | Landing, 8 sections | default |
| `/work` | All six builds as cards | default |
| `/work/[slug]` | Case study | default |
| `/about` | Story, principles, stats | default |
| `/diagnose` | Full-viewport scanner + brief modal | none |
| `/contact` | Intro plus enquiry form | default |
| `/careers` | Perks grid, open roles list | default |
| `/partnerships` | Three programme cards | default |
| `/blog`, `/blog/[slug]` | Insights index and post | default |
| `/legal/{privacy,terms,notice}` | Sidebar TOC plus sections | default |
| `/write` | Private post admin | none |

`/industries/**`, `/solutions/**` and `/diagnose/run` redirect. Old marketing routes redirect to `/`
or `/about`.

---

## 5. Landing page, section by section

Order in `pages/index.vue`. Every section is full-width; content is constrained by `container-isura`.

**1. HeroSection** Two columns at `lg` (`1.05fr 1fr`), stacked below.
Left: eyebrow pill, huge heading with a lime inline pill on the closing phrase, 18px muted
paragraph capped at ~32rem, two buttons (lime "Run a diagnostic", ghost "See the work"), then a four
column stat band with a top rule per stat, mono 26px value over 12.5px muted label.
Right: `HeroStage`.

**2. HeroStage** Decorative, `hidden lg:block`, 580px tall, absolutely positioned cards at fixed
offsets with small rotations (`rotate-2`, `-rotate-6`, `rotate-[4deg]`), overlapping in z-order, each
a `stage-card` (surface, `--r-lg`, hairline border, `shadow-2`, 20px padding). One card is dark
(`--text` ground), one is invert green with a lime sparkline, two are surface. A lime 80px circle
with a plus sign floats over them. Purely static, no motion.

**3. MarqueeSection** Full-bleed invert band, top and bottom hairline. Seven sector words at 22px
semibold separated by lime `✦`, list duplicated and translated `-50%` over 30s linear infinite.

**4. JourneySection** `min-height: 260vh` with a sticky `h-screen` inner, so the viewport holds
still while the page scrolls past. Centre-aligned label and heading (with a 56px lime circle inline).
Four cards in a row, each 280px, `perspective: 1400px`, rotating on Y as scroll progress passes
`0.34 + index * 0.13`. Front face: surface card, 56px lime numeral circle, title at the bottom.
Back face: invert card, mono caption, the sentence at the bottom. A hairline above the row fills
left to right with `scaleX(progress * 1.4)`. Bottom rule with two mono captions.

**5. BentoGrid** Three columns, `auto-rows-[240px]`, 16px gap. Six tiles:
a 2x2 invert tile with a chip, 36px heading, paragraph, a decorative concentric-orbit SVG bleeding
off the bottom right corner, and three mono stats pinned to the bottom; a lime tile with a circular
arrow button; a surface tile with a 42px lime icon circle; a 2x1 invert tile ending in a 12-bar
chart where four bars are lime; a surface tile.

**6. PrinciplesSection** Invert band, 90px vertical padding. Heading left, mono count right, then
four columns each with a top rule, a lime mono numeral and one 18px sentence. Deliberately has no
body copy.

**7. WorkShowcase** Two stacked scroll sections.
First, `150vh` with a sticky centred title that scales `0.9 → 1.0` and fades in on progress.
Second, `180vh` with a sticky grid of four cards. On scroll each card flies to its resting place
from a different edge (left, bottom, right, top by index modulo 4), interpolating translate, a
`0.52 → 1` scale and a rotation, eased with smoothstep, driven by one rAF loop writing inline
transforms. Pointer events are off until progress passes 0.9. Honours `prefers-reduced-motion` by
snapping to final state. Card: mono `alt × Name` lockup, 30px name, category, chips, then a
`surface-2` footer strip with role, tagline and a lime circular arrow.

**8. TestimonialSection** Full lime block, `--r-xl`, `1fr 2fr` split. Left: 64px circle with `✦`,
mono label, two small lines. Right: a 26px to 40px blockquote with one phrase highlighted on a
`--on-brand` chip, then three stats on top rules.

**9. CtaSection** Invert block with a lime radial glow bleeding off the bottom right. Left: heading
with a lime inline pill, paragraph, two buttons. Right: four label/value rows on rules, values in
mono 22px, two of them lime.

---

## 6. The diagnose scanner

`/diagnose` is the one page that breaks the site grid. Full viewport, no nav or footer, its own
minimal header (back link, two context links, theme toggle). It is theme aware: every ink derives
from `color-mix(in srgb, var(--text) N%, transparent)` and the ground is `--bg`, so it renders light
or dark with the rest of the site.

Composition:
- A 130-point field with staggered opacity and scale pulses.
- An intro state: a large sentence, a 67px lime ring button that breathes, and a hint line. Clicking
  it fades the intro out and the map in.
- A parametric constellation: ten nodes evenly spaced on an ellipse (`rx 40`, `ry 45` in a 0 to 100
  viewBox), each joined to the hub by a slightly bowed quadratic spoke. A packet ellipse rides each
  spoke inward on `animateMotion` over 6.4s, staggered 0.42s apart.
- A 26-hairline fan pivoting from the hub, sweeping 360 degrees over 16s. Stage 1 only.
- A lime hub with a 34rem radial bloom.
- The whole constellation leans away from the cursor within 340px, up to 36px, eased at 0.08 per
  frame, in a single rAF loop that also composes a stage-5 shrink to 0.78.
- Five stages that advance themselves every 6.2s until a manual choice takes over. Stage 2 lights
  three nodes; stage 3 draws a small window at the hub and rolls department tool names; stage 4
  materialises three agent nodes on a 6.6s roll-call cycle; stage 5 emits three expanding rings and
  a ledger of shipped systems.
- Left rail selects an industry, which swaps all ten node labels and the three agents.

**The brief modal** (`DiagnoseModal.vue`) opens over it from the bottom-right CTA. Light surface
panel on a blurred dark scrim, teleported to body, Escape to close, body scroll locked. It holds the
whole flow: eight questions one per screen with an underlined centred field and a segment rail, a
running state with a pulsing hub and five stage names, then a compact report. Backed by a two-pass
LLM call server side.

---

## 7. Conventions in force

1. **No raw colours in templates.** Token utilities only.
2. **No em dashes or en dashes in any copy.** Use a colon, a full stop or a comma.
3. **Terse sections.** A landing section is a heading plus one-line points. If it needs bodies,
   sub-bodies and a diagram, it is a page, not a section.
4. **Depth lives one click deeper.** Architecture diagrams and decision write-ups belong on
   `/work/[slug]`, not on the landing page.
5. **Short flows are modals**, not routes.
6. **No comments in component code.**
7. Mono is for labels and numbers; sans is for everything a person reads as a sentence.

---

## 8. Known weaknesses, open for redesign

**Content, the largest problem.** The landing copy is written from the engineering team's point of
view. It leads with input metrics ("700+ commits", "2 Rust services in production", "5 operational
domains"), publishes internal architecture (the in-house framework name, "schema per tenant",
"control plane vs runtime plane"), and exposes the business model (four of six featured builds are
the studio's own ventures). There is no named client, no outcome, no before and after. The four
principles are unfalsifiable aphorisms a buyer cannot act on. This reads as machine-written and
should be rewritten around who is served and what changes for them.

**Responsiveness is uneven.** The landing sections were given breakpoints during the rewrite, but the
hero stage is simply hidden below `lg`, and the two scroll-driven sections (`260vh` and `180vh`) have
not been tuned for short viewports or touch. The bento grid collapses to two columns then one, which
is untested on real devices.

**Motion budget is concentrated.** Three sections run scroll listeners and one runs a permanent rAF
loop with a canvas-free but node-heavy constellation. Nothing is virtualised or paused off-screen.

**Dead CSS.** Roughly a third of the utilities came from an application design system and are unused
here.

**Visual monotony.** Almost every section is either a surface card grid or a full-width invert band.
There is no photography, no illustration and no texture anywhere on the site. The only non-typographic
elements are three decorative SVGs and the constellation.

**Section rhythm.** Vertical padding varies between sections (60px, 90px, 110px, 100px) without a
system behind the variation.
