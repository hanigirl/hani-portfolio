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
  deciding whether to interview rather than narrating a project. It supplies
  the container only; the facts come from the intake.

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
2. **Concept, then assets.** Agree the one idea the site hangs on, and get the
   images in hand. Both sections below.
3. **Direction** via `design-taste-frontend`. Establishes the visual world and
   builds it. Audit-first when a site already exists.
4. **Motion** via `emil-design-eng`. Timing, easing and interaction feel on top
   of the built thing.
5. **Audit** via `impeccable`. Its detector finds what you stopped seeing an
   hour ago: contrast, convergent fonts, generated-UI signatures.
6. **Cases** via `case-study`. The writing, last, once the frames exist to
   write into. Run the intake in
   [references/passes.md](references/passes.md) first: that skill supplies a
   structure but never asks where the facts come from, so without it the
   role, timeline and metrics get invented.

Read [references/passes.md](references/passes.md) for what each pass actually
does, what to verify after it, and how to resolve the places where two skills
give contradictory advice. They will contradict each other; that is expected
and the reference says who wins.

## Agree a concept before building anything

Ask for the one idea the whole site hangs on, and do not start until there is
one. A concept is not a style word like "minimal" or "bold": those describe a
surface and constrain nothing. It is a thing the site *is*, which then decides
questions before you have to argue about them.

Worked examples: the site as deep space with the person's craft flying through
it. As a printed archive. As an operating system. As a field notebook. Each of
those answers what the background does, how sections transition, what the
imagery is of, and what the motion means, without any of those being decided
separately.

Two tests before accepting one:

- Can the person say it in a single sentence, in their own words?
- Does it decide at least three things that would otherwise be arbitrary?

If it fails either, it is a mood, not a concept, and the site will drift back
to a template as soon as a hard layout question comes up.

The concept has to come from them. Offer two or three options drawn from what
they have told you about their work, and let them pick or reject all of them.
A concept you imposed produces a site they cannot explain in an interview,
which is the one thing a portfolio must survive.

## Ask for the images before building, not after

Once the concept is agreed, the assets it implies become obvious. Ask for all
of them up front, because a layout built around placeholders and then fitted
with real images later fits badly.

Ask for three kinds:

- **A portrait of them.** Hiring managers look for a face. Say what it is for
  and roughly what crop the layout wants.
- **The visual language of the concept.** The recurring motif the site is built
  from: the craft, the object, the texture, the world. This is what makes the
  site theirs rather than a good template.
- **Their work.** Real screenshots of real interfaces, not mockups.

If they do not have the concept imagery, recommend they generate it with
ChatGPT or another image model, and tell them what to ask for: the subject, on
a transparent background, and several variations so the layout has choices.
Most designers reach for this immediately once it is suggested, and it is
usually faster than commissioning or hunting for stock.

### Transparency has to be real

The one thing to insist on, because it has wrecked whole afternoons: a
"transparent" PNG from an image model is frequently a checkerboard *painted
into the pixels* with no alpha channel at all. It looks transparent in a
preview and is opaque in the browser.

Check before building anything around it:

    sips -g hasAlpha file.png

If it says `no`, ask for a re-export rather than trying to key it out. A
flattened sheet cannot be recovered cleanly when the subject shares values
with the checker squares: any threshold that removes the background also eats
the subject. Asking again takes a minute. Not asking costs hours and still
ends in a worse cut-out.

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
