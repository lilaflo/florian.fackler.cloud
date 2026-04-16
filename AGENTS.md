# AGENTS.md

## Project Overview

This is a static website for Florian Fackler IT Services, a Swiss AI automation and IT consulting practice (Einzelunternehmen). The site is built with Astro, a modern static site generator. The legacy `index.html` file still exists but is superseded by the Astro implementation in `src/`.

## Build / Lint / Test Commands

- **Development server**: `pnpm dev` (runs on http://localhost:4321)
- **Production build**: `pnpm build` (outputs to `dist/`)
- **Preview production build**: `pnpm preview`
- **Tests**: No test framework configured. No tests exist for this project.

## Project Structure

```
/
├── public/                   # Static assets (images, SVGs, etc.)
│   └── assets/               # Images and other assets
├── src/
│   ├── components/           # Reusable Astro components
│   │   ├── Header.astro
│   │   ├── Footer.astro      # Contains language switcher (EN | DE)
│   │   └── ContactDialog.astro
│   ├── i18n/
│   │   ├── locales/
│   │   │   ├── de/index.json # German translation strings
│   │   │   └── en/index.json # English translation strings
│   │   └── utils.ts
│   ├── layouts/              # Page layouts
│   │   └── Layout.astro      # Handles lang, canonical, hreflang, OG locale
│   ├── pages/                # File-based routing
│   │   ├── index.astro       # German homepage (default locale, / route)
│   │   └── en/index.astro    # English homepage (/en route)
│   └── styles/               # Global CSS
│       └── global.css
├── astro.config.mjs          # Astro configuration (i18n defaultLocale: 'de')
├── package.json              # Dependencies and scripts
├── README.md                 # Business documentation (pricing, transition plan)
└── AGENTS.md                 # This file
```

## Code Style Guidelines

### General

- Astro-based static site with component-based architecture.
- Use UTF-8 encoding.
- Use 2-space indentation for HTML, CSS, JavaScript, and Astro files.
- Organize code into reusable components in `src/components/`.
- Global styles go in `src/styles/global.css`.
- Static assets (images, SVGs) go in `public/` directory.

### HTML

- Use HTML5 (`<!doctype html>`).
- Use semantic elements (`<header>`, `<nav>`, `<section>`, `<footer>`).
- Use double quotes for HTML attributes.
- Self-close void elements (`<meta />`, `<br />`).
- The `<html lang>` attribute is set dynamically by `Layout.astro` from the `lang` prop (defaults to `de`).
- Use HTML entities for special characters in content (e.g., `&amp;` for `&`). This applies to both `.astro` templates and i18n JSON values rendered via `set:html`.
- Add `aria-label` to interactive elements for accessibility.

### CSS

- All styles are in `src/styles/global.css` and imported in the Layout component.
- Use CSS custom properties (variables) defined in `:root` for colors, spacing, and theming.
- Naming convention: `kebab-case` for classes (e.g., `.service-card`, `.usp-grid`).
- Use `var(--variable-name)` for all theme-aware colors and values.
- Dark mode implemented via `[data-theme="dark"]` selector and `prefers-color-scheme` media query.
- Use flexbox and CSS Grid for layouts.
- Mobile-first responsive design: use `@media (max-width: 768px)` breakpoints.
- Transitions on interactive elements: `transition: all 0.3s ease`.
- Border radius defined via `--border-radius` variable.
- Keep `!important` usage minimal (reserved for forced overrides like `.btn` text color).

### JavaScript

- Vanilla JavaScript only. No frameworks or libraries.
- Use `const` for values that don't change, `let` for those that do. Avoid `var` in new code.
- Use `console.debug()` instead of `console.log()` (per project convention).
- Use `addEventListener` for event handling (not inline `onclick`).
- Use `"use strict"` mode.
- IIFE pattern for encapsulated code to avoid polluting global scope.
- Use template literals for string interpolation.
- Prefer `===` over `==`.
- Handle `localStorage` access with try-catch (can fail in private/incognito mode).

### Theme System

- Theme toggle persists user preference in `localStorage` under key `"theme"`.
- Falls back to OS preference via `prefers-color-scheme` media query.
- Three states: explicit `"dark"`, explicit `"light"`, or auto (OS preference).
- Toggle button sits in the header between the logo and nav, centered on desktop.
- Theme changes trigger via `data-theme` attribute on `<html>` element.

### Design Conventions

- Accent color: `--accent: #be1902` (dark red). Used for headings, links, borders.
- Font stack: Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif.
- Max content width: `--max-width: 1100px`.
- Sections have `padding: 60px 0`.
- Cards use subtle borders with hover effects (border color change + `translateY(-5px)`).

### Accessibility & Performance

- All interactive elements have keyboard navigation support.
- Use semantic HTML for screen reader compatibility.
- Color contrast meets WCAG AA standards.
- Optimize images (webp format, proper sizing).
- Minimize repaints/reflows by batching DOM updates.

### Error Handling (JavaScript)

- Wrap `localStorage` operations in try-catch blocks (fails in private/incognito).
- Check for null/undefined before accessing DOM elements.
- Use defensive programming for optional features (theme toggle, etc.).
- Provide graceful degradation if features fail to initialize.

### Browser Compatibility

- Target modern browsers (last 2 versions of Chrome, Firefox, Safari, Edge).
- Use CSS features with good support (flexbox, grid, custom properties).
- Test responsive behavior on mobile viewport (375px-768px) and desktop (768px+).
- Provide fallback for unsupported features where critical.

### Security

- No external scripts or CDNs unless explicitly requested.
- All SVG assets embedded inline to avoid external requests.
- No inline event handlers in HTML (`onclick`, etc.).
- Validate any user input if forms are added in future.

### Internationalization (i18n)

- Astro native i18n is configured in `astro.config.mjs` with `defaultLocale: 'de'` and `locales: ['en', 'de']`. `prefixDefaultLocale: false` means German is served at `/` and English at `/en`.
- German is the default/primary locale — new copy should be written in German first, then translated to English.
- Translation strings live in `src/i18n/locales/{de,en}/index.json`. The German page (`src/pages/index.astro`) reads strings directly from `de/index.json`; the English page (`src/pages/en/index.astro`) currently contains hardcoded English copy (not yet migrated to `en/index.json`).
- When adding a new translatable string: add it to **both** locale JSON files and reference it from the corresponding page.
- German copy should use Swiss conventions: `CHF 1'000` (apostrophe as thousands separator), `DSG-konform` (not `DSGVO`), formal `Sie`-form.
- Use HTML entities in JSON values (`&amp;`, `&mdash;`) since they're rendered via `set:html`.
- The language switcher lives in `Footer.astro` and links `/en` ↔ `/`. The active locale is underlined via the `.active` class.
- `Layout.astro` sets `canonicalUrl`, `ogLocale`, and `hreflang` alternates based on the `lang` prop — keep these in sync when adding locales.
- Component defaults (`Header`, `Footer`, `Layout`) fall back to `lang = 'de'` if the prop is omitted.

### Git Workflow

- Use conventional commit messages: `feat:`, `fix:`, `docs:`, `refactor:`, `style:`, `test:`, `chore:`.
- Keep commits focused and atomic (one logical change per commit).
- Write commit messages in present tense ("Add feature" not "Added feature").
- Create descriptive branch names: `feature/feature-name` or `fix/issue-name`.

## Page Structure

Both language variants share the same single-page sales site structure:

1. **Header** — Logo (links to `/` for DE, `/en` for EN) + theme toggle + navigation. On mobile, logo and toggle share a row via CSS grid, nav wraps below.
2. **Hero** — Headline, tagline, CTA button.
3. **USP / Competitive Advantage** — Responsive grid: data stays in Switzerland, what you actually get, competitor-movement stats.
4. **Industries** — 4 cards: Trade & Online Shops, Professional Services, Industry & Manufacturing, Healthcare & Education.
5. **Services** — 4 cards: AI Solutions, Systems & Strategy, Online Shops, Interim IT Leadership.
6. **Pricing** — 3 pricing tiers (Setup, Monthly Support, Per Project) with card layout.
7. **Contact** — CTA, geographic reach selling point (ZH/BE/BS/LU within 1 hour).
8. **Footer** — Copyright (year via JS), services tagline, language switcher (EN | DE, active locale underlined), Swiss flag SVG.

## Pricing

Pricing on the website must be consistent with the Business Plan filed with the immigration authorities (Kanton Solothurn, 2026). Current hourly rates:

| Service Type | Hourly Rate (CHF) | Daily Rate (CHF) |
|---|---|---|
| Software Development / E-Commerce | 160 – 180 | 1,200 – 1,400 |
| IT Consulting / Architecture / API | 180 – 220 | 1,400 – 1,700 |
| Process Automation (n8n, Workflows) | 170 – 220 | 1,300 – 1,700 |
| AI Integration & Data Analysis | 200 – 280 | 1,600 – 2,200 |
| AI & Digital Strategy Consulting | 220 – 300 | 1,700 – 2,400 |

Website pricing tiers (derived from hourly rates, ~40-100h for setup, 5-22h/mo for support):

- **Setup**: CHF 8,000 – 20,000 (one-time)
- **Monthly Support**: CHF 1,000 – 4,000/mo
- **Per Project**: CHF 8,000 – 30,000

The "Monthly Support" tier is for maintenance/operations only. Full-time retainer engagements (Monatspaket) start at CHF 16,000/mo and are negotiated separately — they are not listed on the website.

When updating pricing, always verify alignment with the Business Plan before publishing.

## Important Notes

- Footer copyright year is dynamically computed via `new Date().getFullYear()` in `Footer.astro`.
- Do not add external dependencies unless explicitly requested.
- When changing business copy (services, pricing, industries), update **both** `src/i18n/locales/de/index.json` and the corresponding section in `src/pages/en/index.astro` — otherwise the languages drift apart.
