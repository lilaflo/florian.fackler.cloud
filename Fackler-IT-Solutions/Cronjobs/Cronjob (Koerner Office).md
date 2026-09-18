Harvest newly-added Koerner Office podcast transcripts from PodcastTranscript.AI and write Business-Idea notes to Obsidian, in the established German style (Swiss-market adaptation included).

STEP 1 — Harvest
Run:

```
python3 /Users/lilaflo/Projects/private/podcast-harvest/harvest_podcast_transcripts.py
```

This script:

- lists library items via /api/v1/transcriptions?q=tkopod (paginated, sort=newest)
- fetches each new transcription's full record (id, slug, title, description, long_summary, faqs, language, duration, etc.)
- dedups via ~/.hermes/data/hermes.db (table: podcast_transcripts_seen, source=koerner-office)
- writes a date-prefixed machine note to $WIKI_PATH/entities/Koerner Office/
- no API key needed (read-only, 60 req/min per IP, 1.5s sleep between requests)

STEP 2 — Refactor via Ollama Cloud (deepseek-v4-flash)
For every Koerner-Office note that was just created (status="harvested"), run:

```
python3 /Users/lilaflo/Projects/private/podcast-harvest/refactor_koerner_notes.py --yes
```

The refactor script:

- reads each entry from the dedup table
- fetches the full API transcription
- asks the Ollama Cloud LLM to produce a German Obsidian note in this structure (matches the existing "Boo Boo's Lemonade" style):
  - Frontmatter (source, date, original_url, podcast_slug, title, language, tags including swiss-adaptation, status=analysed)
  - # <Title>
  - ## Video-Infos (Kanal, Gast, Titel, Original-URL)
  - ## Zusammenfassung der Geschäftsidee (Konzept, Vertriebs-/Akquise-Kanäle, Zahlen-Tabelle, Equipment/Setup, Erfolgsfaktoren)
  - ## Analyse: Übertragbarkeit auf den Schweizer Markt (Was grundsätzlich funktioniert, Hürden USA vs CH-Tabelle, Finanzielle Prognose CH-Tabelle, Risiken, Fazit mit Bewertung X/10, Konkrete nächste Schritte für Florian)
  - ## Quotes (1-2 direkte Zitate aus dem Transkript)
- overwrites the machine-generated note with the refactored German version
- marks the entry with status=analysed in the dedup table
- uses Ollama Cloud deepseek-v4-flash via OLLAMA_API_KEY in ~/.hermes/.env

If a note was already analysed by a previous run, the refactor script overwrites it harmlessly. Safe to run every week.

STEP 3 — Report
Report:

- How many new notes were harvested (printed as "Wrote N new notes" by the harvester)
- How many of those were refactored (printed as "Refactored N notes" by the refactor)
- The list of refactored note filenames
- Any errors or fetch failures

If both scripts report 0 changes, just say "No new Koerner Office episodes this week" — no error, no retry.

Do NOT touch the .env files, do NOT add new sources to the scripts, do NOT modify the SQLite schema. Just run, report, exit.
