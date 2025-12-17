import React from "react";
import { FaHistory } from "react-icons/fa";
import { HistoryEntry, Theme } from "../types";
import HistoryItem from "./HistoryItem";

/**
 * Props interface voor HistoryList component
 * @interface HistoryListProps
 * @property {HistoryEntry[]} history - Array van geschiedenis entries om weer te geven
 * @property {Theme} theme - Thema object met kleur- en styling informatie
 */
interface HistoryListProps {
  history: HistoryEntry[];
  theme: Theme;
}

/**
 * HistoryList Component - Toont een lijst van berekeningsgeschiedenis
 *
 * Deze component render een scrollbare lijst van HistoryItem componenten.
 * Als er geen geschiedenis is, toont het een lege state met een icoon en bericht.
 *
 * Features:
 * - Scrollbare lijst met max hoogte van 224px (max-h-56)
 * - Compacte spacing tussen items (space-y-2.5 = 10px)
 * - Custom scrollbar styling voor donkere en lichte modus
 * - Lege state met visuele feedback
 *
 * @param {HistoryListProps} props - Component props
 * @returns {JSX.Element} De gerenderde component
 */
const HistoryList: React.FC<HistoryListProps> = ({ history, theme }) => {
  // Controleer of er geschiedenis entries zijn
  if (history.length === 0) {
    return (
      <div className={`text-center py-6 ${theme.textMuted}`}>
        {/* Geschiedenis icoon voor visuele feedback */}
        <FaHistory className="mx-auto text-3xl mb-2 opacity-50" />
        {/* Informatief bericht voor lege staat */}
        <p>Geen berekeningen in geschiedenis</p>
      </div>
    );
  }

  return (
    <div className="space-y-2.5 max-h-56 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent">
      {/* Map over alle geschiedenis entries en render HistoryItem componenten */}
      {history.map((entry, index) => (
        <HistoryItem
          key={entry.id} // Unieke key voor React rendering optimalisatie
          entry={entry} // De geschiedenis entry data
          index={index} // Index voor styling (eerste item heeft speciale styling)
          theme={theme} // Thema object voor consistente styling
        />
      ))}
    </div>
  );
};

export default HistoryList;
