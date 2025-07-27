import { cn } from "@/lib/cn";
import { GameSymbol } from "./GameSymbol";

export function GameMoveInfo({
  actions,
  currentMove,
  nextMove,
  gameResult,
  isCurrentPlayerBlocked,
  className,
}) {
  if (gameResult) {
    return (
      <div className={cn("mb-2 flex justify-between", className)}>
        <div className="flex flex-col gap-0.5">
          {gameResult.isDraw ? (
            <div className="text-xl font-medium text-gray-600">Ничья!</div>
          ) : (
            <div className="flex items-center gap-1 text-xl font-medium text-green-600">
              <span>Победитель:</span>
              <GameSymbol symbol={gameResult.winner} className="mt-1" />
            </div>
          )}
        </div>
        <div className="flex gap-4">{actions}</div>
      </div>
    );
  }

  return (
    <div className={cn("mb-2 flex justify-between", className)}>
      <div className="flex flex-col gap-0.5">
        {isCurrentPlayerBlocked ? (
          <div className="flex items-center gap-1 text-xl font-medium text-red-600">
            <span>Игрок заблокирован:</span>
            <GameSymbol symbol={currentMove} className="mt-1" />
          </div>
        ) : (
          <div className="flex items-center gap-1 text-xl font-medium">
            <span>Ход:</span>
            <GameSymbol symbol={currentMove} className="mt-1" />
          </div>
        )}
        <div className="flex items-center gap-1">
          <span className="text-sm text-gray-500">Следующий:</span>
          <GameSymbol symbol={nextMove} />
        </div>
      </div>
      <div className="flex gap-4">{actions}</div>
    </div>
  );
}
