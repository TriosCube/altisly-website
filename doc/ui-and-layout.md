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
Sticky pill, `top: 14px`, max-width `72rem`, translucent surface at 88% with 14px backdrop blur,
`rounded-pill`, a hairline border and no shadow. Roughly 18 percent shorter than the first version:
`py-1.5` on the bar, `0.38rem` on the links, 13.5px labels, `2rem` icon buttons. Left: logo. Centre: two mega-menu triggers (Work, Company) plus plain
links (Insights, Contact). Right: a Global dropdown, theme toggle, ghost "Diagnose", lime "Talk to
us", and a burger below `lg`.

**Mega menus.** A panel drops beneath the pill, full width of the container, `--r-xl`, `shadow-pop`,
laid out `1fr 20rem`: two link columns on the left, a dark feature card on the right. Each link is an
icon tile in lime, a title and a one-line description. Opens on hover or click, closes on mouseleave
of the whole nav block, on Escape, and on route change. `aria-expanded` on the triggers; the caret
rotates when open.

**Global dropdown.** Lists where Altisly operates, taken from the legal pages: Nigeria (Lagos),
Ghana, United Kingdom. It is a presence indicator, not a locale switcher. There are no country
sites, so it must never behave like one.

**Mobile.** Below `lg` the burger opens a scrollable sheet under the pill listing every destination
grouped by menu, the presence list and a theme control. Before this, the nav simply hid its links
below `md`, so a phone had no navigation at all.

**Footer** (`components/layout/AppFooter.vue`)
Four columns: brand blurb, The work (first four projects), Company, Legal. Bottom rule with
copyright and contact.

**Layout** `layouts/default.vue` is NavBar, slot, footer, on `bg-page`. Two pages opt out with
`definePageMeta({ layout: false })`: `/diagnose` (owns the viewport) and `/write` (private admin).

---

## 4. Page inventory

| Route | Purpose | Layout |
| --- | --- | --- |
| `/` | Landing, 9 sections | default |
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

## 5. Landing page as built today, section by section

Order in `pages/index.vue`. Every section is full-width; content is constrained by `container-isura`.
Motion is described in full in section 6.

**1. HeroSection** Two columns at `lg`, stacked below. Headline, one-line lede, buttons, then the
capability rail. The inner grid holds `min-height: 58vh` and the rail sits `5.5rem` below it, so the
first viewport carries the headline and the scene; the rail is found on scroll. **Motion: staggered entrance,
a lime field wiping in behind the closing phrase, and a scroll recede.**

The lime mark is a field behind the text rather than a pill around it: asymmetric radius
(`4px 20px 6px 22px`), tight vertically, wiping in with `scaleX` from the left at 420ms, with the
`✦` sitting outside the field's top-right corner.

The rail is one rule with four cells beneath it, each a lime mono number, a label and one line. Two
columns below `900px`.

**2. HeroStage** `lg` and above only, 34rem tall. Three cards joined by two fine bezier wires with a
lime pip at each junction: an approval, an exceptions count, and today's record. All three sit
inside the stage bounds, with only the exceptions card bleeding one percent past the right edge.
**Motion: entrance, a running state machine, and pointer parallax.**

The scene runs. Every 2.6s it advances a six-step cycle: the approval ticks prepared, then approved,
an exception clears and a lime signal travels the wire from the exceptions card down to the record
card, the record lights and reads Reconciled, then it rests and resets. Nothing explains it in copy.
The illustration demonstrates the headline.

Pointer parallax is capped at 6px horizontally and 5px vertically, eased at `0.08` per frame.

A conveyor belt version was built and reverted. The scene reads better as three related objects with
visible connections than as a row streaming past.

**3. MarqueeSection** Full-bleed invert band. A fixed mono label behind a vertical rule, then
friction phrases in mono uppercase separated by lime `✦`. Sits above the hero in `z-index` with a
soft upward shadow, so as the hero recedes the strip reads as rising over its bottom edge. This is
the stacked-takeover language introduced on the first screen.
**Motion: infinite CSS marquee, 52s.**

**4. JourneySection** Sticky scroll section, `260vh` tall. Four flip cards.
**Motion: scroll-progress driven flips plus a filling rule.**

