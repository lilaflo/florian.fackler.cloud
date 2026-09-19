# Slam Dunk Analyse — Was für Florian der optimale SaaS-Fit ist

## Gründer-Profil (harte Fakten)

### Unfair Advantages

*   Senior Dev mit Infra-Depth (Ansible, Docker, Self-Hosting, VPS)
*   AI/LLM-Practitioner (nicht Theoretiker — baut täglich mit Qdrant, n8n, Ollama)
*   Schweizer (Trust-Signal für DACH/EU-Kunden)
*   Nomad-ready ab ~2030 (braucht was, das von überall läuft)
*   Hormozi-Thinker (Value-basiertes Pricing, Marktvalidierung)
*   US-LLC-Struktur geplant (Susanns Research)

### Einschränkungen

*   Kein Sales-Background (braucht Product-Led Growth oder cold-outreach-freie Distribution)
*   Solo (bis Moritz mithilft ~2027)
*   DACH-Fokus bei vielen Ideen, aber DACH ist klein und preisempfindlich

## Slam Dunk Kriterien (alle 4 müssen erfüllt sein)

1.  **Echtes unfair advantage** — nicht nur "ich kann das coden", sondern "ich verstehe das Problem besser als 99%"
2.  **TAM gross genug** — minimum $100M addressable
3.  **Distribution ohne Sales-Team** — Product-Led Growth, API-first, oder Community-driven
4.  **Nomad-kompatibel** — läuft von überall, kein lokales Presence nötig

## Ranking aller Ideen

### 3\. Platz: AI Access Control (Fencepost)

Problem ist real — AI Agents teilen Credentials, kein Audit Trail. TAM wächst mit dem Agent-Ökosystem. Aber: Konkurrenz mit Auth0, 1Password, und jedem Identity-Startup. Hard.

### 2\. Platz: LocalCrawl (B2B2C Neighborhood Platform)

Clever — QR-basierte Distribution, Daten-Flywheel, Grant-Funding-Monetarisierung. Aber: B2C-Anteil bedeutet lokales Presence, Onboarding pro Stadt. Skaliert nicht von Bali aus. TAM pro Stadt ist klein.

### 2\. Platz: Tax Liens SaaS

Klares Problem, messbarer Value. Aber: TAM ~$5-15M (zu klein), Datenbeschaffung hart, US-regulatory complexity für Nicht-US-Bürger.

### 1\. Platz: Developer-Infra für AI/LLM Workflows

Lebt dieses Problem täglich. Selbst-hosted LLMs, Qdrant, n8n-Workflows, Prompt-Management, RAG-Pipelines — baut sich ständig Klempner-Infra, die hunderte andere Devs auch brauchen. Konkurrenz (LangChain, LlamaIndex, CrewAI) sind Frameworks — sie lösen das Coden, aber nicht das **Betreiben**.

## Konkrete Ausprägungen des Slam Dunks

### a) Managed RAG-as-a-Service für Self-Hosters

*   Qdrant + Embedding-Model + Document-Pipeline als turnkey Docker-Stack
*   "Hier ist dein docker-compose, in 5 Minuten läuft deine Vektor-DB mit AI-Suche"
*   Monetarisierung: Hosting ($29-99/mo) oder Self-Hosted-Lizenz ($199 Einmalzahlung)
*   TAM: Jeder Entwickler, der AI baut und nicht AWS RDS nutzen will (Privacy, Kosten, Sovereignty)
*   Unfair advantage: Betreibt genau das schon produktiv

### b) AI Workflow Orchestrator (n8n-basiert)

*   Vorgefertigte AI-Workflows als Templates: Newsletter-Digest, Document-Pipeline, Ideabrowser-Collector
*   "n8n templates for AI workflows" als Marke
*   Distribution: n8n Community (gross, aktiv), YouTube-Tutorials
*   Unfair advantage: 10+ funktionierende Workflows bereits gebaut

### c) GDPR-compliant AI Inbox/Assistant für EU-SMBs

*   EU-Unternehmen dürfen sensible Daten nicht an OpenAI schicken
*   Self-hosted oder EU-hosted AI-Assistant, GDPR-by-Design
*   Unfair advantage: Schweizer Standort + Privacy-Ethos + Infra-Skills
*   Aber: Wettbewerb wächst schnell (Aleph Alpha, Mistral Enterprise)

## Warum das der Slam Dunk ist

| Kriterium | Tax Liens | LocalCrawl | Gov Contracts | **Dev AI Infra** |
| --- | --- | --- | --- | --- |
| TAM | ~$5-15M | Klein pro Stadt | Gross, aber komplex | **Millionen Devs, wachsend** |
| Distribution | Problematisch (US-nisch) | Lokal nötig | Sales-heavy (SAM/CAGE) | **GitHub + Community + Content** |
| Unfair Advantage | Mittel (Domain-Wissen) | Tief | Tief | **Hoch (Nutzer + Builder)** |
| Nomad-kompatibel | Ja | Nein | Teils | **100% remote, Code + Cloud** |
| Preisbereitschaft | $49-99/mo | $0-500/mo B2B | Gross, aber langsam | **$29-99/mo ohne Nachfragen** |

## Der Catch

Kein "setze 3 Ads und mache $100k MRR"-Business. Es ist ein "baue in der Öffentlichkeit, lade zur Community ein, und lass das Produkt sich durch Developer-Advocacy verkaufen"-Business. Das passt aber besser zu einem Developer ohne Sales-Background als cold outreach.

Trend: Self-hosted AI explodiert (Ollama, vLLM, LocalAI).