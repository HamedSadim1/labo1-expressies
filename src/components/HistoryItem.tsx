import React from "react";
import { HistoryEntry, Theme } from "../types";
import { getOperationInfo } from "../utils/operations";

/**
 * Props interface voor HistoryItem component
 * @interface HistoryItemProps
 * @property {HistoryEntry} entry - De geschiedenis entry data
 * @property {number} index - De positie in de lijst (voor styling doeleinden)
 * @property {Theme} theme - Thema object met kleur- en styling informatie
 */
interface HistoryItemProps {
  entry: HistoryEntry;
  index: number;
  theme: Theme;
}

/**
 * HistoryItem Component - Toont een enkele berekeningsgeschiedenis entry
 *
 * Deze component toont alle details van één berekening uit de geschiedenis,
 * inclusief getallen, operator, resultaat, timestamp en operation type.
 *
 * Features:
 * - Visuele hiërarchie met badges en iconen
 * - Hover effecten voor betere interactiviteit
 * - Kleurcodering gebaseerd op operatie type
 * - Responsive layout met flexbox
 * - Speciale styling voor het eerste (meest recente) item
 *
 * Layout structuur:
 * [Badge] [Operation Icon] [Calculation Details] [Operation Badge]
 *
 * @param {HistoryItemProps} props - Component props
 * @returns {JSX.Element} De gerenderde component
 */
const HistoryItem: React.FC<HistoryItemProps> = ({ entry, index, theme }) => {
  // Haal operation-specifieke informatie op (kleuren, iconen, etc.)
  const operationInfo = getOperationInfo(entry.symbol);
  const OperationIcon = operationInfo.icon;

  return (
    <div
      className={`group relative p-4 rounded-2xl transition-all duration-300 hover:shadow-xl ${theme.bgCard} shadow-lg border border-gray-100/50 dark:border-gray-700/50 backdrop-blur-sm overflow-hidden`}
    >
      {/* Subtiele gradient overlay die zichtbaar wordt bij hover voor extra visuele feedback */}
      <div className="absolute inset-0 bg-linear-to-r from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

      <div className="relative flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {/* Nummeringsbadge - toont positie in geschiedenis */}
          <div className="relative">
            <span
              className={`inline-flex items-center justify-center w-9 h-9 text-sm font-bold rounded-full shadow-lg transition-all duration-300 ${
                index === 0
                  ? "bg-linear-to-r from-indigo-500 to-purple-600 text-white animate-pulse ring-2 ring-indigo-300/50"
                  : `${theme.bgSecondary} ${theme.text} ring-1 ring-gray-200 dark:ring-gray-600`
              }`}
            >
              {index + 1}
            </span>
            {/* Groen indicator voor het meest recente item */}
            {index === 0 && (
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-ping ring-2 ring-green-300/50"></div>
            )}
          </div>

          {/* Operation icoon - visuele representatie van de wiskundige operatie */}
          <div
            className={`p-2.5 rounded-xl ${operationInfo.bgClasses} shadow-md border border-white/20 dark:border-gray-600/20 transition-all duration-300 group-hover:shadow-lg`}
          >
            <OperationIcon className="text-xl" />
          </div>

          {/* Hoofdinhoud - de berekening details */}
          <div className="flex-1 min-w-0">
            <div className={`text-xl font-bold ${theme.text} mb-1`}>
              {/* De wiskundige expressie in monospace font voor betere leesbaarheid */}
              <span className="font-mono tracking-wide">
                {/* Kleurcodering voor verschillende delen van de expressie */}
                <span className="text-indigo-600 dark:text-indigo-400">
                  {entry.getal1}
                </span>
                <span className="mx-2 text-indigo-500 font-black text-lg">
                  {entry.symbol}
                </span>
                <span className="text-purple-600 dark:text-purple-400">
                  {entry.getal2}
                </span>
              </span>
              {/* Gelijkteken met subtiele styling */}
              <span className="mx-3 text-gray-400 dark:text-gray-500 font-light">
                =
              </span>
              {/* Resultaat met kleurcodering voor fouten (rood) vs succes (groen) */}
              <span
                className={`font-black text-lg ${
                  entry.operation === "Deling" && entry.result === "∞"
                    ? "text-red-500 dark:text-red-400"
                    : "text-emerald-600 dark:text-emerald-400"
                }`}
              >
                {entry.result}
              </span>
            </div>
            {/* Timestamp van wanneer de berekening is uitgevoerd */}
            <div className={`text-sm ${theme.textMuted} font-medium`}>
              {entry.timestamp}
            </div>
          </div>
        </div>

        {/* Operation type badge rechts - categoriseert het type berekening */}
        <div className={`text-right ${theme.textSecondary}`}>
          <span
            className={`inline-flex items-center px-3 py-1.5 text-sm font-bold rounded-full ${operationInfo.bgClasses} ${operationInfo.colorClasses} shadow-md border border-white/30 dark:border-gray-600/30 transition-all duration-300 group-hover:shadow-lg`}
          >
            {entry.operation}
          </span>
        </div>
      </div>
    </div>
  );
};

export default HistoryItem;
