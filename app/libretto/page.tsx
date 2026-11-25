"use client";

import { useState } from "react";
import PageIntro from "@/components/PageIntro";
import PlanGuard from "@/components/PlanGuard";
import { CheckIcon, ClockIcon, EditIcon, PlanIcon, TrashIcon } from "@/components/Icons";
import { household, reminders } from "@/lib/data";

type Appliance = (typeof household)[number];

const emptyForm = { name: "", brand: "", model: "", label: "A", note: "" };

function LibrettoContent() {
  const [items, setItems] = useState<Appliance[]>(household);
  const [open, setOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [form, setForm] = useState(emptyForm);

  const closeForm = () => {
    setOpen(false);
    setEditingIndex(null);
    setForm(emptyForm);
  };

  const openAdd = () => {
    setEditingIndex(null);
    setForm(emptyForm);
    setOpen(true);
  };

  const openEdit = (index: number) => {
    const item = items[index];
    setEditingIndex(index);
    setForm({
      name: item.name,
      brand: item.brand,
      model: item.model,
      label: item.label,
      note: item.note,
    });
    setOpen(true);
  };

  const save = (event: React.FormEvent) => {
    event.preventDefault();
    if (!form.name.trim()) return;
    const current = editingIndex === null ? null : items[editingIndex];
    const updated: Appliance = {
      name: form.name.trim(),
      brand: form.brand.trim() || "Da inserire",
      model: form.model.trim() || "Da inserire",
      label: form.label,
      warranty: current?.warranty ?? "Da caricare",
      service: current?.service ?? "Da pianificare",
      kwh: current?.kwh ?? 0,
      note: form.note.trim() || "Documenti e manuali da caricare.",
    };
    setItems((list) =>
      editingIndex === null
        ? [...list, updated]
        : list.map((item, index) => (index === editingIndex ? updated : item))
    );
    closeForm();
  };

  const remove = (index: number) => {
    setItems((list) => list.filter((_, i) => i !== index));
    if (editingIndex === index) closeForm();
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
          <button type="button" className="toggle-button" onClick={open ? closeForm : openAdd}>
            {open ? "Chiudi" : "+ Aggiungi"}
          </button>
        </div>

        {open && (
          <form className="appliance-form" onSubmit={save}>
            <h3>{editingIndex === null ? "Nuovo apparecchio" : "Modifica apparecchio"}</h3>
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
            <label>
              Note personali
              <textarea
                rows={2}
                value={form.note}
                onChange={(e) => setForm({ ...form, note: e.target.value })}
                placeholder="Es. filtro da controllare ogni 3 mesi"
              />
            </label>
            <div className="form-actions">
              <button type="submit" className="primary-button">
                {editingIndex === null ? "Salva scheda" : "Salva modifiche"}
              </button>
              <button type="button" className="ghost-button" onClick={closeForm}>
                Annulla
              </button>
            </div>
          </form>
        )}

        <div className="appliance-list">
          {items.map((item, index) => (
            <article className="appliance-card" key={`${item.name}-${index}`}>
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
              <div className="appliance-actions">
                <button type="button" className="icon-button" onClick={() => openEdit(index)} aria-label={`Modifica ${item.name}`}>
                  <EditIcon size={14} /> Modifica
                </button>
                <button type="button" className="icon-button danger" onClick={() => remove(index)} aria-label={`Rimuovi ${item.name}`}>
                  <TrashIcon size={14} /> Rimuovi
                </button>
              </div>
            </article>
          ))}
          {items.length === 0 && (
            <p className="mini-note">Nessuna scheda: aggiungi il tuo primo apparecchio.</p>
          )}
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

export default function LibrettoPage() {
  return (
    <PlanGuard required="Premium">
      <LibrettoContent />
    </PlanGuard>
  );
}
