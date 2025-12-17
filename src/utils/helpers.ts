/**
 * Utility functies voor de berekeningen applicatie
 *
 * Deze module bevat alle hulp functies die worden gebruikt door de applicatie
 * om logica te scheiden van de UI componenten.
 */

import { Operation, HistoryEntry } from "../types";

/**
 * Interface voor initiële applicatie waarden
 */
interface InitialAppValues {
  random: number;
  getal1: number;
  getal2: number;
}

/**
 * Genereert een geformatteerde timestamp voor Belgische tijdzone
 *
 * @returns {string} Geformatteerde tijd string in Belgische locale
 *
 * @example
 * ```typescript
 * const timestamp = generateTimestamp();
 * // "14:30:25" (afhankelijk van huidige tijd)
 * ```
 */
export const generateTimestamp = (): string => {
  return new Date().toLocaleTimeString("nl-BE", {
    timeZone: "Europe/Brussels",
  });
};

/**
 * Genereert een unieke ID gebaseerd op huidige timestamp
 *
 * @returns {number} Uniek numeriek ID
 *
 * @example
 * ```typescript
 * const id = generateId();
 * // 1702384725000 (voorbeeld timestamp)
 * ```
 */
export const generateId = (): number => {
  return Date.now();
};

/**
 * Genereert een willekeurige waarde tussen 0.0001 en 1
 *
 * @returns {number} Willekeurige waarde minimaal 0.0001
 *
 * @example
 * ```typescript
 * const randomValue = generateRandomValue();
 * // 0.1234 (nooit 0.0000)
 * ```
 */
export const generateRandomValue = (): number => {
  return Math.max(Math.random(), 0.0001);
};

/**
 * Genereert een willekeurig getal tussen 1 en maxNumber (inclusief)
 *
 * @param {number} maxNumber - Maximum waarde voor het willekeurige getal
 * @returns {number} Willekeurig getal tussen 1 en maxNumber
 *
 * @example
 * ```typescript
 * const num = generateRandomNumber(10);
 * // 7 (voorbeeld tussen 1-10)
 * ```
 */
export const generateRandomNumber = (maxNumber: number): number => {
  return Math.floor(Math.random() * maxNumber) + 1;
};

/**
 * Genereert een willekeurige operatie uit de beschikbare operaties
 *
 * @param {Operation[]} operations - Array van beschikbare operaties
 * @param {number} randomValue - Willekeurige waarde tussen 0 en 1 om te gebruiken voor selectie
 * @returns {Operation} Willekeurig geselecteerde operatie object
 *
 * @example
 * ```typescript
 * const operation = generateRandomOperation(operations, Math.random());
 * // { name: "Som", symbol: "+", ... }
 * ```
 */
export const generateRandomOperation = (
  operations: Operation[],
  randomValue: number
): Operation => {
  const randomIndex = Math.floor(randomValue * operations.length);
  return operations[randomIndex];
};

/**
 * Converteert geschiedenis naar CSV formaat
 *
 * @param {HistoryEntry[]} history - Array van geschiedenis entries
 * @returns {string} CSV inhoud als string
 *
 * @example
 * ```typescript
 * const csv = convertHistoryToCSV(history);
 * // "Tijdstip;Getal1;Operatie;Getal2;Resultaat\n14-30-25;5;+;3;8\n..."
 * ```
 */
export const convertHistoryToCSV = (history: HistoryEntry[]): string => {
  const csv = history
    .map(
      (h) =>
        `"${h.timestamp.replace(/:/g, "-")}";"${h.getal1}";"${h.symbol}";"${
          h.getal2
        }";"${h.result}"`
    )
    .join("\n");
  return `Tijdstip;Getal1;Operatie;Getal2;Resultaat\n${csv}`;
};

/**
 * Download een string als bestand
 *
 * @param {string} content - De inhoud van het bestand
 * @param {string} filename - De naam van het bestand
 * @param {string} mimeType - MIME type van het bestand
 *
 * @example
 * ```typescript
 * downloadFile(csvContent, "berekeningen.csv", "text/csv;charset=utf-8;");
 * ```
 */
export const downloadFile = (
  content: string,
  filename: string,
  mimeType: string
): void => {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
};

/**
 * Initialiseert de beginwaarden voor de applicatie
 *
 * @param {number} maxNumber - Maximum waarde voor getallen (default 10)
 * @returns {InitialAppValues} Object met initiële waarden voor random, getal1, getal2
 *
 * @example
 * ```typescript
 * const initialValues = initializeAppValues(10);
 * // { random: 0.123, getal1: 5, getal2: 8 }
 * ```
 */
export const initializeAppValues = (
  maxNumber: number = 10
): InitialAppValues => {
  const random = generateRandomValue();
  const getal1 = generateRandomNumber(maxNumber);
  const getal2 = generateRandomNumber(maxNumber);
  return { random, getal1, getal2 };
};
