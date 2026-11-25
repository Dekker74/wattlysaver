"use client";

import { useState } from "react";
import PageIntro from "@/components/PageIntro";
import { CheckIcon, SparkleIcon } from "@/components/Icons";
import { devices, euro, months, snapshot, user } from "@/lib/data";

const tones = ["primary", "mid", "soft", "primary"];

export default function BudgetPage() {
  const [budgetInput, setBudgetInput] = useState(String(snapshot.monthBudget));
  const [contract, setContract] = useState("");
  const parsedBudget = Number(budgetInput);
  const budget =
    Number.isFinite(parsedBudget) && parsedBudget > 0 ? parsedBudget : snapshot.monthBudget;
  const used = (snapshot.monthSpent / budget) * 100;
  const margin = budget - snapshot.monthForecast;
  const maxMonth = Math.max(...months.map((m) => m.value));

  return (
    <div className="stack">
      <PageIntro
        eyebrow="BUDGET"
        title="Spendere bene, senza sorprese"
        description="Imposta il tuo limite mensile e monitora la previsione."
      />

      <section className="budget-card">
        <div className="budget-head">
          <span className="card-tag">IL TUO BUDGET · {user.month.toUpperCase()}</span>
          <span className="budget-glyph">
            <SparkleIcon size={16} />
          </span>
        </div>
        <div className="budget-amount">
          <strong>{euro(snapshot.monthSpent)}</strong>
          <span>/ {euro(budget)}</span>
        </div>
        <div
          className="progress-track"
          role="progressbar"
          aria-label="Budget utilizzato"
          aria-valuenow={Math.round(used)}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <span style={{ width: `${Math.min(used, 100)}%` }} />
        </div>
        <div className="budget-meta">
          <div>
            <small>Previsione a fine mese</small>
            <b>{euro(snapshot.monthForecast)}</b>
          </div>
          <div>
            <small>Margine previsto</small>
            <b>{euro(margin)}</b>
          </div>
        </div>
      </section>

      <section className="panel">
        <div className="panel-head">
          <div>
            <h2>Il tuo limite mensile</h2>
            <p>Scrivi il budget che vuoi rispettare</p>
          </div>
          <span className="pill">{euro(budget)}</span>
        </div>
        <label className="budget-input">
          <span>Importo mensile</span>
          <div className="budget-input-field">
            <input
              type="number"
              min={1}
              step={1}
              inputMode="decimal"
              value={budgetInput}
              onChange={(event) => setBudgetInput(event.target.value)}
              aria-label="Budget mensile in euro"
            />
            <span>€</span>
          </div>
        </label>
        <p className="mini-note">Il limite si aggiorna subito in tutte le previsioni di questa pagina.</p>
      </section>

      <section className="panel">
        <div className="panel-head">
          <div>
            <h2>Contratto energetico</h2>
            <p>Caricalo per una stima più accurata</p>
          </div>
        </div>
        <label className="upload-box compact">
          <input
            type="file"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={(event) => setContract(event.target.files?.[0]?.name ?? "")}
          />
          <span>{contract || "Carica bolletta o contratto"}</span>
          <small>Prezzo energia, fasce, oneri e quote fisse</small>
        </label>
        {contract && <p className="feedback"><CheckIcon size={14} /> Contratto pronto per l&apos;analisi.</p>}
      </section>

      <section className="panel">
        <div className="panel-head">
          <div>
            <h2>Dove va l&apos;energia</h2>
            <p>Stima di novembre per apparecchio</p>
          </div>
        </div>
        <ul className="category-list">
          {devices.map((device, index) => (
            <li key={device.name}>
              <span className={`dot ${tones[index % tones.length]}`} />
              <span className="category-name">{device.name}</span>
              <span className="category-amount">{euro((budget * device.percent) / 100)}</span>
              <b>{device.percent}%</b>
            </li>
          ))}
        </ul>
      </section>

      <section className="panel">
        <div className="panel-head">
          <div>
            <h2>Ultimi 6 mesi</h2>
            <p>Spesa energetica in euro</p>
          </div>
        </div>
        <div className="month-chart" role="img" aria-label="Spesa energetica degli ultimi sei mesi, valori in euro">
          {months.map((entry) => (
            <div
              className="month-column"
              key={entry.month}
              title={`${entry.month}: ${euro(entry.value)}`}
              aria-label={`${entry.month}: ${euro(entry.value)}`}
            >
              <span className={`month-value${entry.month === "Nov" ? " current" : ""}`}>
                {Math.round(entry.value)} €
              </span>
              <div className="month-track">
                <div
                  className={`month-bar${entry.month === "Nov" ? " current" : ""}`}
                  style={{ height: `${(entry.value / maxMonth) * 100}%` }}
                />
              </div>
              <span>{entry.month}</span>
            </div>
          ))}
        </div>
        <div className="chart-caption">
          <span>Valori in euro</span>
          <span>Giu – Nov</span>
        </div>
      </section>

      <p className="disclaimer">Concept · Valori illustrativi, non dati reali</p>
    </div>
  );
}
