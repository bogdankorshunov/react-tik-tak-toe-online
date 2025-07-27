"use client";
import { GameBackLink } from "./GameBackLink";
import { GameLayout } from "./GameLayout";
import { GameTitle } from "./GameTitle";
import { GameInfo } from "./GameInfo";
import { GamePlayersInfo } from "./GamePlayersInfo";
import { PLAYERS } from "@/lib/constants";
import { GameMoveInfo } from "./GameMoveInfo";
import { useGameState } from "@/model/game/useGameState";
import { isWinningCell } from "@/model/game/gameWinnerUtils";
import { GameCell } from "./GameCell";
import { GameSymbol } from "./GameSymbol";
import { GameOverModal } from "./GameOverModal";

const PLAYERS_COUNT = 2;
const BOARD_SIZE = 19;

export function Game() {
  const {
    nextMove,
    cells,
    currentMove,
    gameResult,
    blockedPlayers,
    handleNextMove,
    blockPlayer,
    resetGame,
  } = useGameState(PLAYERS_COUNT, 19, 3);
  const winnerName = PLAYERS.find(
    (player) => player.symbol === gameResult?.winner,
  );
  const isCurrentPlayerBlocked = blockedPlayers?.includes(currentMove);
  return (
    <>
      <GameLayout
        className="mt-10"
        backLink={<GameBackLink />}
        title={<GameTitle />}
        info={
          <GameInfo playersCount={4} isRatingGame timeMode="1 мин на ход" />
        }
        boardSize={BOARD_SIZE}
        playersList={PLAYERS.map((player, index) => (
          <GamePlayersInfo
            seconds={60}
            key={player.id}
            player={player}
            position={index % 2 === 0 ? "left" : "right"}
          />
        ))}
        gameMoveInfo={
          <GameMoveInfo
            currentMove={currentMove}
            nextMove={nextMove}
            gameResult={gameResult}
            isCurrentPlayerBlocked={isCurrentPlayerBlocked}
          />
        }
        gameGrid={cells.map((value, index) => {
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
      />
      {gameResult?.winner && (
        <GameOverModal
          players={PLAYERS.map((player, index) => (
            <GamePlayersInfo
              seconds={60}
              key={player.id}
              player={player}
              position={index % 2 === 0 ? "left" : "right"}
            />
          ))}
          winnerName={winnerName?.name}
        />
      )}
    </>
  );
}