**5. BentoGrid** Three columns, `auto-rows-[240px]`, 16px gap, six tiles: a 2x2 invert tile with a
chip, 36px heading, paragraph, a decorative concentric-orbit SVG bleeding off the bottom right
corner and three mono stats pinned to the bottom; a lime tile with a circular arrow button; a
surface tile with a 42px lime icon circle; a 2x1 invert tile ending in a 12-bar chart where four
bars are lime; a surface tile. **No motion.**

**6. PrinciplesSection** Invert band, 90px vertical padding. Heading left, mono count right, then
four columns each with a top rule, a lime mono numeral and one 18px sentence. **No motion.**

**7. WorkShowcase** Two stacked sticky scroll sections, `150vh` then `180vh`.
**Motion: scroll-driven title scale, then four cards flying in from four edges.**

**8. TestimonialSection** Full lime block, `--r-xl`, `1fr 2fr` split. Left: 64px circle with `✦`,
mono label, two small lines. Right: a 26px to 40px blockquote with one phrase highlighted on a
`--on-brand` chip, then three stats on top rules. **No motion.**

**9. CtaSection** Invert block with a lime radial glow bleeding off the bottom right. Left: heading
with a lime inline pill, paragraph, two buttons. Right: four label/value rows on rules, values in
mono 22px, two of them lime. **No motion.**

---

## 6. Motion inventory

Read this before proposing any animation change. It is the complete list: everything that moves on
the site is here, and five of the nine landing sections are deliberately still.

### 6.1 The scroll-progress primitive

`composables/useSectionProgress.ts` is the only scroll abstraction. It returns a ref to attach to a
tall section and a `0 → 1` progress number:

```
progress = clamp(-rect.top, 0, section.offsetHeight - window.innerHeight)
           / max(section.offsetHeight - window.innerHeight, 1)
```

So progress is `0` while the section's top edge is at or below the viewport top, and reaches `1`
when its bottom edge arrives at the viewport bottom. It listens to `scroll` (passive) and `resize`,
recomputes synchronously and writes to a reactive ref. There is no throttle and no
IntersectionObserver anywhere on the site.

The pattern in both scroll sections is the same: a tall outer section (`260vh`, `180vh`) with a
`sticky top-0` inner that is one viewport tall. The viewport appears frozen while the page scrolls
past, and progress drives what happens inside.

### 6.2 Hero, section 1

Three things, all cheap. An entrance: `is-in` is set on mount and a `--i` custom property staggers
each block by 110ms, with the lime field wiping in at 420ms and the star arriving at 1000ms.

A scroll recede: one rAF-backed handler sets `--recede`, the hero's own scroll progress, driving
`translateY(-26px)`, `scale(0.96)` and opacity to `0.65`. The strip beneath has a higher `z-index`,
so the hero appears to sink under it.

The stage runs its own 2.6s state machine and a pointer-parallax loop. See section 5.

### 6.3 Marquee, section 2

Pure CSS, no JS. The seven-item list is rendered twice into one flex row, and the row translates
`0 → -50%` over `30s linear infinite` (`@keyframes marquee`, applied by the `animate-marquee`
utility). Because the content is exactly duplicated, the reset at `-50%` is invisible.

Slowed from 30s to 52s so it reads as ambient movement rather than a news ticker, and it now honours
`prefers-reduced-motion`, which closes the one motion gap this document used to flag. Still never
pauses off-screen.

### 6.3b Journey flip cards, section 6

Outer section `min-height: 260vh`, inner `sticky top-0 h-screen`, so the section holds still for
roughly 1.6 viewports of scrolling.

**Card flips.** Each card is a `perspective: 1400px` box containing a `transform-style: preserve-3d`
inner with two `backface-visibility: hidden` faces, the back pre-rotated `180deg`. A card flips when

```
progress > 0.34 + index * 0.13
```

so thresholds land at `0.34`, `0.47`, `0.60`, `0.73`. The flip itself is a CSS transition,
`transition-transform duration-700 ease-out`, triggered by a class toggle. Scroll therefore sets the
trigger point; it does not scrub the rotation. Scrolling back up unflips them.

