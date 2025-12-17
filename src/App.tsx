/**
 * Hoofdcomponent van de Expressie Calculator applicatie.
 * Deze app genereert willekeurige wiskundige expressies met twee getallen en een operatie,
 * toont de resultaten en houdt een geschiedenis bij van de laatste 10 berekeningen.
 * Gebruikers kunnen het maximum aantal voor de getallen aanpassen, de weergave wisselen tussen licht en donker,
 * en de geschiedenis exporteren naar een CSV-bestand.
 */
import { useState } from "react";
import Header from "./components/Header";
import RandomDisplay from "./components/RandomDisplay";
import NumberCards from "./components/NumberCards";
import OperationDisplay from "./components/OperationDisplay";
import Controls from "./components/Controls";
import History from "./components/History";
import { createTheme } from "./ui";
import { operations } from "./options";
import { useHistory } from "./hooks/useHistory";
import {
  generateTimestamp,
  generateId,
  generateRandomNumber,
  generateRandomOperation,
  convertHistoryToCSV,
  downloadFile,
  initializeAppValues,
} from "./utils/helpers";

function App() {
  const initialValues = initializeAppValues(10);
  const [random, setRandom] = useState(initialValues.random);
  const [getal1, setGetal1] = useState(initialValues.getal1);
  const [getal2, setGetal2] = useState(initialValues.getal2);
  const [maxNumber, setMaxNumber] = useState(10);
  const [history, setHistory] = useHistory();
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme(darkMode);

  const currentOp = generateRandomOperation(operations, random);

  /**
   * toggleDarkMode - Wisselt tussen lichte en donkere modus
   *
   * Deze functie schakelt de darkMode state om en past de DOM class aan
   * voor Tailwind CSS dark mode ondersteuning.
   */
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  /**
   * exportHistory - Exporteert de berekeningsgeschiedenis naar CSV
   *
   * Converteert de geschiedenis naar CSV formaat en download het bestand
   * met de naam "berekeningen.csv".
   */
  const exportHistory = () => {
    const csv = convertHistoryToCSV(history);
    downloadFile(csv, "berekeningen.csv", "text/csv;charset=utf-8;");
  };

  /**
   * generateNew - Genereert een nieuwe willekeurige berekening
   *
   * Deze functie:
   * - Genereert nieuwe willekeurige getallen binnen het ingestelde maximum
   * - Selecteert een willekeurige operatie
   * - Berekent het resultaat
   * - Voegt de berekening toe aan de geschiedenis (houdt laatste 10)
   */
  const generateNew = () => {
    const newRandom = Math.random();
    const newGetal1 = generateRandomNumber(maxNumber);
    const newGetal2 = generateRandomNumber(maxNumber);
    const op = generateRandomOperation(operations, newRandom);
    const result = op.func(newGetal1, newGetal2);

    setRandom(newRandom);
    setGetal1(newGetal1);
    setGetal2(newGetal2);

    const newEntry = {
      id: generateId(),
      getal1: newGetal1,
      getal2: newGetal2,
      operation: op.name,
      symbol: op.symbol,
      result,
      timestamp: generateTimestamp(),
    };
    setHistory((prev) => [newEntry, ...prev.slice(0, 9)]); // Keep last 10
  };

  return (
    <div
      className={`min-h-screen ${theme.bg} flex items-center justify-center p-4 transition-colors duration-500`}
    >
      <div
        className={`backdrop-blur-sm p-8 rounded-3xl shadow-2xl max-w-2xl w-full border ${theme.card}`}
      >
        <Header theme={theme} toggleDarkMode={toggleDarkMode} />
        <div className="space-y-6">
          <RandomDisplay random={random} theme={theme} />
          <NumberCards getal1={getal1} getal2={getal2} />
          <OperationDisplay
            currentOp={currentOp}
            getal1={getal1}
            getal2={getal2}
            theme={theme}
          />
          <Controls
            maxNumber={maxNumber}
            setMaxNumber={setMaxNumber}
            generateNew={generateNew}
            theme={theme}
          />
          <History
            history={history}
            exportHistory={exportHistory}
            theme={theme}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
