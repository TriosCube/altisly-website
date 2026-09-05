# Homepage revision spec

Status: **partly implemented.** Sections 3.4, 3.5 and 3.5b are done; the rest still stands as
agreed. This document records the review decisions taken on the
current homepage build so the changes can be made without re-litigating them.

The structure is **locked**. No new sections. No re-ordering. The remaining work is copy discipline,
one label fix, one hierarchy change, and one genuine brand bug.

---

## 1. Locked structure

The homepage order in [pages/index.vue](pages/index.vue) is final:

| # | Section | Component | Motion |
| --- | --- | --- | --- |
| 1 | Hero | `landing/HeroSection.vue` + `HeroStage.vue` + `HeroField.vue` | ⭐ mouse-reactive topology, depth parallax, state cycle |
| 2 | Signal strip | `landing/MarqueeSection.vue` | slow horizontal marquee |
| 3 | Problems | `landing/ProblemsSection.vue` | operational artefacts |
| 4 | What we do | `landing/StackSection.vue` | ⭐ stacked scroll takeover |
| 5 | Quiet interval | `landing/StatementSection.vue` | reveal on enter, otherwise still |
| 6 | How we work | `landing/JourneySection.vue` | ⭐ sticky revealing cards |
| 7 | Who we are | `landing/WhoWeAre.vue` | quiet typography |
| 8 | What we believe | `landing/BeliefSection.vue` | ⭐ scroll-scrubbed statement |
| 9 | CTA | `landing/CtaSection.vue` | static |

The flow this produces: **hero → friction → capabilities → point of view → method → company →
belief → conversion.**

### Hero background: system topology

The hero background was a graph-paper grid only, which left the whole hero reading as a tidy
wireframe. It is now a **mouse-reactive system field** in
[components/landing/HeroField.vue](components/landing/HeroField.vue), drawn on canvas behind the
copy and the cards.

**Rejected outright**, recorded so it does not come back: sliders and carousels (Revolution Slider
was specifically considered and turned down as template-like), particle stars, blobs, spinning
gradients, generic mouse trails, 3D globes. The reference is an interactive backend topology, not a
particle system.

What it does:

- **One background layer, not two.** The canvas draws the 46px grid itself and the CSS
  `background-image` on `.hero` is switched off above 1024px. The first build had the CSS grid and
  the canvas topology as two unrelated overlays, which read as two competing backgrounds. Below
  1024px the field is disabled and the CSS grid takes over again.
- **Nodes sit on grid intersections.** Positions are grid coordinates, not free-floating normalized
  ones, so the topology reads as routing laid over the grid rather than a second pattern on top of
  it. This is what ties the two together.
- **Density is generated, not hand-authored.** Tiers land every 3 columns with 3 to 5 nodes each,
  placed by a deterministic hash of the tier and node index, so it adapts to viewport size and is
  identical on every load with no `Math.random`. At 1990 x 1069 that is 14 tiers, 62 nodes, 70
  edges — against 19 nodes and 28 edges in the first build, which looked scanty.
- **Edges are tier-local.** They connect only to next-tier nodes within 3 grid rows, so lengths run
  138 to 268px, averaging 161. The first build allowed any pairing and produced 500px+ diagonals
  spanning the whole viewport, which is what made it read as a lattice instead of a network.
- **Nodes never move.** Only activation animates. That single constraint is what separates this from
  particles.
- **Asymmetric activation.** `regionGain()` ramps from 0.2 on the left to 1.0 past x = 0.58, so the
  field stays almost inert behind the headline and wakes up behind the cards. The left/right
  division of the hero is preserved by the background rather than fought by it.
- **Cursor proximity** lights nearby nodes and their edges in lime, plus a radial lime wash that
  peaks at 5.5 percent alpha and is itself scaled by `regionGain`.
- **`Approval → Exception → Record`** are micro mono labels placed on three nodes spaced along the
  route in the right half, revealed only when activation on that node passes 0.12. They sit on the
  route, so hovering reinforces the same path the cycle lights.