**The rule.** A hairline above the card row is scaled with `scaleX(min(progress * 1.4, 1))` from a
left origin, `transition-transform duration-200 ease-out`, so it completes at progress `0.71`,
roughly as the last card turns. Hidden below `lg`.

### 6.4 Artefact reveal, section 3

The only new motion. An `IntersectionObserver` with `rootMargin: -12% 0px -12% 0px` fires once, adds
`is-shown`, and disconnects. Each artefact rises `1.4rem` into place over 700ms
`cubic-bezier(.22,1,.36,1)`, staggered 110ms via `--i`, keeping its rotation throughout: the cards
arrive, they do not straighten. Staying crooked is the point of the section.

Below `lg` the artefacts are a plain wrapped flex row. At `lg` and above they are absolutely placed
across a `34rem` canvas, overlapping the heading's column.

`prefers-reduced-motion` shows everything immediately and never observes. It plays once, in place.
No sticky section, no scroll scrubbing.

### 6.5 Stacked takeover, section 4

Four capability panels, each `position: sticky; top: 4vh; height: 92vh`, with an ascending
`z-index`. Near full screen and near full bleed: the panels sit outside `container-isura`, inset
only `0.75rem` to `1.6rem` from the viewport edge, so an incoming panel visibly covers the one
behind rather than sliding into a column. Because they are sticky siblings, each panel pins itself and the next one scrolls up
**over** it rather than waiting for it to leave. That part is free: no JavaScript sets the stacking.

What JavaScript adds is the recession. One scroll handler behind `requestAnimationFrame` computes a
continuous head position:

```
step = stack.offsetHeight / stageCount
head = clamp(-stackRect.top, 0, stack.offsetHeight) / step
recede[i] = clamp(head - i, 0, 1)
```

`recede[i]` is how far the next panel has advanced over panel `i`, and drives one transform plus one
overlay:

| Property | At rest | Fully covered |
| --- | --- | --- |
| `translateY` | 0 | `-22px` |
| `scale` | 1 | `0.962` |
| `rotate` | 0 | `-0.7deg` |
| page-colour overlay | 0 | `0.34` |

Restrained on purpose. The panel behind should read as pushed back, not thrown.

**Layout inside a panel** follows the reference: a mono number, an oversized centred title, one mono
line beneath it, then a wide interface composition that fills the remaining height and is cropped by
the panel's bottom edge, so it reads as a screen continuing past the fold.

**Tones alternate** so the stack never looks like four copies of one card: deep green, light surface,
lime, deep green. Every surface inside a composition is built from `color-mix` against
`currentColor`, so the same markup reads correctly on all three grounds.

The four compositions: a posted ledger with one pending row, a request-to-posted board, a nightly
run log with one step in flight, and a staff portal form. Real operational surfaces rather than
service icons.

Total footprint is roughly `368vh`, four panels at `92vh`.

Under `prefers-reduced-motion` the handler never attaches, the panels drop to static flow at natural
height, and nothing transforms.

### 6.6 Scrubbed statement, section 8

The third signature, and the only scrubbed motion on the site. `180vh` outer, `h-screen` sticky
inner. The whole sentence is present from the first frame at 20 percent opacity. Scroll position
drives a reading head across it:

```
head   = progress * (wordCount + spread * 1.6)
amount = clamp((head - wordIndex) / spread, 0, 1)     // spread = 2.6 words
opacity = 0.2 + amount * 0.8
```

Because `spread` is 2.6, roughly three words are mid-transition at any moment, which gives the soft
leading edge. Nothing moves and nothing fades in or out; only contrast advances, so the effect is
attached to the finger rather than played back after a trigger.

**Why word interpolation rather than a clip mask.** The statement wraps to three lines. A horizontal
clip advances across a box, not along a wrapped text flow, so it would need one mask per line and
would break at any other width. Interpolating per word is resolution independent and wraps freely.

The final phrase, "works better.", switches to lime once its own amount passes 0.55, so the brand
colour lands exactly as the sentence completes. The four commitments fade in beneath between
progress 0.78 and 0.92.

Behind it sits a faint field of grid lines and lime intersection points, rising from 35 to 100
percent opacity across the section. Restrained, and drawn from the same vocabulary as the scanner
and the model diagram.

