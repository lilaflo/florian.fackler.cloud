# Validierungs-Gespräche: Produktdaten-Import (Fackler IT-Solutions)

5 Gespräche mit Online-Shop-Betreibern. Zweck: Wedge validieren ODER falsifizieren.
**Abbruchkriterium vorab:** Wenn <2 von 5 einen Lieferanten **ohne** Datei/Feed nennen → Scraping-Prämisse falsch → Produkt wird "Feed-Normalisierung + Sync", nicht "KI-Scraping".

---

## Vor dem Gespräch (2 Min)

- **Ziel:** Einen echten Workflow sehen, nicht ein "interessantes Produkt" verkaufen.
- **Rolle:** Zuhörer + Zeitnehmer, NICHT Verkäufer. Nicht unterbrechen, nicht mitspielen.
- **Sag NICHT:** "Ich baue eine KI-Lösung für Produktimport." → das erzeugt Höflichkeits-Ja.
- **Sag:** "Ich untersuche gerade, wie Online-Shops Produkte von Lieferanten aufnehmen. Darf ich dir ein paar Fragen zu deinem Ablauf stellen?"

---

## Die 5 Fragen (jede stoppt das Gespräch)

### Q1 — Das letzte Produkt (der Kern)

> **"Zeig mir, wie du das letzte Produkt angelegt hast."**

- **NICHT** "Ist Produktimport ein Flaschenhals?" (Höflichkeits-Ja).
- Mitschreiben, **Minuten stoppen** pro Schritt.
- Nachfragen bis du die konkrete Mechanik siehst: Woher kam das Bild? Wie bist du an die Beschreibung? Wie die Varianten?
- **Hören auf:** einen benannten Lieferanten, einen konkreten manuellen Schritt, Zeitangaben.

### Q2 — Datei vs. keine Datei (misst die adressierbare Menge)

> **"Welche deiner Lieferanten liefern eine Datei (CSV/Excel/XML/PDF) — und welche nicht?"**

- Ziel: Anzahl Lieferanten insgesamt, davon wie viele MIT / OHNE Datei.
- Lieferant ohne Datei = adressierbar für dein Scraping-Wedge. Lieferant mit Datei = Feed-Normalisierung.
- **Notiere pro Lieferant:** mit Datei? Portal? reine Website? wie viele Produkte?

### Q3 — B2B-Portal (testet das Portal-Wedge)

> **"Hat einer deiner Lieferanten ein Portal, in das du dich einloggen musst, um die Produkte zu sehen?"**

- B2B-Portal hinter Login = von keinem Tool abgedeckt, höchster Graben, klarster Pitch.
- Wenn der Kunde sagt "ja, und ich muss Produkt für Produkt durchklicken und abtippen" → das ist dein schärfster Fall.

### Q4 — Kennst du die Apps? (testet Kategorie-Sichtbarkeit)

> **"Kennst du ProductUpload.ai oder Migratify? Hast du sowas schon probiert?"**

- Wenn **niemand** sie kennt → Kategorie unsichtbar = Chance (du musst sie nicht "ausstechen", du musst die Kategorie überhaupt erst zeigen).
- Wenn **jemand sie probiert und aufgegeben hat** → perfekter Pitch. Frag: "Was ist schiefgegangen?" Die Antwort ist deine Verkaufsargumentation.
- Wenn **jemand sie nutzt und zufrieden ist** → Wedge schwächer, notiere es.

### Q5 — Preis konkret gegentesten

> **"Stell dir vor: Wir richten ein, dass deine Produkte automatisch von deinen Lieferanten reinkommen und aktuell bleiben. Dafür CHF 1'500 einmalig pro Lieferantenquelle + CHF 90/Monat. Ist das zu teuer, ungefähr richtig, oder billiger als erwartet?"**

- **NICHT** offen "Was würdest du zahlen?" fragen (leere Antworten). Konkret gegentesten.
- Notiere wörtlich die Reaktion. Wenn er "für X Lieferanten würde ich..." sagt, folge der Logik.

---

## Nach jedem Gespräch (5 Min)

Fülle diese Tabelle aus:

| Kunde | Q1: letztes Produkt (Zeit/Schritte) | Q2: Lieferanten mit/ohne Datei | Q3: Portal? | Q4: Apps gekannt/probiert? | Q5: Preis-Reaktion | Wedge-Match (ja/nein) |
|---|---|---|---|---|---|---|
| 1 | | | | | | |
| 2 | | | | | | |
| 3 | | | | | | |
| 4 | | | | | | |
| 5 | | | | | | |

**Wedge-Match = JA** wenn: Lieferant ohne Datei genannt + manueller Produkt-Setup-Schmerz bestätigt + Preis nicht sofort abgelehnt.

---

## Nach allen 5 (Entscheid)

Zähle die **Wedge-Matches** (nicht die Gespräche, nicht die Höflichkeiten).

**≥2 Wedge-Matches:**
→ Wedge bestätigt. Nächster Schritt: /plan-eng-review, Shirtinator-Workflow extrahieren, Pilotkunde aus den Matches gewinnen.

**1 Wedge-Match:**
→ Grauzone. Ein Kunde mit starkem Schmerz kann trotzdem ein Pilot sein. Frag dich: Ist er der Typ "zahlt diese Woche"? Wenn ja, geh auf den Pilot. Wenn nein, Wedge noch nicht bewiesen.

**0 Wedge-Matches:**
→ **Abbruch.** Die Scraping-Prämisse ist falsch. Produkt wird "Feed-Normalisierung + Sync" (Synesty-Territorium) — oder Wedge ganz neu denken. Kein Bau ohne Beweis.

---

## Die 3 Dinge, die das Gespräch wertvoll machen

1. **Die Mechanik sehen, nicht den Pitch.** Der Wert liegt in "Zeig mir das letzte Produkt", nicht in deiner Präsentation.
2. **Wörtlich notieren.** Die Zitate ("ich muss X-100 Bilder händisch zuordnen") sind dein späteres Verkaufsmaterial und deine Design-Inputs.
3. **Ehrlich sein zu dir selbst beim Auszählen.** Ein Kunde, der nett nickt, ist kein Match. Ein Kunde, der dir seinen Portal-Login zeigen will, ist ein Match.
