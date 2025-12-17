/**
 * Header Component - Toont de titel, icoon en dark mode toggle
 *
 * Deze component vormt de bovenste sectie van de applicatie met:
 * - Een geanimeerd dobbelsteen icoon
 * - De hoofdtitel "Labo 1 - Expressies"
 * - Een beschrijving van de functionaliteit
 * - Een toggle knop voor licht/donker modus
 */
import React from "react";
import { FaDice, FaMoon, FaSun } from "react-icons/fa";
import { Button } from "./Button";
import { Theme } from "../types";

interface HeaderProps {
  theme: Theme;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleDarkMode }) => {
  const isDarkMode = theme.bg === "bg-linear-to-br from-gray-900 to-black";

  return (
    <div className="flex justify-between items-center mb-8">
      <div className="text-center flex-1">
        <FaDice
          className={`text-5xl mx-auto mb-4 animate-spin ${theme.textSecondary}`}
        />
        <h1 className={`text-4xl font-extrabold ${theme.text}`}>
          Labo 1 - Expressies
        </h1>
        <p className={`text-gray-600 mt-2 ${theme.textMuted}`}>
          Willekeurige berekeningen
        </p>
      </div>
      <Button
        onClick={toggleDarkMode}
        variant="secondary"
        theme={theme}
        className="p-3 rounded-full transition-colors"
      >
        {isDarkMode ? (
          <FaSun className="text-yellow-400" />
        ) : (
          <FaMoon className="text-gray-600" />
        )}
      </Button>
    </div>
  );
};

export default Header;
