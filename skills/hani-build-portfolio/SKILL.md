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

## Preflight: all four are required

Check every dependency before doing anything else. If any is missing, stop and
print the install commands. Do not start a reduced version of the workflow.

That is a deliberate gate, not bureaucracy. Each pass exists to catch what the
others structurally cannot see, so a run missing one does not produce slightly
worse work, it produces work with a specific blind spot that nobody will
notice until it is in front of a hiring manager. Running three of four and
calling it done is the failure this skill exists to prevent.

| Pass | Skill | Install |
| --- | --- | --- |
| Direction | `design-taste-frontend` | `npx skills add https://github.com/Leonxlnx/taste-skill --skill "design-taste-frontend"` |
| Motion | `emil-design-eng` | `npx skills add emilkowalski/skills` |
| Audit | `impeccable` | `npx impeccable install`, then `/impeccable init` |
| Cases | `designer-toolkit:case-study` | `/plugin marketplace add Owl-Listener/designer-skills` then `/plugin install designer-toolkit` |

What each one is the only source of, so you can say what is at stake rather
than just listing a missing name:

- **Direction** carries the anti-default list. Without it the result is
  competent and templated, which is the exact outcome a portfolio cannot
  afford.
- **Motion** carries the timing numbers. Without it durations get guessed, and
  guessed durations read as lag.
- **Audit** is the only pass that *measures*. It runs a detector against the
  live page and returns contrast ratios, convergent typefaces and
  generated-UI signatures. Judgement cannot substitute for it: on a real build
  it flagged the typeface that the direction pass had just recommended.
- **Cases** carries case-study structure, so the writing serves a reader
  deciding whether to interview rather than narrating a project.

These are referenced, never copied, so people stay on the authors' current
versions. `impeccable` in particular ships a versioned binary engine that
self-updates; a vendored copy strands users on a stale one.

If someone insists on proceeding without one, that is their call to make and
you should respect it. Name the specific blind spot they are accepting, then
continue.

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

## Use these four and nothing else

While this workflow is running, do not reach for any other design skill, even
when one looks relevant and even when its description matches the task.

Most machines have several installed: general UI advisors, style-specific
skills for minimalism or brutalism, visual-design and dashboard skills,
component-library helpers. Each carries its own aesthetic and its own idea of
what good looks like. Pulled in halfway through, they do not add a viewpoint,
they dilute one. The result is a page that is arguing with itself, which reads
to a viewer as exactly the genericness this workflow exists to avoid. A
portfolio needs one point of view held all the way through, and the four
passes here already disagree with each other enough (see
[references/passes.md](references/passes.md)) without inviting a fifth voice.

The exceptions are skills that supply facts rather than taste: framework
documentation, an icon or animation API reference, an accessibility checker.
Those inform the work without competing for authorship of it.

If the person explicitly asks for another skill, use it. They own the result.

## Composition: boulders, rocks and pebbles

Emotion in a layout comes from contrast in scale, not from decoration. The
reliable structure is one boulder, a few rocks, many pebbles.

- **One boulder per view.** A single dominant element that owns the screen: the
  headline, the hero image, the one product shot. Only one. Two boulders is
  two things competing, and the viewer resolves that by caring about neither.
- **A few rocks.** Supporting elements at a clearly smaller scale. The
  standfirst, the primary action, a section's key image. They are read second,
  and they must look second.
- **Many pebbles.** Metadata, captions, labels, the follow line. Small and
  quiet enough that they recede until someone goes looking for them.

Apple's product pages are the clearest reference: an enormous product image, a
short line of type beneath it, and everything else deliberately tiny. The
feeling comes from the *gap* between those sizes. Steps that are too close
together read as indecision and flatten the page, which is the most common way
a competent layout ends up feeling like nothing.

Apply it per view, not per page. Each screenful a visitor stops on wants its
own boulder. A long page is a sequence of these, not one giant element followed
by uniform filler.

This also settles sizing arguments. If two elements are different sizes, that
difference is a claim about importance, so be able to say what the claim is.
Varying sizes for visual interest alone reads as a mistake rather than as
composition.

## Do not label sections

No kickers, eyebrows or small caps labels above headings unless the person
asks for them. "SELECTED WORK" above the work, "ABOUT" above the about text,
"POINT OF VIEW" above a statement.

They feel like structure but they are almost always redundant: the heading
already says what the section is, and the section's position on the page
already says it too. Worse, they are the single strongest visual signature of
a generated page, because every generated layout puts one above every section,
producing an identical rhythm that a viewer recognises instantly without being
able to name why.

Delete the label and let the heading carry its own weight. If a section truly
cannot be understood without one, that is usually a sign the heading is wrong,
not that a label is missing.

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
