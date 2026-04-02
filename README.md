# Private AI for Swiss SMEs

## Positioning

"Your data stays in your house." -- AI that runs on the customer's hardware, not in some US cloud. DSG/GDPR compliant by design, not by policy.

## Core Stack

- **Ollama** -- local LLM runner (open-source, REST API)
- **n8n** -- workflow automation (connects AI to business processes)
- **Qdrant** -- vector database for document embeddings (RAG)
- **Docker** -- everything containerized, portable, isolated

All bundled in the [n8n Self-Hosted AI Starter Kit](https://github.com/n8n-io/self-hosted-ai-starter-kit).

## Hardware Tiers

### Tier 1 -- Small Business (5-15 employees)

- **Server:** 1x NVIDIA RTX 4090 (24GB), 64GB RAM, 2TB NVMe
- **Models:** 8B-14B (Llama 3.1 8B, Qwen3 8B, Phi-4)
- **Use cases:** Email drafting, FAQ bot, document classification, meeting notes
- **Hardware cost:** ~CHF 3,000-4,000 one-time
- **Hosted in Switzerland:** ~CHF 200-350/mo
- **Best for:** Law firms, consultancies, small accounting offices

### Tier 2 -- Mid Business (15-50 employees)

- **Server:** 1x NVIDIA L40S (48GB) or 2x RTX 4090
- **Models:** 32B-70B (Qwen3 32B, Llama 3.3 70B Q4)
- **Use cases:** Knowledge base Q&A (RAG), contract analysis, report generation, customer support automation
- **Hardware cost:** ~CHF 6,000-10,000
- **Hosted in Switzerland:** ~CHF 400-700/mo
- **Best for:** Mid-sized companies with document-heavy workflows

### Tier 3 -- On-Premise (any size, high security)

- **Server:** physically at customer site
- **Models:** same as Tier 1 or 2
- **Customer owns the hardware**
- **We do:** setup + maintenance
- **Best for:** Banks, pharma, insurers -- strict data residency requirements

### Swiss Hosting Options

- swissmade.host (Zurich data center)
- iDatam (Zurich)
- Valebyte (from CHF 121/mo)

## Model Recommendations by Task

| Task | Model | VRAM |
|------|-------|------|
| Email drafting | Qwen3 8B | 8GB |
| FAQ / simple chatbot | Llama 3.1 8B | 8GB |
| Document summarization | Qwen3 30B-A3B | 20GB |
| Knowledge base Q&A (RAG) | Qwen3 32B | 24GB |
| Contract analysis | Llama 3.3 70B Q4 | 40GB |
| Code generation | DeepSeek-Coder-V2 Lite | 24GB |
| Multilingual (DE/FR/IT) | Qwen3 30B or 32B | 24GB |

## Pricing Model

### Setup Fee: CHF 3,000-8,000 (one-time)

- Hardware procurement + installation
- n8n + Ollama + Qdrant setup
- First workflow template (e.g., document Q&A or email automation)
- Model selection + prompt tuning
- Staff training (2-3 hours)

### Monthly Retainer: CHF 300-800/mo

- Monitoring + uptime
- Model updates
- Prompt optimization
- Minor workflow adjustments
- Priority support

### Per-Project: CHF 2,000-10,000 per new workflow/use case

- New RAG knowledge base
- Custom chatbot
- Document processing pipeline

### Typical First Year

Setup CHF 5,000 + CHF 500/mo retainer = CHF 11,000/year.

Hardware is either customer CAPEX or baked into a lease.

## What We Don't Need

- No ML training infrastructure
- No "big data" pipelines
- No GPU cluster
- No ML engineers

We do inference and integration, not research. The models are already trained.

## Value Proposition

1. **Pick the right model** for the task
2. **Set up the infra** (Docker, Ollama, n8n, Qdrant)
3. **Build the workflows** that connect AI to actual business processes
4. **Make it work in German**

## Honest Limitations (communicate upfront)

- Local models are good, not GPT-4 level. Set expectations.
- Complex reasoning tasks will be noticeably weaker than frontier models.
- Hallucinations still happen -- critical workflows need human-in-the-loop.
- Multilingual German quality varies by model (Qwen3 handles DE reasonably well).
- Hardware has physical limits -- you can't run 50 concurrent users on a single 4090.

## Privacy Architecture

- Data never leaves the customer's network
- No API calls to OpenAI, Google, or any third-party AI service
- All inference runs locally on dedicated hardware
- Swiss data residency by default
- DSG/GDPR compliant by architecture, not just policy

## Alternatives Considered

| Approach | Privacy | Cost | Complexity |
|----------|---------|------|------------|
| **Local inference (our approach)** | Maximum | Medium hardware | Low (Ollama) |
| Decentralized GPU (Akash, io.net) | Good (distributed risk) | Low | Medium |
| TEE-based (NEAR AI, 0G) | High (cryptographic) | High | High |
| Federated learning | High | Medium | Very high |
| Cloud AI (OpenAI, Google) | None | Low per-query | Zero |
