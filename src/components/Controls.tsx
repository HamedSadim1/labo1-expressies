/**
 * Controls Component - Bedieningselementen voor de applicatie
 *
 * Deze component bevat de gebruikersinterface voor:
 * - Het instellen van het maximum aantal voor willekeurige getallen (via slider)
 * - Het genereren van een nieuwe willekeurige berekening
 * - Directe toegang tot de belangrijkste functies
 */
import React from "react";
import { FaRedo } from "react-icons/fa";
import { Button } from "./Button";
import { Theme } from "../types";

interface ControlsProps {
  maxNumber: number;
  setMaxNumber: (value: number) => void;
  generateNew: () => void;
  theme: Theme;
}

const Controls: React.FC<ControlsProps> = ({
  maxNumber,
  setMaxNumber,
  generateNew,
  theme,
}) => {
  return (
    <div className="space-y-4">
      <div className="space-y-4">
        <label className={`block text-sm font-medium ${theme.textSecondary}`}>
          Maximum getal: {maxNumber}
        </label>
        <input
          type="range"
          min="5"
          max="100"
          value={maxNumber}
          onChange={(e) => setMaxNumber(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
      </div>

      <Button
        onClick={generateNew}
        theme={theme}
        className="w-full py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center font-bold"
      >
        <FaRedo className="mr-2" />
        Genereer Nieuwe Berekening
      </Button>
    </div>
  );
};

export default Controls;
