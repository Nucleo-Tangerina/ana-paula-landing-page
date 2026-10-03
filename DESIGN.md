---
name: Caminhos da Inclusão
description: Formação para Mediadores, a civic prospectus in bone-white light sewn by one Teia thread.
colors:
  ground: "#f7f8fb"
  paper: "#ffffff"
  hairline: "#e4e7ef"
  ink: "#0b1f4d"
  text: "#4b5168"
  text-muted: "#646a82"
  action: "#d6007f"
  action-hover: "#b8006d"
  action-tint: "#fdeaf4"
  lacquer-deep: "#071538"
  on-lacquer-muted: "#b9c3de"
  thread-cyan: "#27aae1"
  thread-purple: "#92278f"
  thread-magenta: "#ec008c"
typography:
  display:
    fontFamily: "Lexend Variable, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 1.2rem + 4vw, 4.75rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Lexend Variable, system-ui, sans-serif"
    fontSize: "clamp(2rem, 1.4rem + 2.4vw, 3.25rem)"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Lexend Variable, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 1.1rem + 0.5vw, 1.5rem)"
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  deck:
    fontFamily: "Lexend Variable, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1.05rem + 0.35vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Lexend Variable, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  small:
    fontFamily: "Lexend Variable, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Lexend Variable, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.4
rounded:
  button: "8px"
  panel: "12px"
spacing:
  s-1: "4px"
  s-2: "8px"
  s-3: "12px"
  s-4: "16px"
  s-5: "24px"
  s-6: "32px"
  s-7: "48px"
  s-8: "64px"
  s-9: "96px"
  section-y: "clamp(4.5rem, 3rem + 7vw, 8.5rem)"
  gutter: "clamp(1rem, 0.5rem + 2.5vw, 2.5rem)"
components:
  button-primary:
    backgroundColor: "{colors.action}"
    textColor: "{colors.paper}"
    typography: "{typography.small}"
    rounded: "{rounded.button}"
    padding: "14px 20px 14px 24px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.action-hover}"
  button-secondary:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.action}"
    rounded: "{rounded.button}"
    padding: "14px 20px 14px 24px"
    height: "52px"
  button-secondary-hover:
    backgroundColor: "{colors.action-tint}"
  button-inverse:
    textColor: "{colors.paper}"
    rounded: "{rounded.button}"
    padding: "14px 20px 14px 24px"
    height: "52px"
  panel:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.panel}"
  band-lacquer:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-lacquer-muted}"
    padding: "{spacing.section-y} 0"
---

# Design System: Caminhos da Inclusão

## Overview

**Creative North Star: "The Civic Prospectus, Sewn by One Thread"**

The page reads like a public prospectus for a formation, not a pink course funnel. Almost everything stands in bone-white light (ground and paper) on a ruled 1180px rail. Navy ink carries the type, and 1px hairlines divide the content. The colour is concentrated in two places. One continuous Teia thread runs the full cyan-purple-magenta gradient from the hero to the closing question. The other is a single deeper magenta reserved for action.

Three navy masses (the Big Idea, the Offer, and the Footer) work as lacquered objects: dark masses standing alone in the light. The thread fades out at their edges. In the Big Idea it becomes the bridge from "Saber sobre" to "Saber como agir", which runs right to left. The density is generous and civic. Rows and ruled lists replace tiles and icon cards. Credentials and promises are drawn as engraved line work, never as institution logos.

The system rejects the category default: pink course pages, icon-card grids, badges, floating stickers, and eyebrow labels over headings.

**Key Characteristics:**
- Bone-white ground with navy ink. There is never pure black.
- One gradient thread that changes route but never breaks its single-line identity.
- One magenta action colour, used for CTAs and the hero emphasis only.
- A 1180px rail divided by 1px rules. Content is set as rows, not tiles.
- One typeface (Lexend) in two weights (400 and 500), with no italics and no serif.
- Lacquer navy bands as the only dark mass.

## Colors

The neutrals are cool bone and navy, there is a single magenta voice, and one three-stop gradient is spent only on the thread.

### Primary
- **Action Magenta** (action): every checkout CTA, plus the hero headline's emphasised phrase ("agir na prática"). It is one step deeper than brand magenta because white 15px text on the brand value measures 4.25:1 and fails AA. This value measures 5.05:1. Its hover is **Deep Action Magenta** (action-hover). Its tint (action-tint) serves only as the secondary-button hover and the text selection.

### Secondary
- **The Teia Thread** (thread-cyan, thread-purple, thread-magenta): a 115deg gradient (cyan, then purple at 55%, then magenta). It appears on the hero ribbon, the page thread, the Big Idea bridge, the method timeline, and the underline under the Big Idea's closing phrase. Brand magenta lives here and is never used for buttons.
- **Thread Purple** also colours the line icons on light list rows (audience, study). **Thread Cyan** colours the icons on lacquer (the offer includes).