Under `prefers-reduced-motion` every word renders at full contrast, the sticky and the `180vh` are
dropped, and the section becomes ordinary padded content.

### 6.7 Text reveals, sections 5 and 7

The quiet sections share one pattern: a single observer per section, a `.reveal` class, `0.9rem` to
`1rem` of rise, 720ms to 760ms, staggered by a `--i` custom property. Cheap, once, in place.

### 6.8 Work showcase, removed

Deleted with the homepage rewrite. It was two sections. The first was the title, the second the cards.

**Title, `150vh`.** Sticky centred block. Inline style bound to progress:
`transform: scale(0.9 + p * 0.1)` and `opacity: min(0.35 + p * 1.6, 1)`, with
`transition-all duration-500 ease-out` smoothing the steps. The title therefore arrives at 90% scale
and 35% opacity and settles at full size by progress `0.41`.

**Cards, `180vh`.** This one does not use the composable. It runs its own rAF loop writing inline
transforms directly, because a Vue reactive update per scroll event would be too coarse.

Progress is a blend of two measures, so the cards begin moving as the section enters the viewport
rather than only once it is pinned:

```
entry    = clamp((innerHeight - rect.top) / innerHeight, 0, 1)
raw      = clamp(-rect.top, 0, height - innerHeight) / (height - innerHeight)
mixed    = entry * 0.48 + raw * 0.52
p        = mixed * mixed * (3 - 2 * mixed)      // smoothstep
```

Each card is assigned a start position by `index % 4`, computed from its own resting offset so it
starts fully outside the viewport on that edge, plus an `exitMargin` of `max(28px, viewportWidth * 0.025)`:

| index % 4 | enters from | start rotation |
| --- | --- | --- |
| 0 | left | `-7deg` |
| 1 | bottom | `+4deg` |
| 2 | right | `+7deg` |
| 3 | top | `-4deg` |

Each frame writes one composed transform per card:

```
inverse = 1 - p
translate3d(startX * inverse, startY * inverse, 0)
scale(0.52 + p * 0.48)
rotate(startRotation * inverse)
```

`pointer-events` stays `none` until `p > 0.9`, so a card cannot be clicked while still flying.
`prefers-reduced-motion: reduce` short-circuits the whole loop and snaps every card to
`transform: none`. Cards carry `will-change: transform`.

This is the only section on the site that reads layout (`getBoundingClientRect`, `offsetLeft`,
`offsetTop`) inside a rAF loop every frame while scrolling.

### 6.9 Diagnose scanner

The heaviest motion on the site, and the only permanent rAF loop. Full description in section 7.
Summary of the moving parts: 130 pulsing points on staggered delays; two breathing rings on the
entry button; ten packets riding quadratic spokes inward on SVG `animateMotion` (6.4s, staggered
0.42s); a 26-hairline fan rotating 360 degrees over 16s; a hub pulsing on a 5.2s cycle; ten nodes
floating on a 4.5s cycle staggered 0.12s; three agent nodes on a 6.6s roll-call so they hand over
rather than pulse together; three expanding rings at stage five; a stage machine advancing every
6.2s until the visitor takes over; a tool roll cycling every 2.1s; a ledger row arriving every 1.5s;
and a permanent rAF loop easing the whole constellation away from the cursor at `0.08` per frame
within a 340px radius, up to 36px, composed with a stage-five shrink to `0.78`.

`prefers-reduced-motion` freezes the pointer loop and the named keyframe animations.

### 6.10 Small transitions

- **Brief modal**: Vue `<Transition>`, backdrop 240ms opacity, panel `translateY(1.2rem) scale(.985)`
  over 280ms `cubic-bezier(.22,1,.36,1)`. Question text re-animates on each step via a `:key` change.
- **Cookie banner**: Vue `<Transition>`, 220ms opacity and transform.
- **Nav and buttons**: hover colour and background transitions, 120ms to 200ms. Buttons
  `active:translate-y-px`.
- **Skeletons**: `@keyframes skeleton-shimmer`, a 400px background sweep, used on the blog index.
- **`pulse-dot`**: defined in the stylesheet, currently unused.

