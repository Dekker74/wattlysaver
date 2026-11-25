"use client";

import { useState } from "react";
import PageIntro from "@/components/PageIntro";
import { ArrowIcon, BoltIcon, CheckIcon, SparkleIcon } from "@/components/Icons";

const benefits = [
  "Monitoraggio dei consumi in tempo reale",
  "Budget mensile e previsioni intelligenti",
  "Programmi ECO automatici illimitati",
  "Report settimanali e notifiche smart",
];

export default function PianoPage() {
  const [annual, setAnnual] = useState(false);
  const [selected, setSelected] = useState(false);
  const price = annual ? "3,90 €" : "4,90 €";

  return (
    <div className="stack">
      <PageIntro
        eyebrow="PIANO"
        title="Tutta l'energia, in un solo piano"
        description="Semplice, trasparente, senza impegno."
      />

      <section className="plan-card">
        <div className="plan-top">
          <span className="card-tag">WATTLYSAVER PLUS</span>
          <span className="budget-glyph">
            <SparkleIcon size={16} />
          </span>
        </div>
        <div className="plan-price">
          <strong>{price}</strong>
          <span>/ mese</span>
        </div>
        <p>{annual ? "Fatturato annualmente · risparmi il 20%" : "Fatturato mensilmente"}</p>
        <div className="plan-switch" role="group" aria-label="Frequenza di fatturazione">
          <button
            type="button"
            className={!annual ? "active" : ""}
            onClick={() => setAnnual(false)}
            aria-pressed={!annual}
          >
            Mensile
          </button>
          <button
            type="button"
            className={annual ? "active" : ""}
            onClick={() => setAnnual(true)}
            aria-pressed={annual}
          >
            Annuale <span>−20%</span>
          </button>
        </div>
      </section>

      <section className="panel">
        <div className="panel-head">
          <div>
            <h2>Cosa include</h2>
            <p>Un solo posto per la tua energia</p>
          </div>
          <span className="metric-icon soft">
            <BoltIcon size={18} />
          </span>
        </div>
        <ul className="benefit-list">
          {benefits.map((benefit) => (
            <li key={benefit}>
              <span className="check-circle">
                <CheckIcon size={14} />
              </span>
              {benefit}
            </li>
          ))}
        </ul>
      </section>

      <button
        type="button"
        className={`primary-button${selected ? " selected" : ""}`}
        onClick={() => setSelected(true)}
      >
        {selected ? "Piano selezionato" : "Scegli WattlySaver Plus"}
        {!selected && <ArrowIcon size={18} />}
      </button>

      <p className="disclaimer">Concept · Valori illustrativi, non dati reali</p>
    </div>
  );
}
