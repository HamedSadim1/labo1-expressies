import { useState, useEffect } from "react";
import { HistoryEntry } from "../types";

/**
 * useHistory - Custom React Hook voor berekeningsgeschiedenis management
 *
 * Deze hook beheert de state van alle uitgevoerde berekeningen en zorgt voor
 * persistente opslag in localStorage. Het biedt een consistente interface
 * voor het toevoegen, verwijderen en benaderen van geschiedenis entries.
 *
 * Features:
 * - Automatische localStorage synchronisatie
 * - Error handling voor corrupte data
 * - Type-safe state management
 * - Optimistische updates
 *
 * Data Flow:
 * 1. Component mount → Laad geschiedenis uit localStorage
 * 2. State updates → Sla automatisch op naar localStorage
 * 3. Error handling → Fallback naar lege array bij problemen
 *
 * @returns {[HistoryEntry[], React.Dispatch<React.SetStateAction<HistoryEntry[]>>]}
 *          Tuple met [history array, setHistory functie]
 *
 * @example
 * ```typescript
 * const [history, setHistory] = useHistory();
 *
 * // Nieuwe berekening toevoegen
 * const newEntry: HistoryEntry = { ... };
 * setHistory(prev => [newEntry, ...prev]);
 *
 * // Geschiedenis legen
 * setHistory([]);
 * ```
 */
export const useHistory = () => {
  // State voor het bijhouden van alle geschiedenis entries
  const [history, setHistory] = useState<HistoryEntry[]>([]);

  /**
   * useEffect Hook - Laad geschiedenis uit localStorage bij component mount
   *
   * Deze effect wordt één keer uitgevoerd wanneer de component mount.
   * Het probeert de opgeslagen geschiedenis te laden en te parsen.
   * Bij fouten (corrupte data) wordt de geschiedenis gereset naar een lege array.
   */
  useEffect(() => {
    const savedHistory = localStorage.getItem("calculationHistory");
    if (savedHistory) {
      try {
        // Parse JSON string naar HistoryEntry array
        setHistory(JSON.parse(savedHistory));
      } catch (error) {
        // Log error voor debugging maar breek de app niet
        console.error("Failed to parse history from localStorage:", error);
        // Reset naar lege array bij parsing fouten
        setHistory([]);
      }
    }
  }, []); // Lege dependency array = alleen bij mount

  /**
   * useEffect Hook - Sla geschiedenis op naar localStorage bij state changes
   *
   * Deze effect wordt uitgevoerd telkens wanneer de history state verandert.
   * Het serialiseert de history array naar JSON en slaat deze op in localStorage.
   * Error handling voorkomt dat de app breekt bij localStorage problemen.
   */
  useEffect(() => {
    try {
      // Serialiseer history array naar JSON string
      localStorage.setItem("calculationHistory", JSON.stringify(history));
    } catch (error) {
      // Log error maar breek de app niet (bijv. bij localStorage quota exceeded)
      console.error("Failed to save history to localStorage:", error);
    }
  }, [history]); // Dependency op history state

  // Retourneer tuple met history state en setter functie
  // 'as const' zorgt voor type narrowing van de tuple
  return [history, setHistory] as const;
};
