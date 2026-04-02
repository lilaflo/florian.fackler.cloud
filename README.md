# Properflow GmbH -- 12 Month Transition Plan

From "Florian Fackler, IT Consultant" to "Properflow GmbH, AI Automation for Swiss Real Estate."

Start: Q2 2026 (May). Target: Q2 2027 (first GmbH customers).

---

## Month 1 -- Foundation (May 2026)

**Goal:** Set up the business infrastructure and define the offering.

- [ ] Register domain: properflow.ch
- [ ] Register GmbH at Handelsregisteramt (Einzelunternehmen first if needed)
- [ ] Open business bank account
- [ ] Define core offering: 3 AI automation packages for real estate (see below)
- [ ] Write 1-page offering sheet (PDF, not a website yet)
- [ ] Set up properflow.ch as landing page (name, email, "coming soon")
- [ ] Moritz: start n8n deep-dive (official certification if available)

**Deliverable:** Registered business + clear offering definition.

---

## Month 2 -- Technical Foundation (June 2026)

**Goal:** Build the first production-ready demo stack.

- [ ] Set up privacy-focused stack: Ollama + n8n + Qdrant on a test server
- [ ] Build demo workflow #1: rental contract document extraction (PDF -> structured data)
- [ ] Test model quality on Swiss German real estate documents
- [ ] Document hardware requirements per tier
- [ ] Set up monitoring (Uptime Kuma, already running)
- [ ] Moritz: build first n8n workflow end-to-end

**Deliverable:** Working demo stack + 1 documented workflow that can be shown to prospects.

---

## Month 3 -- Real Estate Deep-Dive (July 2026)

**Goal:** Understand the market from the inside.

- [ ] Interview 5-10 people in Swiss real estate (property managers, fiduciaries, agents)
- [ ] Map their top 3 pain points around document handling and communication
- [ ] Identify which real estate software they use (Wincare, Building Engine, HouseGold, etc.)
- [ ] Research integration points (APIs, email parsing, PDF extraction)
- [ ] Refine offering based on real feedback, not assumptions
- [ ] Write case study template

**Deliverable:** Validated problem statement + refined offering based on actual customer pain.

---

## Month 4 -- Build Workflow #2 + Marketing Site (August 2026)

**Goal:** Second workflow ready + public-facing website.

- [ ] Build demo workflow #2: automated tenant inquiry response (email -> classify -> draft -> human review)
- [ ] Launch properflow.ch with:
  - Clear value prop (AI automation for Swiss real estate)
  - 3 packages with transparent pricing
  - Demo video or screenshots
  - Contact form
- [ ] Set up LinkedIn company page for Properflow
- [ ] Write 3 LinkedIn posts about AI in Swiss real estate
- [ ] Moritz: own and ship workflow #2

**Deliverable:** Live website + 2 demoable workflows + first public content.

---

## Month 5 -- Workflow #3 + First Outreach (September 2026)

**Goal:** Complete the initial product suite + start selling.

- [ ] Build demo workflow #3: property listing description generation (data -> marketing text in DE/FR)
- [ ] Create PDF one-pager / pitch deck (properflow_intro.pdf)
- [ ] First outreach: contact 20 property management companies in ZH/BE/BS
- [ ] Offer free 1-hour AI assessment call
- [ ] Set up CRM (simple: Airtable or n8n-based)
- [ ] Start email nurture sequence for leads

**Deliverable:** 3 complete workflows + active outreach pipeline.

---

## Month 6 -- First Customer (October 2026)

**Goal:** Close the first paying customer (or get very close).

- [ ] Run 3-5 free assessment calls
- [ ] Convert at least 1 to a paid pilot (CHF 2,000-3,000)
- [ ] Deliver pilot: install stack, deploy 1-2 workflows, train staff
- [ ] Document everything (installation guide, runbook, prompts)
- [ ] Collect testimonial / feedback
- [ ] Iterate on workflows based on real usage

**Deliverable:** First paying pilot customer + real-world feedback.

---

## Month 7 -- Stabilize + Package (November 2026)

**Goal:** Turn the pilot experience into a repeatable product.

- [ ] Fix issues from pilot deployment
- [ ] Create standardized installation playbook (Ansible, already in skill set)
- [ ] Build onboarding checklist for new customers
- [ ] Package 3 tiers clearly:
  - Starter: 1 workflow, privacy-focused (local or Swiss-hosted), CHF 3,000 setup
  - Professional: 3 workflows, hosted in CH, CHF 8,000 setup + CHF 500/mo
  - Enterprise: custom, on-premise, CHF 15,000+ setup + retainer
- [ ] Write SLA / service agreement template
- [ ] Moritz: lead at least 1 customer call independently

**Deliverable:** Repeatable product + standard contracts + Moritz can run calls.

---

## Month 8 -- Scale Outreach (December 2026)

**Goal:** Build a steady pipeline of leads.

- [ ] Publish 2-3 LinkedIn posts per week (AI + real estate content)
- [ ] Attend 1-2 Swiss real estate / PropTech meetups or events
- [ ] Reach out to 30 more property management companies
- [ ] Target fiduciaries who handle real estate portfolios (adjacent market)
- [ ] Consider a free webinar: "AI for Swiss Property Managers -- What's Real in 2027"
- [ ] Start tracking conversion metrics (outreach -> call -> pilot -> customer)

