"use client";

import { useState } from "react";
import PageIntro from "@/components/PageIntro";
import PlanGuard from "@/components/PlanGuard";
import { BoltIcon, CheckIcon, ClockIcon } from "@/components/Icons";
import { checkupClues } from "@/lib/data";

function CheckupContent() {
  const [season, setSeason] = useState<"estate" | "inverno">("inverno");
  const [booked, setBooked] = useState(false);
  const clues = checkupClues[season];

  return (
    <div className="stack">
      <PageIntro
        eyebrow="CHECK-UP STAGIONALE"
        title="Prima che cambi stagione"
        description="Un report automatico con 3–4 indizi. Non sono diagnosi, ma punti da approfondire."
      />

      <section className="season-switch" role="group" aria-label="Stagione del check-up">
        <button type="button" className={season === "inverno" ? "active" : ""} onClick={() => setSeason("inverno")} aria-pressed={season === "inverno"}>
          Pre-inverno
        </button>
        <button type="button" className={season === "estate" ? "active" : ""} onClick={() => setSeason("estate")} aria-pressed={season === "estate"}>
          Pre-estate
        </button>
      </section>

      <section className="panel">
        <div className="panel-head">
          <div>
            <h2>Il tuo report {season === "inverno" ? "invernale" : "estivo"}</h2>
            <p>Confronto con l'anno scorso, normalizzato per meteo</p>
          </div>
          <span className="metric-icon soft"><BoltIcon size={18} /></span>
        </div>
        <ul className="clue-list" key={season}>
          {clues.map((clue, index) => (
            <li key={clue.title} style={{ animationDelay: `${index * 70}ms` }}>
              <span className="clue-number">{index + 1}</span>
              <div>
                <b>{clue.title}</b>
                <p>{clue.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="tip-card">
        <span className="tip-icon"><ClockIcon size={20} /></span>
        <div className="tip-body">
          <h2>Vuoi approfondire?</h2>
          <h3>Tecnici partner selezionati</h3>
          <p>Assicurazione, prezzi chiari e recensioni verificate. Intervento fisico o da remoto, su prenotazione.</p>
          <button
            type="button"
            className={`toggle-button${booked ? " active" : ""}`}
            onClick={() => setBooked(true)}
          >
            {booked ? <CheckIcon size={15} /> : null}
            {booked ? "Richiesta inviata" : "Prenota il tecnico"}
          </button>
        </div>
      </section>

      <section className="panel soft-panel">
        <h2>Cosa sapere</h2>
        <ul className="note-list">
          <li>Le segnalazioni derivano solo dai dati: non sono influenzate dalla vendita di servizi.</li>
          <li>Il check-up non sostituisce i controlli di sicurezza obbligatori previsti dalla normativa.</li>
          <li>Il lancio parte da una singola zona per garantire disponibilità dei tecnici.</li>
          <li>KPI: apertura report, prenotazioni, soddisfazione post-intervento, utilità percepita.</li>
        </ul>
      </section>

      {booked && (
        <div className="feedback"><CheckIcon size={14} /> Ti contatteremo con il preventivo prima di confermare.</div>
      )}

      <p className="disclaimer">Concept · Valori illustrativi, non dati reali</p>
    </div>
  );
}

export default function CheckupPage() {
  return (
    <PlanGuard required="Plus">
      <CheckupContent />
    </PlanGuard>
  );
}
