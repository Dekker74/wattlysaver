"use client";

import { useState } from "react";
import PageIntro from "@/components/PageIntro";
import PlanGuard from "@/components/PlanGuard";
import { CheckIcon, SparkleIcon } from "@/components/Icons";
import { familyRoles } from "@/lib/data";

function FamigliaContent() {
  const [confirmation, setConfirmation] = useState<"si" | "no" | null>(null);
  const [inviteOpen, setInviteOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [invited, setInvited] = useState<string[]>([]);
  const [feedback, setFeedback] = useState("");

  const sendInvite = (event: React.FormEvent) => {
    event.preventDefault();
    const name = username.trim().replace(/^@/, "");
    if (!name) return;
    setInvited((current) => (current.includes(name) ? current : [...current, name]));
    setUsername("");
    setInviteOpen(false);
    setFeedback(`Invito inviato a @${name}. Riceverà la richiesta nell'app.`);
  };

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
            <p>{familyRoles.length} ruoli · {4 + invited.length} persone collegate</p>
          </div>
          <button
            type="button"
            className="toggle-button"
            onClick={() => {
              setInviteOpen((value) => !value);
              setFeedback("");
            }}
          >
            {inviteOpen ? "Chiudi" : "+ Invita"}
          </button>
        </div>

        {inviteOpen && (
          <form className="invite-form" onSubmit={sendInvite}>
            <label>
              Nome utente WattlySaver
              <input
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                placeholder="Es. luciano_74"
                aria-label="Nome utente da invitare"
              />
            </label>
            <button type="submit" className="primary-button" disabled={!username.trim()}>
              Invia invito
            </button>
            <p className="mini-note">Inserisci il nome utente di chi ha già l'app. Riceverà una richiesta da accettare.</p>
          </form>
        )}

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
          {invited.map((name) => (
            <li key={name}>
              <span className="role-avatar mid">@</span>
              <div>
                <b>@{name}</b>
                <small>Invito inviato · in attesa di conferma</small>
              </div>
            </li>
          ))}
        </ul>
        <p className="mini-note">
          I profili dei minori sono gestiti dal titolare, senza raccogliere dati personali dei ragazzi.
          Rimuovere un membro è sempre semplice.
        </p>
        {feedback && <p className="feedback"><CheckIcon size={14} /> {feedback}</p>}
      </section>

      <section className="challenge-card">
        <span className="tip-icon"><SparkleIcon size={20} /></span>
        <div className="challenge-body">
          <span className="story-kicker">SFIDA DI CASA · 24–30 NOVEMBRE</span>
          <h2>Obiettivo: 38,4 kWh entro domenica</h2>
          <div className="challenge-progress">
            <span style={{ width: "72%" }} />
          </div>
          <p>
            72% del traguardo raggiunto: il 10% in meno dei 42,7 kWh della settimana precedente.
            La sfida è sui consumi totali della casa, non sulle persone.
          </p>
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

export default function FamigliaPage() {
  return (
    <PlanGuard required="Premium">
      <FamigliaContent />
    </PlanGuard>
  );
}