- **The grid itself reacts.** Within about 3 cells of the cursor, grid lines are redrawn in lime at
  up to 9 percent alpha inside a clipped circle. The base grid is cached to an offscreen canvas and
  blitted each frame, so only the local highlight costs anything.
- **One slow autonomous cycle**, `REQUEST → APPROVED → POSTING → RECONCILED`. A route is walked
  once at layout time from the leftmost tier to the rightmost, following a gentle sine drift, then
  split into four legs. Each cycle step lights one leg and runs a signal along it, so the route
  fills left to right across the full width and resolves at the right edge where the cards sit.
  Eight steps: four active, four at rest, so there are real quiet gaps.
- Every node is guaranteed an outgoing edge — if nothing sits within 3 rows it links to the nearest
  next-tier node regardless. Without that the route broke at one tier and the signal teleported
  across the gap.
- **On mouse leave it genuinely settles.** When total energy drops below 0.004 and no signal is
  in flight, the component draws one last frame and cancels its rAF entirely. It costs nothing while
  idle and restarts on pointer movement or the next cycle tick.

The cycle is **shared, not duplicated**, via
[composables/useOperationCycle.ts](composables/useOperationCycle.ts) — one refcounted interval that
both `HeroField` and `HeroStage` read. Two timers would have drifted, and the whole point is that
the background path lights as the foreground cards change.

Foreground cards parallax at three depths (`--d` of 1, 0.65 and 0.4, nearest to furthest), with the
wire layer at 0.25. The enter animation moved to the `translate` and `scale` longhands so that
`transform` is left free for parallax and does not inherit the 800ms enter easing.

Cheap when it should be: disabled entirely below 1024px, paused by `IntersectionObserver` once the
hero scrolls away, paused on `visibilitychange`, and static under `prefers-reduced-motion`. Canvas
colours are read from the live tokens through a probe element and re-read on `data-theme` change, so
nothing here hardcodes a colour.

### Lines that carry the voice

These are load-bearing. Do not rewrite them while editing anything nearby.

- We build the systems businesses run on.
- When the tools stop fitting the operation.
- We work on more than the software.
- Sometimes the software is the easy part.
- From problem ✦ to working system.
- Some problems do not fit a software brief.
- Technology is only worth it when the business underneath works better.

---

## 2. The governing correction: stop narrowing the company

Three separate places quietly collapse Altisly into fintech / regulated finance: the hero
subheading, the "who we are" line, and the footer positioning statement. Individually each is
defensible. Together they contradict a homepage that spent nine sections broadening the company.

Every change in section 3 below that touches wording is an application of this one rule.

Finance stays present **visually** — the ledger console in the hero and stack is a fine example of
the work. It just stops being the written definition of the company.

---

## 3. Changes

### 3.1 Hero subheading — remove the narrowing

