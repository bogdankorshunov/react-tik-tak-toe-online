import { UIButton } from "../ui-kit/ui-button";
import { cn } from "../../utils/cn";
import { GameSymbol } from "./game-symbol";
import { useGameState } from "./useGameState";

export function GameBoard({ className, playersCount }) {
  const { cells, currentMove, handleNextMove, nextMove } =
    useGameState(playersCount);
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
              <GameCell key={index} onClick={() => handleNextMove(index)}>
                {value && <GameSymbol symbol={value} />}
              </GameCell>
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

function GameCell({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="-mt-px -ml-px flex items-center justify-center border border-gray-300"
    >
      {children}
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
          <GameSymbol symbol={currentMove} className="mt-1" />
        </div>
        <div className="flex items-center gap-1">
          <span className="text-sm text-gray-500">Следующий:</span>
          <GameSymbol symbol={nextMove} />
        </div>
      </div>
      <div className="flex gap-4">{actions}</div>
    </div>
  );
}