### 6.11 Motion rules in force

1. Scroll-driven sections use the sticky pattern: tall outer, `sticky top-0` inner one viewport tall.
   Entrance animations that play once use an `IntersectionObserver` and a class toggle instead.
2. Threshold flips use a CSS transition on a class toggle; continuous motion writes inline
   transforms from rAF. Do not mix the two on one property.
3. Anything continuous and expensive must check `prefers-reduced-motion`. The work showcase and the
   scanner do; the marquee does not.
4. Decorative motion is `aria-hidden`.
5. No animation library. No GSAP, no Framer, no Lenis, no smooth-scroll hijacking.
6. **Alternate intensity.** A section carrying real interaction is followed by one that is still.
   Three signatures per page is the ceiling.
   The scrubbed-typography treatment is used once, on the belief statement, and nowhere else.
7. **No two sections share a mechanism.** If a behaviour already exists on the page, the next
   section needs a different one or none at all.

---

## 7. The diagnose scanner

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
- The constellation leans away from the cursor within 340px, up to 36px, eased at 0.08 per frame.
- Five stages advancing every 6.2s until a manual choice takes over. Stage 2 lights three nodes;
  stage 3 draws a small window at the hub and rolls department tool names; stage 4 materialises
  three agent nodes; stage 5 emits expanding rings and a ledger of shipped systems.
- A left rail selects an industry, swapping all ten node labels and the three agents.

**The brief modal** (`DiagnoseModal.vue`) opens over it from the bottom-right CTA. Light surface
panel on a blurred dark scrim, teleported to body, Escape to close, body scroll locked. It holds the
whole flow: eight questions one per screen with an underlined centred field and a segment rail, a
running state with a pulsing hub and five stage names, then a compact report. Backed by a two-pass
LLM call server side.

---

## 8. Conventions in force

1. **No raw colours in templates.** Token utilities only.
2. **No em dashes or en dashes in any copy.** Use a colon, a full stop or a comma.
3. **Terse sections.** A landing section is a heading plus one-line points. If it needs bodies,
   sub-bodies and a diagram, it is a page, not a section.
4. **Depth lives one click deeper.** Architecture diagrams and decision write-ups belong on
   `/work/[slug]`, not on the landing page.
5. **Short flows are modals**, not routes.
6. **The Journey flip cards are protected.** The mechanic is not to be redesigned, simplified,
   replaced or removed. Content may change; the interaction may not. It is the homepage's one
   theatrical moment and every other section is deliberately given a different behaviour, so that
   the reveal stays distinctive rather than becoming the house style.
7. **No comments in component code.**
8. Mono is for labels and numbers; sans is for everything a person reads as a sentence.

---

## 9. Agreed direction: the homepage rewrite

Reviewed and agreed in September 2026. This section records what we decided to build and why, so it
does not have to be re-argued.

### 9.1 The diagnosis

The homepage was written from the engineering team's point of view. Three faults:

**It led with input metrics.** "700+ commits across two flagships", "2 Rust services in production",
"5 operational domains". Commits are effort, not results. No buyer chooses a firm on commit count,
and reaching for whatever can be counted is the standard tell of machine-written copy.

**It published internals and the business model.** The in-house framework name, "schema per tenant",
"control plane versus runtime plane", "typed from OpenAPI", plus "venture building" and "Studio
venture" labels on four of six featured builds. A competitor learned the architecture; a visitor
learned the company mostly builds for itself.

**It had no client in it.** No named customer, no outcome, no before and after. The four principles
were unfalsifiable aphorisms. The lime section was an internal engineering opinion set in
blockquote marks beside an avatar-style circle, so it read as a fabricated testimonial.

### 9.2 Scope

**Only `pages/index.vue` and the components that render its sections**, plus copy in
`data/content.ts`. Not `/work`, not case studies, not `/about`, `/diagnose`, partnerships, careers,
blog, legal, or the design system. This is a positioning and content pass, not a redesign. Preserve
the visual identity, the section mechanics and the animations.

### 9.3 Hard rules

1. No `Rust`, `OpenAPI`, `schema per tenant`, `control plane`, `runtime plane`, the framework name,
   commit counts, or any other implementation detail.
