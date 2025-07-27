import { UIButton } from "../ui-kit/ui-button";
import { cn } from "../../utils/cn";
import { GameSymbol } from "./game-symbol";
import { isWinningCell } from "../../utils/gameWinnerUtils";

export function GameBoard({
  cells,
  currentMove,
  nextMove,
  gameResult,
  blockedPlayers,
  handleNextMove,
  resetGame,
  boardSize = 19,
}) {
  const actions = (
    <>
      <UIButton onClick={resetGame}>Новая игра</UIButton>
      <UIButton variant="outline">Сдаться</UIButton>
    </>
  );

  const isCurrentPlayerBlocked = blockedPlayers?.includes(currentMove);

  return (
    <GameBoardLayout>
      <GameMoveInfo
        actions={actions}
        currentMove={currentMove}
        nextMove={nextMove}
        gameResult={gameResult}
        isCurrentPlayerBlocked={isCurrentPlayerBlocked}
      />
      <GameGrid boardSize={boardSize}>
        {cells.map((value, index) => {
          const isWinning = gameResult?.winningCells
            ? isWinningCell(index, gameResult.winningCells)
            : false;

          return (
            <GameCell
              key={index}
              onClick={() => handleNextMove(index)}
              isWinning={isWinning}
              disabled={isCurrentPlayerBlocked}
            >
              {value && <GameSymbol symbol={value} />}
            </GameCell>
          );
        })}
      </GameGrid>
    </GameBoardLayout>
  );
}

function GameGrid({ children, boardSize }) {
  return (
    <div
      className="grid gap-0"
      style={{
        gridTemplateColumns: `repeat(${boardSize}, 30px)`,
        gridTemplateRows: `repeat(${boardSize}, 30px)`,
      }}
    >
      {children}
    </div>
  );
}

function GameCell({ onClick, children, isWinning, disabled }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "-mt-px -ml-px flex items-center justify-center border border-gray-300",
        isWinning && "border-green-400 bg-green-200",
        disabled && "cursor-not-allowed opacity-50",
      )}
      disabled={disabled}
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

function GameMoveInfo({
  actions,
  currentMove,
  nextMove,
  gameResult,
  isCurrentPlayerBlocked,
}) {
  if (gameResult) {
    return (
      <div className="mb-2 flex justify-between">
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
    <div className="mb-2 flex justify-between">
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
