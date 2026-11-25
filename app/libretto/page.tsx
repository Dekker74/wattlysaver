"use client";

import { useState } from "react";
import PageIntro from "@/components/PageIntro";
import { CheckIcon, ClockIcon, PlanIcon } from "@/components/Icons";
import { household, reminders } from "@/lib/data";

type Appliance = (typeof household)[number];

export default function LibrettoPage() {
  const [items, setItems] = useState<Appliance[]>(household);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", brand: "", model: "", label: "A" });

  const add = (event: React.FormEvent) => {
    event.preventDefault();
    if (!form.name.trim()) return;
    setItems((current) => [
      ...current,
      {
        name: form.name.trim(),
        brand: form.brand.trim() || "Da inserire",
        model: form.model.trim() || "Da inserire",
        label: form.label,
        warranty: "Da caricare",
        service: "Da pianificare",
        kwh: 0,
        note: "Documenti e manuali da caricare.",
      },
    ]);
    setForm({ name: "", brand: "", model: "", label: "A" });
    setOpen(false);
  };

  return (
    <div className="stack">
      <PageIntro
        eyebrow="LIBRETTO DIGITALE"
        title="La casa, con la sua memoria"
        description="Apparecchi, documenti e scadenze in un unico archivio che cresce con te."
      />

      <section className="panel">
        <div className="panel-head">
          <div>
            <h2>I tuoi apparecchi</h2>
            <p>{items.length} schede · consumi stimati via NILM</p>
          </div>
          <button type="button" className="toggle-button" onClick={() => setOpen((value) => !value)}>
            {open ? "Chiudi" : "+ Aggiungi"}
          </button>
        </div>

        {open && (
          <form className="appliance-form" onSubmit={add}>
            <label>
              Apparecchio
              <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Es. Lavatrice" />
            </label>
            <div className="form-row">
              <label>
                Marca
                <input value={form.brand} onChange={(e) => setForm({ ...form, brand: e.target.value })} placeholder="Es. Bosch" />
              </label>
              <label>
                Modello
                <input value={form.model} onChange={(e) => setForm({ ...form, model: e.target.value })} placeholder="Es. Serie 6" />
              </label>
            </div>
            <label>
              Etichetta energetica
              <select value={form.label} onChange={(e) => setForm({ ...form, label: e.target.value })}>
                {["A+++", "A++", "A+", "A", "B", "C", "Da verificare"].map((label) => (
                  <option key={label} value={label}>{label}</option>
                ))}
              </select>
            </label>
            <button type="submit" className="primary-button">Salva scheda</button>
          </form>
        )}

        <div className="appliance-list">
          {items.map((item) => (
            <article className="appliance-card" key={`${item.name}-${item.model}`}>
              <div className="appliance-top">
                <span className="appliance-icon"><PlanIcon size={18} /></span>
                <div>
                  <b>{item.name}</b>
                  <small>{item.brand} · {item.model}</small>
                </div>
                <span className="energy-label">{item.label}</span>
              </div>
              <div className="appliance-stats">
                <span><small>Consumo stimato</small><b>{item.kwh} kWh/anno</b></span>
                <span><small>Garanzia</small><b>{item.warranty}</b></span>
              </div>
              <p>{item.note}</p>
              <div className="appliance-foot">
                <ClockIcon size={14} /> Prossimo intervento: {item.service}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="panel">
        <div className="panel-head">
          <div>
            <h2>Promemoria attivi</h2>
            <p>Garanzie, manutenzioni e tagliandi</p>
          </div>
        </div>
        <ul className="reminder-list">
          {reminders.map((reminder) => (
            <li key={reminder.title}>
              <span className="check-circle"><CheckIcon size={14} /></span>
              <div>
                <b>{reminder.title}</b>
                <small>{reminder.type} · {reminder.due}</small>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="panel soft-panel">
        <h2>Riparare conviene</h2>
        <p className="body-copy">
          Storico, manuali e prove d&apos;acquisto facilitano riparazioni e rivendita documentata,
          in linea con le norme europee sul diritto alla riparazione. Le segnalazioni di ricambi e
          tecnici partner sono sempre indicate come commerciali.
        </p>
        <p className="mini-note">
          I consumi per apparecchio sono stime NILM, non misure dirette. Puoi aggiungere prese
          intelligenti opzionali per maggiore precisione.
        </p>
      </section>

      <p className="disclaimer">Concept · Valori illustrativi, non dati reali</p>
    </div>
  );
}