2. No explanation of the internal venture or business model.
3. No invented customers, testimonials, revenue, impact numbers or operational metrics. Rules 1 and
   3 together remove every number currently on the homepage.
4. Products may appear as evidence of capability, never as an explanation of how the company earns.
5. Business and problem language first.
6. Removing engineering language must not mean replacing it with "innovative solutions that empower
   businesses". Corporate does not have to mean unspecific.
7. Keep the terse convention: a heading plus one-line points.
8. Keep the UI identity and interactions unless a component genuinely cannot carry the new content.

### 9.4 Writing rules

The structure is settled. The remaining risk is filling a good structure with polished corporate
language, which fails the brief exactly as badly as the engineering language did.

**Banned vocabulary.** innovative, cutting-edge, empower, seamless, leverage as a verb, solutions as
a bare noun, passionate, committed to, forward-thinking, world-class, best-in-class, holistic,
synergy, robust, transform your business, take you to the next level, unlock, end-to-end as a
buzzword rather than a description.

**Banned constructions.**

- The abstract tricolon: "people, process and technology", "strategy, design and delivery". Three
  abstract nouns in a row is the single most common tell in machine-written copy.
- The empty relative clause: "a company that is dedicated to ...".
- Present participle padding: "helping organisations to ...", "enabling businesses to ...".
- Uniform sentence length. Real writing varies between four words and twenty five.

**The substitution test.** Swap Altisly for any competitor's name. If the sentence is still true, it
says nothing and must be cut or made specific.

**Prefer concrete nouns.** Spreadsheet, approval, ledger, month-end, handover, reconciliation,
audit, queue. Not "operational excellence", "digital journey", "value creation".

**Voice.** Active, present tense, plain. State the thing, then stop. Do not open consecutive
sections with "We".

### 9.5 Target narrative

The homepage answers, in order: who this company is, what kind of company it is, where it operates,
whether it recognises the visitor's problem, what it can do about it, how it works, what it stands
for, what it believes, and how to start.

**The first half belongs to the visitor.** The page spends four sections on the visitor's world
before it says a word about what kind of company Altisly is, and only then talks about itself. The
sequence borrows its commercial logic from SeamlessHR: proposition, context, recognition, offering,
method, then identity. Who we are sits at position six deliberately, because a stranger does not yet
care who we are at position two.

| # | Section | Component | Tempo | Change |
| --- | --- | --- | --- | --- |
| 1 | Hero | `HeroSection` + `HeroStage` | motion | Copy, capability band, unbranded stage cards. |
| 2 | Where work gets hard | `MarqueeSection` | motion | Fixed label, moving friction phrases, 52s. |
| 3 | When the tools stop fitting the operation | `ProblemsSection` | quiet | Scattered artefacts, revealing on entry. |
| 4 | What we do | `StackSection` ⭐ | **signature** | Four capability stages taking over one another on a sticky stack. |
| 5 | Sometimes the software is the easy part | `StatementSection` | quiet | Typography only. Text reveal. |
| 6 | How we work | `JourneySection` ⭐ | **signature** | Protected flip cards. Content only. |
| 7 | Who we are | `WhoWeAre` | quiet | Oversized line, three traits entering in sequence. |
| 8 | Our defining belief | `BeliefSection` ⭐ | **signature** | Scroll-scrubbed typography. The commitments follow it. |
| 9 | Let's talk | `CtaSection` | quiet | What happens next. |

### 9.5.1 Tempo

The page alternates deliberately: motion, quiet, signature, quiet, signature, quiet, signature,
climax, quiet. Three sections carry real interaction and everything between them is still, so the
signatures read as moments rather than as a house style.

The three signatures are the stacked takeover, the flip cards and the scrubbed statement. Each uses a
different mechanism: panels physically covering one another, cards turning at scroll thresholds, and
typography lit word by word in proportion to scroll position. No two sections share a behaviour.

Borrowed from NestJS: the stacked takeover, the scrubbed typography, heterogeneous section
compositions and alternating intensity. None of its appearance.

