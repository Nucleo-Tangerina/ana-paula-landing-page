---
version: 1
slug: "src-app-tsx"
primary_target: "src/App.tsx"
related_targets: ["index.html"]
---

# Surface: landing page "Caminhos da Inclusão"

Mode: Persuade. Audience: professionals working in school inclusion or entering it, mostly on mobile and arriving from social media. Action: click through to checkout (URL set in Wix as the `checkout-url` attribute). Proof: Ana Paula Jorge's two real portraits and credentials, the 160h / 5-module structure, the program outline and the 30-day guarantee. No testimonials, platform prints or logo will exist; those blocks were removed rather than faked. Constraints: everything in PRODUCT.md; copy from `PAG - ANA PAULA.pdf`, in block order. The page ships as a Wix custom element.

Chosen direction: Civic Bureau Prospectus (catalog challenger `civic-bureau-prospectus-late-modern`), translated into the Teia brand. Memorable moment: a single thread of the "teia" crosses the page and becomes the bridge in the Big Idea.

## Direction contract

THESIS: Formation as public commitment, not an infoproduct. The page stays almost entirely bone-white, and all its color goes into one continuous Teia thread plus one magenta action. It refuses the category default of a pink course page, icon-card grids, badges and floating stickers.

OWN-WORLD: Ground #F7F8FB→#FFFFFF. Ink navy #0B1F4D, never pure black. Body text #4B5168. Hairlines #E4E7EF. The single action color is magenta #EC008C (hover #C80077). The thread is a gradient in Teia colors: cyan #27AAE1 → purple #92278F → magenta #EC008C. Navy panels (Big Idea, Offer, Footer) are the "lacquered object", a dark mass sitting alone in the light. One geometric grotesque in two weights only (400/500); no italics, no serif. Content sits on a 1180px rail divided by 1px rules. Panels only at 12px radius. Buttons are 8px radius with a chevron. Icons are 1.5px line art. Credentials are engraved line medallions, never institution logos.

STORY: The visitor recognizes the gap between knowing and acting, sees that the course is the bridge (CONHECER→ATUAR), trusts Ana Paula's lived practice, reads the module structure and the honest price, and clicks "Quero garantir minha vaga" knowing the 30-day guarantee is there.

FIRST VIEWPORT: The headline sits in the left 56% at clamp(44px, 1.2rem + 4vw, 76px)/1.05. This is a stated amendment: the PDF headline is 72 characters (the reference's is 26), and in Lexend, a wide face, 88px in 48% set it in 7–8 lines. Line 1 is in navy; "agir na prática" is in magenta weight 500 (or the second line, per measure). The deck is 20px #4B5168. Below it, the primary magenta CTA and a secondary outline "Ver conteúdo"; then the five facts (160h · 5 módulos · Aulas online · Encontros ao vivo · Certificado) as a single ruled row of small labels, not tiles; on a phone they become a ruled list. The right half is a bleed where the Teia thread unfurls behind Ana Paula's photographed portrait as a framed 12px panel, with one small caption card (name + role). It was a cut-out in the original contract; only framed photos exist. The sticky 72px bar holds the mark, the anchors and a filled CTA.

FORM: Catalog challenger civic-bureau-prospectus-late-modern, chosen by the user over the assigned "Caderno de Registro" (#3 of 7). Seed key 925b38e5. Signature interaction: the thread (canvas/WebGL, with a static SVG fallback) bends locally toward the pointer, 0.3s cubic-bezier(.25,1,.5,1). In block 05 the same thread crosses from "Saber sobre" to "Saber como agir" as the scroll-linked bridge. Motion grammar: panels rise 24px over 0.8s cubic-bezier(.165,.84,.44,1), each only once; everything is disabled under reduced motion.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Unresolved

- Exact typeface: a non-default geometric grotesque, self-hosted (to be chosen in Phase 1; must have full Portuguese diacritics).
- Floating CTA on mobile: decide during the build.
- Checkout link: not yet; set `checkout-url` in Wix when it exists.
