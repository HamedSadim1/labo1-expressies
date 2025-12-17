/**
 * HistoryEntry Interface - Representeert één berekeningsgeschiedenis entry
 *
 * Deze interface definieert de structuur van een enkele berekening die is opgeslagen
 * in de geschiedenis. Het bevat alle informatie die nodig is om de berekening
 * weer te geven en te reproduceren.
 */
export interface HistoryEntry {
  /** Uniek identificatienummer voor deze geschiedenis entry */
  id: number;

  /** Het eerste getal in de berekening */
  getal1: number;

  /** Het tweede getal in de berekening */
  getal2: number;

  /** De naam van de operatie (bijv. "Optellen", "Aftrekking", "Macht") */
  operation: string;

  /** Het wiskundige symbool van de operatie (bijv. "+", "-", "^") */
  symbol: string;

  /** Het resultaat van de berekening - kan een getal of string zijn (bijv. "∞" bij deling door nul) */
  result: number | string;

  /** Timestamp wanneer de berekening is uitgevoerd (in leesbare string formaat) */
  timestamp: string;
}

/**
 * Operation Interface - Definieert een wiskundige operatie
 *
 * Deze interface beschrijft alle eigenschappen van een wiskundige operatie,
 * inclusief visuele representatie en de berekeningslogica.
 */
export interface Operation {
  /** De Nederlandse naam van de operatie (bijv. "Optellen", "Vermenigvuldigen") */
  name: string;

  /** Het wiskundige symbool (bijv. "+", "×", "÷") */
  symbol: string;

  /** React icoon component voor visuele representatie */
  icon: React.ComponentType<any>;

  /** De functie die de berekening uitvoert - neemt twee getallen en retourneert het resultaat */
  func: (a: number, b: number) => number | string;

  /** Kleur identificatie voor theming doeleinden */
  color: string;
}

/**
 * Theme Interface - Definieert alle styling eigenschappen voor theming
 *
 * Deze interface bevat alle Tailwind CSS classes die gebruikt worden voor
 * consistente styling in lichte en donkere modus. Het theme object wordt
 * gegenereerd door de createTheme functie gebaseerd op de darkMode state.
 */
export interface Theme {
  /** Achtergrond kleur van de hoofdpagina/applicatie */
  bg: string;

  /** Stijl voor kaart-achtige componenten (met achtergrond en border) */
  card: string;

  /** Primaire tekstkleur voor headings en belangrijke content */
  text: string;

  /** Secundaire tekstkleur voor subheadings en labels */
  textSecondary: string;

  /** Gedempte tekstkleur voor timestamps en minder belangrijke info */
  textMuted: string;

  /** Secundaire achtergrondkleur voor badges en accent elementen */
  bgSecondary: string;

  /** Secundaire border kleur voor subtiele scheidingen */
  borderSecondary: string;

  /** Tertiaire achtergrondkleur voor speciale secties */
  bgTertiary: string;

  /** Tertiaire border kleur voor gedetailleerde elementen */
  borderTertiary: string;

  /** Achtergrond voor lijst items en kaarten */
  bgCard: string;

  /** Stijl voor primaire buttons (call-to-action) */
  buttonPrimary: string;

  /** Stijl voor secundaire buttons (minder prominente acties) */
  buttonSecondary: string;
}
