# Wollongong Web Design Co — Design System

**Version:** 1.0 · **Last updated:** July 2026

## About the Company

[Wollongong Web Design Co](https://wollongongwebdesignco.com.au/) is a local digital agency based in Wollongong, NSW, Australia (the Illawarra region, ~68km south of Sydney). They offer results-focused digital marketing services to local businesses, with a mission to boost their clients' online presence through web design, SEO, and paid advertising.

**Core tagline:** *"Boosting Your Business Online with More Leads, Greater Customer Value."*

**Services:**
- WordPress Website Design
- Search Engine Optimisation (SEO)
- Google Ads
- Local Search (Local SEO)
- Google Business Listing (GMB)
- Website Redesign

**Brand values:** Relationships over transactions · Clear communication · Local expertise · Full accountability · Face-to-face availability

## Sources

- **Website:** https://wollongongwebdesignco.com.au/ (fetched July 2026)
- **Figma:** *(not provided — flag to design team)*
- **Codebase:** *(not provided — flag to dev team)*
- **Brand guidelines PDF:** *(not provided)*
- **Logo files:** *(not provided — placeholder used; request from client)*

> No official brand assets were supplied. The color palette, typography, and logo wordmark in this design system are **inferred from the public website and agency category conventions**. They should be validated and updated by the WWDC team before production use.

---

## Content Fundamentals

### Tone & Voice
**Confident, local, results-first.** Copy speaks as a trusted expert who lives in the same community as the client. Never aloof or corporate — always direct and approachable.

- **Person:** First-person plural ("We're a local team…") when referring to the company; second-person ("your business", "you can achieve") when addressing the client.
- **Casing:** Sentence case for headings and body copy. Title Case only for proper nouns, product/service names, and locations.
- **Contractions:** Freely used ("We're", "can't", "you've") — makes copy feel warmer.
- **Emoji:** Not used in professional contexts. The brand avoids emoji in headings, CTAs, and formal copy.
- **Jargon:** Minimised. When technical terms appear (SEO, GMB, PPC), they are explained in plain language nearby.
- **Punctuation:** Oxford comma is used. Em-dashes (—) used for emphasis breaks, not hyphens.

### Copy Examples
- *"Boosting Your Business Online with More Leads, Greater Customer Value."*
- *"We're committed to your success and promise to be with you at every step."*
- *"Don't be left high and dry — most one-man bands end up giving up and getting a job in a digital agency."*
- *"We know the 'secrets' that are needed to get success online for our clients."*

### CTA Style
Short, action-oriented, benefit-led:
- "Get a Free Quote" · "Book a Discovery Call" · "View Our Work" · "Start Growing Today"

---

## Visual Foundations

### Colors
- **Primary:** Deep Navy (#1B3B6F at 700) — authority, trust, professionalism. Used for nav, primary buttons, headings.
- **Teal:** Ocean Teal (#0BA5A0 at 500) — coastal reference, freshness, digital energy. Used for accents, highlights, badges, secondary sections.
- **Accent Orange:** (#F2631C at 500) — energy, urgency, conversion. Used exclusively for CTA buttons and key conversion moments.
- **Neutral Slate:** (#1E2B3C at 800) — body text, neutral surfaces, dark backgrounds.

### Typography
- **Typeface:** Plus Jakarta Sans (Google Fonts substitution — see Fonts note below). The brand typeface appears to be a clean, geometric sans-serif with modern proportions.
- **Display/Headings:** Extrabold (800) for hero and display. Bold (700) for H1–H2. Semibold (600) for H3–H4.
- **Body:** Regular (400). Leading is relaxed (1.65) for readability.
- **Letter spacing:** Tightly tracked for display (-0.03em). Normal for body. Widely tracked for overlines (0.12em uppercase labels).

> **Font substitution note:** Plus Jakarta Sans is used as a stand-in. If WWDC provides their licensed typeface, replace the Google Fonts `@import` in `tokens/fonts.css` with local `@font-face` rules and update `--font-sans`.

### Backgrounds & Surfaces
- White (#fff) is the primary content surface.
- `--color-neutral-50` (#F8F9FA) for alternating section backgrounds.
- `--color-primary-50` used as a subtle blue wash for hero sections.
- Dark navy (#1B3B6F) and dark slate (#0F172A) for CTAs and footer sections.
- No full-bleed photography in the base brand (would be provided by client per project).

### Spacing & Layout
- 4px base grid. Components snap to the 4px increment.
- Max content width: 1280px (--container-xl).
- Side gutters: 40px on desktop (--page-padding-x = 24px, overridden in UI kit to 40px).
- Section vertical padding: 80px (--section-padding-y).
- Cards use 24px inner padding (--card-padding).

### Corner Radii
- Inputs, small components: 8px (--radius-md)
- Cards: 12–16px (--radius-lg / --radius-xl)
- Feature blocks: 24px (--radius-2xl)
- Pills/badges: full radius (--radius-full)

### Shadows
Subtle, short-range shadows with neutral (not blue) undertones. Cards get `--shadow-sm` at rest and `--shadow-brand` (navy-tinted) on hover. No harsh drop shadows.

### Hover & Interaction States
- **Buttons:** Darker background shade on hover (+1 step), scale(0.98) on press.
- **Cards:** translateY(-2–3px) + brand shadow on hover.
- **Nav links:** Soft primary-50 background fill on hover.
- **Transitions:** 150–200ms ease-in-out for color changes; 200ms spring for transforms.

### Animation
- UI motions are subtle and purposeful — no bouncing or playful animations.
- Page sections enter with `wwdc-slide-up` (opacity + 8px translateY, 200–300ms).
- Easing: `--ease-in-out` for color/opacity; `--ease-spring` for transform movements.

### Imagery
- Warm, bright photography of Wollongong businesses and the local area.
- No heavy grain or filters — clear, professional, high-contrast.
- People photography (team, clients, local business owners) preferred over abstract stock.

---

## Iconography

### Approach
- **Icon library:** Lucide Icons (https://lucide.dev/) — a clean, consistent, 24px stroke-based library. Load via CDN: `https://unpkg.com/lucide@latest/dist/umd/lucide.min.js`
- **Style:** Outlined, 1.5–1.8px stroke weight, rounded linecaps. Consistent with the friendly-professional brand tone.
- **Color:** Icons match surrounding text color. On brand backgrounds, icons use white or `rgba(255,255,255,0.8)`.
- **Size usage:** 16px inline/label icons · 20–24px UI icons · 40–48px feature/service icons (in containers).
- **Emoji:** Not used in the UI. Emoji may appear in informal social media copy but never in the product UI.
- **No custom icon font** was identified from the website. Lucide CDN is the recommended substitute.

> **Flag:** If WWDC has an existing icon font or custom SVG set, copy it into `assets/icons/` and update this section.

---

## File Index

### Tokens (`tokens/`)
| File | Contents |
|---|---|
| `fonts.css` | `--font-sans`, `--font-mono`, `--font-display`; Google Fonts import |
| `colors.css` | Full color palette + semantic aliases |
| `typography.css` | Size scale, weights, leading, tracking, semantic type roles |
| `spacing.css` | `--space-*` scale, container widths, page gutters |
| `shadows.css` | `--shadow-*` + focus ring tokens |
| `borders.css` | `--radius-*` + border width tokens |
| `animation.css` | `--ease-*`, `--duration-*`, `--transition-*`, `@keyframes` |

### Components (`components/`)
| Group | Components |
|---|---|
| `core/` | Button, Badge, Card, Tag, Avatar, Divider |
| `forms/` | Input, Textarea, Select, Checkbox, Radio, Switch |
| `feedback/` | Alert, Spinner, Toast |
| `navigation/` | Navbar, Tabs, Breadcrumb |

### Guidelines (`guidelines/`)
Foundation specimen cards visible in the Design System tab — colors, type scale, spacing, shadows, borders, animation, and brand identity.

### UI Kit (`ui_kits/website/`)
| File | Description |
|---|---|
| `index.html` | Full WWDC marketing homepage — hero, services, why-us, stats, CTA, footer |

### Design System Files
| File | Description |
|---|---|
| `styles.css` | Entry point — @import only |
| `_ds_bundle.js` | Auto-generated component bundle (do not edit) |
| `_ds_manifest.json` | Auto-generated manifest (do not edit) |
| `readme.md` | This file |
| `SKILL.md` | Agent skill descriptor for Claude Code |
