# Produkt-Daten-Import-Automatisierung (Wedge)

**Status**: Design-Phase (2026-08-18), Markt-Recherche abgeschlossen, noch nicht validiert
**Design-Doc**: `docs/designs/product-daten-import-automatisierung.md`
**Markt-Recherche**: 2 unabhängige Reports (18.08.2026) — result-claude.md, result-chatgpt.md

## Kern-These (KORRIGIERT 18.08.2026)

Der Wedge für Fackler IT-Solutions ist **Produktdaten-Akquisition/Import-Automatisierung** für kleine/mittlere Online-Shops (1-5 Personen, kein Dev-Team): Daten (Bilder, Beschreibungen, Spezifikationen) automatisch von Lieferanten-Quellen ins Shop-System holen.

**WICHTIGE KORREKTUR:** Die ursprüngliche Annahme "den unsexy Import-Schlep automatisiert kein Tool" ist **widerlegt**. Es gibt eine Kategorie billiger Shopify-Apps (6-30 $/Monat), die "Lieferanten-URL → Produkt" versprechen (ProductUpload.ai, Migratify, Robo Product Importer, 1Click, Scrapit, Importier, Omniasuite).

**Aber die Lücke bleibt — nur anders geschnitten:**
- Die bestehenden Apps sind **nachweislich kaputt** bei Varianten, SKUs, mehreren Bildern, Beschreibungen (18-29 % Ein-Stern, 7-47 Reviews).
- Das **DACH/Shopware-Segment ist komplett leer** — keine einzige Shopware-Extension macht "URL → Produkt", kein offizieller n8n-Node für Shopware.
- **B2B-Portale hinter Login** sind von niemandem abgedeckt.

**Geschärfter Wedge:** NICHT "KI holt Produktdaten von Websites", sondern "wir holen Ihre Lieferantendaten aus Quellen, die kein Tool erreicht — B2B-Portale hinter Login, Shopware/JTL, kaputte PDFs/Excels — und halten sie aktuell. Self-hosted in der Schweiz." Das ist ein **Dienstleistungs-Geschäft** (done-for-you supplier onboarding), kein 9-$-SaaS.

**Preisanker ist brutal niedrig:** Kunde vergleicht mit 6-30 $/Monat (App) oder 5 $/35 Produkte (Fiverr). Ökonomie funktioniert nur mit substanzieller Setup-Fee.

## Referenz (Shirtinator AG)

- **Stefan Rupik** (Business Development): braucht Tage, um ein Produkt einzurichten (Bilder, Beschreibung, Import ins PIM). Die gebaute n8n-Automation macht das "zero-manual-touch" **für den Shirtinator/Print-Provider-Fall** — noch kein generisches Produkt.
- Weitere Schmerzen (adjacent, Cross-Sell, NICHT Beweis für den Wedge): Albrecht Fischer (Google Shopping Feeds), Sabine Budesheim (CSV/Qlik), Florian Stadler (AOV), Customer Service (Print-Provider-Kommunikation).

## Ansatz

**Service-assisted SaaS** (laut Markt-Recherche): CHF 99-149/Monat Starter, CHF 249-399/Monat Business, CHF 300-1000 Setup pro Lieferantenquelle. Das Kernprodukt ist der **Supplier Adapter** — die Mappung "Lieferant X: SKU→sku, EAN→variant.barcode, UVP→compare_at_price, PDF→technical_specs" mit kontinuierlicher Change-Erkennung — nicht der Scraper.

## Technisches Risiko

Jede Lieferantenquelle braucht einen eigenen Adapter. Setup-Aufwand pro Kunde, kein Plug-and-Play. n8n-Community-Konsens: HTTP-Scraping bricht nach ~10 Requests (Blocking, Site-Changes). Bevorzugt: offizielle APIs, Pre-built-Scraper (Apify, Firecrawl), Site-Change-Handling.

## Legal / ToS

Kommerzielles Scraping von Lieferanten-Websites wirft Copyright-, Bildrechte- und ToS-Fragen auf. Vor dem Bau klären: (a) offizielle Daten-Feeds/APIs (bevorzugt), (b) vertragliche Erlaubnis für Reseller-Nutzung, (c) ToS-konformes Scraping. Als bezahlter Schweizer Dienstleister stehst du anders da als eine anonyme App.

## DSG / Deployment

n8n muss **self-hosted** laufen (Kunden-Server oder Schweizer Host), NICHT in der n8n-Cloud — sonst routen Daten ins Ausland. Self-hosted erhöht Deployment-Komplexität pro Kunde → in Preis einkalkulieren.

## Positionierung via [[DASA Framework]]

DASA (Diagnose→Articulate→Systemize→AI→Results) liefert die Positionierungs-Logik für diesen Wedge: Man verkauft nicht "KI-Produktimport", sondern "Wir diagnostizieren dein Lieferanten-Chaos, artikulieren den Workflow, systematisieren ihn in einen Supplier Adapter — dann kommt die KI." KI ist das Outcome, nicht der Pitch — differenziert gegen die 6-$-Shopify-Apps, die direkt auf KI springen und brechen.

## Nächster Schritt (Assignment — geschärft)

5 Gespräche mit Online-Shop-Betreibern, mit **geschärften Fragen** (aus Markt-Recherche):
1. **"Zeig mir, wie du das letzte Produkt angelegt hast."** Mitschreiben, Minuten stoppen.
2. **"Welche deiner Lieferanten liefern eine Datei — und welche nicht?"** Misst die adressierbare Menge.
3. **"Hat einer deiner Lieferanten ein Portal, in das du dich einloggen musst?"** Testet das B2B-Portal-Wedge.
4. **"Kennst du ProductUpload.ai / Migratify? Hast du sowas probiert?"** Wenn niemand sie kennt → Kategorie unsichtbar (Chance). Wenn jemand sie probiert und aufgegeben hat → perfekter Pitch.
5. **Preis konkret gegentesten:** "1.500 CHF Setup + 90 CHF/Monat — zu teuer, ungefähr richtig, oder billiger als erwartet?"

**Abbruchkriterium:** Wenn von 5 Gesprächen weniger als 2 einen Lieferanten **ohne** Datei/Feed nennen, ist die Scraping-Prämisse falsch → dann ist das Produkt "Feed-Normalisierung + Sync" (Synesty-Territorium), nicht "KI-Scraping".
