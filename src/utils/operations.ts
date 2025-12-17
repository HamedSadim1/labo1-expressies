import {
  FaPlus,
  FaTimes,
  FaMinus,
  FaDivide,
  FaSuperscript,
} from "react-icons/fa";
import React from "react";

/**
 * OperationInfo Interface - Styling informatie voor operaties
 *
 * Deze interface definieert de visuele eigenschappen die gebruikt worden
 * om operaties weer te geven in de UI, inclusief iconen en kleuren.
 */
export interface OperationInfo {
  /** React icoon component voor de operatie */
  icon: React.ComponentType<any>;

  /** Tailwind CSS classes voor tekstkleur */
  colorClasses: string;

  /** Tailwind CSS classes voor achtergrondkleur (inclusief dark mode varianten) */
  bgClasses: string;
}

/**
 * getOperationInfo - Utility functie om styling info op te halen per operatie
 *
 * Deze functie retourneert visuele informatie (icoon, kleuren) gebaseerd op
 * het wiskundige symbool. Het wordt gebruikt door HistoryItem componenten
 * om operaties consistent weer te geven.
 *
 * Ondersteunde operaties:
 * - "+" (Optellen) - Groen met plus icoon
 * - "×" (Vermenigvuldigen) - Rood met maal icoon
 * - "-" (Aftrekking) - Blauw met min icoon
 * - "÷" (Deling) - Paars met deel icoon
 * - "^" (Macht) - Oranje met superscript icoon
 *
 * @param {string} symbol - Het wiskundige symbool (bijv. "+", "×", "-")
 * @returns {OperationInfo} Object met icoon en kleur informatie
 *
 * @example
 * ```typescript
 * const info = getOperationInfo("+");
 * // Retourneert: { icon: FaPlus, colorClasses: "text-green-500", bgClasses: "..." }
 * ```
 */
export const getOperationInfo = (symbol: string): OperationInfo => {
  switch (symbol) {
    case "+":
      return {
        icon: FaPlus,
        colorClasses: "text-green-500", // Groen voor positieve operaties
        bgClasses: "bg-green-100 dark:bg-green-900/30", // Lichtgroene achtergrond
      };

    case "×":
      return {
        icon: FaTimes,
        colorClasses: "text-red-500", // Rood voor vermenigvuldiging
        bgClasses: "bg-red-100 dark:bg-red-900/30", // Lichtrode achtergrond
      };

    case "-":
      return {
        icon: FaMinus,
        colorClasses: "text-blue-500", // Blauw voor aftrekking
        bgClasses: "bg-blue-100 dark:bg-blue-900/30", // Lichtblauwe achtergrond
      };

    case "÷":
      return {
        icon: FaDivide,
        colorClasses: "text-purple-500", // Paars voor deling
        bgClasses: "bg-purple-100 dark:bg-purple-900/30", // Lichtpaarse achtergrond
      };

    case "^":
      return {
        icon: FaSuperscript,
        colorClasses: "text-orange-500", // Oranje voor machtsverheffing
        bgClasses: "bg-orange-100 dark:bg-orange-900/30", // Lichtoranje achtergrond
      };

    default:
      // Fallback voor onbekende symbolen
      return {
        icon: FaPlus,
        colorClasses: "text-gray-500", // Grijs voor neutrale weergave
        bgClasses: "bg-gray-100 dark:bg-gray-900/30", // Lichtgrijze achtergrond
      };
  }
};
