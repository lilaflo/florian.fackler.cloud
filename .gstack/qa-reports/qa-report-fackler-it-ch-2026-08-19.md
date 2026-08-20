# QA-Report: fackler-it.ch

**Datum:** 2026-08-19
**Modus:** Full (Live-Produktion)
**Tester:** QA-Run nach CSP-Fix (`c7fcc3a`) + Happierleads-Entfernung (`87df3e8`)
**Framework:** Astro Static Site, Cloudflare Pages
**Dauer:** ~10 Minuten

---

## Health Score: 82/100

| Kategorie | Score | Gewicht |
|---|---|---|
| Console | 100 | 15% |
| Links | 100 | 10% |
| Visual | 95 | 10% |
| Functional | 85 | 20% |
| UX | 95 | 15% |
| Performance | 90 | 10% |
| Content | 55 | 10% |
| Accessibility | 85 | 15% |
| **Gesamt** | **82** | |

---

## Getestete Seiten/Flows

| Test | Ergebnis | Evidence |
|---|---|---|
| DE-Homepage lädt (title, meta, canonical, h1) | ✅ | title/description/canonical korrekt via DOM |
| EN-Seite lädt (lang=en, übersetzte UI) | ✅ | Formular-Labels EN, placeholder EN |
| Kontakt-Dialog öffnet (3 Buttons) | ✅ | `dialogOpen: true` nach Klick e7/e8/e10 |
| Formular-Validierung (leer, invalid Email) | ✅ | name+email required, „keine-email" abgelehnt |
| Formular-Submit → n8n (CSP live) | ✅ | Status „Danke für deine Nachricht" (nur bei res.ok) |
| Trust-Seite lädt | ✅ | Kompletter Inhalt gerendert |
| Alle 5 Anker (#references … #contact) | ✅ | Alle IDs vorhanden, Scroll funktioniert |
| /en → /en/ Redirect | ✅ | 308, korrektes Ziel |
| Favicon | ✅ | 200 |
| Podcast-Link (extern) | ✅ | URL korrekt |
| Konsole: 0 Fehler | ✅ | Keine JS-Errors, keine CSP-Violations |
| Kein horizontaler Overflow (Desktop 1280px) | ||  Layout-Boundaries korrekt |
| CSP live korrekt | ✅ | `*.code-nexus.co` in script-src + connect-src |

---

## Issues

### ISSUE-001: Falsche PLZ überall — „6400 Olten" statt 4600
- **Severity:** HIGH (faktischer Fehler)
- **Kategorie:** Content
- **Evidence:** DOM/HTML DE-Footer, EN-Footer, Trust-Seite: `6400 Olten` — Olten hat 4600. Auch die Trust-Seite („Stand: Juni 2026 ... 6400 Olten").
- **Repro:** Jede Seite öffnen, Footer lesen.
- **Impact:** Faktischer Fehler auf jeder Seite; schadet Vertrauensbildung („Swiss Quality"-Marke) und lokalem SEO (Local Pack, Map-Pins).

### ISSUE-002: EN-Footer zeigt deutschen Rechtstext
- **Severity:** MEDIUM
- **Kategorie:** Content
- **Semi-flow:** EN-Seite → Footer → erster Eintrag
- **Repro:** `https://fackler-...` — hier steht „Einzelfirma, eingetragen im Handelsregister des Kantons Solothurn ● UID CHE-269.516.266 MWST" auf `/en/`
- **Impact:** Wirkt unübersetzt/falsch gepflegt auf internationalen Lesern; bricht Sprach-Konsistenz.

### ISSUE-3: EN-Privacy-Link → deutsche Trust-Seite
- **Privacy"-Link** auf `/en/` zeigt auf `/trust/` — deutsche Seite, Sie-Form.
- **Severity:** MEDIUM
- **Impact:** EN-Nutzer bekommen deutsche Datenschutzseite; Sprachwechsel zurück wirft sie aus dem Kontext.

### ISSUE-004: OG-Image fehlt
- **Severity:** MEDIUM
-  og:image fehlt komplett (SEO-Audit-Punkt, Quick Win). Social/LinkedIn-Previews ohne Bild.
- **Impact:** LinkedIn-Akquise (dein Hauptkanal) zeigt leere Vorschau.

### ISSUE-005: Trust-Seite: Sie-Form auf duzender Website
- **Sie**-Form auf Trust-Seite („So schützen wir Ihre Daten") vs. Du-Form überall sonst.
- **Severity:** Tödlich für die Marke nicht, aber die Seite ist dein „Beweis"-Dokument für Interessenten, nicht eine Pflichtseite. Die Form ist bewusst so (Handout-Stil). **User hat entschieden: bleibt so** (2026- Trust ok).
- **Impact:** Stilbruch, bewusst akzeptiert.

- **Issue-006 (Context): Konsole zeigte initial leeren `title` im Snapshot — verifiziert als Artefakt des Browser-Tools (DOM hat Titel). Kein Bug.

---

## Top 3 Things to Fix

1. **PLZ 6400 → 4600** (ISSUE-001, überall: DE/EN Footer + Trust) — faktischer Fehler, 2 Buchstaben, riesiger Vertrauensgewinn
2. PLZ ist nicht nur Footer-Text: Check, ob die falsche PLZ auch im JSON-LD-Adressobjekt steckt (`Layout.postalCode: "6400"`) — dann falsch in Google Understanding.
3. JSON-LD/OG-Image nachziehen (ISSUE-004)
4. EN-Footer-Rechtstext + EN-Privacy-Link (ISSUE-002/003)

---

## Console Health Summary
0 errors, 0 warnings. Keine CSP-Violations mehr (Happierleads raus, `*.code-nexus.co` erlaubt).

## Notes
- Testformular-Submits gingen an echte n8n-Instanz (gruezi@fackler-it.ch) — 2 Testmails könnten ankommen.
- Testformular-Daten landen in NocoDB als Testzeilen (Name „QA Test Run", „E2E Test Runner") — ggf. dort löschen.
- This report is report-only. Nichts gefixt.
