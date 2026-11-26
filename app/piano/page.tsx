"use client";

import { useState } from "react";
import PageIntro from "@/components/PageIntro";
import { CheckIcon, SparkleIcon } from "@/components/Icons";
import { euro, plans } from "@/lib/data";
import { usePlan, type PlanName } from "@/lib/plan";

export default function PianoPage() {
  const [annual, setAnnual] = useState(false);
  const { plan: activePlan, setPlan: setActivePlan } = usePlan();

  return (
    <div className="stack">
      <PageIntro
        eyebrow="PIANI"
        title="Scegli quanto controllo vuoi"
        description="Ogni piano sblocca le funzioni indicate. Le altre restano bloccate e riportano qui."
      />

      <section className="billing-switch" role="group" aria-label="Frequenza di fatturazione">
        <button type="button" className={!annual ? "active" : ""} onClick={() => setAnnual(false)} aria-pressed={!annual}>
          Mensile
        </button>
        <button type="button" className={annual ? "active" : ""} onClick={() => setAnnual(true)} aria-pressed={annual}>
          Annuale
        </button>
      </section>
      <p className="mini-note">
        Con il pagamento annuale paghi in un&apos;unica soluzione: il prezzo mensile tra parentesi è il
        corrispondente mensile.
      </p>

      <div className="plan-list">
        {plans.map((plan) => {
          const annualTotal = plan.annualPrice;
          const monthlyEquivalent = annualTotal / 12;
          const isSelected = activePlan === plan.name;
          return (
            <section className={`plan-tier${isSelected ? " selected" : ""}`} key={plan.name}>
              <div className="tier-head">
                <div>
                  {plan.name === "Premium" && <span className="tier-badge"><SparkleIcon size={13} /> Più scelto</span>}
                  <h2>{plan.name}</h2>
                  <p>{plan.tagline}</p>
                </div>
                <div className="tier-price">
                  {annual ? (
                    <>
                      <b>{euro(annualTotal)}</b>
                      <small>una volta all&apos;anno ({euro(monthlyEquivalent)}/mese)</small>
                    </>
                  ) : (
                    <>
                      <b>{euro(plan.price)}</b>
                      <small>/ mese</small>
                    </>
                  )}
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
                onClick={() => setActivePlan(plan.name as PlanName)}
                aria-pressed={isSelected}
              >
                {isSelected ? <CheckIcon size={15} /> : null}
                {isSelected ? "Piano attivo" : `Attiva ${plan.name}`}
              </button>
            </section>
          );
        })}
      </div>

      <p className="feedback">
        <CheckIcon size={14} /> Piano {activePlan} attivo: le funzioni incluse sono sbloccate.
      </p>

      <p className="disclaimer">Concept · Valori illustrativi, non dati reali</p>
    </div>
  );
}
