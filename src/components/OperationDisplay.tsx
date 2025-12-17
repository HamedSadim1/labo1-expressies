import React from "react";
import { Operation, Theme } from "../types";
import { getOperationInfo } from "../utils/operations";

interface OperationDisplayProps {
  currentOp: Operation;
  getal1: number;
  getal2: number;
  theme: Theme;
}

const OperationDisplay: React.FC<OperationDisplayProps> = ({
  currentOp,
  getal1,
  getal2,
  theme,
}) => {
  const operationInfo = getOperationInfo(currentOp.symbol);
  const CurrentOpIcon = currentOp.icon;

  return (
    <div
      className={`border-2 border-dashed p-8 rounded-2xl text-center shadow-inner ${theme.bgTertiary} ${theme.borderTertiary}`}
    >
      <div className="animate-pulse">
        <CurrentOpIcon
          className={`text-3xl mx-auto mb-4 ${operationInfo.colorClasses}`}
        />
        <p
          className={`text-2xl font-semibold mb-2 ${operationInfo.colorClasses}`}
        >
          {currentOp.name}
        </p>
        <p className={`text-4xl font-bold text-${currentOp.color}-800`}>
          {getal1} {currentOp.symbol} {getal2} ={" "}
          <span className={operationInfo.colorClasses}>
            {currentOp.func(getal1, getal2)}
          </span>
        </p>
      </div>
    </div>
  );
};

export default OperationDisplay;
