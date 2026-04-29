# Canopy Homepage — `dev/club-canopy` Outline

Pre-build spec for the homepage redesign. Approve / redline this before any HTML moves.

## North Star

> Canopy is a Miami digital arcade lounge for women creators building their internet world with prompts, drops, guides, systems, and AI.

Soft neon, not harsh CRT. Editorial + asymmetric, not centered SaaS. Arcade *bones* from `dev/lychee`, lounge *finish* on top. Conversion clear, world first.

## Audience

Women creators, entrepreneurs, influencers, freelancers, AI-curious. They want pretty + profitable, not tech-bro.

## Decisions Locked

- **Entrance frame:** full club visible on land, then door router. No email gate.
- **Stephanie placement:** small founder signal card near lower half. Full story lives on `/about`.
- **Branch:** `dev/club-canopy` off `main`. `dev/lychee` stays untouched as reference.

## Global System

### Palette

Soft neon Miami night resort. Near-black base, layered with violet, purple, pink, aqua, blue. Accent of sunset orange for warmth. No yellow/cyan basement glow, no Y2K teal.

- Base: near-black (#0B0712 ish), deep violet wash
- Primary neon: hot pink, magenta, aqua
- Soft glow: violet to pink gradient
- Accent: sunset orange (used sparingly, like a lipstick mark)
- Cream/blush: text and zine details on dark

### Typography

- **Display:** Cormorant Garamond (fashion serif for headlines, editorial weight)
- **Body:** Inter or DM Sans (clean, readable)
- **Pixel accent:** VT323 (eyebrows, drop tags, ticket numbers — used like a stamp, not body text)
- **Mono accent:** Space Mono (small captions, footer)

### Motifs (use throughout)

- Tickets, passes, keycards, sticker tags
- Guide badges (5 colored stamps)
- Zine scraps (torn paper, masking tape, marker scribble)
- Soft grain (subtle, not noisy)
- Selective glow (one element per section, not everything)
- Pixel sparkle (tiny accents, not full pixel theme)
- Asymmetric grids and fashion-campaign spacing

### Motion

- Page-load: soft transformation flash (sailor scout energy, dialed down to a slow shimmer)
- Hover: subtle glow lift, sticker rotate, pixel sparkle
- Scroll: parallax on hero only
- No: aggressive flicker, scanline crawl, fake terminal text

### Don't

Fake employees, fake stats, fake testimonials, oversexy art, em dashes, AI-as-first-word, "scale / optimize / platform / solution," giant glass cards, generic pills, centered SaaS layout, dashboard panels, cyber grid, harsh CRT, all-caps everywhere, INSERT COIN body copy.

---

## Section Order

1. Hero / Club Entrance
2. Choose Your Entrance (3 doors)
3. Meet the Canopy Guides (5 lanes)
4. Featured Drops (6 cabinets, soft)
5. Founder Signal (Stephanie, small)
6. Guestlist (email)
7. Footer

---

## 1. Hero / Club Entrance

**Purpose.** First impression. Establish the world before any ask. Communicate that Canopy is a place for women building online with prompts, drops, and AI.

**Copy draft.**
- Eyebrow: `CLUB CANOPY · MIAMI`
- Headline: **Build your internet world.**
- Sub: Prompt packs, mini-guides, digital drops, and tiny workflow systems for women building prettier, faster online worlds.
- Primary CTA: `Choose Your Entrance ▾` (anchors to section 2)
- Secondary CTA: `Shop the Drops` (links to /shop)

**Visual treatment.** Full-bleed scene of the Canopy Scouts as club hosts, not anime poster. Asymmetric headline placement (left-weighted). Soft violet-to-pink wash behind. Selective glow on the eyebrow stamp only. One pixel sparkle accent. Marquee-style top bar with tiny bulbs (lifted from `dev/lychee` but soft, not blinking).

**Steal from `dev/lychee`.** Marquee header concept, the "this is a place" energy, neon brand mark.

**Avoid from `dev/lychee`.** Hard CRT scanlines on the full screen, all-caps INSERT COIN, PLAYER 1 READY blink, harsh yellow/cyan glow.

**Responsive.** Headline stays large on mobile but stacks. Scouts image becomes vertical poster behind text. Two CTAs stack.

**Conversion goal.** Visitor scrolls or clicks Choose Your Entrance. Soft commit, no bounce.

---

## 2. Choose Your Entrance

**Purpose.** Route the visitor by intent: buyer, browser, or community.

**Copy draft.**
- Eyebrow: `CHOOSE YOUR ENTRANCE`
- Section line: Three doors. Pick the one that fits where you are.

| Door | Title | One-line | CTA |
|---|---|---|---|
| 1 | **Shop the Drops** | Prompt packs, kits, and mini-guides. | Open the Shop |
| 2 | **Grab Freebies** | Free starter library, samples, mini-guides. | Take a Freebie |
| 3 | **Enter Club Canopy** | Members-only drops and weekly experiments. | Claim Your Pass |

**Visual treatment.** Three ticket / keycard objects, asymmetric layout (not three equal cards in a row — stagger sizes / heights). Each ticket has a Guide stamp visible in the corner. Die-cut feel, soft neon edge, sticker rotation on hover. Object-based, not card-based.

**Steal from `dev/lychee`.** Cabinet-as-object structure, screen-within-card concept.

**Avoid from `dev/lychee`.** Equal-width grid, harsh borders, CTA labels like PLAY or INSERT COIN.

**Responsive.** Stack vertically on mobile, keep ticket aspect ratio. Tablet shows 2 + 1 stagger.

**Conversion goal.** Click into Shop / Freebies / Club page.

---

## 3. Meet the Canopy Guides

**Purpose.** Introduce the medium-based navigation system. Help visitors self-identify by lane. Plant the Guide system for filter use later.

**Copy draft.**
- Eyebrow: `THE CANOPY GUIDES`
- Section line: Five mediums. Pick your lane.

| Guide | Color | One-line |
|---|---|---|
| **Voice** | Hot pink | Hooks, captions, scripts, brand voice. |
| **Visual** | Aqua | Renders, image prompts, aesthetics. |
| **Motion** | Sunset orange | Reels, short-form, shot lists. |
| **Systems** | Violet | Content OS, workflows, automations. |
| **Money** | Magenta | Offers, sales, first paid clients. |

**Visual treatment.** Five small badge / sticker objects in a staggered row (not equal grid). Each has a Guide color, name, one-line, and a small character silhouette or detail (not a full character card). Sticker / stamp feel. Hover lifts and tilts. Click filters Featured Drops below by Guide tag.

**Steal from `dev/lychee`.** The Scouts banner energy and color-per-guide system.

**Avoid from `dev/lychee`.** Full Sailor Moon poster, anime lore copy, fake character bios, equal-width feature grid.

**Responsive.** 5-in-a-row on desktop, 2 / 3 stagger on tablet, horizontal scroll strip on mobile.

**Conversion goal.** Time on page, plant the Guide language, encourage filter / click into a drop.

---

## 4. Featured Drops

**Purpose.** Show the offer ladder. Sell the actual product. This is the revenue section.

**Copy draft.**
- Eyebrow: `NOW SHOWING`
- Section line: Six drops. Six rooms. Pick where you're going.

| # | Drop | Tag | Price | One-line | CTA |
|---|---|---|---|---|---|
| 1 | **First $3K** | Money | Free | How I landed my first client with 5 prompts. | Take the Freebie |
| 2 | **The Starter Kit** | Voice + Money | $27 | 30 prompts across 5 sections. | Get the Kit |
| 3 | **DM Playbook** | Voice + Money | $47 | 10 prompts to close $4K in the DMs. | Open the Drop |
| 4 | **Wednesday Workshop** | Money | Free | Live every Wednesday, 8PM EST. | RSVP |
| 5 | **1:1 Sessions** | Money + Systems | $350 / $900 | Build your AI plan with Stephanie. | Book the Session |
| 6 | **Content OS** | Systems | Coming soon | Your creator operating system. | Get the Drop Notice |

**Visual treatment.** Cabinet / drop-tag style cards. Each has a Guide sticker visible. Asymmetric grid, not 2x3 equal. Soft neon outer glow on hover (one card glows at a time). Price tag like a thrift shop sticker, slight rotation. Mix card sizes is fine. NO fake high scores. NO fake testimonials. NO scanlines on every card.

**Steal from `dev/lychee`.** Cabinet structure, screen-within-card concept, color-per-cabinet.

**Avoid from `dev/lychee`.** Full CRT scanline overlay, all-caps PLAY / LOCKED labels, the high score table, harsh basement palette.

**Responsive.** 3-up desktop with size stagger, 2-up tablet, 1-up mobile (full ticket per row).

**Conversion goal.** Click to product / booking / Kit landing page. Primary revenue moment of the page.

**CTA wiring (defer wiring to implementation pass — for now stub `#` with data-attr for the link target).**
- First $3K → Kit landing page
- Starter Kit → product page (Stripe / Gumroad TBD)
- DM Playbook → product page (Stripe / Gumroad TBD)
- Wednesday Workshop → Kit registration form
- 1:1 Sessions → cal.com/canopy-academy/discovery
- Content OS → Kit form for waitlist

---

## 5. Founder Signal

**Purpose.** Trust nudge. Establish Stephanie as real face without making the homepage a founder story.

**Copy draft.**
- Eyebrow: `BUILT IN MIAMI`
- Line: **Created by Stephanie Gonzalez** for women building prettier, faster online worlds.
- Sub: Miami based. AI systems builder. Founder of Canopy.
- CTA: `Read the full story →` (links to /about)

**Visual treatment.** Small horizontal card. One real or AI-rendered photo of Stephanie. Torn-zine or Polaroid frame. Asymmetric: image weight on one side, text on the other. Not full-bleed. Soft selective glow on the photo edge. No team grid, no fake employees.

**Steal from `dev/lychee`.** Nothing. New section.

**Avoid.** SaaS team page, "Meet the founder" bullet bio, multi-person grid.

**Responsive.** Stack on mobile: photo top, text below.

**Conversion goal.** Trust nudge before the email ask. About-page click is bonus.

---

## 6. Guestlist (Email)

**Purpose.** Email capture. Soft commit before footer. The replacement for "newsletter signup."

**Copy draft.**
- Eyebrow: `GUESTLIST`
- Headline: **Get on the guestlist.**
- Sub: Creator drops, prompt samples, mini-guides, and workflow ideas. Sent from Canopy.
- Input placeholder: `Your email`
- Button: `Join the Guestlist`
- Privacy line: No spam. Unsubscribe anytime.

**Visual treatment.** Wide horizontal section. Velvet rope or paper invite feel. Asymmetric headline + form, not centered. Soft neon glow on the button only. Small ticket-stub graphic in the corner. Background slightly different from the rest of the page (deeper violet, like a back room of the club).

**Steal from `dev/lychee`.** Nothing direct.

**Avoid.** Generic "Subscribe to our newsletter," boxy SaaS form, equal-width input + button, "Stay in the loop" copy.

**Responsive.** Form full-width on mobile, button stacks below input.

**Conversion goal.** Email capture. Wire to Kit when ready. Until then: graceful local success message. Do not pretend the subscription is real.

---

## 7. Footer

**Purpose.** Secondary nav. Close.

**Copy draft.**
- Logo: Canopy
- Tagline: Build your dreamy internet world.
- Columns:
  - **Shop:** Drops · Free Resources · Club Canopy
  - **Learn:** Canopy Academy · The Guides · About
  - **Legal:** Privacy · Terms · Contact
- Bottom line: © 2026 Canopy · Miami

**Visual treatment.** Small. Soft type. Cream on near-black. One pixel star at a corner. Generous whitespace. No big logo, no social spam.

**Avoid.** Cyber grid, oversized footer, social link wall.

**Responsive.** Columns stack on mobile.

**Conversion goal.** Catch the visitor who scrolled all the way without converting. Quiet utility.

---

## Build Order (after approval)

1. Tokenize the design system (colors, type, spacing, shadow / glow) in `style.css`.
2. Hero shell + nav-less marquee top.
3. Door router (3 tickets).
4. Guides badge row.
5. Drops grid (asymmetric, soft).
6. Founder signal card.
7. Guestlist section + local-success state.
8. Footer.
9. Motion pass (hover, scroll, page-load shimmer).
10. Responsive pass (desktop / tablet / mobile).
11. Final gut-check against the North Star line. Revise if it reads SaaS / gamer / anime.

---

## Open Items for Stephanie

- **Founder photo asset.** Real Stephanie photo, AI-rendered Stephanie, or hold a placeholder until we drop one in?
- **Scouts hero image.** Use the existing `assets/club-canopy-girls.jpg`, or want a new render that reads more "club entrance" than "squad poster"?
- **Wednesday Workshop CTA.** Is the May 6 launch the priority featured slot, or does it stay as one of six in the grid?
- **CTA wiring timing.** Stub now, wire to Kit / Stripe / Cal in a second pass once design lands?
