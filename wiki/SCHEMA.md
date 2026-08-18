# Wiki Schema and Conventions

## Page Types

### Sources
- **Purpose**: Summarize and reference original documents
- **Naming**: Use full document title
- **Frontmatter**: author, publication, year, isbn/id, tags, sources (raw files)
- **Content**: Overview, key points, structure, related concepts with [[wikilinks]]

### Entities
- **Purpose**: People, organizations, institutions, companies
- **Naming**: Full names (e.g., "Florian Fackler", "Shirtinator AG")
- **Frontmatter**: profession/category, tags, sources (citing documents)
- **Content**: Background, expertise, contributions, publications, key concepts

### Concepts
- **Purpose**: Ideas, methods, systems, techniques, processes
- **Naming**: Clear descriptive terms
- **Frontmatter**: tags, sources (referencing documents)
- **Content**: Definition, how it works, advantages/limitations, applications, related concepts

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

## Wikilink Conventions

- **Always use [[Page Title]]** format for cross-references
- **Minimum 2 wikilinks per concept page** to related concepts or entities
- **Source pages link to concepts** they introduce or explain
- **Entity pages link to concepts** they're associated with
- **Concept pages link to related concepts** and source entities

## Storage Routing (Memory vs. Wiki)

- **Mnemosyne / Agent-Memory**: konstant gebrauchte Fakten (Präferenzen, Identität, Umgebung) — wird jedem Turn injiziert.
- **LLM-Wiki**: alles, was NICHT dauernd gebraucht wird (Referenzdetails, Nachschlagewissen, historische Entscheidungen) — on-demand abrufbar.
- Faustregel beim Speichern: "Brauche ich das jede Session?" Ja → Mnemosyne, Nein → Wiki.

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
- **Definitive statements** — "NFT systems provide..." not "NFT systems can provide..."
- **Technical precision** — Use exact measurements, specifications, ranges
- **Practical focus** — Emphasize actionable information over theory
- **Beginner-friendly** — Define technical terms, explain underlying principles

## Source Material Integration

### Raw Files
- **Location**: raw/ subdirectory
- **Preservation**: Keep original extracted text intact
- **Reference**: Link to raw files in source page frontmatter

### Information Synthesis
- **Cross-reference sources** when multiple documents cover the same topic
- **Highlight contradictions** between sources when they occur
- **Note source-specific details** vs. general principles
- **Update dates** when information is revised or expanded

## Quality Standards

### Accuracy
- **Verify measurements** and technical specifications across sources
- **Flag uncertainties** when sources provide conflicting information
- **Cite specific sources** for technical claims and recommendations

### Completeness
- **Cover all major aspects** of each concept (definition, operation, pros/cons, applications)
- **Include practical details** (sizing, spacing, materials, maintenance)
- **Address common problems** and troubleshooting approaches

### Consistency
- **Use standard terminology** across all pages
- **Maintain consistent formatting** and structure patterns
- **Apply tag taxonomy uniformly** across similar content types
