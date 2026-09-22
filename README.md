# hani-build-portfolio

Builds a designer's portfolio site by running four specialist design skills in
sequence, and carries the frontend failure modes that quietly break portfolio
builds.

A portfolio is the one site where the design is itself the work sample, so it
has to survive someone who looks at portfolios all day. No single skill gets
there: direction, motion, audit and writing are four different questions, and
asking them at once produces work that is vaguely good at all four.

## Install

```
/plugin marketplace add <your-github-user>/hani-build-portfolio
/plugin install hani-build-portfolio
```

Then `/portfolio`, or just describe what you want built.

## Dependencies

Referenced, never bundled, so you stay on the authors' current versions.
The skill preflights these and tells you what is missing.

| Pass | Skill | Install |
| --- | --- | --- |
| Direction | `design-taste-frontend` | ships outside the public marketplaces |
| Motion | `emil-design-eng` | `npx skills add emilkowalski/skills` |
| Audit | `impeccable` | `npx impeccable install` |
| Cases | `designer-toolkit:case-study` | `/plugin marketplace add Owl-Listener/designer-skills` |

`impeccable` in particular must not be vendored: it ships a versioned binary
engine that self-updates, and a copied one strands users on a stale build.

## Credits

This plugin orchestrates work by other people and claims none of it.

- `emil-design-eng` and the animation skills — Emil Kowalski
  ([emilkowalski/skills](https://github.com/emilkowalski/skills), MIT)
- `designer-toolkit` — Marie Claire Dean
  ([Owl-Listener/designer-skills](https://github.com/Owl-Listener/designer-skills), MIT)
- `impeccable` — its respective authors
- `design-taste-frontend` — its respective authors

What is original here is the sequencing, the brief, the conflict-resolution
rules for when two skills disagree, and the failure modes in
`references/pitfalls.md`.

## Licence

MIT, for this plugin's own contents.