**The page carries two quartets, and they answer different questions.** The hero band lists the four
capabilities: Systems, Products, Automation, Strategy. That is the commercial answer to "what can I
hire you for". The model diagram carries the four layers of the problem: the operation, the system,
the data, the control. That is the intellectual answer to "why does this not fit a software brief",
and it is what earns the Who we are line three sections later.

The reserved proof slot sits between the band and the marquee. When two or three defensible
outcomes exist, or customers who can be named, they go there.

**Where the ideas came from.** Breeze: state the mess before the solution, and make a complicated
company understandable in seconds. SeamlessHR: arrange the page as proposition, trust, offering,
proof, action, and keep the corporate story off the front. Neither site's appearance was copied,
only its information hierarchy.

**`WorkShowcase.vue` is removed from the homepage and deleted.** It consumed `150vh` for its title
plus `180vh` for the cards, spending a third of a kilometre of scroll on projects, on a page whose
job is introducing a company. `/work` already renders its own cards. Evidence survives on the
homepage as a link inside the statement tile.

Two new sections, one removed. The page ends up shorter and better answered.

### 9.6 Two traps to design against

**The hero band must not force sectors into a component built for statistics.** The existing band is
a big mono number over a muted label. With no legitimate numbers, dropping sector names into that
shape reads as a workaround. Redesign the piece: a mono uppercase label over one short line, four
across, keeping the four-column rule rhythm but not the numeric form.

**What we do and Problems we solve must not restate each other.** They are opposite viewpoints.

| | Problems we solve | What we do |
| --- | --- | --- |
| Voice | The client recognising themselves | Altisly looking outward |
| Content | Symptoms, in the client's words | Capabilities, in ours |
| Example | "The critical work is still manual" | "Automation" |
| Mentions Altisly | Never | Throughout |

If a line in Problems names a capability, it has drifted. If a tile in What we do describes a
symptom, it has drifted.

### 9.7 Naming, resolved

The public site says **Altisly**. Altis Platforms Limited is the registered entity and appears only
where a registered entity belongs: the legal pages and the footer's small print. The homepage never
says "Altis Platforms Limited".

This explicitly is **not** a rebrand to "Altis". Renaming the brand would be a site-wide exercise
across the logo, footer, metadata, domain and legal pages, and must never be decided as a side
effect of a homepage copy pass.

### 9.8 Still open

**The buyer is not named.** The copy addresses "organisations whose operations carry money, records
or regulatory risk", the widest honest reading. Naming the single buyer most wanted would sharpen
the hero and let the four hero columns be ordered by commercial priority.

**No real outcome number exists.** One real figure, even a single before and after, would be worth
more than any section on this page. When two or three defensible outcomes exist, or customers who
can be named publicly, they go into the reserved slot directly beneath the hero buttons, before any
further section is added. Proof at that position is the highest-value addition the homepage can
take.

**One promise in the CTA is a commitment, not copy**: a reply within one business day. The written
scope inside a week was cut deliberately, since it could not be honoured for large or ambiguous
engagements.

**The footer still lists product names** under "The work", and `/about` still carries the commit
count and the venture-building paragraph. Both sit outside the agreed homepage scope and are the
obvious next pass.

### 9.9 Final copy, shipped

Approved and built. Differences from the earlier draft: the eyebrow went broad rather than
regulated-specialist; the hero sub no longer says "hands over", so the handover promise lands later
in How we work and What we stand for; Applied AI was dropped as a standalone capability and
Technology strategy took the fourth tile; "we stay until the new way of working holds" became "we
build until the new way of working can stand on its own"; and the one-week scope promise was
removed.

**01 Hero**

> Eyebrow: `Built for work that has to hold up`
>
> # We build the systems businesses run on.
>
> Altisly designs and builds the software behind day to day operations: the ledgers, approvals,
> records and workflows a business cannot afford to get wrong.
>
> `Talk to us`  `Run a diagnostic`

Band, four columns, mono uppercase label over one line:

| Label | Line |
| --- | --- |
| SYSTEMS | Records, ledgers and approvals. |
| PRODUCTS | Ideas turned into working software. |
| AUTOMATION | Repetitive work, removed. |
| STRATEGY | Direction for hard operating calls. |

**06 Who we are**

