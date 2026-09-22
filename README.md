# hani-build-portfolio

Builds a designer's portfolio site by running four specialist design skills in
sequence, and carries the frontend failure modes that quietly break portfolio
builds.

A portfolio is the one site where the design is itself the work sample, so it
has to survive someone who looks at portfolios all day. No single skill gets
there: direction, motion, audit and writing are four different questions, and
asking them at once produces work that is vaguely good at all four and sharp
at none.

## Install

```
npx github:hanigirl/hani-portfolio install
```

That installs the orchestrator and all four skills it sequences. Then run
`/impeccable init` and ask for a portfolio.

Run it from the project you want the portfolio in: skills install into that
project's `.claude/` directory, not globally.

## What gets installed

All four passes are required, and the skill refuses to start without them.
That is deliberate: each pass catches what the others structurally cannot
see, so a run missing one does not produce slightly worse work, it produces
work with a specific blind spot.

| Pass | Skill | Source |
| --- | --- | --- |
| Direction | `design-taste-frontend` | [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) |
| Motion | `emil-design-eng` | [emilkowalski/skills](https://github.com/emilkowalski/skills) |
| Audit | `impeccable` | `npx impeccable install` |
| Case studies | `case-study` | [Owl-Listener/designer-skills](https://github.com/Owl-Listener/designer-skills) |

The installer fetches each from its author's own repository rather than
bundling copies, so you stay on current versions and the authors keep their
attribution. `impeccable` installs itself: it ships a platform-specific binary
engine that it downloads and self-updates, which is why it could not be
vendored even if the others were.

## What is original here

The four skills are other people's work. What this adds:

- **The sequence**, and why the order matters
- **The brief** — four questions asked before any code, because each one
  changes work that is expensive to redo
- **Conflict rules** for when two skills contradict each other, which they do
- **`references/pitfalls.md`** — frontend failure modes that all shipped
  looking correct and were found later by accident. Several are invisible in a
  screenshot, which is exactly why they survive review

## Credits

- `design-taste-frontend` — Leonxlnx
  ([taste-skill](https://github.com/Leonxlnx/taste-skill), MIT)
- `emil-design-eng` — Emil Kowalski
  ([skills](https://github.com/emilkowalski/skills), MIT)
- `case-study` — Marie Claire Dean
  ([designer-skills](https://github.com/Owl-Listener/designer-skills), MIT)
- `impeccable` — Paul Bakaus

## Licence

MIT, for this package's own contents.
