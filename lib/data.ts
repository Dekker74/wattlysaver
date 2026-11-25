export const user = {
  firstName: "Luciano",
  initials: "LG",
  month: "Novembre",
};

export const snapshot = {
  powerKw: 0.84,
  todayKwh: 6.2,
  weekKwh: 38.4,
  monthSpent: 42.6,
  monthBudget: 75,
  monthForecast: 58,
};

export const week = [
  { day: "L", label: "Lunedì", kwh: 5.2 },
  { day: "M", label: "Martedì", kwh: 6.8 },
  { day: "G", label: "Mercoledì", kwh: 4.9 },
  { day: "V", label: "Giovedì", kwh: 7.6 },
  { day: "S", label: "Venerdì", kwh: 5.4 },
  { day: "D", label: "Sabato", kwh: 4.7 },
  { day: "D", label: "Domenica", kwh: 3.8 },
];

export const hours = [
  { hour: "00", kwh: 0.2 },
  { hour: "02", kwh: 0.15 },
  { hour: "04", kwh: 0.12 },
  { hour: "06", kwh: 0.3 },
  { hour: "08", kwh: 0.75 },
  { hour: "10", kwh: 0.52 },
  { hour: "12", kwh: 0.68 },
  { hour: "14", kwh: 0.41 },
  { hour: "16", kwh: 0.58 },
  { hour: "18", kwh: 0.92 },
  { hour: "20", kwh: 0.84 },
  { hour: "22", kwh: 0.36 },
];

export const devices = [
  { name: "Climatizzatore", detail: "In uso ora", kwh: 1.6, percent: 42 },
  { name: "Lavastoviglie", detail: "Programma ECO attivo", kwh: 1.2, percent: 31 },
  { name: "Frigorifero", detail: "Sempre attivo", kwh: 0.8, percent: 21 },
  { name: "Illuminazione", detail: "6 luci accese", kwh: 0.24, percent: 6 },
];

export const ecoPrograms = [
  {
    id: "dishwasher",
    title: "Programma ECO",
    device: "Lavastoviglie",
    description: "Riduce il consumo fino al 18% adattando il ciclo al carico reale.",
    saving: "−18%",
    savingValue: 18,
    minutes: "75 min",
  },
  {
    id: "climate",
    title: "Clima intelligente",
    device: "Climatizzatore",
    description: "Mantiene 21 °C con modulazione automatica quando la casa è vuota.",
    saving: "−12%",
    savingValue: 12,
    minutes: "Tutto il giorno",
  },
  {
    id: "standby",
    title: "Taglia standby",
    device: "Prese smart",
    description: "Interrompe i consumi invisibili dei dispositivi in attesa di notte.",
    saving: "−7%",
    savingValue: 7,
    minutes: "23:00 – 07:00",
  },
];

export const months = [
  { month: "Giu", value: 62 },
  { month: "Lug", value: 68 },
  { month: "Ago", value: 54 },
  { month: "Set", value: 49 },
  { month: "Ott", value: 57 },
  { month: "Nov", value: 42.6 },
];

export const euro = (value: number) =>
  value.toLocaleString("it-IT", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " €";

export const decimal = (value: number) =>
  value.toLocaleString("it-IT", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
