"use client";

import { useState } from "react";
import PageIntro from "@/components/PageIntro";
import { CheckIcon, SparkleIcon } from "@/components/Icons";
import { familyRoles } from "@/lib/data";

export default function FamigliaPage() {
  const [confirmation, setConfirmation] = useState<"si" | "no" | null>(null);
  const [invited, setInvited] = useState(false);

  return (
    <div className="stack">
      <PageIntro
        eyebrow="BUDGET CONDIVISO"
        title="L'energia è un affare di famiglia"
        description="Obiettivi comuni, notifiche su misura e Smart Learning più preciso."
      />

      <section className="panel">
        <div className="panel-head">
          <div>
            <h2>Chi c'è in casa</h2>
            <p>4 ruoli · 4 persone collegate</p>
          </div>
          <button type="button" className="toggle-button" onClick={() => setInvited(true)}>
            {invited ? <CheckIcon size={15} /> : null}
            {invited ? "Invito pronto" : "+ Invita"}
          </button>
        </div>
        <ul className="role-list">
          {familyRoles.map((role) => (
            <li key={role.role}>
              <span className={`role-avatar ${role.tone}`}>{role.count > 0 ? role.count : "—"}</span>
              <div>
                <b>{role.role}</b>
                <small>{role.description}</small>
              </div>
            </li>
          ))}
        </ul>
        <p className="mini-note">
          I profili dei minori sono gestiti dal titolare, senza raccogliere dati personali dei ragazzi.
          Rimuovere un membro è sempre semplice.
        </p>
      </section>

      <section className="challenge-card">
        <span className="tip-icon"><SparkleIcon size={20} /></span>
        <div className="challenge-body">
          <span className="story-kicker">SFIDA DI CASA</span>
          <h2>Obiettivo: −10% questa settimana</h2>
          <div className="challenge-progress">
            <span style={{ width: "72%" }} />
          </div>
          <p>72% completato · nessun nome, solo risultati condivisi.</p>
        </div>
      </section>

      <section className="panel">
        <div className="panel-head">
          <div>
            <h2>Smart Learning</h2>
            <p>Una conferma rapida migliora le stime</p>
          </div>
        </div>
        <p className="body-copy">È partita la lavatrice alle 18:40?</p>
        <div className="confirm-buttons">
          <button
            type="button"
            className={confirmation === "si" ? "toggle-button active" : "toggle-button"}
            onClick={() => setConfirmation("si")}
            aria-pressed={confirmation === "si"}
          >
            Sì, sono io
          </button>
          <button
            type="button"
            className="ghost-button"
            onClick={() => setConfirmation("no")}
            aria-pressed={confirmation === "no"}
          >
            Non so
          </button>
        </div>
        {confirmation && (
          <p className="feedback"><CheckIcon size={14} /> Grazie, la risposta aiuta il modello a imparare.</p>
        )}
      </section>

      <section className="panel soft-panel">
        <h2>Privacy, non sorveglianza</h2>
        <ul className="note-list">
          <li>I consumi sono aggregati per apparecchio e fascia oraria, mai attribuiti a una persona.</li>
          <li>Il tono è collaborativo: nessun avviso del tipo “chi spreca”.</li>
          <li>Notifiche differenziate: budget al titolare, messaggi motivazionali agli altri.</li>
          <li>KPI: account multi-utente attivi, churn più basso, risposte alle conferme.</li>
        </ul>
      </section>

      <p className="disclaimer">Concept · Valori illustrativi, non dati reali</p>
    </div>
  );
}
