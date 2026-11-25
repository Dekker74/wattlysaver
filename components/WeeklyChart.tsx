import { decimal, week } from "@/lib/data";

export default function WeeklyChart({ compact = false }: { compact?: boolean }) {
  const max = Math.max(...week.map((d) => d.kwh));
  const peakIndex = week.findIndex((d) => d.kwh === max);

  return (
    <div className={compact ? "week-chart compact" : "week-chart"}>
      <div className="chart-bars" role="img" aria-label="Consumo energetico giornaliero della settimana">
        {week.map((day, index) => (
          <div
            className="chart-column"
            key={day.label}
            title={`${day.label}: ${decimal(day.kwh)} kWh`}
            aria-label={`${day.label}: ${decimal(day.kwh)} kWh`}
          >
            <span className={`chart-value${index === peakIndex ? " peak" : ""}`}>
              {decimal(day.kwh)}
            </span>
            <div className="chart-track">
              <div
                className={`chart-bar${index === peakIndex ? " peak" : ""}`}
                style={{ height: `${(day.kwh / max) * 100}%` }}
              />
            </div>
            <span className={`chart-label${index === peakIndex ? " peak" : ""}`}>{day.day}</span>
          </div>
        ))}
      </div>
      {!compact && (
        <div className="chart-caption">
          <span>Valori in kWh</span>
          <span>Lun 17 – Dom 23</span>
        </div>
      )}
      <span className="sr-only">
        Settimana: {week.map((d) => `${d.label} ${decimal(d.kwh)} kWh`).join(", ")}
      </span>
    </div>
  );
}
