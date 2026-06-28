# AGENTS.md

## Project Overview

Static marketing site for **Florian Fackler IT-Solutions** (Swiss Einzelunternehmen, CHE-269.516.266), built with **Astro 6**. The site is a single-page sales pitch (DE default at `/`, EN at `/en`) plus its mirror.

The legacy `index.html` at the repo root is superseded by the Astro source in `src/`. **Do not edit it.**

The business plan / 12-month roadmap lives in `README.md` — it is not a tech README. Update it whenever services, pricing, or industry positioning change. The website is the public face of that plan, so the two must stay in sync.

## Stack & Commands

- **Package manager**: `pnpm` (lockfile is `pnpm-lock.yaml`).
- **Dev server**: `pnpm dev` → http://localhost:4321
- **Build**: `pnpm build` → `dist/`
- **Preview build**: `pnpm preview`

No test runner, no linter, no formatter, no typecheck are configured. Do not add them without being asked. The user's workflow rule "write unit tests before submitting" still applies, but in practice it is satisfied by manual `pnpm build` verification for this static site.

## Project Structure

```
/
├── public/                       # Static assets, served as-is
│   └── assets/                   # Images, favicons, hero photo (lilaflo.{png,webp,avif})
├── src/
│   ├── components/
│   │   ├── Header.astro          # Logo + theme toggle + nav (nav labels hardcoded per-lang)
│   │   ├── Footer.astro          # Own inline `translations` object; lang switcher; Swiss flag SVG
│   │   ├── ContactDialog.astro   # <dialog> with native form, POSTs to /api/contact (Pages Function)
│   │   └── HomePage.astro        # The whole single-page body, driven by `t` prop
│   ├── functions/
│   │   └── api/contact.js        # Cloudflare Pages Function: form handler (Ollama + Resend)
│   ├── i18n/
│   │   ├── locales/{de,en}/index.json   # Translation strings for HomePage + ContactDialog + page metadata
│   │   └── utils.ts              # locales map, t(), getLocaleFromUrl(), getAlternateUrls()
│   ├── layouts/Layout.astro      # <head>, OG/JSON-LD, theme JS, 3rd-party scripts
│   ├── pages/
│   │   ├── index.astro           # DE homepage
│   │   └── en/index.astro        # EN homepage
│   └── styles/global.css         # All styles (single file, imported by Layout)
├── astro.config.mjs              # i18n defaultLocale: 'de', prefixDefaultLocale: false, sitemap
├── wrangler.toml                 # Cloudflare Pages config: name "florian-fackler-cloud", build → dist/
├── .gitea/workflows/             # CI: deploy.yaml (push to main), test.yaml (manual)
├── README.md                     # Business plan / 12-month roadmap
└── AGENTS.md                     # This file
```

## i18n Architecture

- Astro native i18n: `defaultLocale: 'de'`, `locales: ['en', 'de']`, `prefixDefaultLocale: false` (so DE is `/` and EN is `/en`).
- **DE is the source of truth.** Write new copy in German first, then translate.
- **Swiss German conventions** are mandatory: `CHF 1'000` (apostrophe thousands separator), `DSG-konform` (not `DSGVO`), formal `Sie`-form.
- HTML entities (`&amp;`, `&mdash;`) are needed in JSON values because they are rendered via `set:html`.
- Translation strings live in `src/i18n/locales/{de,en}/index.json`. **Both** `src/pages/index.astro` and `src/pages/en/index.astro` import their locale JSON and pass it to `<HomePage t={...} lang="..." />`. The EN page is **not** hardcoded — it is fully driven by `en/index.json`. Keep both files in sync when copy changes.
- **Not all i18n is in the JSON files.** `Header.astro`, `Footer.astro`, `ContactDialog.astro`, and `Layout.astro` each carry their own localized strings or external URLs. When updating copy, audit all of them.
- The language switcher in `Footer.astro` links `/en` ↔ `/`. Active locale is underlined via `.active`.
- `Layout.astro` derives `canonicalUrl`, `ogLocale`, and `ogLocale:alternate` from the `lang` prop — keep these in sync when adding a locale.

## Page Structure (single page, both languages)

`HomePage.astro` renders, in order: Hero → USP / Competitive Advantage → References → Industries → Services → Pricing (cards + day rates table) → Contact.

- `Layout.astro` wraps `<Header />`, `<slot />`, `<Footer />`, plus a `<ContactDialog />` overlay. The contact CTA buttons call `window.openContactDialog()` (defined in `ContactDialog.astro`).

## Pricing — single source of truth

The website pricing tiers are duplicated in three places that **must stay identical**: `src/i18n/locales/de/index.json`, `src/i18n/locales/en/index.json`, and the `offers` block in `src/layouts/Layout.astro` (used for JSON-LD `OfferCatalog`).

