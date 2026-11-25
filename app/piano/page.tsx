"use client";

import { useState } from "react";
import PageIntro from "@/components/PageIntro";
import { ArrowIcon, CheckIcon, SparkleIcon } from "@/components/Icons";
import { euro, plans } from "@/lib/data";

export default function PianoPage() {
  const [annual, setAnnual] = useState(false);
  const [selected, setSelected] = useState("Plus");

  return (
    <div className="stack">
      <PageIntro
        eyebrow="PIANI"
        title="Scegli quanto controllo vuoi"
        description="Dispositivo e app in abbonamento: manutenzione, riparazione e rigenerazione inclusi nel modello circolare."
      />

      <section className="billing-switch" role="group" aria-label="Frequenza di fatturazione">
        <button type="button" className={!annual ? "active" : ""} onClick={() => setAnnual(false)} aria-pressed={!annual}>
          Mensile
        </button>
        <button type="button" className={annual ? "active" : ""} onClick={() => setAnnual(true)} aria-pressed={annual}>
          Annuale <span>−20%</span>
        </button>
      </section>

      <div className="plan-list">
        {plans.map((plan) => {
          const price = annual ? plan.price * 0.8 : plan.price;
          const isSelected = selected === plan.name;
          return (
            <section className={`plan-tier${isSelected ? " selected" : ""}`} key={plan.name}>
              <div className="tier-head">
                <div>
                  {plan.name === "Premium" && <span className="tier-badge"><SparkleIcon size={13} /> Più scelto</span>}
                  <h2>{plan.name}</h2>
                  <p>{plan.tagline}</p>
                </div>
                <div className="tier-price">
                  <b>{euro(price)}</b>
                  <small>/ mese</small>
                </div>
              </div>
              <ul className="benefit-list">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <span className="check-circle"><CheckIcon size={14} /></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className={isSelected ? "toggle-button active" : "toggle-button"}
                onClick={() => setSelected(plan.name)}
                aria-pressed={isSelected}
              >
                {isSelected ? <CheckIcon size={15} /> : null}
                {isSelected ? "Piano selezionato" : `Scegli ${plan.name}`}
              </button>
            </section>
          );
        })}
      </div>

      <section className="panel soft-panel">
        <h2>Un dispositivo che resta in circolo</h2>
        <p className="body-copy">
          WattlySaver resta proprietario dell&apos;hardware e si occupa di manutenzione,
          riparazione, aggiornamenti e recupero dei dispositivi. Nessun sensore su ogni
          elettrodomestico: basta il dispositivo centrale nel quadro.
        </p>
        <p className="mini-note">Prezzi e condizioni illustrativi. La bolletta ufficiale resta quella del fornitore.</p>
      </section>

      <button type="button" className="primary-button" onClick={() => setSelected(selected)}>
        Continua con {selected} <ArrowIcon size={18} />
      </button>

      <p className="disclaimer">Concept · Valori illustrativi, non dati reali</p>
    </div>
  );
}
