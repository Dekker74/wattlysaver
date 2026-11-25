import { decimal, week } from "@/lib/data";

export default function WeeklyChart({ compact = false }: { compact?: boolean }) {
  const max = Math.max(...week.map((d) => d.kwh));

  return (
    <div className={compact ? "week-chart compact" : "week-chart"}>
      <div className="chart-bars" role="img" aria-label="Consumo energetico giornaliero della settimana">
        {week.map((day, index) => (
          <div className="chart-column" key={`${day.label}-${index}`}>
            <div className="chart-track">
              <div
                className={`chart-bar${index === 3 ? " peak" : ""}`}
                style={{ height: `${(day.kwh / max) * 100}%` }}
              />
            </div>
            <span className={`chart-label${index === 3 ? " peak" : ""}`}>{day.day}</span>
          </div>
        ))}
      </div>
      {!compact && (
        <div className="chart-caption">
          <span>Lun 17</span>
          <span>Dom 23</span>
        </div>
      )}
      <span className="sr-only">
        Settimana: {week.map((d) => `${d.label} ${decimal(d.kwh)} kWh`).join(", ")}
      </span>
    </div>
  );
}
