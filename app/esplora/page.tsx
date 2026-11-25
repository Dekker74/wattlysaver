"use client";

import Link from "next/link";
import { useState } from "react";
import PageIntro from "@/components/PageIntro";
import {
  ArrowIcon,
  BoltIcon,
  CheckIcon,
  CompassIcon,
  LeafIcon,
  PlanIcon,
  SparkleIcon,
  WalletIcon,
} from "@/components/Icons";
import { ecoPrograms } from "@/lib/data";

const services = [
  { href: "/wrapped", title: "Wrapped energetico", text: "Il tuo anno in 7 storie, pronto da condividere.", Icon: SparkleIcon, tone: "primary" },
  { href: "/libretto", title: "Libretto digitale", text: "Apparecchi, documenti, garanzie e scadenze.", Icon: PlanIcon, tone: "mid" },
  { href: "/checkup", title: "Check-up stagionale", text: "Indizi dai tuoi dati, con tecnico se serve.", Icon: BoltIcon, tone: "soft" },
  { href: "/famiglia", title: "Budget in famiglia", text: "Ruoli, sfide e obiettivi condivisi.", Icon: WalletIcon, tone: "mid" },
  { href: "/tariff", title: "Tariff Optimizer", text: "Confronta il contratto con alternative più convenienti.", Icon: CompassIcon, tone: "primary" },
];

const steps = [
  { title: "Misura", text: "Il dispositivo nel quadro legge corrente e tensione, senza tagliare cavi." },
  { title: "Interpreta", text: "NILM e Smart Learning stimano gli apparecchi e chiedono conferma quando serve." },
  { title: "Trasforma", text: "Consumi, tariffe e budget diventano una previsione di spesa comprensibile." },
  { title: "Suggerisce", text: "Piani d'uso ECO e notifiche: meno sprechi, senza rinunciare al comfort." },
];

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
        title="Servizi per la tua casa"
        description="Tutto ciò che WattlySaver fa con i dati che già raccoglie."
      />

      <div className="service-grid">
        {services.map(({ href, title, text, Icon, tone }) => (
          <Link href={href} className={`service-card ${tone}`} key={href}>
            <span className="service-icon">
              <Icon size={19} />
            </span>
            <b>{title}</b>
            <span>{text}</span>
            <ArrowIcon size={15} className="service-arrow" />
          </Link>
        ))}
      </div>

      <section className="panel">
        <div className="panel-head">
          <div>
            <h2>Come funziona</h2>
            <p>Dal quadro elettrico all'app</p>
          </div>
          <span className="pill">4 passi</span>
        </div>
        <ol className="step-list">
          {steps.map((step, index) => (
            <li key={step.title}>
              <span className="step-number">{index + 1}</span>
              <div>
                <b>{step.title}</b>
                <small>{step.text}</small>
              </div>
            </li>
          ))}
        </ol>
        <p className="mini-note">
          I dati sono cifrati e inviati al cloud solo quando servono. Le stime NILM non sostituiscono
          le misure dirette e i consumi non identificati restano visibili come tali.
        </p>
      </section>

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