**Deliverable:** 5+ active leads in pipeline + growing LinkedIn presence.

---

## Month 9 -- Second + Third Customer (January 2027)

**Goal:** Close 2-3 more customers.

- [ ] Convert pipeline leads to paid pilots
- [ ] Deploy standardized playbook for each new customer
- [ ] Moritz leads at least 1 deployment independently
- [ ] Cross-sell: customers who bought 1 workflow add a second
- [ ] Collect 2-3 testimonials / case studies
- [ ] Start monthly retainer billing for first customer

**Deliverable:** 3-4 total customers + recurring revenue starting.

---

## Month 10 -- Productize + Automate (February 2027)

**Goal:** Reduce delivery cost per customer.

- [ ] Automate the setup process as much as possible (Ansible playbooks, Docker Compose templates)
- [ ] Build self-service onboarding portal (n8n form -> auto-provision)
- [ ] Create customer dashboard (n8n + Simple Dashboard or similar)
- [ ] Document all workflows as reusable templates
- [ ] Evaluate: can we offer a SaaS tier (shared hosted, lower price)?
- [ ] Start tracking ROI metrics per customer (hours saved, etc.)

**Deliverable:** Setup time per customer cut by 50%+ + reusable workflow templates.

---

## Month 11 -- Expand Market (March 2027)

**Goal:** Move beyond ZH into broader Swiss-German market.

- [ ] Expand outreach to LU, SG, TG, AG (1-hour radius by train)
- [ ] Consider partnerships with fiduciaries / tax advisors (referral channel)
- [ ] Publish first case study on website
- [ ] Explore niche verticals within real estate:
  - Holiday rentals (Airbnb/Booking.com automation)
  - Real estate law firms (contract analysis)
  - Construction project developers (document management)
- [ ] Evaluate: is Austria (Vorarlberg, Tirol) a viable expansion?

**Deliverable:** Geographic expansion + first case study published + referral pipeline.

---

## Month 12 -- GmbH Upgrade + Review (April 2027)

**Goal:** Formalize as GmbH, review first year, plan Year 2.

- [ ] If revenue > CHF 150k or trajectory clear: convert to GmbH
- [ ] Annual review: what worked, what didn't, what to kill
- [ ] Year 2 plan:
  - Product roadmap (new workflows, SaaS tier)
  - Hiring plan (first employee? Moritz full-time?)
  - Revenue target
  - Market expansion (CH -> AT -> DE)
- [ ] Update website with case studies and testimonials
- [ ] Decide on Meister Bill relationship (separate product? bundled?)

**Deliverable:** GmbH registered (if warranted) + Year 2 roadmap + stable recurring revenue.

---

## The Three Core Workflows

These are the bread and butter. Every customer gets at least one.

### 1. Document Extraction Pipeline
- Input: rental contracts, purchase agreements, maintenance reports (PDF/scan)
- Processing: OCR -> structure extraction -> validation -> ERP/system entry
- Value: 60-70% time reduction on document processing, fewer errors
- Tools: n8n + Ollama (Qwen3 32B for DE) + Qdrant

### 2. Tenant Communication Automation
- Input: tenant emails (inquiries, complaints, maintenance requests)
- Processing: classify intent -> draft response -> route to right person -> human approval
- Value: 24/7 response capability, consistent quality, staff freed for complex cases
- Tools: n8n + Ollama (Llama 3.1 8B for classification, Qwen3 32B for drafting)

### 3. Property Listing Generator
- Input: raw property data (rooms, m2, location, features, photos)
- Processing: generate marketing descriptions in DE + FR, SEO-optimized for homegate.ch/immo.ch
- Value: 10x faster listing creation, consistent brand voice, multilingual
- Tools: n8n + Ollama (Qwen3 30B-A3B)

---

## Revenue Targets

| Quarter | Customers | MRR Target | Cumulative |
|---------|-----------|------------|------------|
| Q2 2026 | 0 (build phase) | CHF 0 | CHF 0 |
| Q3 2026 | 1 pilot | CHF 0 | CHF 3,000 setup |
| Q4 2026 | 1-2 | CHF 500-1,000 | CHF 6,000 |
| Q1 2027 | 3-4 | CHF 1,500-2,000 | CHF 15,000 |
| Q2 2027 | 5-8 | CHF 3,000-5,000 | CHF 35,000+ |

Conservative estimates. A single Enterprise deal (CHF 15k setup + CHF 1k/mo) changes the curve significantly.

---

## Risks

- **Model quality on Swiss German / legal German:** Needs early testing. Qwen3 handles DE reasonably but Swiss German formal documents are a specific domain.
- **Integration with existing Swiss real estate software:** APIs may be limited. PDF/email parsing is the fallback.
- **Sales cycle:** Real estate is relationship-driven. Cold outreach may not work. Warm intros and referrals matter more.
- **Moritz timeline:** He starts May/June 2026. First 3 months are training. Don't depend on him for delivery before Month 5.
- **Competitor risk:** Large PropTech players (Homeday, ImmoScout) may add AI features. Differentiate on privacy + Swiss hosting + personal service.
