# Kritische Analyse: Dev AI Infra (Original) — Slam Dunk Check

**Datum:** 2026-04-10 | **Ergebnis:** Bestes Fundament der drei, aber Distribution = Solo-Killer. Kein Slam Dunk.

## 1\. TAM — Besser, aber kein $100M

*   Self-hosted AI Devs weltweit: ~50.000-200.000 (produktiv, nicht nur ausprobiert)
*   Paradox: Self-Hoster self-hosten aus KOSTENGRÜNDEN. Dein Target = jemand mit Budget der trotzdem self-hostet.
*   Realistisch: 5.000-15.000 zahlende Kunden × $49/mo = $3-9M ARR
*   Besser als Pflegeheim ($1.3M) und AI Workspace ($6-24M), aber kein $100M.

## 2\. Unfair Advantage — Am stärksten, aber crowdet

*   "Nutzer + Builder" stimmt hier wirklich. Aber: Jeder bei LangChain, LlamaIndex, Supabase ist auch Nutzer + Builder.
*   "Ich nutze es selbst" ≠ "Ich verstehe was 10.000 andere Devs brauchen." Power User ≠ repräsentativer Nutzer.
*   Echte unfair advantages in Dev Tools: Distribution (GitHub Stars), Brand (Vercel, Supabase), Netzwerk (YC). Du hast keins davon.

## 3\. Distribution — DER KILLER

*   GitHub + Community funktioniert für Frameworks/Open Source. Dein Produkt ist PAID SaaS.
*   Erfolgreiche Dev-Tools: Vercel ($100M+ Funding), Supabase ($116M Funding), Railway ($20M+ Funding). Selbst "kleine" haben Millionen-Funding.
*   Ohne Funding = kein DevRel = kein Community = kein Growth.
*   "Build in public" erfordert Audience. Deine Audience ist wer genau?

## Die Echten Probleme

### Infra für Leute die Infra bauen können

Dein Ziel-Kunde kann einen Docker-Stack zusammenklicken und Qdrant aufsetzen. Warum zahlt er $29-99/mo? "Weil es Zeit spart" — aber Devs traden selten Zeit gegen Geld. Sie googeln und bauen es selbst. "Warum bezahlen wenn ich es in einem Wochenende selbst bauen kann?"

### Drei Ausprägungen — jeder mit eigenem Grabstein

*   **Managed RAG:** Qdrant Cloud ($25/mo), Supabase Vector, Cloudflare Vectorize. Du konkurrierst mit den Infra-Providern die du als "Alternative" verkaufst.
*   **n8n Templates:** n8n hat 1.000+ Templates, Community teilt kostenlos. Monetarisierung unklar — wer zahlt für Templates?
*   **GDPR AI Inbox:** Aleph Alpha (€100M+ Funding), Mistral Enterprise, EU-Cloud-Provider bauen genau das. Solo-Startup ohne ISO 27001/SOC 2 verkauft "GDPR-compliant AI" = Trust-Problem.

### "Self-hosted AI explodiert" ≠ "Self-hosted AI SaaS explodiert"

Ollama 100K+ Stars, aber Stars ≠ zahlende Kunden. Self-Hosted-Ökosystem ist gigantisch bei USAGE, winzig bei REVENUE. Du baust für Leute die gratis suffizient sind.

### Open Source Dilemma

*   Open Source → Community wächst, aber Conversion 1-3%. 10K Stars = 100-300 zahlende = $3-15K MRR.
*   Closed Source → Keine Community, kein Growth, kein DevRel. Closed-Source-Dev-Tool ohne Funding und Brand = toter Start.

## Vergleich aller drei Ideen

| Kriterium | Dev AI Infra | Pflegeheim | AI Workspace |
| --- | --- | --- | --- |
| TAM (realistisch) | $3-9M | $1.3M | $6-24M |
| Unfair Advantage | Mittel | Schwach | Schwach |
| Pain AKUT? | Ja, aber Devs lösen selbst | Ja (leere Betten) | Nein (theoretisch) |
| Distribution | Solo-Killer | Klar (Cold Email) | Unkontrollierbar |
| Konkurrenz | Stark | Schwach (CH) | Sehr stark |
| Funding-Abhängigkeit | Hoch | Niedrig | Mittel |
| Zeit zu Revenue | 6-12 Monate | 2-4 Monate | 6-12 Monate |

## Bottom Line

Bestes Fundament, aber Distribution für Solo ohne Funding nahezu unmöglich. Zielgruppe hat "ich baue es selbst"-Mentalität die SaaS-Konversion killt.

## Was ein Slam Dunk für DICH wäre

*   TAM $100M+ (DACH zu klein — muss EN oder global sein)
*   Pain so akut dass Leute ZAHLEN ohne Sales Call
*   Distribution über API/Code/Community (kein Sales nötig)
*   Problem das nur Devs mit DEINEM spezifischen Skillset lösen können (nicht "jeder Dev kann das")

Keine der drei Ideen ist ein Slam Dunk. Alle haben fundamentale Schwächen die sich mit Code nicht lösen lassen. Vielleicht liegt die Antwort in der Überlappung: Was hast du das NUR DU hast?