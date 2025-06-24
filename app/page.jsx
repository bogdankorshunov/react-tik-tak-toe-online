"use client";
export default function HomePage() {
  const SYMBOL_X = "X";
  const SYMBOL_O = "O";
  const currentStep = SYMBOL_X;
  const cells = [
    SYMBOL_X,
    SYMBOL_O,
    null,
    null,
    SYMBOL_X,
    null,
    SYMBOL_O,
    null,
    SYMBOL_X,
  ];

  const getCellStyles = (symbol) => {
    if (symbol === SYMBOL_O) return "text-red-600";
    if (symbol === SYMBOL_X) return "text-blue-600";
  };

  const renderSymbol = (symbol) => (
    <div className={getCellStyles(symbol)}>{symbol}</div>
  );
  return (
    <div className="min-h-screen bg-slate-500 flex items-center justify-center">
      <div className="bg-slate-200 p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4">Tik-Tak-Game</h1>
        <p className="mb-4 flex items-center">
          Текущий ход: {renderSymbol(currentStep)}
        </p>
        <div className="grid grid-cols-3 gap-2 w-48 h-48">
          {cells.map((symbol, index) => {
            return (
              <button
                key={index}
                className={`border-2 border-gray-300 rounded flex hover:bg-amber-200 items-center justify-center text-2xl font-bold`}
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
