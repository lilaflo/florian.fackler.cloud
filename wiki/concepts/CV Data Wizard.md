---
title: CV Data Wizard
created: 2026-07-02
updated: 2026-07-02
sources:
  - [[jobsuchi.ch (BrainDB export)]]
tags:
  - concept
  - jobsuchi
  - cv
  - wizard
  - llm
---

# CV Data Wizard

Interactive wizard inside jobsuchi.ch that extracts depth from thin CV data through targeted questions, then generates a tailored CV per job.

## Problem
Uploaded CVs are often thin — missing details, vague formulations, no quantified results. An LLM cannot generate a strong CV from bad raw data.

## Flow
1. **Ersterfassung** — manual entry or PDF upload; LLM extracts structure
2. **Gezieltes Nachfragen** — up to 3 questions per CV point
3. **Anreicherung** — user answers or skips; `enrichment_status` raw → in_progress → complete
4. **Perfect CV generation** — per-job ATS-optimized CV

## Question templates
- Experience: main task, technologies, team size, measurable result, biggest challenge, methodology, stakeholders
- Projects: role, user count, biggest challenge
- Skills: since when, context used, certified

## Data model
`cv_profiles`: id, text, analysis, rating, is_active, structured_data (JSON), enrichment_status

## Integration
Current: CV upload → Roaster → Matching → Tailoring
New: CV upload → Roaster → Wizard → Enriched DB → Matching → Perfect CV

## Open questions
- Optimal number of questions per point (3, 5, dynamic)
- Single-pass vs. multi-session
- Handling 'don't know'/skip
- Supporting documents (certificates, references)
- Combination with Dual-Layer CV

## Source
- [[jobsuchi.ch (BrainDB export)]]