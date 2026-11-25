"use client";

import { useState } from "react";
import PageIntro from "@/components/PageIntro";
import { CheckIcon, LeafIcon, SparkleIcon } from "@/components/Icons";
import { ecoPrograms } from "@/lib/data";

export default function EsploraPage() {
  const [active, setActive] = useState<string[]>([]);

  const toggle = (id: string) =>
    setActive((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    );

  const estimatedSaving = ecoPrograms
    .filter((program) => active.includes(program.id))
    .reduce((total, program) => total + program.savingValue, 0);

  return (
    <div className="stack">
      <PageIntro
        eyebrow="ESPLORA"
        title="Un piccolo gesto, ogni giorno"
        description="Programmi intelligenti che riducono i consumi senza cambiare le tue abitudini."
      />

      <section className="eco-hero">
        <span className="tip-icon large">
          <LeafIcon size={22} />
        </span>
        <div>
          <h2>Il tuo risparmio stimato</h2>
          <div className="eco-saving">−{estimatedSaving}%</div>
          <p>{active.length} programmi attivi su {ecoPrograms.length}</p>
        </div>
        <SparkleIcon size={20} className="eco-sparkle" />
      </section>

      <div className="program-list">
        {ecoPrograms.map((program) => {
          const isActive = active.includes(program.id);
          return (
            <section className={`program-card${isActive ? " active" : ""}`} key={program.id}>
              <div className="program-head">
                <div>
                  <span className="eyebrow">{program.device}</span>
                  <h2>{program.title}</h2>
                </div>
                <span className="saving-badge">{program.saving}</span>
              </div>
              <p>{program.description}</p>
              <div className="program-foot">
                <span>{program.minutes}</span>
                <button
                  type="button"
                  className={`toggle-button${isActive ? " active" : ""}`}
                  onClick={() => toggle(program.id)}
                  aria-pressed={isActive}
                >
                  {isActive ? <CheckIcon size={15} /> : null}
                  {isActive ? "Attivo" : "Attiva"}
                </button>
              </div>
            </section>
          );
        })}
      </div>

      <p className="disclaimer">Concept · Valori illustrativi, non dati reali</p>
    </div>
  );
}
