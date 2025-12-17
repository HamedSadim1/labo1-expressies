import React from "react";

interface NumberCardsProps {
  getal1: number;
  getal2: number;
}

const NumberCards: React.FC<NumberCardsProps> = ({ getal1, getal2 }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-linear-to-br from-blue-100 to-blue-200 p-6 rounded-xl text-center shadow-md hover:shadow-lg transition-shadow">
        <p className="text-sm text-blue-700 font-semibold uppercase tracking-wide">
          Getal 1
        </p>
        <p className="text-4xl font-bold text-blue-900 mt-2">{getal1}</p>
      </div>
      <div className="bg-linear-to-br from-green-100 to-green-200 p-6 rounded-xl text-center shadow-md hover:shadow-lg transition-shadow">
        <p className="text-sm text-green-700 font-semibold uppercase tracking-wide">
          Getal 2
        </p>
        <p className="text-4xl font-bold text-green-900 mt-2">{getal2}</p>
      </div>
    </div>
  );
};

export default NumberCards;
