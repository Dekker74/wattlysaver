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
  { day: "Lu", label: "Lunedì 17 novembre", kwh: 5.2 },
  { day: "Ma", label: "Martedì 18 novembre", kwh: 6.8 },
  { day: "Me", label: "Mercoledì 19 novembre", kwh: 4.9 },
  { day: "Gi", label: "Giovedì 20 novembre", kwh: 7.6 },
  { day: "Ve", label: "Venerdì 21 novembre", kwh: 5.4 },
  { day: "Sa", label: "Sabato 22 novembre", kwh: 4.7 },
  { day: "Do", label: "Domenica 23 novembre", kwh: 3.8 },
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

export const weeklyPlan = [
  { title: "Sposta i cicli", text: "Lavatrice e lavastoviglie dopo le 22:00, dove la tariffa è più conveniente.", tag: "Fasce orarie" },
  { title: "Usa il programma ECO", text: "Il carico ridotto mantiene il comfort e taglia fino al 18% dei consumi.", tag: "Elettrodomestici" },
  { title: "Evita i picchi", text: "Non accendere forno e climatizzatore insieme nelle ore di punta.", tag: "Potenza" },
];

export const yearWrap = {
  year: 2026,
  kwh: 712,
  kwhChange: -6,
  bestMonth: "Giugno",
  bestMonthKwh: 49,
  worstMonth: "Gennaio",
  worstMonthKwh: 78,
  topDevice: "Climatizzatore",
  topDeviceShare: 28,
  improvedDevice: "Lavastoviglie",
  improvedPercent: 19,
  savedEuro: 96,
  savedKwh: 385,
  savedCo2: 143,
  title: "Maestri del programma ECO",
  emissionFactor: 0.371,
  emissionSource: "ISPRA, Rapporto 418/2025 — fattore di emissione elettrica, dati 2024",
  emissionUrl: "https://emissioni.sina.isprambiente.it/wp-content/uploads/2025/09/Rapporto_418-2025_Decarbonizzazione.pdf",
};

export const household = [
  { name: "Climatizzatore", brand: "Samsung", model: "WindFree AR12", label: "A++", warranty: "14/03/2027", service: "Maggio 2027", kwh: 182, note: "Filtro da controllare ogni 3 mesi." },
  { name: "Lavastoviglie", brand: "Bosch", model: "Serie 4 SMS", label: "A", warranty: "02/11/2028", service: "Novembre 2026", kwh: 146, note: "Usa sempre il programma ECO." },
  { name: "Frigorifero", brand: "LG", model: "DoorCooling GA-B509", label: "A+", warranty: "21/06/2029", service: "Giugno 2027", kwh: 121, note: "Documenti e scontrino in archivio." },
];

export const reminders = [
  { title: "Tagliando climatizzatore", due: "12/05/2027", type: "Manutenzione" },
  { title: "Garanzia lavastoviglie", due: "02/11/2028", type: "Garanzia" },
  { title: "Verifica impianto", due: "31/12/2026", type: "Obbligatorio" },
];

export const checkupClues = {
  estate: [
    { title: "Clima sotto osservazione", text: "I consumi del climatizzatore sono cresciuti rispetto all'estate scorsa, ma le temperature sono state più alte. Da approfondire, non una diagnosi." },
    { title: "Potenza impegnata", text: "I picchi serali restano sotto la soglia contrattuale. La potenza impegnata sembra adeguata alle abitudini attuali." },
    { title: "Standby notturno", text: "Tra le 23:00 e le 07:00 il consumo base è leggermente superiore allo storico. Potrebbero esserci carichi invisibili." },
    { title: "Scadenze del libretto", text: "La verifica dell'impianto è in scadenza a dicembre. Consulta il Libretto digitale per i documenti." },
  ],
  inverno: [
    { title: "Riscaldamento e consumi", text: "Il consumo di novembre è in linea con lo scorso anno dopo la normalizzazione meteo. Nessuna anomalia evidente." },
    { title: "Elettrodomestici datati", text: "Il frigorifero mostra un assorbimento costante leggermente superiore alla media della categoria." },
    { title: "Fasce orarie", text: "Spostare i cicli lunghi nelle ore serali potrebbe ridurre la spesa, se previsto dal contratto." },
    { title: "Scadenze del libretto", text: "La manutenzione della caldaia è in programma a gennaio: il promemoria è già attivo." },
  ],
};

export const familyRoles = [
  { role: "Titolare", description: "Controllo completo su contratto, budget, inviti e privacy.", count: 1, tone: "primary" },
  { role: "Membro adulto", description: "Vede i consumi, riceve notifiche e conferma gli eventi Smart Learning.", count: 2, tone: "mid" },
  { role: "Membro giovane", description: "Sfide e obiettivi, senza accesso ai dati finanziari.", count: 1, tone: "soft" },
  { role: "Ospite", description: "Accesso a tempo determinato per coinquilini e affitti brevi.", count: 0, tone: "soft" },
];

export const tariff = {
  currentEuro: 1080,
  alternativeEuro: 900,
  savingEuro: 180,
  factors: [
    "Contratto attuale e componenti tariffarie",
    "Consumi complessivi e fasce orarie di utilizzo",
    "Prezzo energia, oneri e quote fisse",
    "Abitudini della famiglia e potenza impegnata",
  ],
};

export const plans = [
  {
    name: "Basic",
    price: 2.9,
    annualPrice: 29,
    tagline: "L'essenziale per partire",
    features: ["Consumi per elettrodomestico", "Piano personalizzato dal budget", "Carica il contratto per una stima accurata", "Wrapped energetico"],
  },
  {
    name: "Plus",
    price: 4.9,
    annualPrice: 49,
    tagline: "Il controllo che cresce",
    features: ["Tutto del piano Basic", "Check-up stagionale digitale", "Prenotazione tecnici convenzionati", "Suggerimenti avanzati"],
  },
  {
    name: "Premium",
    price: 7.9,
    annualPrice: 79,
    tagline: "La casa, tutta sotto controllo",
    features: ["Tutto del piano Plus", "Budget condiviso in famiglia", "Libretto digitale della casa", "WattlySaver Tariff Optimizer"],
  },
];

export const euro = (value: number) =>
  value.toLocaleString("it-IT", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " €";

export const decimal = (value: number) =>
  value.toLocaleString("it-IT", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
