---
title: Infomaniak
created: 2026-09-19
updated: 2026-09-19
type: concept
tags: [it, hosting, schweiz, vertrag]
confidence: high
---

# Infomaniak

Swiss hosting provider (Genève) - LLM hosting, web hosting, email, cloud services.

## Company

- **Legal**: Infomaniak Network SA, Rue Eugene-Marziano 25, 1227 Geneve
- **CHE**: CHE-103.167.648
- **Contact**: https://contact.infomaniak.com
- **Language**: French version is legally binding; German/EN translations are indicative only

## Services Booked

### LLM-API
- Usage-based billing (no fixed fees)
- Access via API key from admin console
- Pricing by: prompt/response length (Chat), audio duration (Transcription), request count (Embeddings)
- Docs: https://developer.infomaniak.com/docs/api
- CGU: [LLM API - Allgemeine Nutzungsbedingungen](https://welcome.infomaniak.com/api/web-components/1/cgu/latest?id=87&locale=de_DE)

### kDrive
- Cloud storage & sync platform
- Limits (Pro vs Free):
  - Bandwidth: 1000GB/day/user vs 200GB/day/user
  - Max files/kDrive: 300'000
  - Max files/folder: 50'000
  - Max file size: 1TB
- CGU: [Infomaniak Drive (kDrive)](https://welcome.infomaniak.com/api/web-components/1/cgu/latest?id=63&locale=de_DE)

### kSuite
- Productivity suite including: kMail, kDrive, kMeet, kChat, Calendar, Contacts, SwissTransfer, kPaste
- One kSuite per organization
- Must be linked to a domain name
- CGU: [kSuite](https://welcome.infomaniak.com/api/web-components/1/cgu/latest?id=73&locale=de_DE)

### E-Mail Hosting
- No storage limit (except free addresses)
- Max message size: 200 MB
- Max recipients/message: 100
- Daily send limit: 500
- Spam/Trash folders auto-cleaned after 30 days
- CGU: [kMail / Mail-Service](https://welcome.infomaniak.com/api/web-components/1/cgu/latest?id=38&locale=de_DE) - direkter PDF-Endpunkt liefert aktuell HTTP 500 (Infomaniak-seitig); Ersatz: [AGB-Uebersicht](https://www.infomaniak.com/de/agb/allgemeine-bedingungen)

### SwissTransfer
- Free file-sharing infrastructure
- Up to 50 GB per transfer
- Max 20 recipients, 250 downloads/file, 5000 files/transfer
- Transfer duration: 1, 7, 15, or 30 days (30 days requires confirmation at T+12)
- Limit: 5 transfers/hour/IP
- CGU: [SwissTransfer](https://welcome.infomaniak.com/api/web-components/1/cgu/latest?id=94&locale=de_DE)

### SwissBackup
- Data storage platform (save, host, restore)
- 90-day free trial
- Billing per tariff on site
- CGU: [Swiss Backup](https://welcome.infomaniak.com/api/web-components/1/cgu/latest?id=56&locale=de_DE)

### General Terms (ANB)
- Master terms for all services
- Special conditions (BB) take precedence over ANB in case of conflict
- CGU: [Allgemeine Nutzungsbedingungen](https://welcome.infomaniak.com/api/web-components/1/cgu/latest?id=1&locale=de_DE)

## Links

- Website: https://www.infomaniak.com
- Developer API: https://developer.infomaniak.com/docs/api
- Contact: https://contact.infomaniak.com
- Alle AGB und besonderen Bedingungen (DE): https://www.infomaniak.com/de/agb/allgemeine-bedingungen
- Glossar: [https://welcome.infomaniak.com/api/web-components/1/cgu/latest?id=61&locale=de_DE](https://welcome.infomaniak.com/api/web-components/1/cgu/latest?id=61&locale=de_DE)

## Hinweis zu den CGU-Dokumenten

Die frueheren lokalen Kopien (`Partner/Infomaniak/cgu_174.pdf` und weitere) lagen nie im
Vault-Repo und ihre IDs sind bei Infomaniak inzwischen ungueltig. Deshalb hier direkte
Links auf die aktuellen PDFs (locale=de_DE). Die Zahl im Param `id` entspricht der alten
Dateinummerierung: 1=ANB, 38=Mail, 56=SwissBackup, 63=kDrive, 73=kSuite, 87=LLM-API, 94=SwissTransfer.

---
**Related**: [[infrastruktur/n8n-contact-request-workflow]], [[infrastruktur/cronjob-koerner-office-idea-harvest]]
