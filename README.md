# WattlySaver

App mobile-first per il monitoraggio intelligente dell'energia: consumi in tempo reale, budget mensile, programmi ECO e piano di abbonamento. Design conciso in tonalità viola, ispirato al concept Framer di riferimento.

> I dati mostrati sono illustrativi e non reali. Le stime non sostituiscono misure dirette o controlli obbligatori.

## Funzionalità

- **Home** — saluto, budget del mese, potenza/energia istantanea, settimana, piano della settimana e teaser del Wrapped.
- **Consumi** — grafico delle 24 ore, storico settimanale e dispositivi attivi.
- **Budget** — limite mensile regolabile, caricamento del contratto per una stima più accurata, ripartizione delle spese e andamento semestrale.
- **Esplora** — accesso ai servizi e attivazione/disattivazione dei programmi ECO con risparmio stimato.
- **Wrapped energetico** — 7 storie di fine anno (kWh, mesi, elettrodomestici, risparmio, CO₂, titolo ironico e scheda condivisibile). Condivisione esplicita con anteprima e solo percentuali/traguardi; fattore di emissione da [ISPRA, Rapporto 418/2025](https://emissioni.sina.isprambiente.it/wp-content/uploads/2025/09/Rapporto_418-2025_Decarbonizzazione.pdf) (0,371 kg CO₂eq/kWh, dati 2024).
- **Libretto digitale della casa** — schede degli apparecchi (marca, modello, etichetta, consumi stimati via NILM), aggiunta nuove schede, documenti, garanzie, scadenze e note personali.
- **Check-up stagionale** — report pre-inverno/pre-estate con 3–4 indizi normalizzati per meteo e prenotazione tecnici partner selezionati.
- **Budget condiviso in famiglia** — ruoli (titolare, adulto, giovane, ospite), sfide, notifiche differenziate e conferme Smart Learning, con aggregazione per apparecchio/fascia oraria.
- **Tariff Optimizer** — confronto tra spesa annuale attuale e alternativa stimata, analisi di contratto, fasce orarie e abitudini; esempio illustrativo, non previsione reale.
- **Piano** — Basic, Plus e Premium con switch mensile/annuale (−20%).

## Animazioni

Transizioni di ingresso scaglionate per le sezioni, crescita dei grafici, barre di avanzamento, storie del Wrapped con transizioni e micro-interazioni sui controlli. Tutto rispetta `prefers-reduced-motion: reduce`.

## Stack

Next.js (App Router), React, TypeScript, CSS con design token dedicati. Nessuna dipendenza UI esterna.

## Sviluppo

```bash
npm install
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # build di produzione
npm run typecheck
```
