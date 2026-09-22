# The four passes

Each pass answers a different question. Running them together produces work
that is vaguely good at all four and sharp at none.

## 1. Direction — `design-taste-frontend`

Establishes the visual world and builds it. Audit-first when a site already
exists: it reads the incumbent as evidence before proposing anything.

What it is good at: refusing category defaults. It carries a long list of
patterns that read as generated — AI-purple accents and glows, hand-drawn
"fake screenshot" divs, eyebrows above every section, three identical feature
cards, em-dashes, scroll cues, stock-photo placeholders.

Verify after: no em-dashes in user-visible copy, real imagery or explicit
placeholder slots, and a hero that fits the viewport with a CTA visible.

## 2. Motion — `emil-design-eng`

Timing, easing, and interaction feel, applied to the thing that now exists.

What it is good at: the numbers. Hover and press feedback under 300ms,
`ease-out` rather than `ease-in` for entrances, press states on anything
pressable, and the reminder that reduced motion means gentler, not absent —
keep opacity and colour, drop movement.

One thing it catches that nothing else does: framework shorthand for transforms
(Motion's `x`/`y` props) is not hardware accelerated and drops frames under
load. Full transform strings are.

Verify after: no transition longer than ~300ms on anything interactive, and no
`transition: all`.

## 3. Audit — `impeccable`

Its detector runs against live URLs at more than one viewport and finds what
you stopped seeing an hour ago.

What it catches reliably: contrast failures against real computed colours,
all-caps body text, hairline-border-plus-wide-shadow (a generated-UI
signature), image hover-zoom, and fonts that have converged across AI-built
sites.

Its craft floor is stricter than the direction skill's: it bans eyebrows above
headings outright and bans decorative section numbering. When they disagree,
it wins, because it runs last and it is measuring the built result rather than
proposing an intention.

Note it is a *reporting* command by design. Apply the fixes in one batch, then
confirm with at most one more round. Open-ended self-QA burns money.

## 4. Cases — `case-study`

Last, deliberately. Writing case studies before the frames exist produces copy
that the layout then has to accommodate.

The skill supplies the container and nothing else: a six-part outline and
writing rules. It never asks where the facts come from, and it actively pushes
toward numbers ("quantify impact wherever possible", "lead with the most
impressive outcome"). Left alone with an outline that has empty slots, a model
fills them. So run the intake below first, per project.

### Intake, before writing a word

Ask these for each case study, and accept "I do not have that" as a complete
answer:

1. Project and client, or "confidential" if it is under NDA
2. Your exact role, and who else was on it. Hiring managers read this closely,
   and "I designed it" on a team of six reads as either vague or dishonest
3. When, and roughly how long
4. The problem in one sentence, as the business saw it and as users
   experienced it. Those are usually two different sentences, and having both
   is what makes a case read as senior
5. The outcome. A number if one exists, a qualitative result if not
6. The one thing they would do differently

### Never invent a metric

This is the rule that matters most, because inventing is the path of least
resistance when a section looks empty.

A fabricated conversion rate is not a placeholder, it is a claim the person
will be asked to defend in an interview, by someone who reads these all day
and asks follow-up questions. Getting caught inventing an outcome costs the
job; an honest gap costs nothing.

So when there is no number, write the qualitative result instead, or leave the
slot visibly empty and tell the person it needs filling. Never round a real
number up, never estimate one from context, and never carry a number from a
placeholder into real copy.

### Check the pairing

A mismatch nobody flags: real screenshots dropped into placeholder project
slots leave the imagery and the written story describing different products.
Check every pairing and say so plainly when one is wrong.

## When two skills disagree

1. An explicit instruction from the person always wins. If they ask for a
   spaceship that follows the cursor, build it well rather than arguing it is
   off-genre. Raise the concern in one sentence, then deliver.
2. A measurement beats a preference. A contrast ratio or a detector finding is
   evidence; "feels templated" is a hypothesis.
3. The later pass beats the earlier one on its own subject. Direction picks the
   typeface; the audit overrules it if that typeface is flagged as convergent.
4. Display type is exempt from body-text rules. Tight leading on a 5xl
   statement is correct typography, not a violation — say so rather than
   loosening it to satisfy a threshold meant for paragraphs.
