# Aurelia Aesthetic Studio - Med Spa Landing Page (Demo)

A medical spa landing page, built to show a med spa owner exactly
what a custom site looks like versus a template. Use it as a live portfolio
piece: swap in a real client's content and media, and it becomes their site.

**Live sections:** Hero (video) → Trust Bar → Services → Before/After
(draggable slider) → Provider → Reviews → Membership → FAQ → Location/Map →
Final CTA → Footer, plus a sticky mobile booking bar.

---

## Tech stack

| Layer      | Choice                                      |
|------------|----------------------------------------------|
| Framework  | Next.js + TypeScript          |
| Styling    | Tailwind CSS - utility classes only, no custom theme config (arbitrary values used inline, e.g. `bg-[#26221D]`) |
| Motion     | Framer Motion                                 |
| Icons      | react-icons (`hi2`, `pi`, `fa6`)               |
| Fonts      | `next/font/google` - Fraunces, Manrope, Space Grotesk |

---

## Getting started

```bash
npm install
npm run dev
```

Open **http://localhost:3000**.

> **Heads up:** the three fonts are fetched from Google Fonts the first time
> you run `npm install && npm run dev` (or `npm run build`). You need an
> internet connection for that first run. After that, Next.js caches them
> locally.

To ship it:

```bash
npm run build
npm run start
```

Or deploy straight to [Vercel](https://vercel.com). Push this folder to a
GitHub repo, import it in Vercel, no config needed.

---

## Design system

| Token          | Value       | Used for                              |
|----------------|-------------|----------------------------------------|
| Cream (base)   | `#F7F2EB`   | Page background, light text on dark    |
| Ink (text)     | `#26221D`   | Body text, dark section backgrounds    |
| Clay (accent)  | `#BD8770`   | Primary buttons, hover states          |
| Card           | `#EFE6DA`   | Card backgrounds, alternating sections |
| Gold (hairline)| `#A9834F`   | Dividers, slider handle ring           |
| Warm accent    | `#E4B896`   | Italic headline word, stars, highlights|

**Type roles**
- **Display** — Fraunces (serif, italic used for warmth) for headlines
- **Body** — Manrope for paragraphs, descriptions
- **Label** — Space Grotesk for eyebrows, prices, stats, buttons (deliberately
  clinical/precise, contrasting against the soft serif)

---

## Folder structure

```
app/                    Root layout, global styles, page assembly
components/
  layout/               Navbar, Footer
  sections/             Hero, TrustBar, ServicesGrid, BeforeAfter, Provider,
                         Reviews, Membership, FAQ, Location, FinalCTA
  ui/                    Button, SectionHeading, ServiceCard, ReviewCard,
                         FAQItem, BeforeAfterSlider (signature drag component),
                         StickyBookBar
lib/
  constants.ts          Business info: name, address, phone, hours, map, nav links
  data.ts               Services, reviews, FAQ, before/after pairs, membership tiers
  animations.ts         Shared Framer Motion variants
types/                  Shared TypeScript interfaces
public/
  videos/hero-loop.mp4  Compressed, silent, looping hero background
  images/               Poster frame + all section imagery, organized by section
```

---

## Swapping in a real client

Almost everything content-related lives in two files:

1. **`lib/constants.ts`** — business name, tagline, city, address, phone,
   email, hours, social links, Google Maps embed URL, nav labels.
2. **`lib/data.ts`** — services, before/after pairs, reviews, FAQ,
   membership tiers. Add, remove, or edit array entries; the page re-renders
   automatically, no component edits needed.

**Media:** replace files inside `public/videos` and `public/images`, keeping
the same filenames or update the paths referenced in `lib/data.ts` and the
section components if you rename anything.

**Map:** get a fresh embed URL from Google Maps → Share → Embed a map, for
the real client's address, and drop it into `mapEmbedUrl` in
`lib/constants.ts`.

**Colors/fonts:** all color values are Tailwind arbitrary values (e.g.
`text-[#26221D]`) rather than theme tokens, by design. Search and replace a
hex code across the project to reskin. Fonts are swapped in `app/layout.tsx`.

---

## Notable implementation details

- **Before/After slider** (`components/ui/BeforeAfterSlider.tsx`). This is the
  signature interactive piece. Drag or use arrow keys to compare; built with
  Framer Motion's `useMotionValue` + CSS `clip-path`, no external library.
- **Mobile menu** renders through a React portal to `document.body` rather
  than inline in the header, avoiding a real CSS bug where `backdrop-blur`
  on an ancestor turns it into a containing block for `position: fixed`
  children (this silently breaks full-screen mobile overlays in Chrome/
  Safari once you add a blurred, scrolled nav bar).
- **Sticky mobile booking bar** appears once the person scrolls roughly past
  the hero, is dismissible for the rest of the session (`sessionStorage`),
  and automatically hides itself while the Final CTA or Footer sections
  (which have their own booking buttons) are on screen so two "Book" CTAs
  never compete for attention at once.
- **Instagram feed grid was intentionally left out** of the footer. A real
  client site should pull a live feed via API/embed rather than static
  images, so this is left as a clean extension point.
- **Trust bar is text/icon based**, not logo images, so any client can drop
  in their real numbers without needing new photography.

---

## Before this becomes a real client site

- [ ] Replace all stock photography/video with the client's own (or
      properly licensed) media. Current assets are demo placeholders.
- [ ] Replace before/after images with the client's real, consented results.
- [ ] Update all copy in `lib/data.ts`. Reviews and FAQ answers here are
      placeholder content written for this demo.
- [ ] Swap the Google Maps embed for the real address.
- [ ] Confirm licensing/certification claims in the Provider and Trust Bar
      sections against what the real practice can substantiate.
- [ ] Wire the booking buttons to a real scheduling system (Vagaro,
      Boulevard, Calendly, etc.) instead of the placeholder `#booking` anchor.

---

## License / credits

Stock photography and video sourced from Pexels for demo purposes only. Replace before any commercial launch.