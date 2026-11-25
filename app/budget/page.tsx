"use client";

import { useState } from "react";
import PageIntro from "@/components/PageIntro";
import { SparkleIcon } from "@/components/Icons";
import { euro, months, snapshot, user } from "@/lib/data";

const categories = [
  { name: "Casa", percent: 45, tone: "primary" },
  { name: "Cucina", percent: 30, tone: "mid" },
  { name: "Clima", percent: 25, tone: "soft" },
];

export default function BudgetPage() {
  const [budget, setBudget] = useState(snapshot.monthBudget);
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
            <p>Trascina per adattarlo alle tue esigenze</p>
          </div>
          <span className="pill">{euro(budget)}</span>
        </div>
        <input
          className="budget-slider"
          type="range"
          min={50}
          max={120}
          step={5}
          value={budget}
          onChange={(event) => setBudget(Number(event.target.value))}
          aria-label="Budget mensile in euro"
        />
        <div className="slider-scale">
          <span>50 €</span>
          <span>120 €</span>
        </div>
      </section>

      <section className="panel">
        <div className="panel-head">
          <div>
            <h2>Dove va l&apos;energia</h2>
            <p>Ripartizione di novembre</p>
          </div>
        </div>
        <ul className="category-list">
          {categories.map((category) => (
            <li key={category.name}>
              <span className={`dot ${category.tone}`} />
              <span>{category.name}</span>
              <b>{category.percent}%</b>
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
        <div className="month-chart" role="img" aria-label="Spesa energetica degli ultimi sei mesi">
          {months.map((entry) => (
            <div className="month-column" key={entry.month}>
              <div
                className={`month-bar${entry.month === "Nov" ? " current" : ""}`}
                style={{ height: `${(entry.value / maxMonth) * 100}%` }}
              />
              <span>{entry.month}</span>
            </div>
          ))}
        </div>
      </section>

      <p className="disclaimer">Concept · Valori illustrativi, non dati reali</p>
    </div>
  );
}
