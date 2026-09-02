# Wiki Schema and Conventions

## Folder Structure

```
Fackler-IT-Solutions/
├── Index.md              # This page — entry point, lists all pages
├── Schema.md             # This file — conventions
├── Log.md                # Change log
├── Beratung/             # Consulting methods, pricing, market positioning
├── Finanzen-Steuern/     # Taxes, social insurance, financial planning
├── Vertraege/            # Contracts and client agreements
├── Immigration/          # Residence permits, self-employment applications
├── Infrastruktur/        # Technical setups, workflows, tools
├── Personen/             # People and organizations
└── Quellen/              # Source material: transcripts, raw articles
```

## Page Types

### Concepts (Beratung, Finanzen-Steuern, Infrastruktur, Immigration)
- **Purpose**: Ideas, methods, systems, techniques, processes
- **Naming**: kebab-case, no spaces, no umlauts, no em-dashes
- **Frontmatter**: title, created, updated, type, tags, sources (referencing files), confidence
- **Content**: Definition, how it works, advantages/limitations, applications, related concepts

### Entities (Personen)
- **Purpose**: People, organizations, institutions, companies
- **Naming**: Full names in kebab-case (e.g., "Ryan-Schuetter")
- **Frontmatter**: title, created, updated, type, tags, sources
- **Content**: Background, expertise, contributions, key concepts

### Sources (Quellen)
- **Purpose**: Summarize and reference original documents
- **Naming**: Descriptive kebab-case title
- **Frontmatter**: title, created, updated, type, tags, sources (raw files)
- **Content**: Overview, key points, related concepts with [[wikilinks]]

### Contracts (Vertraege)
- **Purpose**: Contract summaries and key terms
- **Naming**: Document type + party in kebab-case
- **Frontmatter**: tags
- **Content**: Parties, conditions, source references

## Tag Taxonomy

### Consulting & Clients
- **consulting** — IT-/KI-Consulting, Beratung, Freelance
- **schweiz** — Schweizer Markt, KMU, Regulierung
- **freelance** — Selbstständigkeit, Beraterverträge
- **ki** — KI/LLM-Anwendungen, Agenten, Automation
- **it** — Softwareentwicklung, Infrastruktur, DevOps

### Finance & Taxes
- **steuer** — Tax calculations, obligations, optimization
- **sozialversicherung** — AHV, BVG, Fak, insurance contributions
- **mwst** — Mehrwertsteuer, Umsatzsteuer

### Legal & Administration
- **immigration** — Aufenthaltsbewilligungen, Selbstständigkeit
- **vertrag** — Beraterverträge, Vertragsrecht

## Naming Conventions

- **Filenames**: kebab-case, no spaces, no umlauts (ae/oe/ue), no em-dashes
- **Wikilinks**: `[[Filename-without-extension]]` — matches the actual file basename
- **Minimum 2 wikilinks** per concept page to related concepts or entities
- **Source pages link to concepts** they introduce or explain
- **Entity pages link to concepts** they're associated with

## Storage Routing (Memory vs. Wiki)

- **Agent Memory**: konstant gebrauchte Fakten (Präferenzen, Identität, Umgebung) — wird jedem Turn injiziert.
- **Wiki**: alles, was NICHT dauernd gebraucht wird (Referenzdetails, Nachschlagewissen, historische Entscheidungen) — on-demand abrufbar.
- Faustregel: "Brauche ich das jede Session?" Ja → Memory, Nein → Wiki.

## Content Guidelines

### Page Length
- **Target**: 30-60 lines of meaningful content
- **Minimum**: 20 lines for stub concepts
- **Maximum**: 100 lines (split longer topics into multiple pages)

### Structure Standards
- **Clear headings** using ## and ### markdown
- **Bullet points** for advantages, components, specifications
- **Numbered lists** for procedures and step-by-step processes
- **Tables** for comparative data and specifications

### Writing Style
- **Definitive statements** — not hedged
- **Technical precision** — exact measurements, specifications
- **Practical focus** — actionable information over theory
- **No em-dashes** — use normal hyphens (per user preference)
- **No AI vocabulary** — no "delve", "leverage", "comprehensive", "robust"

## Source Material Integration

### Raw Files
- **Location**: Quellen/ folder (transcripts, raw articles)
- **Preservation**: Keep original extracted text intact
- **Reference**: Link to raw files in source page frontmatter `sources` field

### Information Synthesis
- **Cross-reference sources** when multiple documents cover the same topic
- **Highlight contradictions** between sources when they occur
- **Update dates** when information is revised or expanded