### Neutral
- **Bone Ground** (ground): the page ground and the alternating band tone.
- **Paper** (paper): the second band tone, panels, the price card, and text on lacquer.
- **Hairline** (hairline): every 1px rule and panel border on light bands.
- **Ink Navy** (ink): headings, emphasised values, the leading rule of a list (1px solid ink), and the lacquer band colour itself.
- **Slate Text** (text): body copy.
- **Muted Slate** (text-muted): labels, details, and terms.
- **Deep Lacquer** (lacquer-deep): the footer only.
- **Lacquer Mist** (on-lacquer-muted): body text on navy bands. On navy, hairlines are white at 14% alpha.

### Named Rules
**The One Voice Rule.** Magenta fills only the action. If it isn't a CTA or the hero emphasis, it isn't action magenta.

**The Thread Holds the Colour Rule.** The full Teia gradient is spent only on the thread and its echoes (the method line, the closing underline). Never gradient-fill a button, panel, or heading.

**The Never-Black Rule.** Ink is navy. Shadows are tinted with ink, not black.

## Typography

**Display Font:** Lexend Variable (self-hosted via @fontsource-variable, with system-ui, sans-serif as fallback)
**Body Font:** the same face.

**Character:** Lexend is a single wide geometric grotesque with full Portuguese diacritics. The hierarchy comes from size, weight, and tight negative tracking, not from pairing faces.

### Hierarchy
- **Display** (400, clamp 44 to 76px, 1.05, -0.035em): the hero headline only. Its emphasis phrase steps up to 500 in action magenta. Max 16ch (14ch on phones).
- **Headline** (500, clamp 32 to 52px, 1.15, -0.035em): section headings, max 22ch. Statement headings (the Big Idea sides, the closing question, the quote) use their own clamps on the same tracking.
- **Title** (500, clamp 20 to 24px): row titles (pillars, modules, benefits, pain questions).
- **Deck** (400, clamp 18 to 20px, 1.55): ledes and list rows, max 65ch.
- **Body** (400, 17px, 1.6): running copy, max 65ch, with `text-wrap: pretty`.
- **Small / Label** (400 to 500, 15px / 13px): facts, trust lines, and index labels ("Módulo 01"). Labels use sentence case and are never uppercase.

### Named Rules
**The Two Weights Rule.** Use only 400 and 500. Use no italics and no other face. Emphasis is weight 500 plus ink, or action magenta in the hero.

**The No Eyebrows Rule.** A heading stands alone. No kicker or eyebrow label sits above a section heading. Index labels belong to the item they number, never to the section.

## Layout

There is one rail: `min(100% - 2 × gutter, 1180px)`, centred. Sections are full-bleed bands (ground, paper, or lacquer) with `section-y` vertical padding. Two adjacent bands of the same tone are split by a 1px hairline. Content inside the rail is set as ruled rows. A list opens with a 1px ink rule. Items are divided by hairlines and run in columns with hairline left borders. Two-column splits use asymmetric fr ratios (56/44, 6/5, 4/7, 5/7). In the curriculum and FAQ, the left heading column is sticky.

The side margins outside the rail are not dead space. The page thread runs down their midline.

Breakpoints are 1000px (the header nav collapses into a toggle panel), 900px (two-column grids stack, and the hero switches to the phone thread route), 760px (the Big Idea bridge turns vertical and the page thread thickens), and 640/600/560/520px (row lists collapse to single columns and hero buttons go full width). On phones the five hero facts become a ruled list, with the value on the left and the detail on the right.

The spacing scale has a 4px base (4, 8, 12, 16, 24, 32, 48, 64, 96). The header is sticky at 72px. It is transparent at the top and turns to 96% bone with a hairline once the page scrolls.

## Elevation & Depth

Depth is a hybrid: mostly flat, ruled planes, with a soft offset shadow tinted by ink on the few lifted objects. The navy lacquer bands supply the real depth contrast.

### Shadow Vocabulary
- **Rest** (`box-shadow: 0 1px 2px rgb(11 31 77 / 0.06), 0 4px 12px rgb(11 31 77 / 0.05)`): panels that sit on the page (the before/after pair, the portfolio panel).
- **Lifted** (`box-shadow: 0 2px 4px rgb(11 31 77 / 0.06), 0 16px 40px rgb(11 31 77 / 0.1)`): floating objects (the hero caption card, the phone frame).
- **Action glow** (`box-shadow: 0 1px 2px rgb(184 0 109 / 0.2), 0 8px 20px rgb(214 0 127 / 0.18)`): the primary button only.

### Named Rules
**The Lacquer Rule.** Navy bands are the dark objects in the light. The lacquer bands (the Big Idea and the Offer) carry a top-edge gloss: a white fade from 7% to 0 over the top 22%, plus a faint cyan radial at the upper right. The footer closes the page as flat deep lacquer. Don't add further dark bands casually.

