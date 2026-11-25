"use client";

import { useState } from "react";
import PageIntro from "@/components/PageIntro";
import PlanGuard from "@/components/PlanGuard";
import { ArrowIcon, CheckIcon, SparkleIcon } from "@/components/Icons";
import { euro, tariff } from "@/lib/data";

function TariffContent() {
  const [uploaded, setUploaded] = useState("");
  const [analyzed, setAnalyzed] = useState(false);

  return (
    <div className="stack">
      <PageIntro
        eyebrow="TARIFF OPTIMIZER"
        title="Consumare poco non basta"
        description="Anche il contratto può costare troppo. Confrontiamo il tuo profilo con alternative più convenienti."
      />

      <section className="plan-card tariff-card">
        <div className="plan-top">
          <span className="card-tag">CONFRONTO ANNUALE · ESEMPIO</span>
          <span className="budget-glyph"><SparkleIcon size={16} /></span>
        </div>
        <div className="tariff-values">
          <div>
            <small>Contratto attuale</small>
            <b>{euro(tariff.currentEuro)}</b>
          </div>
          <div>
            <small>Alternativa stimata</small>
            <b>{euro(tariff.alternativeEuro)}</b>
          </div>
        </div>
        <div className="tariff-saving">
          <span>Possibile risparmio annuo</span>
          <strong>{euro(tariff.savingEuro)}</strong>
        </div>
      </section>

      <section className="panel">
        <div className="panel-head">
          <div>
            <h2>Cosa analizziamo</h2>
            <p>Tutte le componenti, non solo il prezzo energia</p>
          </div>
        </div>
        <ul className="note-list">
          {tariff.factors.map((factor) => (
            <li key={factor}>{factor}</li>
          ))}
        </ul>
        <p className="mini-note">Esempio illustrativo, non una previsione reale. Le offerte fisse e variabili vanno valutate separatamente.</p>
      </section>

      <section className="panel">
        <div className="panel-head">
          <div>
            <h2>Il tuo contratto</h2>
            <p>Carica la bolletta o inserisci i dati</p>
          </div>
        </div>
        <label className="upload-box">
          <input
            type="file"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={(event) => setUploaded(event.target.files?.[0]?.name ?? "")}
          />
          <span>{uploaded || "Scegli un file o trascinalo qui"}</span>
          <small>PDF, JPG o PNG · nessun dato inviato in questa demo</small>
        </label>
        <button
          type="button"
          className="primary-button"
          disabled={!uploaded}
          onClick={() => setAnalyzed(true)}
        >
          {analyzed ? "Analisi richiesta" : "Analizza il mio contratto"}
          {analyzed ? <CheckIcon size={18} /> : <ArrowIcon size={18} />}
        </button>
        {analyzed && <p className="feedback"><CheckIcon size={14} /> Ti mostreremo le alternative quando i dati tariffari saranno verificati.</p>}
      </section>

      <section className="panel soft-panel">
        <h2>Trasparenza prima di tutto</h2>
        <ul className="note-list">
          <li>Le raccomandazioni seguono la convenienza per te, non le commissioni.</li>
          <li>Eventuali collaborazioni con fornitori sono indicate esplicitamente.</li>
          <li>Il cambio fornitore è sempre volontario e avviene tramite il canale scelto dall'utente.</li>
          <li>KPI: confronti effettuati, offerte selezionate, cambi completati.</li>
        </ul>
      </section>

      <p className="disclaimer">Concept · Valori illustrativi, non dati reali</p>
    </div>
  );
}

export default function TariffPage() {
  return (
    <PlanGuard required="Premium">
      <TariffContent />
    </PlanGuard>
  );
}
