---
title: N8n Contact Request Workflow
created: 2026-08-20
updated: 2026-08-20
type: concept
tags: [ki, it, consulting]
sources: []
confidence: medium
---

# N8n Contact Request Workflow

Produktions-Workflow auf `n8n.code-nexus.co` (ID `1dLQrOvJQdbAz9s5`), der das Website-Kontaktformular von fackler-it.ch verarbeitet: entgegennehmen, Duplikate filtern, per LLM antworten, an Kunde + Florian mailen, Lead speichern.

## Kette

Webhook → Guardrails (Jailbreak-Check, Groq gpt-oss-safeguard) → Sanitize Request (Zeichenfilter + E-Mail-Validierung) → Check Email in NocoDB (Dedup) → Dedup Gate → [Create a row (NocoDB), Code in JavaScript (Slots), Inform via Telegram] → Basic LLM Chain (Anthropic Haiku) → Sanitize Subject → Mail an Kunde + Mail an Florian. Bei Jailbreak → Jailbreak Mail.

## Sicherheits-Härtung (2026-08-20)

- **Prompt-Injection**: Security-Block im System-Prompt — alles in `<user-*>`-Tags ist untrusted data, nie Anweisungen. Zweite Verteidigungslinie neben dem Guardrail-Node.
- **Guardrails**: Test-Payload ("poem aabout a mushrom") entfernt, der fälschlich im Produktions-Input stand.
- **Header-Injection**: Sanitize-Subject-Node entfernt CR/LF/Steuerzeichen aus dem LLM-generierten Mail-Subject.
- **Dedup**: E-Mail wird vor dem LLM gegen die NocoDB-Tabelle geprüft (kein Duplikat, keine doppelten LLM-Kosten).
- **E-Mail-Validierung**: Sanitize verwirft ungültige E-Mail-Formate vor dem LLM.
- **Honeypot**: Verstecktes Feld im Website-Formular, Bots füllen es, Menschen nicht; Client verwirft still.
- **Apostrophe**: ALLOWED-Regex enthält `'` und `’`, sonst verlieren französische Anfragen ihre Apostrophe.

## Slots-Logik (Lehrstück)

Die Termin-Slots liefert ein Code-Node (`naechsteTermine()`): 3 Slots an den nächsten Mo-Sa-Arbeitstagen, zufällige Zeit in 30-Min-Schritten zwischen 10:00 und 16:30 (Europe/Zurich).

**Kern-Fallstrick:** JSON kann keine Date-Objekte serialisieren → sie werden zu UTC-ISO-Strings, und der LLM verrechnet sich beim Umrechnen in Europe/Zurich (nennt falsche Daten/Zeiten). Lösung: Die Slots als **fertig formatierte Strings in Europe/Zurich** übergeben, der LLM übernimmt Datum/Zeit 1:1 und übersetzt nur Tages-/Monatsnamen in die Antwortsprache. Der n8n-Code-Node läuft in UTC, daher muss der Zürich-Offset explizit berechnet werden.

## Dedup-Fallstrick (n8n-NocoDB)

Der NocoDB-"getMany/getAll"-Node gibt bei **0 Treffern ein leeres Item `{}`** aus statt 0 Items. Der Folge-Code-Node darf nicht auf die Item-Anzahl prüfen (`$input.all().length > 0` → verwirft alles fälschlich), sondern muss prüfen, ob ein Item **tatsächlich ein Email-Feld** trägt.

## Verwandte Konzepte

- [[beratung/preismodell-fackler-it]] — Die Website-Preise, die das Formular bewerbt
- [[beratung/remote-freelancer-schweizer-kmu-2026]] — Marktkontext, in dem die Website operiert
