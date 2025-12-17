import { Theme } from "./types";

/**
 * createTheme - Genereert een compleet theme object gebaseerd op dark mode
 *
 * Deze functie creëert een Theme object met alle Tailwind CSS classes
 * die nodig zijn voor consistente styling in de applicatie. Het theme
 * wordt dynamisch gegenereerd gebaseerd op de darkMode parameter.
 *
 * Het theme systeem zorgt voor:
 * - Consistente kleuren in lichte en donkere modus
 * - Betere onderhoudbaarheid van styling
 * - Gemakkelijke theme switching
 * - Centrale definitie van alle UI kleuren
 *
 * @param {boolean} darkMode - Of donkere modus actief is
 * @returns {Theme} Compleet theme object met alle styling classes
 *
 * @example
 * ```typescript
 * const theme = createTheme(false); // Lichte modus
 * // theme.bg = "bg-linear-to-br from-purple-400 via-pink-500 to-red-500"
 *
 * const darkTheme = createTheme(true); // Donkere modus
 * // darkTheme.bg = "bg-linear-to-br from-gray-900 to-black"
 * ```
 */
export const createTheme = (darkMode: boolean): Theme => ({
  // Achtergrond van de hoofdpagina - gradient voor visuele aantrekkingskracht
  bg: darkMode
    ? "bg-linear-to-br from-gray-900 to-black" // Donker: grijs naar zwart
    : "bg-linear-to-br from-purple-400 via-pink-500 to-red-500", // Licht: paars-roze-rood

  // Kaart styling - semi-transparante achtergronden met borders
  card: darkMode
    ? "bg-gray-800/90 border-gray-700" // Donker: grijze kaart
    : "bg-white/90 border-white/20", // Licht: witte kaart met transparantie

  // Tekstkleur hiërarchie
  text: darkMode ? "text-white" : "text-gray-800", // Primaire tekst
  textSecondary: darkMode ? "text-gray-400" : "text-gray-600", // Secundaire tekst
  textMuted: darkMode ? "text-gray-300" : "text-gray-700", // Gedempte tekst

  // Secundaire achtergrond - gebruikt voor badges en accent elementen
  bgSecondary: darkMode
    ? "bg-gray-700" // Donker: effen grijs
    : "bg-linear-to-r from-indigo-50 to-purple-50", // Licht: subtiele gradient

  // Secundaire borders - subtiele scheidingen
  borderSecondary: darkMode ? "border-gray-600" : "border-indigo-200",

  // Tertiaire achtergrond - voor speciale secties (bijv. operation display)
  bgTertiary: darkMode ? "bg-gray-700" : "bg-white",

  // Tertiaire borders - gedetailleerde elementen
  borderTertiary: darkMode ? "border-gray-600" : "border-gray-300",

  // Lijst item achtergronden - subtiele contrast met hoofdachtergrond
  bgCard: darkMode ? "bg-gray-700" : "bg-gray-50",

  // Button styling - primaire call-to-action buttons
  buttonPrimary: darkMode
    ? "bg-blue-600 hover:bg-blue-700 text-white border-blue-600"
    : "bg-blue-500 hover:bg-blue-600 text-white border-blue-500",

  // Button styling - secundaire buttons voor minder prominente acties
  buttonSecondary: darkMode
    ? "bg-gray-600 hover:bg-gray-700 text-white border-gray-600"
    : "bg-gray-500 hover:bg-gray-600 text-white border-gray-500",
});
