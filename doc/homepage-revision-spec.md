# Homepage revision spec

Status: **agreed, not yet implemented.** This document records the review decisions taken on the
current homepage build so the changes can be made without re-litigating them.

The structure is **locked**. No new sections. No re-ordering. The remaining work is copy discipline,
one label fix, one hierarchy change, and one genuine brand bug.

---

## 1. Locked structure

The homepage order in [pages/index.vue](pages/index.vue) is final:

| # | Section | Component | Motion |
| --- | --- | --- | --- |
| 1 | Hero | `landing/HeroSection.vue` + `HeroStage.vue` | ambient system visuals |
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

### 3.4 Problems section — freeze, do not extend

The artefact treatment is correct as built:

> Sheet · final_v7.xlsx · Approval · in a chat thread · Same figure · three systems ·
> Owner · unassigned · Handoff · by email

and it closes on:

> Spreadsheets. Messages. Manual handoffs. Records that disagree.
> **The operation starts working around its tools.**

Nothing is added after that line. The section has done its job; a further explanation would undo it.

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