**The Soft Offset Rule.** Shadows are offset downward and blurred, tinted with ink. There are no hard offset shadows and no black glows.

## Shapes

Shapes are rectilinear and ruled. Panels and cards use 12px corners. Buttons use 8px. Circles appear only where function asks for them: avatar slots, round carousel controls (48px), method nodes (20px), and the guarantee seal. Every border is 1px (hairline on light, white at 14% on navy). The thread is the only curve, and it is a line, never a fill.

## Components

### Buttons
Buttons are confident and quiet. Each one is a single filled magenta with a chevron that nudges forward.
- **Shape:** gently squared (8px), min height 52px (44px in the header), padding 14px 20px 14px 24px, label at 15px / 500.
- **Primary:** action magenta with white text and the action glow. A trailing 18px chevron moves 3px right on hover.
- **Hover / Focus:** the background moves to action-hover over 0.3s with cubic-bezier(.25,1,.5,1). Pressed buttons translate 1px down. Focus is a 2px action outline at a 3px offset.
- **Secondary:** paper fill with a 1px action border and action text. On hover it fills with action-tint.
- **Inverse (on lacquer):** transparent fill, a 1px border of white at 40%, and white text. On hover the border turns full white over a 6% wash.

### Cards / Containers
- **Corner Style:** 12px.
- **Background:** paper on ground, or ground on paper (the author quote).
- **Shadow Strategy:** Rest, or none with a hairline border.
- **Border:** 1px hairline.
- **Internal Padding:** fluid, from 24px up to 64px.

### Ruled Rows
These form the system's core list primitive. Each list opens with a 1px ink rule. Rows are divided by hairlines, and multi-column rows take hairline left borders. They carry the pain questions, pillars, benefits, credentials, modules, FAQ, and the hero facts. Rows are never tiles.

### Disclosure (modules, FAQ)
A native `details` element. The summary shows an ink title, with a 1px underline on hover. A 1.5px plus icon rotates 45deg when the item opens.

### Navigation
The sticky 72px bar holds the wordmark (ink, 500), 15px slate anchors that underline in ink on hover, and a filled primary CTA. Below 1000px the anchors move into a hairline-ruled drop panel behind a 44px toggle.

### The Teia Thread (signature)
The thread is one line with several routes:
- **Hero:** a canvas silk ribbon in the right bleed that bends toward the pointer, easing over 0.3s with cubic-bezier(.25,1,.5,1). It tapers into the right margin. Phones get their own hero route behind the portrait, masked in from the top.
- **Page thread:** an SVG at 1.75px (2.25px at 760px and below), 80% opacity, on the gradient. It runs down the margin midline and draws on with scroll. It fades over 72px into each lacquer band and back out.
- **Bridge:** in the Big Idea the thread crosses the band right to left, scroll-linked. Below 760px it crosses vertically between the stacked statements. The page thread continues from the left margin.
- **End:** a short hook into the closing question and a 3px brand-magenta knot that appears once the line is whole.
- **Reduced motion:** the thread is drawn whole and static. The bend and draw-on are off.

### Engraved Seal
The guarantee mark is an SVG medallion drawn in ink line: concentric rings at 1.25, 1, 0.5, and 0.35px, a 72-tick guilloche, ring lettering on a path, and a central figure at 500. It is the model for any credential or promise mark.

### Icons
Icons are lucide line art at 1.5px stroke, 15 to 22px. Confirmations (checks) and the button chevron use 2px. Icons are coloured ink, thread purple (on light lists), or thread cyan (on lacquer). They are never filled and never sit on a tinted chip.

### Motion
Each panel rises once: 24px over 0.8s with cubic-bezier(.165,.84,.44,1), starting from an already visible default. State changes take 0.3s with cubic-bezier(.25,1,.5,1). All motion collapses under `prefers-reduced-motion`.

## Do's and Don'ts

### Do:
- **Do** keep the page bone-white and spend colour on the thread and the single magenta action.
- **Do** set lists as ruled rows on the rail: a 1px ink rule to open, then hairlines between rows.
- **Do** use action magenta for white-text buttons. Brand magenta (thread-magenta) belongs to the thread.
- **Do** tint every shadow with ink navy and offset it downward.
- **Do** draw credentials and guarantees as engraved line medallions.
- **Do** disable the rise, the pointer bend, and the scroll draw-on under reduced motion.

### Don't:
- **Don't** set white text on brand magenta. It measures 4.25:1 and fails AA.
- **Don't** put eyebrow or kicker labels above headings.
- **Don't** build icon-card grids, badges, floating stickers, or tiled feature boxes.
- **Don't** use a third font weight, italics, a serif, or a system display face.
- **Don't** use pure black for text or shadows.
- **Don't** gradient-fill surfaces or buttons. The gradient is a line.
- **Don't** use institution logos as proof.
