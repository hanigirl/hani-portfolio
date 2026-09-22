---
name: hani-build-portfolio
description: Build or redesign a designer's portfolio site end to end, sequencing four specialist design skills (direction, motion, audit, case studies) and applying the frontend failure modes that quietly break portfolio builds. Use this whenever someone wants a portfolio, personal site, folio, or case-study site built, redesigned, or polished, including when they only say "my site looks templated", "make my portfolio", "I need somewhere to show my work", or when they ask for a design direction, a motion pass, a quality audit, or case studies written for design work. Use it even when the person does not name any of the underlying skills.
---

# Build a designer's portfolio

A portfolio is the one site where the design *is* the work sample. That changes
the job: it is not enough for it to function, and it is not enough for it to be
pretty. It has to survive a hiring manager who looks at portfolios all day and
can spot a template in about two seconds.

No single skill gets you there. Four do, in order, each fixing what the
previous one cannot see. This skill runs that sequence and carries the
failure modes that cost real hours when they are hit cold.

## Preflight

Check which dependencies are available before starting, and tell the person
plainly what is missing rather than silently doing less. Each pass degrades
to your own judgement if its skill is absent, which is worse but not fatal.

| Pass | Skill | Install if missing |
| --- | --- | --- |
| Direction | `design-taste-frontend` | Ask the person for their source; it ships outside the public marketplaces |
| Motion | `emil-design-eng` | `npx skills add emilkowalski/skills` (MIT) |
| Audit | `impeccable` | `npx impeccable install`, then `/impeccable init` |
| Cases | `designer-toolkit:case-study` | `/plugin marketplace add Owl-Listener/designer-skills` then `/plugin install designer-toolkit` (MIT) |

These are referenced, never copied. `impeccable` in particular ships a
versioned binary engine that self-updates; a vendored copy strands people on a
stale one.

## The sequence

Run the passes in this order and do not merge them. Each one is a different
question, and asking them at once produces mush.

1. **Brief.** Four decisions, before any code. Read
   [references/brief.md](references/brief.md).
2. **Direction** via `design-taste-frontend`. Establishes the visual world and
   builds it. Audit-first when a site already exists.
3. **Motion** via `emil-design-eng`. Timing, easing and interaction feel on top
   of the built thing.
4. **Audit** via `impeccable`. Its detector finds what you stopped seeing an
   hour ago: contrast, convergent fonts, generated-UI signatures.
5. **Cases** via `designer-toolkit:case-study`. The writing, last, once the
   frames exist to write into.

Read [references/passes.md](references/passes.md) for what each pass actually
does, what to verify after it, and how to resolve the places where two skills
give contradictory advice. They will contradict each other; that is expected
and the reference says who wins.

## Before you write any frontend code

Read [references/pitfalls.md](references/pitfalls.md). It is short, and every
entry in it is a bug that shipped looking fine and was found later by
accident. Several are invisible in a screenshot, which is exactly why they
survive a normal review.

The two that matter most, because they fail *silently*:

- Never put `clip-path` on the same element you observe with an
  IntersectionObserver. An observer measures visible area after clipping, so a
  clipped element reports zero intersection, never registers as in view, and
  never has its clip lifted. It is hidden because it is invisible and invisible
  because it is hidden. Observe an unclipped wrapper, clip a child.
- Never give `<body>` a background colour on a page with a fixed `-z-10`
  backdrop. `<body>` is not a stacking context, so a negative z-index child of
  it joins the *root* negative layer and paints *underneath* body's own
  background. Put the canvas colour on `<html>`.

## Placeholders

Most portfolio builds start before the content exists. Represent a missing
image as an explicitly labelled empty slot that holds the real footprint and
names what belongs there, not as a stock photo. A convincing placeholder is
the one that ships by accident; an obvious one gets replaced.

## Verifying

Judge motion from real interaction, and judge a cut-out against the page's own
background. Two traps, both of which produce confident wrong conclusions:

- An automation browser often reports `document.visibilityState: "hidden"`,
  which pauses animation frame loops and defers IntersectionObserver callbacks.
  Scripted probes of scroll or spring state then read as frozen on a page that
  is perfectly fine.
- An image viewer composites transparency onto a *light* checkerboard. A
  cut-out judged there hides exactly the fringe and halo artefacts that appear
  on a dark page. Composite onto the real background colour before deciding it
  is clean.
