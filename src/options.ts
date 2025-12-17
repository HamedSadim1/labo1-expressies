import {
  FaPlus,
  FaTimes,
  FaMinus,
  FaDivide,
  FaSuperscript,
} from "react-icons/fa";
import { Operation } from "./types";

/**
 * operations Array - Definitie van alle beschikbare wiskundige operaties
 *
 * Dit array bevat alle wiskundige operaties die de applicatie ondersteunt.
 * Elke operatie heeft een Nederlandse naam, symbool, icoon, berekeningsfunctie
 * en kleur voor consistente UI theming.
 *
 * De operaties worden gebruikt door:
 * - RandomDisplay voor het tonen van de huidige operatie
 * - OperationDisplay voor het tonen van de berekening
 * - HistoryItem voor het weergeven van vorige berekeningen
 *
 * Ondersteunde operaties:
 * 1. Som (+) - Basis optellen
 * 2. Vermenigvuldiging (×) - Basis vermenigvuldigen
 * 3. Aftrekking (-) - Basis aftrekken
 * 4. Deling (÷) - Basis delen met deling-door-nul bescherming
 * 5. Macht (^) - Machtsverheffing
 */
export const operations: Operation[] = [
  {
    name: "Som", // Nederlandse naam voor de operatie
    symbol: "+", // Wiskundig symbool
    icon: FaPlus, // React icoon component
    func: (a: number, b: number) => a + b, // Berekeningsfunctie
    color: "green", // Kleur voor theming
  },

  {
    name: "Vermenigvuldiging",
    symbol: "×",
    icon: FaTimes,
    func: (a: number, b: number) => a * b,
    color: "red",
  },

  {
    name: "Aftrekking",
    symbol: "-",
    icon: FaMinus,
    func: (a: number, b: number) => a - b,
    color: "blue",
  },

  {
    name: "Deling",
    symbol: "÷",
    icon: FaDivide,
    /**
     * Deling functie met bescherming tegen deling door nul
     * @param a - Deeltal (teller)
     * @param b - Deler (noemer)
     * @returns Het quotiënt als string (2 decimalen) of "∞" bij deling door nul
     */
    func: (a: number, b: number) => (b !== 0 ? (a / b).toFixed(2) : "∞"),
    color: "purple",
  },

  {
    name: "Macht",
    symbol: "^",
    icon: FaSuperscript,
    /**
     * Machtsverheffing functie
     * @param a - Basis getal
     * @param b - Exponent (macht)
     * @returns a^b (a tot de macht b)
     */
    func: (a: number, b: number) => Math.pow(a, b),
    color: "orange",
  },
];