> ## Some problems do not fit a software brief.
>
> Altisly works inside the operation, not beside it. We take on problems where the process, the data
> and the software all have to change together, and we build until the new way of working can stand
> on its own.

Three characteristics: **One team, end to end.** The people who scope it are the people who build
it. / **We work where mistakes cost.** Money moving, records kept, regulators asking. / **We
finish.** A system nobody has to babysit, run by your own people.

**02 Where work gets hard**

A fixed mono label, `WHERE WORK GETS HARD`, sits against a left rule. The phrases move beside it:
Manual handoffs · Disconnected systems · Unclear ownership · Fragmented records · Repeated work ·
Operational bottlenecks.

Naming sectors here was wrong. It implied Altisly is a treasury company, or a healthcare company,
which is exactly the narrowing the rewrite set out to remove. Operational friction language keeps
the positioning wide and hands the reader straight into the next section.

**03 When the tools stop fitting the operation**

Not a comparison table. A composition. The heading sits top left, five operational artefacts are
scattered across the full width at varied angles and depths, and a closing line lands beneath them:
*Spreadsheets. Messages. Manual handoffs. Records that disagree. The operation starts working around
its tools.*

The artefacts: a spreadsheet named `final_v7.xlsx` where one person knows what column K means; an
approval asked for in a chat thread with no record of who said yes; the same figure differing across
ledger, portal and report; an owner field reading unassigned above the words "Who owns this?"; a
handoff by email, entered again on the other side.

The resolution is the next section. Fragmentation gives way to the four ordered layers of the Bento
grid, which is the before-and-after told through composition rather than through arrows.

**04 What we change**

Statement tile: **We work across the operation, not just the software.** Four things have to move
together. Change one and the other three fight you. Ends with `See what we have built →` linking
`/work`.

Four numbered layer tiles:

| Tile | Line |
| --- | --- |
| 01 The operation | How the work should actually happen, before anyone writes software for it. |
| 02 The system | The software that makes it repeatable instead of remembered. |
| 03 The data | A reliable record of what happened, and of what happens next. |
| 04 The control | The approvals, the rules and the accountability around it. |

**05 How we work**

The flip-card mechanic is protected. Only the card content changes.

> 01 **Understand.** We get inside the operation before deciding what needs to change.
> 02 **Design.** We decide what the system should make impossible, not merely discourage.
> 03 **Build.** We turn that design into software people can depend on.
> 04 **Embed.** We put it into operation and leave your team able to run it.

**07 What we stand for**

> 01 Business before technology.
> 02 Build for the day it goes wrong.
> 03 The complexity stays with us.
> 04 Leave your team running it.

**08 Our defining belief**

> `WE BELIEVE`
>
> ## Technology is only worth it when the business underneath works better.
>
> Not software for software's sake. / Not automation around a broken process. / Not another system
> your team has to work around.

**09 Let's talk**

> ## Have a problem worth solving?
>
> Tell us what is not working, what you are trying to build, or where you want to go next. An
> engineer replies, not a sales team.
>
> `Talk to us`  `Run a diagnostic`

Right column, what happens next: 01 You describe the operation. / 02 We reply within one business
day. / 03 If there is a fit, we tell you what the next step looks like.

---

## 10. Known weaknesses, open for redesign

**Responsiveness is uneven.** The landing sections have breakpoints, but the hero stage is simply
hidden below `lg`, and the scroll-driven sections have not been tuned for short viewports or touch,
where `260vh` behaves differently. The bento collapses three to two to one, untested on real devices.

**Motion is unevenly budgeted.** Five of nine landing sections are completely static while two
consume multiple viewports. The marquee never pauses and ignores `prefers-reduced-motion`. Nothing
pauses when off-screen.

**Dead CSS.** Roughly a third of the utilities (`kpi-*`, `view-tab*`, `dash-btn-*`, `side-buy`,
`util-fill-*`, `sev-*`, `live-chip`) came from an application design system and are unused here.

**Visual monotony.** Almost every section is either a surface card grid or a full-width invert band.
There is no photography, no illustration and no texture anywhere. The only non-typographic elements
are three decorative SVGs and the constellation.

**Section rhythm.** Vertical padding varies between sections (60px, 90px, 100px, 110px) with no
system behind the variation.
