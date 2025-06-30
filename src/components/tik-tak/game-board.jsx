import { Circle, X } from "lucide-react";
import { UIButton } from "../ui-kit/ui-button";
import { cn } from "../../utils/cn";
import { useState } from "react";
import { GAME_SYMBOL, GAME_SYMBOL_ORDER } from "../../constants";
import { GameSymbol } from "./game-symbol";

const getNextMove = (currentMove) => {
  console.log("currentMove", currentMove);

  const nextMoveIndex = GAME_SYMBOL_ORDER.indexOf(currentMove) + 1;
  console.log(nextMoveIndex);

  return nextMoveIndex ?? GAME_SYMBOL_ORDER[0];
};

export function GameBoard({ className }) {
  const [cells, setCells] = useState(() => new Array(19 * 19).fill(null));
  const [currentMove, setCurrentMove] = useState(GAME_SYMBOL.ZERO);

  const nextMove = getNextMove(currentMove);

  const handleNextMove = (index) => {
    setCurrentMove((prev) => getNextMove(prev));
  };
  const actions = (
    <>
      <UIButton>Ничья</UIButton>
      <UIButton variant="outline">Сдаться</UIButton>
    </>
  );
  return (
    <GameBoardLayout>
      <GameMoveInfo
        actions={actions}
        currentMove={currentMove}
        nextMove={nextMove}
      />
      <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)]">
        <GameGrid>
          {cells.map((value, index) => {
            return (
              <GameCell key={index} onClick={() => handleNextMove(index)} />
            );
          })}
        </GameGrid>
      </div>
    </GameBoardLayout>
  );
}

function GameGrid({ children }) {
  return (
    <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)]">
      {children}
    </div>
  );
}

function GameCell({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="-mt-px -ml-px flex items-center justify-center border border-gray-300"
    >
      {/* <Circle size={20} className="text-teal-500" /> */}
      {/* <X size={20} className="text-red-500" /> */}
    </button>
  );
}

function GameBoardLayout({ children, className }) {
  return (
    <div className={`${cn(className, "rounded-xl bg-white p-8 shadow-xl")}`}>
      {children}
    </div>
  );
}

function GameMoveInfo({ actions, currentMove, nextMove }) {
  return (
    <div className="mb-2 flex justify-between">
      <div className="flex flex-col gap-0.5">
        <div className="flex items-center gap-1 text-xl font-medium">
          <span>Ход:</span>
          <GameSymbol symbol={currentMove} className="mt-1 text-teal-500" />
          {/* <Circle size={16} strokeWidth={3} className="mt-1 text-teal-500" /> */}
        </div>
        <div className="flex items-center gap-1">
          <span className="text-sm text-gray-500">Следующий:</span>
          <GameSymbol symbol={nextMove} className="text-red-500" />

          {/* <X size={20} className="text-red-500" /> */}
        </div>
      </div>
      <div className="flex gap-4">{actions}</div>
    </div>
  );
}
