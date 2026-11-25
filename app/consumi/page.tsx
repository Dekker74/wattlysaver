import PageIntro from "@/components/PageIntro";
import WeeklyChart from "@/components/WeeklyChart";
import { BoltIcon, ClockIcon } from "@/components/Icons";
import { decimal, devices, hours, snapshot } from "@/lib/data";

export default function ConsumiPage() {
  const maxHour = Math.max(...hours.map((h) => h.kwh));

  return (
    <div className="stack">
      <PageIntro
        eyebrow="CONSUMI"
        title="La tua energia, minuto per minuto"
        description="Dati aggiornati in tempo reale dal tuo contatore smart."
      />

      <div className="metric-grid">
        <section className="metric-card">
          <span className="metric-icon">
            <BoltIcon size={18} />
          </span>
          <span className="metric-label">Potenza ora</span>
          <div className="metric-value">
            <strong>{decimal(snapshot.powerKw)}</strong> <span>kW</span>
          </div>
          <small>Nel range ideale</small>
        </section>
        <section className="metric-card">
          <span className="metric-icon soft">
            <ClockIcon size={18} />
          </span>
          <span className="metric-label">Oggi</span>
          <div className="metric-value">
            <strong>{decimal(snapshot.todayKwh)}</strong> <span>kWh</span>
          </div>
          <small>−8% vs ieri</small>
        </section>
      </div>

      <section className="panel">
        <div className="panel-head">
          <div>
            <h2>Andamento di oggi</h2>
            <p>Energia misurata ogni 2 ore</p>
          </div>
          <span className="pill">kWh</span>
        </div>
        <div className="hour-chart" role="img" aria-label="Consumo energetico nelle 24 ore">
          {hours.map((entry) => (
            <div className="hour-column" key={entry.hour}>
              <div className="hour-bar" style={{ height: `${(entry.kwh / maxHour) * 100}%` }} />
              <span>{entry.hour}</span>
            </div>
          ))}
        </div>
        <span className="sr-only">
          {hours.map((h) => `${h.hour}: ${decimal(h.kwh)} kWh`).join(", ")}
        </span>
      </section>

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
        <WeeklyChart compact />
      </section>

      <section className="panel">
        <div className="panel-head">
          <div>
            <h2>Dispositivi attivi</h2>
            <p>Stima del consumo odierno</p>
          </div>
        </div>
        <ul className="device-list">
          {devices.map((device) => (
            <li key={device.name}>
              <div className="device-top">
                <div>
                  <b>{device.name}</b>
                  <small>{device.detail}</small>
                </div>
                <strong>{decimal(device.kwh)} kWh</strong>
              </div>
              <div className="progress-track thin">
                <span style={{ width: `${device.percent}%` }} />
              </div>
            </li>
          ))}
        </ul>
      </section>

      <p className="disclaimer">Concept · Valori illustrativi, non dati reali</p>
    </div>
  );
}
