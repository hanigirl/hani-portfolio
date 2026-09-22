# Failure modes

Every entry here shipped looking correct and was found later by accident.
They are grouped by how they hide from you, because that is what makes them
expensive: none of them throw an error.

## Silent deadlocks

### Observing an element you also clip

An IntersectionObserver measures a target's visible area *after* clipping. An
element wearing `clip-path: inset(0 0 100%)` therefore reports zero
intersection, never registers as in view, and never has its clip lifted. It is
hidden because it is invisible and invisible because it is hidden.

Opacity is not clipped this way, so a text block fading in beside a clipped
image will work perfectly while the image never appears. That asymmetry is the
tell.

Fix: observe an unclipped wrapper, put the clip on a child.

### Frame-guarded throttles

A pointer handler that guards itself with a `requestAnimationFrame` token
deadlocks permanently if the frame never fires, and a backgrounded tab pauses
animation frames. The guard is never cleared, so every subsequent event returns
early and the element freezes wherever it was.

Motion values do not trigger React renders, so they need no throttle at all.
Set them straight from the event.

## Invisible in a screenshot

### Body backgrounds eat fixed backdrops

`<body>` is not a stacking context. A fixed child with a negative z-index
therefore joins the *root* negative layer, which paints before `<body>`'s own
background. Giving body a background colour hides the entire layer beneath it.

Put the canvas colour on `<html>` and leave `<body>` transparent.

### Replacing an image at the same path

Browsers keep serving the old bytes. If you regenerate an asset in place, the
page keeps showing the previous version and you will chase a rendering bug that
does not exist. Rename the file.

## Wrong conclusions from bad verification

### The hidden automation tab

An automation browser often reports `document.visibilityState: "hidden"`. That
pauses animation frame loops and defers IntersectionObserver callbacks, so
scripted probes of scroll position, spring state or reveal state read as frozen
on a page that is completely fine.

Judge motion from real interaction and screenshots. If a probe says nothing is
moving, confirm the tab is visible before believing it.

### The light checkerboard

Image viewers composite transparency onto a light checkerboard. A cut-out
inspected there looks clean while carrying fringe, halo and leftover-background
artefacts that are obvious on a dark page.

Composite onto the page's actual background colour before judging it.

## Asset traps

### "Transparent" PNGs that are not

Image generators frequently draw a transparency checkerboard *into the pixels*
and ship no alpha channel. Check before planning any work around it:

    sips -g hasAlpha file.png

If it says no, ask for a real transparent export rather than trying to key it
out. A flattened sheet cannot be recovered cleanly when the subject shares
values with the checker squares — any threshold that removes the background
also eats the subject. Hours disappear into this.

If keying is genuinely unavoidable, the only discriminator that works is
*local bimodality*: a checkerboard is the only thing showing two greys about 65
levels apart inside a small window. Colour alone always fails.

### Fixed frame ratios crop product screenshots

A fixed aspect ratio with `object-cover` crops the interface chrome off a UI
screenshot. Losing the top bar loses the thing that makes it read as a real
product rather than a mockup. Let each screenshot carry its own ratio.

## Judgement calls that read as bugs

### Asymmetry without a reason

Varying each work item's width and offset for visual interest signals a
hierarchy that does not exist. Viewers read it as a mistake, not composition.
If the projects do not differ in importance, give them the same footprint and
carry hierarchy with type scale instead. Alternating sides is rhythm and is
fine; unequal sizing is a claim.

### Motion that depends on JS above the fold

JS-driven entrances are throttled in background tabs and blocked until
hydration. An above-the-fold reveal that depends on them leaves a blank hero on
the first thing a visitor sees. Use CSS there, and scope any hidden state to
`@media (scripting: enabled)` so a page whose script never runs shows content
rather than hiding it.

### Reduced motion means gentler, not absent

A global rule that collapses every animation to zero also destroys the fades
and colour changes that carry meaning. Keep opacity and colour, drop movement.

### Uppercase needs letterspacing

Small uppercase labels close up and stop being readable without added tracking.
At 12px, roughly `0.2em`. The tracking is doing legibility work, not decoration.
