# Wiki Log

## [2026-09-02] restructure | Wiki-Komplettumbau
- Ordnerstruktur neu angelegt: Beratung/, Finanzen-Steuern/, Vertraege/, Immigration/, Infrastruktur/, Personen/, Quellen/
- Alle Dateien nach kebab-case normalisiert (keine Leerzeichen, Umlaute, Em-Dashes).
- `wiki/` und `docs/` Subfolder aufgeloest, Inhalte in Topic-Ordner verschoben.
- Geloescht: `setup-gbrain-smoke-test-1787558390.md` (Muell), `AGENTS.md` (veraltet), `index.md` (ersetzt durch Index.md).
- Wikilinks in allen 9 betroffenen Dateien auf neue Dateinamen aktualisiert.
- Schema.md neu geschrieben mit Folder-Struktur und Naming-Conventions.
- Index.md neu als zentraler Einstiegspunkt.
- 20 Seiten total.

## [2026-08-22] update | Sozialversicherung-und-Steuern-Selbststaendiger-SO
- ESTV-Steuerrechner (swisstaxcalculator.estv.admin.ch) fuer 4600 Olten, 2026, verheiratet, 2 Kinder (16/13), keine Religion, Brutto CHF 109'000 ausgefuehrt.
- Konkretes Ergebnis (Angestellten-Szenario): Total Steuern CHF 7'168 (Kanton 3'349, Gemeinde 3'478, Personalsteuer 160, Bundessteuer 181).
- Korrektur fuer Selbststaendige: AHV 10'130 statt 5'777, ALV entfaellt, Pensionskasse 0, Geschaeftsausgaben 7'700 abziehbar.
- Geschaetzte Gesamtbelastung selbststaendig: ~CHF 18'150-18'650 (Steuern + SV).
- Monatlicher Puffer korrigiert: ~CHF 1'500/Monat (vorher 3'000).
- Raw-Datei: `Finanzen-Steuern/ESTV-Steuerrechner-Olten-2026.md` (mit sha256).
- Cross-refs hinzugefuegt: [[Steuern-und-Erfolgsrechnungen]], [[Preismodell-Fackler-IT]], [[Remote-Freelancer-Schweizer-KMU-2026]].

## [2026-08-22] update | Sozialversicherung-und-Steuern-Selbststaendiger-SO
- Neuer Abschnitt "Homeoffice-Kosten absetzen" ergaenzt.
- Flaechenquote-Methode dokumentiert (Strom, Heizung, Miete, Nebenkosten anteilig nach Flaechenanteil).
- Voll absetzbare Posten (Bueroemoebel, IT-Infrastruktur) und praktische Hinweise ergaenzt.
- Quelle: einzly.ch (2026), pfeffersack.ch (2026).

## [2026-08-20] create | N8n-Contact-Request-Workflow
- Neues Concept: `Infrastruktur/N8n-Contact-Request-Workflow.md`
- Workflow-Struktur + Sicherheits-Haertung (Security-Block, Sanitize, Dedup, Honeypot) dokumentiert.
- Slots-Logik-Lehrstueck: Slots als fertig formatierte Europe/Zurich-Strings an den LLM, nicht Date-Objekte (JSON -> UTC -> LLM verrechnet sich).
- Dedup-Fallstrick: n8n-NocoDB-Node liefert bei 0 Treffern ein leeres Item, nicht auf Item-Anzahl pruefen.

## [2026-08-20] create | Preismodell-Fackler-IT
- Neues Concept: `Beratung/Preismodell-Fackler-IT.md`
- Preisstufen dokumentiert (Erstgespraech gratis, Vor-Ort-Analyse CHF 750, Umsetzung ab CHF 3'000, Stundensatz ab CHF 150/h).
- Entscheidung festgehalten: Vor-Ort-Analyse CHF 750 ist eine einmalige Gebuehr, NICHT anrechenbar bei Beauftragung.

## [2026-08-18] create | DASA-Framework
- Neues Concept: `Beratung/DASA-Framework.md`
- Quelle: [[Koerner-Office-Ryan-Schuetter]] Podcast-Transkript.
- Entity [[Ryan-Schuetter]] angelegt.

## [2026-08-18] create | Produkt-Daten-Import-Automatisierung
- Neues Concept: `Beratung/Produkt-Daten-Import-Automatisierung.md`
- Design-Dokument: `Beratung/Produkt-Daten-Import-Automatisierung-Design.md`
- Markt-Recherche abgeschlossen, Wedge geschärft.

## [2026-08-13] create | KI-gestuetzte-SaaS-Migration
- Neues Concept: `Beratung/KI-gestuetzte-SaaS-Migration.md`

## [2026-07-28] create | Mehrwertsteuer-MWST-Florian-Fackler
- Neues Concept: `Finanzen-Steuern/Mehrwertsteuer-MWST-Florian-Fackler.md`
- MWST-Fragebogen eingereicht, Saldosteuersatz 6.2%, CHE-269.516.266 MWST.

## [2026-07-22] create | Remote-Freelancer-Schweizer-KMU-2026
- Neues Concept: `Beratung/Remote-Freelancer-Schweizer-KMU-2026.md`
- Quelle: Newsletter Amor Dhaouadi (freelancer-schweiz.ch).

## [2026-07-06] create | Sozialversicherung-und-Steuern-Selbststaendiger-SO
- Neues Concept: `Finanzen-Steuern/Sozialversicherung-und-Steuern-Selbststaendiger-SO.md`

## [2026-07-02] create | CV-Data-Wizard
- Neues Concept: `Infrastruktur/CV-Data-Wizard.md`
- Interactive wizard fuer jobsuchi.ch.

## [2026-03-25] create | Beratervertrag-Ten-Guitars-GmbH
- Vertrag mit Ten-Guitars GmbH, CHF 120/h.

## [2026-03-16] create | Beratervertrag-Shirtinator-AG
- Vertrag mit Shirtinator AG, CHF 9'000/Monat Retainer.