[components/landing/HeroSection.vue:27-30](components/landing/HeroSection.vue#L27-L30)

Current:

> Altisly designs and builds the software behind day to day operations: the **ledgers**, approvals,
> records and workflows a business cannot afford to get wrong.

"Ledgers" pulls the reader straight to finance, reinforced by the hero UI showing Payment Run,
Position, Reconciled. Change to:

> Altisly designs and builds the software behind day to day operations: the **records, approvals,
> workflows and systems** a business cannot afford to get wrong.

### 3.2 Hero capability microcopy

[data/content.ts](data/content.ts) → `capabilities`. The four labels (Systems, Products, Automation,
Strategy) are **correct and stay**. Only the `lead` strings change:

| Label | Current lead | New lead |
| --- | --- | --- |
| Systems | Software the operation needs. | Software the operation depends on. |
| Products | Ideas turned into software. | Ideas turned into working software. |
| Automation | Repetitive work, removed. | *(unchanged)* |
| Strategy | Clarity for hard decisions. | Clarity for difficult technology decisions. |

"Strategy" must read as a technology decision. Left unqualified it reaches into the customer's own
managerial responsibility, which is not what Altisly is selling.

### 3.3 Signal strip label

[components/landing/MarqueeSection.vue:8](components/landing/MarqueeSection.vue#L8)

`Where work gets hard` → `When work gets hard`.

The six items after it (Manual handoffs, Disconnected systems, Unclear ownership, Fragmented
records, Repeated work, Operational bottlenecks) are **symptoms**, not places. "When" makes the strip
read as a bridge into the problems section rather than a claim about which sectors Altisly serves.
The item list itself is final.

### 3.4 Problems section — rebuilt composition, breadth through situation

Two rounds of change landed here. The section is now
[components/landing/ProblemsSection.vue](components/landing/ProblemsSection.vue) as a two-column
editorial composition, not five floating cards.

**Composition.** Left column holds all the copy — eyebrow, headline, closing — and nothing overlaps
it. Right column is one contained stage with five artefacts in a deliberate hierarchy: one focal,
two medium, two small. Positions are solved so that every overlap is a corner (138x39, 48x71 and
21x70 px) and the higher-z card never covers the lower card's label row. That constraint is why the
overlaps are corners rather than the deep stacking first sketched: these cards carry real text, and
a card covering another's label makes the section unreadable rather than messy.

**Headline.** Was breaking into six ragged lines inside a `max-w-[24ch]` box. Now a hard two-line
break, `When the tools stop / fitting the operation.` The size is set from a measurement, not a
guess: `"fitting the operation."` in Onest 700 with `-0.032em` tracking is **9.115em** (0.414 em per
character — Onest is much narrower than it looks). At the 0.68fr column that permits about 51px. The
rule is `clamp(30px, 10.4cqw, 50px)` against `container-type: inline-size` on the copy column, so it
sizes off the actual column width at every breakpoint. The exact limit is 10.97cqw; 10.4 leaves
5 percent headroom.

**Breadth through situation, not labels.** The first version's five artefacts all read as
finance back-office, and the `Ledger / Portal / Report / 412,900` card was the single worst offender
— it made the whole section read as treasury. The five now each carry a different operational
failure, with no sector labels anywhere:

| Artefact | Operational domain |
| --- | --- |
| `Sheet · final_v7.xlsx` | general business |
| `Patient record · incomplete` | healthcare |
| `Verification · needs review` | identity |
| `Application · pending` | government and internal workflow |
| `Payment · exception` | financial operations |

This is the same breadth the old sector strip (`TREASURY ✦ HEALTHCARE ✦ IDENTITY`) was reaching for,
carried by the situations instead of declared. The unifying idea is that these are different
industries with the same class of problem, which is exactly what the closing line already says.

Flagged values use `--warn`, not `--brand-deep`. A mismatch is semantically a warning rather than a
brand accent, and it avoids the lime-as-ink contrast problem in the one place the section needs a
value to actually stand out.

**Interaction.** Cursor repulsion inside the stage only: nearby cards shift up to 11px away from the
pointer, so the composition feels unstable under the hand. Scrolling toward `WHAT WE DO` drives an
`--order` value from 0 to 1 which scales both the repulsion and each card's rotation to zero, so the
artefacts snap into alignment as the next section takes over. The rAF loop stops once motion falls
below 0.05px with the pointer outside. No network background, no particles, no connecting lines.

The background is a single faint oversized spreadsheet fragment (92 x 34px cells, radially masked)
behind the artefact area only — deliberately rectangular so it reads as a spreadsheet rather than
repeating the hero's square grid.

It closes on:

> Spreadsheets. Messages. Manual handoffs. Records that disagree.
> **The operation starts working around its tools.**

Nothing is added after that line. The section has done its job; a further explanation would undo it.

No further cards, connecting lines, particles or background effects. The sophistication comes from
typography, controlled disorder and the one interaction.

### 3.5 What we do — two body rewrites

[data/content.ts](data/content.ts) → `stages`.

**Stage 01, Systems that hold up.** Current body ends "…not around the **database underneath it**."
That is implementation-facing; buyers do not care about databases. New body:

> Business systems built around how the operation actually works, rather than forcing the operation
> around the software.

This also ties back to "The operation starts working around its tools" in the previous section.

**Stage 03, Less done by hand.** Current body ends "…automated where **technology carries it better
than a person can**." Read cold, that is "replace people, machines are better." New body:

> Repetitive work redesigned and automated where people should not have to carry it.

Stages 02 and 04 are unchanged.

### 3.5b The `ch`-on-a-wrapper bug

`StackSection`'s intro heading was rendering one word per line — `We / work / on / more / than / the
/ software.` It was not a styling choice, it was a unit error, and it is worth writing down because
it is easy to reintroduce.

`max-w-[20ch]` was on the **wrapper div**, not the heading. `ch` resolves against the element's own
font-size, and the div inherits 16px, so the box was `20 x 10.64px = 213px` while the heading ran at
58.9px. The single word `"software."` needs 251px at that size — wider than the entire box — so
every word overflowed and the browser broke after each one.

The fix is to move the constraint onto the heading itself: `max-w-[16ch]` on the `h2`, which
resolves at 58.9px to 622px and yields `We work on more than / the software.` Because `ch` scales
with font-size, the wrap point is font-size independent: verified as the same two lines at 1024,
1280, 1440, 1920 and 2560px.

Audited every other `max-w-[Nch]` in the codebase. **This was the only wrapper case** — the headings
in `WhoWeAre`, `CtaSection`, `ContactSection`, `BeliefSection`, `HeroSection` and `PageIntro` all
carry the constraint on the heading element and break correctly.

Rule: put `ch` limits on the element whose font-size they are meant to measure. Never on a wrapper.

Known, not yet fixed: the hero headline breaks to four lines because the lime `.mark` pill adds
about 44px of inline padding that the `13ch` limit does not account for, orphaning `on.` on its own
line.

### 3.6 Statement section eyebrow

[components/landing/StatementSection.vue:6](components/landing/StatementSection.vue#L6)

`A note before the method` reads like documentation. Replace with `BEFORE WE BUILD`, or drop the
eyebrow entirely — the headline underneath carries the section on its own. Preferred: `BEFORE WE
BUILD`, matching the existing `font-code` uppercase eyebrow treatment.

The headline and supporting paragraph are unchanged. This section is the deliberate quiet interval
between the stack takeover and the journey cards; it must stay short.

### 3.7 Journey — de-securitise the Design step

[data/content.ts](data/content.ts) → `moves`, item 02.

Current: "We decide what the system should make impossible, not merely discourage."

The line is sharp but it describes controls and security architecture specifically, not a general
company method. Replace with:

> We decide what the system should enable, prevent and make clear.

This keeps the cadence and the structural point without reading as a compliance pitch.
Understand, Build and Embed are unchanged.

### 3.8 Journey footer — fix the label collision

[components/landing/JourneySection.vue:78-83](components/landing/JourneySection.vue#L78-L83)

Two spans, `Method` and `Work from judgement to system`, sit in a `justify-between` row. When the row
loses width they butt together and render as **"MethodWork from judgement to system"** — the artefact
seen in review.

Resolve by dropping to a single label, `FROM JUDGEMENT TO SYSTEM`, or by removing the row entirely.
The section does not need it. Do not "fix" this by keeping both spans and adding a gap.

### 3.9 Who we are — broaden, then smooth

[data/content.ts](data/content.ts) → `whoWeAre`.

Item 01, "One team, end to end.", is unchanged. So are the section's own lines: *Some problems do not
fit a software brief* and *Altisly works inside the operation, not beside it.*

**Item 02.** Title `We work where mistakes cost.` stays. Body currently reads "Money moving, records
kept, regulators asking." — the third narrowing. Replace with:

> Important work deserves systems that hold up under pressure.

**Item 03.** Title `We finish.` stays — it is unusual enough to be memorable. Body currently "A
system nobody has to babysit, run by your own people." Smooth to:

> A system your team can run without us standing beside it.

which lands directly on the `Embed` step of the journey.

### 3.10 Belief section — separate the principles from the statement

[components/landing/BeliefSection.vue](components/landing/BeliefSection.vue) already runs the
scroll-scrubbed word activation on "Technology is only worth it when the business underneath works
better." That is the right home for it and it stays.

The change is hierarchy. The four commitments in `commitments` —

> Business before technology. / Build for the day it goes wrong. / The complexity stays with us. /
> Leave your team running it.

— must render as four separated lines, not one continuous run of text, and must appear **only after
the scrubbed sentence completes**. They must not carry equal visual weight with the statement:
smaller, muted, staggered in after the scrub resolves. The existing `tailOpacity` computed value is
the hook for this.

### 3.11 CTA — drop the routing promise

[components/landing/CtaSection.vue:29-32](components/landing/CtaSection.vue#L29-L32)

Delete **"An engineer replies, not a sales team."** It commits Altisly to a lead-routing model
permanently, and can read as "we are not a mature company with sales or customer teams." The
paragraph ends at:

> Tell us what is not working, what you are trying to build, or where you want to go next.

The numbered process underneath (`nextSteps`) is unchanged and stays: *You describe the operation. /
We reply within one business day. / If there is a fit, we tell you what the next step looks like.*

---

## 4. The actual bug: the wordmark says Isura

This is not a copy nit. [components/ui/IcLogo.vue](components/ui/IcLogo.vue) has two problems:

1. **The SVG letterforms spell "ISURA".** The `variant="full"` path data
   ([IcLogo.vue:78-90](components/ui/IcLogo.vue#L78-L90)) draws an I-S-U-R-A wordmark inherited from
   the previous brand. It renders in the nav and the footer on every page.
2. **The accessible name is wrong.** `label` defaults to `'Isura'`
   ([IcLogo.vue:25](components/ui/IcLogo.vue#L25)), so screen readers and the `alt` text announce
   Isura too.

Both need fixing: redraw the wordmark as Altisly (or fall back to a set text wordmark next to the
symbol), and change the `label` default to `'Altisly'`. The symbol variant is brand-neutral and can
stay. Grep for other `Isura` residue at the same time — `container-isura`, `rounded-isura-xl` and
similar utility names are internal and can be left alone for now, but no user-visible string should
survive.

## 5. Footer copy

[components/layout/AppFooter.vue:8](components/layout/AppFooter.vue#L8)

Current: "We build the systems businesses run on. **Operations software, built from Lagos.**"

The second sentence re-narrows the company in the last thing on the page. Either:

> We build the systems businesses run on. Built in Lagos, working wherever the problem takes us.

or, preferred, just the first sentence, with `Lagos, Nigeria` sitting on its own as location. The
footer does not need a second positioning statement.

---

## 6. Out of scope

Recorded so it does not get reopened:

- No new sections.
- No re-ordering of the nine sections.
- No return to the arrow comparison table in the problems section.
- No additional explanatory paragraph after "The operation starts working around its tools."
- No further sector or vertical lists anywhere on the homepage.
- The three motion set-pieces (stack takeover, journey cards, belief scrub) are the complete motion
  budget. Nothing else on the homepage gets a scroll interaction.

---

## 7. Order of work

1. `data/content.ts` — `capabilities` leads, `stages` 01 and 03 bodies, `moves` 02 body, `whoWeAre`
   02 and 03 bodies. Six string edits, one file.
2. Component copy — hero subheading, marquee label, statement eyebrow, journey footer row, CTA
   paragraph. Five edits.
3. Belief section hierarchy — commitments split to separate lines, gated on scrub completion.
4. `IcLogo` wordmark and label; footer copy.
5. Then judge the whole page in-browser as one continuous scroll, not section by section.
