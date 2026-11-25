"use client";

import { useState } from "react";
import PageIntro from "@/components/PageIntro";
import { ArrowIcon, CheckIcon, LeafIcon, SparkleIcon } from "@/components/Icons";
import { yearWrap } from "@/lib/data";

const slides = [
  {
    kicker: "IL TUO ANNO",
    title: "Hai consumato",
    value: `${yearWrap.kwh} kWh`,
    text: `Il ${Math.abs(yearWrap.kwhChange)}% in meno rispetto al 2025. Valore stimato dai consumi raccolti.`,
    kind: "metric",
  },
  {
    kicker: "IL MESE",
    title: "Il tuo mese migliore",
    value: yearWrap.bestMonth,
    text: `${yearWrap.bestMonthKwh} kWh. Il più impegnativo è stato ${yearWrap.worstMonth} con ${yearWrap.worstMonthKwh} kWh.`,
    kind: "metric",
  },
  {
    kicker: "ELETTRODOMESTICI",
    title: "Chi consuma di più",
    value: `${yearWrap.topDeviceShare}%`,
    text: `${yearWrap.topDevice} in testa. Il più migliorato: ${yearWrap.improvedDevice}, −${yearWrap.improvedPercent}%.`,
    kind: "bars",
  },
  {
    kicker: "RISPARMIO",
    title: "Hai risparmiato",
    value: `${yearWrap.savedEuro} €`,
    text: `Circa ${yearWrap.savedKwh} kWh non consumati rispetto alle abitudini precedenti.`,
    kind: "metric",
  },
  {
    kicker: "CLIMA",
    title: "CO₂ evitata",
    value: `${yearWrap.savedCo2} kg`,
    text: `Stima con fattore ISPRA 0,371 kg CO₂eq/kWh (dati 2024). Meteo e prezzi influenzano i confronti.`,
    kind: "co2",
  },
  {
    kicker: "IL TUO TITOLO",
    title: yearWrap.title,
    value: "✦",
    text: "Una casa che ha imparato a usare meglio l'energia, un piccolo gesto alla volta.",
    kind: "title",
  },
  {
    kicker: "SCHEDA FINALE",
    title: "Condividi il tuo Wrapped",
    value: `−${Math.abs(yearWrap.kwhChange)}%`,
    text: "Solo percentuali e traguardi: nessun orario, nome di apparecchio o importo preciso.",
    kind: "share",
  },
];

export default function WrappedPage() {
  const [index, setIndex] = useState(0);
  const [feedback, setFeedback] = useState("");
  const slide = slides[index];
  const last = index === slides.length - 1;

  const next = () => {
    if (!last) setIndex((current) => current + 1);
  };

  const share = async () => {
    const text = `Il mio Wrapped energetico ${yearWrap.year}: −${Math.abs(yearWrap.kwhChange)}% di consumi e ${yearWrap.savedCo2} kg di CO₂ evitata con WattlySaver.`;
    try {
      if (navigator.share) {
        await navigator.share({ title: "Il mio Wrapped energetico", text, url: window.location.origin });
        setFeedback("Condivisione avviata");
      } else {
        await navigator.clipboard.writeText(text);
        setFeedback("Testo copiato negli appunti");
      }
    } catch {
      setFeedback("Condivisione annullata");
    }
  };

  return (
    <div className="stack">
      <PageIntro
        eyebrow="WRAPPED ENERGETICO"
        title="Il tuo anno, in 7 storie"
        description="Un riepilogo leggero dei tuoi consumi. Puoi condividere solo la scheda finale."
      />

      <section className="story-card" aria-label={`Storia ${index + 1} di ${slides.length}`}>
        <div className="story-progress" role="group" aria-label="Avanzamento storie">
          {slides.map((item, i) => (
            <button
              key={item.kicker}
              type="button"
              className={i < index ? "done" : i === index ? "current" : ""}
              onClick={() => { setIndex(i); setFeedback(""); }}
              aria-label={`Vai alla storia ${i + 1}`}
              aria-current={i === index ? "step" : undefined}
            >
              <span />
            </button>
          ))}
        </div>

        <div className="story-slide" key={index}>
          <span className="story-kicker">{slide.kicker}</span>
          <h2>{slide.title}</h2>
          <div className={`story-value ${slide.kind}`}>{slide.value}</div>
          <p>{slide.text}</p>

          {slide.kind === "bars" && (
            <div className="story-bars" aria-hidden="true">
              {[28, 21, 17, 12, 22].map((value, i) => (
                <span key={i} style={{ height: `${value * 3}%` }} />
              ))}
            </div>
          )}

          {slide.kind === "co2" && (
            <div className="story-leaf">
              <LeafIcon size={26} />
            </div>
          )}

          {slide.kind === "title" && (
            <div className="story-badge">
              <SparkleIcon size={16} /> {yearWrap.title}
            </div>
          )}

          {slide.kind === "share" && (
            <div className="share-preview">
              <span className="share-brand">WattlySaver · {yearWrap.year}</span>
              <b>−{Math.abs(yearWrap.kwhChange)}% consumi</b>
              <span>{yearWrap.savedCo2} kg CO₂ evitata · {yearWrap.title}</span>
              <small>Anteprima scheda pubblica · senza dati identificativi</small>
            </div>
          )}
        </div>

        <div className="story-controls">
          <button
            type="button"
            className="ghost-button"
            onClick={() => { setIndex((current) => Math.max(0, current - 1)); setFeedback(""); }}
            disabled={index === 0}
          >
            Indietro
          </button>
          {last ? (
            <button type="button" className="toggle-button active" onClick={() => { setIndex(0); setFeedback(""); }}>
              Ricomincia
            </button>
          ) : (
            <button type="button" className="toggle-button" onClick={next}>
              Avanti <ArrowIcon size={15} />
            </button>
          )}
        </div>
      </section>

      {last && (
        <section className="panel share-actions">
          <div className="panel-head">
            <div>
              <h2>Condividi con cura</h2>
              <p>La condivisione è sempre esplicita e preceduta da questa anteprima.</p>
            </div>
          </div>
          <div className="share-buttons">
            <button type="button" className="primary-button" onClick={share}>
              Condividi <ArrowIcon size={18} />
            </button>
            <button
              type="button"
              className="ghost-button"
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(`${window.location.origin}/esplora`);
                  setFeedback("Link d'invito copiato");
                } catch {
                  setFeedback("Link d'invito pronto");
                }
              }}
            >
              Copia link d'invito
            </button>
          </div>
          {feedback && <p className="feedback"><CheckIcon size={14} /> {feedback}</p>}
        </section>
      )}

      <section className="panel">
        <div className="panel-head">
          <div>
            <h2>Trasparenza dei dati</h2>
            <p>Stimato, non misurato</p>
          </div>
        </div>
        <ul className="note-list">
          <li>Le stime economiche dipendono da prezzi, fasce orarie e abitudini: non sono previsioni certe.</li>
          <li>
            Fattore CO₂: <a href={yearWrap.emissionUrl} target="_blank" rel="noreferrer">{yearWrap.emissionSource}</a>.
          </li>
          <li>La scheda pubblica mostra solo percentuali e traguardi, mai orari o importi.</li>
        </ul>
      </section>

      <p className="disclaimer">Concept · Valori illustrativi, non dati reali</p>
    </div>
  );
}
