# AGENTS.md

## Project Overview

This is a static personal/professional website for Florian Fackler IT Consulting. It is a single-page HTML file (`index.html`) with inline CSS and vanilla JavaScript. There is no build system, framework, or package manager.

## Build / Lint / Test Commands

There is no build step. The site is served as plain HTML.

- **Preview locally**: Open `index.html` directly in a browser, or use a simple static server:
  - `python3 -m http.server 8000`
  - `npx serve .` (requires Node.js)
- **HTML validation**: `npx html-validate index.html`
- **CSS validation**: No CSS linter is configured. Validate manually via W3C CSS Validator.
- **Link checking**: `npx hyperlink index.html`
- **Tests**: No test framework is configured. There are no tests for this project.

## Project Structure

```
/
├── index.html    # The entire site: HTML, inline CSS, inline JS
└── AGENTS.md     # This file
```

## Code Style Guidelines

### General

- This is a single-file static site. All CSS and JS are inline within `index.html`.
- Use UTF-8 encoding.
- Use 2-space indentation for HTML, CSS, and JavaScript.
- Keep the file self-contained — no external CSS or JS files unless absolutely necessary.

### HTML

- Use HTML5 (`<!doctype html>`).
- Use semantic elements (`<header>`, `<nav>`, `<section>`, `<footer>`).
- Use double quotes for HTML attributes.
- Self-close void elements (`<meta />`, `<br />`).
- Include `lang="en"` on the `<html>` element.
- Use HTML entities for special characters in content (e.g., `&amp;` for `&`).

### CSS

- All styles are inline in a single `<style>` block in `<head>`.
- Use CSS custom properties (variables) defined in `:root` for colors, spacing, and theming.
- Naming convention: `kebab-case` for classes (e.g., `.service-card`, `.usp-grid`).
- Use `var(--variable-name)` for all theme-aware colors and values.
- Dark mode is implemented via `[data-theme="dark"]` selector and `prefers-color-scheme` media query.
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

### Theme System

- Theme toggle persists user preference in `localStorage` under key `"theme"`.
- Falls back to OS preference via `prefers-color-scheme` media query.
- Three states: explicit `"dark"`, explicit `"light"`, or auto (OS preference).
- Toggle button sits in the header between the logo and nav, centered on desktop.

### Design Conventions

- Accent color: `--accent: #be1902` (dark red). Used for headings, links, borders.
- Font stack: Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif.
- Max content width: `--max-width: 1100px`.
- Sections have `padding: 60px 0`.
- Cards use subtle borders with hover effects (border color change + `translateY(-5px)`).
- Tech stack uses pill-style `.tech-tag` elements with `.tech-grid` flex container.

## Page Structure

The page is a single-page sales site for IT consulting services with these sections:

1. **Header** — Logo + theme toggle (centered between logo and nav) + navigation. On mobile, logo and toggle share a row via CSS grid, nav wraps below.
2. **Hero** — Headline, tagline, CTA button.
3. **USP / Competitive Advantage** — 4-column responsive grid: DSG-Compliant AI, Zero data leakage, Why this matters, Market stats.
4. **Industries** — 4 service-style cards: Trade & E-Commerce, Professional Services, Industry & Manufacturing, Healthcare & Education.
5. **Services** — 4 service cards in responsive grid: AI Strategy & Integration, IT Architecture, E-Commerce, CTO-as-a-Service.
6. **Technology Stack** — Centered pill-tag grid listing languages, cloud platforms, databases, and e-commerce systems.
7. **Contact** — Email CTA, geographic reach selling point (ZH/BE/BS/LU within 1 hour).
8. **Footer** — Copyright (year via JS), tagline, Swiss flag SVG.

## Important Notes

- Footer year is dynamically set via JavaScript (`new Date().getFullYear()`).
- Do not add external dependencies unless explicitly requested.
- Do not split into multiple files unless explicitly requested.
