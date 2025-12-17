import React from "react";
import { FaDice } from "react-icons/fa";
import { Theme } from "../types";

interface RandomDisplayProps {
  random: number;
  theme: Theme;
}

const RandomDisplay: React.FC<RandomDisplayProps> = ({ random, theme }) => {
  // Toon als geheel getal tussen 1-1000 om niet bij nul te beginnen
  const displayValue = Math.floor(random * 1000) + 1;

  return (
    <div
      className={`p-4 rounded-xl border ${theme.bgSecondary} ${theme.borderSecondary}`}
    >
      <p
        className={`text-lg font-medium flex items-center ${theme.textSecondary}`}
      >
        <FaDice className="mr-2 text-indigo-500" />
        Willekeurige waarde:{" "}
        <span className="text-indigo-600 font-bold ml-2">{displayValue}</span>
      </p>
    </div>
  );
};

export default RandomDisplay;
