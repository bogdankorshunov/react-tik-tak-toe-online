"use client";

import { useState } from "react";

const computeWinner = (cells) => {
  const winLines = [
    [0, 1, 2], // горизонтальные
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], // вертикальные
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], // диагональные
    [2, 4, 6],
  ];

  for (let i = 0; i < winLines.length; i++) {
    const [a, b, c] = winLines[i];
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      return [a, b, c];
    }
  }
};

export default function HomePage() {
  const SYMBOL_X = "X";
  const SYMBOL_O = "O";
  const [currentStep, setCurrentStep] = useState(SYMBOL_X);
  const [winnerSequence, setWinnerSequence] = useState([]);
  const [cells, setCells] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const getCellStyles = (symbol) => {
    if (symbol === SYMBOL_O) return "text-red-600";
    if (symbol === SYMBOL_X) return "text-blue-600";
  };

  const renderSymbol = (symbol) => (
    <span className={getCellStyles(symbol)}>{symbol}</span>
  );

  
  const handleClick = (index) => {
    if (cells[index] || winnerSequence.length > 0) return;
    
    // Создаем новый массив с обновленной ячейкой
    const newCells = cells.map((item, i) => (i === index ? currentStep : item));
    
    // Проверяем победителя на новом массиве
    const winner = computeWinner(newCells);
    
    // Обновляем состояние
    setCells(newCells);
    
    // Если есть победитель, не меняем текущий ход (чтобы правильно показать победителя)
    if (!winner) {
      setCurrentStep(currentStep === SYMBOL_X ? SYMBOL_O : SYMBOL_X);
    }
    
    setWinnerSequence(winner || []);
  };
  return (
    <div className="min-h-screen bg-slate-500 flex items-center justify-center">
      <div className="bg-slate-200 p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4">Tik-Tak-Game</h1>
        <div className="mb-4">
            <p className="flex items-center">
              Текущий ход: {renderSymbol(currentStep)}
            </p>
            {winnerSequence.length > 0 && (
              <p className="flex items-center">
                Победитель: {renderSymbol(currentStep)}
              </p>
            )}
        </div>
        <div className="grid grid-cols-3 gap-2 w-48 h-48">
          {cells.map((symbol, index) => {
            const isWinner = winnerSequence.includes(index);
            return (
              <button
                onClick={() => handleClick(index)}
                key={index}
                className={`border-2 border-gray-300 rounded flex hover:bg-amber-200 items-center justify-center text-2xl font-bold ${isWinner ? 'bg-green-200' : ''}`}
              >
                {renderSymbol(symbol)}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  );
}
