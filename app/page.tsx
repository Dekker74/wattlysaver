import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import WeeklyChart from "@/components/WeeklyChart";
import {
  ArrowIcon,
  BoltIcon,
  ClockIcon,
  LeafIcon,
  SparkleIcon,
} from "@/components/Icons";
import { decimal, euro, snapshot, user } from "@/lib/data";

export default function HomePage() {
  const used = (snapshot.monthSpent / snapshot.monthBudget) * 100;
  const margin = snapshot.monthBudget - snapshot.monthForecast;

  return (
    <div className="stack">
      <PageIntro
        eyebrow="GIOVEDÌ 20 NOVEMBRE"
        title={`Ciao, ${user.firstName}`}
        description="La tua energia, sotto controllo."
      />

      <section className="budget-card" aria-label="Budget di novembre">
        <div className="budget-head">
          <span className="card-tag">IL TUO BUDGET · {user.month.toUpperCase()}</span>
          <span className="budget-glyph">
            <SparkleIcon size={16} />
          </span>
        </div>
        <div className="budget-amount">
          <strong>{euro(snapshot.monthSpent)}</strong>
          <span>/ {euro(snapshot.monthBudget)}</span>
        </div>
        <div
          className="progress-track"
          role="progressbar"
          aria-label="Budget utilizzato"
          aria-valuenow={Math.round(used)}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <span style={{ width: `${used}%` }} />
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

      <div className="metric-grid">
        <section className="metric-card">
          <span className="metric-icon">
            <BoltIcon size={18} />
          </span>
          <span className="metric-label">Adesso</span>
          <div className="metric-value">
            <strong>{decimal(snapshot.powerKw)}</strong> <span>kW</span>
          </div>
          <small>Potenza misurata</small>
        </section>
        <section className="metric-card">
          <span className="metric-icon soft">
            <ClockIcon size={18} />
          </span>
          <span className="metric-label">Oggi</span>
          <div className="metric-value">
            <strong>{decimal(snapshot.todayKwh)}</strong> <span>kWh</span>
          </div>
          <small>Energia misurata</small>
        </section>
      </div>

      <section className="panel">
        <div className="panel-head">
          <div>
            <h2>La tua settimana</h2>
            <p>Totale misurato</p>
          </div>
          <div className="panel-value">
            <strong>{decimal(snapshot.weekKwh)}</strong>
            <span>kWh</span>
          </div>
        </div>
        <WeeklyChart />
      </section>

      <section className="tip-card">
        <span className="tip-icon">
          <LeafIcon size={20} />
        </span>
        <div className="tip-body">
          <h2>Un piccolo gesto, ogni giorno</h2>
          <h3>Prova il programma ECO</h3>
          <p>Se adatto al carico, può ridurre i consumi della lavastoviglie.</p>
          <Link href="/esplora" className="text-link">
            Scopri i programmi <ArrowIcon size={16} />
          </Link>
        </div>
      </section>

      <p className="disclaimer">Concept · Valori illustrativi, non dati reali</p>
    </div>
  );
}
