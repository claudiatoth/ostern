# Audio — Ostern auf Deutsch

## Subsecțiuni teorie (7 fișiere WAV Hedda)
- `01-kontext.wav` — Kultureller Kontext (calendar Ostern)
- `02-liturgisch.wav` — Liturgische Ostergrüße (Christus ist auferstanden)
- `03-vokabular.wav` — Grundvokabular cu Sg + Pl (15 substantive)
- `04-verben-adjektive.wav` — 10 verbe + 8 adjective
- `05-redewendungen.wav` — Urări + 2 dialoguri (Annette/Andreea + Carolina/Mihai)
- `06-grammatik.wav` — Akkusativ cu Osterwörter
- `07-andreeas-ostern.wav` — Narațiunea Andreei despre Paști în Brandenburg

## Carduri (32 fișiere WAV Hedda — `audio/cards/NN-name.wav`)
Toate cele 32 flashcards au audio pre-generat Hedda (Microsoft Hedda Desktop de-DE).
Fallback: TTS browser dacă fișierul lipsește.

## Generare
WAV-urile sunt generate prin PowerShell System.Speech cu pattern-ul Unicode-safe pentru Umlaut (regula 11 din AGENTS-README):
```powershell
Add-Type -AssemblyName System.Speech
$synth = New-Object System.Speech.Synthesis.SpeechSynthesizer
$synth.SelectVoice('Microsoft Hedda Desktop')
$synth.Rate = 0
$synth.SetOutputToWaveFile($wavPath)
$synth.Speak($text)  # string direct cu Umlaut, fără fișier intermediar
$synth.Dispose()
```
