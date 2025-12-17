/**
 * History Component - Container voor de berekeningsgeschiedenis
 *
 * Deze component toont de geschiedenis van uitgevoerde berekeningen met:
 * - Een header met teller en export functie
 * - Een lijst van de laatste 10 berekeningen
 * - Alleen zichtbaar als er geschiedenis entries zijn
 */
import React from "react";
import { HistoryEntry, Theme } from "../types";
import HistoryHeader from "./HistoryHeader";
import HistoryList from "./HistoryList";

interface HistoryProps {
  history: HistoryEntry[];
  exportHistory: () => void;
  theme: Theme;
}

const History: React.FC<HistoryProps> = ({ history, exportHistory, theme }) => {
  if (history.length === 0) return null;

  return (
    <div
      className={`mt-8 p-6 rounded-2xl ${theme.card} shadow-xl backdrop-blur-sm`}
    >
      <HistoryHeader
        historyLength={history.length}
        exportHistory={exportHistory}
        theme={theme}
      />
      <HistoryList history={history} theme={theme} />
    </div>
  );
};

export default History;
