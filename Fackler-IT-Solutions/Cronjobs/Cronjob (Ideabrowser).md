You have one task: process today's "Idea of the Day" from Ideabrowser and create a detailed Obsidian note.

**OBSIDIAN VAULT:** `$OBSIDIAN_VAULT_PATH`
**TARGET DIRECTORY:** `Ideabrowser/`

**STEP 1 — Scrape the full idea page with camofox-browser**

```bash
camofox open https://www.ideabrowser.com/idea-of-the-day
camofox snapshot
```

This renders the JS and gives you the full structured content including scores, pricing, market data, trend data, and competitor info. camofox bypasses bot detection that blocks standard crawlers.

**STEP 2 — Create the detailed note**
Write the file at:
`$WIKI_PATH/entities/Ideabrowser/YYYY-MM-DD - Idea Name.md`

Format the note with these sections (include only what's available from the scraped content):

```
---
source: ideabrowser
date: YYYY-MM-DD
url: <the idea URL>
tags:
  - business-idea
  - ideabrowser
---

# <Idea Name>

> **"<one-line hook>"**
> *<badge tags like "Massive Market • Perfect Timing • Unfair Advantage" if visible>*

**Source:** [Ideabrowser Idea of the Day](https://www.ideabrowser.com/idea-of-the-day) | YYYY-MM-DD

---

## Core Concept

> **<one-line value proposition>**
> *<supporting tagline>*

<2-3 paragraphs summarizing the problem, solution, how it works, business model, and go-to-market.>

---

## Scores

| Score | Value | Label |
|---|---|---|
| Opportunity | N/10 | <label> |
| Problem | N/10 | <label> |
| Feasibility | N/10 | <label> |
| Why Now | N/10 | <label> |

---

## Business Model & Pricing

| Tier | Price | Type |
|---|---|---|
| <tier> | <price> | <description> |

**Revenue Potential:** <if available>

---

## Business Fit

| Metric | Score |
|---|---|
| Revenue Potential | <value> |
| Execution Difficulty | <value> |
| Go-To-Market | <value> |
| Founder Fit | <value> |

---

## Market Categorization

| Field | Value |
|---|---|
| Type | <SaaS, B2B, etc> |
| Market | <market> |
| Target | <target audience> |
| Main Competitor | <competitor> |

---

## Trend Data

| Keyword | Volume | Growth | Competition |
|---|---|---|---|
| <keyword> | <volume> | <growth> | <level> |

---

## Why Now

- <bullet points on timing/market conditions>

---

## Execution Plan

1. <step>
2. <step>
3. ...

---

## Expansion Path

<paragraph on future expansion>

---

## Proof & Signals

| Platform | Count |
|---|---|
| Reddit | <count> |
| Facebook | <count> |
| YouTube | <count> |

⚠️ Scores not captured via JS rendering — values from page content. Exact score labels inferred from text context.
```

Fill everything you can. If a section's data isn't available from the scraped page, skip that section entirely. The note must be detailed and useful.