| Tier | DE label | Range | Notes |
|------|----------|-------|-------|
| Setup | Setup | CHF 8'000 – 20'000 | one-time |
| Monatlicher Support / Monthly Support | Monatlicher Support | CHF 16'000 – 40'000 / Mt. | ongoing, 1-month cancel |
| Projektbasis / Per Project | Projektbasis | CHF 8'000 – 30'000 | per project |

Day-rate table also lives in both JSON files. The full rate table (hourly + daily, by service type) is in `README.md` under "Pricing" and was filed with the Kanton Solothurn business plan (2026). Any pricing change must be verified against `README.md` before publishing.

## Code Style

- 2-space indentation, UTF-8, double quotes, self-closing void elements.
- **Astro components** for structure; **vanilla JS** in `<script is:inline>` blocks for browser-side logic.
- Use `console.debug()`, never `console.log()` (project convention).
- Wrap `localStorage` access in try-catch (private/incognito mode can throw).
- Inline `onclick=""` handlers are present in `ContactDialog.astro` and `HomePage.astro`. New code should prefer `addEventListener`, but match the existing style when editing those files.
- All styles live in `src/styles/global.css`. Use the CSS custom properties defined in `:root` (notably `--accent: #be1902`, `--max-width: 1100px`).
- Dark mode is driven by `data-theme` on `<html>`, persisted in `localStorage.theme`, falling back to `prefers-color-scheme`. The init script lives at the bottom of `Layout.astro`.

## External Services & Inline Scripts

Despite the conventional wisdom of "no external scripts on a privacy-focused Swiss site," the current build does load third-party scripts in `Layout.astro`:

- **Happierleads** tracking snippet (head, plain `<script async src=...>`).
- **Umami** analytics at `https://imamu.code-nexus.co` (deferred, async, no cookies).
- **Contact form** is a native HTML form in `ContactDialog.astro` that POSTs JSON to `/api/contact`, a Cloudflare Pages Function (`functions/api/contact.js`). The function drafts a reply via **Ollama** (`OLLAMA_BASE_URL`, `OLLAMA_API_KEY`, `OLLAMA_MODEL` env vars) and sends email via **Resend** (`RESEND_API_KEY`, `RESEND_FROM`, `CONTACT_NOTIFY_TO` env vars). All secrets are set in the Cloudflare Pages dashboard → Settings → Environment variables. The function degrades gracefully: if Ollama or Resend is not configured, it returns a canned reply and skips sending.

`Layout.astro` has a `// TODO` for a 1200×630 `og-image.png` in `public/`. OG/Twitter meta tags are conditional on that file existing.

## Deployment

- **Target**: Cloudflare Pages. `wrangler.toml` sets `pages_build_output_dir = "dist"` and the project name is `florian-fackler-cloud`.
- **Deploy path**: Cloudflare Pages is connected to the GitHub repo (`origin: git@github.com:lilaflo/florian.fackler.cloud.git`) and auto-deploys `dist/` on push to `main`. The Cloudflare Pages build setting **Deploy command** must be `npx wrangler pages deploy dist --project-name=florian-fackler-cloud` (NOT `npx wrangler deploy`, which deploys a Worker without env var support or Pages Function processing).
- `.gitea/workflows/deploy.yaml` and `.gitea/workflows/test.yaml` are vestigial: they reference `./deploy.fish` (which does not exist) and are not on the real deploy path. Safe to delete if you want a clean tree.
- **Domain mismatch** to be aware of: `astro.config.mjs` sets `site: 'https://properflow.ch'` (the future canonical), but `Layout.astro` hardcodes `https://florian.fackler.cloud` for `baseUrl`, canonical, OG, and JSON-LD URLs. The two are out of sync — when changing the site URL, update both.

## Workflow Conventions

- **Commit messages**: Conventional Commits (`feat:`, `fix:`, `docs:`, `refactor:`, `style:`, `test:`, `chore:`), present tense, focused and atomic. Never add `Co-Authored-By: Claude` or any Anthropic attribution. Never mention the assistant in commit messages.
- **Branch naming**: `feature/...` or `fix/...`.
- **Planning**: for substantial changes, drop a full implementation plan in `planning/` (directory does not exist yet — create it).
- **README**: update it whenever business logic (services, pricing, positioning, roadmap) changes. The site and the business plan are the same artifact from two angles.
- **No new dependencies** without explicit request.
- **Bugs**: add a regression verification (manual or scripted) per reported bug. There is no automated test harness to plug into.
- **Gitea issues**: do not close them autonomously; wait for explicit OK.
- **Servers**: never stop or start `pnpm dev` (or any node process) without asking first.
- **Behavior reminders at start of every response** (from the parent `~/.claude/CLAUDE.md`): surface the relevant rules above before acting.
