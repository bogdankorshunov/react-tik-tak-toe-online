"use client";
import { useState } from "react";
import { Header } from "../src/components/Header";
import {
  GameBoard,
  GameInfo,
  GameTitle,
  useGameState,
} from "../src/components/tik-tak";

export default function HomePage() {
  const [playersCount, setPlayersCount] = useState(4);

  // Настройки игры - меняй здесь значения вручную
  const boardSize = 19; // размер поля (3, 5, 9, 15, 19)
  const winLength = 3; // количество в ряд для победы (3, 4, 5, 6, 7)

  const {
    cells,
    currentMove,
    handleNextMove,
    nextMove,
    gameResult,
    blockedPlayers,
    blockPlayer,
    resetGame,
  } = useGameState(playersCount, boardSize, winLength);

  return (
    <div className="min-h-screen bg-gray-50 pb-4">
      <Header />
      <div className="container mx-auto max-w-2xl px-4">
        <GameTitle className="mt-20 mb-10" playersCount={playersCount} />

        <GameInfo
          className="mb-4"
          playersCount={playersCount}
          currentMove={currentMove}
          gameResult={gameResult}
          blockedPlayers={blockedPlayers}
          blockPlayer={blockPlayer}
        />

        <GameBoard
          playersCount={playersCount}
          cells={cells}
          currentMove={currentMove}
          handleNextMove={handleNextMove}
          nextMove={nextMove}
          gameResult={gameResult}
          blockedPlayers={blockedPlayers}
          resetGame={resetGame}
          boardSize={boardSize}
        />
      </div>
    </div>
  );
}
