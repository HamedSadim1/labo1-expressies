/**
 * HistoryHeader Component - Header sectie voor de geschiedenis lijst
 *
 * Toont de titel "Geschiedenis" met icoon en aantal entries,
 * plus een export knop voor het downloaden van de geschiedenis als CSV.
 */
import React from "react";
import { FaHistory, FaDownload } from "react-icons/fa";
import { Button } from "./Button";
import { Theme } from "../types";

interface HistoryHeaderProps {
  historyLength: number;
  exportHistory: () => void;
  theme: Theme;
}

const HistoryHeader: React.FC<HistoryHeaderProps> = ({
  historyLength,
  exportHistory,
  theme,
}) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className={`text-2xl font-bold flex items-center ${theme.text}`}>
        <FaHistory className="mr-3 text-indigo-500" />
        Geschiedenis
        <span className="ml-3 px-3 py-1 text-xs font-semibold rounded-full bg-linear-to-r from-indigo-500 to-purple-600 text-white shadow-md border border-indigo-400/30">
          {historyLength}
        </span>
      </h2>
      <Button
        onClick={exportHistory}
        variant="secondary"
        theme={theme}
        className="p-3 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
        title="Exporteer geschiedenis naar CSV"
      >
        <FaDownload className="text-lg" />
      </Button>
    </div>
  );
};

export default HistoryHeader;
