import { useState, useEffect } from "react";
import { GAME_SYMBOL, GAME_SYMBOL_ORDER } from "../../constants";
import { checkWinner } from "../../utils/gameWinnerUtils";

const getNextMove = (currentMove, playersCount, blockedPlayers = []) => {
  const slicedOrder = GAME_SYMBOL_ORDER.slice(0, playersCount);
  let currentIndex = slicedOrder.indexOf(currentMove);
  let nextMoveIndex = (currentIndex + 1) % slicedOrder.length;

  // Пропускаем заблокированных игроков
  let attempts = 0;
  while (
    blockedPlayers.includes(slicedOrder[nextMoveIndex]) &&
    attempts < playersCount
  ) {
    nextMoveIndex = (nextMoveIndex + 1) % slicedOrder.length;
    attempts++;
  }

  return slicedOrder[nextMoveIndex] ?? slicedOrder[0];
};

export function useGameState(playersCount, boardSize = 19, winLength = 5) {
  const [
    { cells, currentMove, gameResult, blockedPlayers, lastBlockedPlayer },
    setGameState,
  ] = useState({
    cells: new Array(boardSize * boardSize).fill(null),
    currentMove: GAME_SYMBOL.CROSS,
    gameResult: null, // { winner, winningCells, isDraw }
    blockedPlayers: [], // массив заблокированных игроков
    lastBlockedPlayer: null, // последний заблокированный игрок
  });

  // Пересоздаем поле при изменении размера
  useEffect(() => {
    setGameState((prev) => ({
      ...prev,
      cells: new Array(boardSize * boardSize).fill(null),
      gameResult: null,
      blockedPlayers: [],
      lastBlockedPlayer: null,
    }));
  }, [boardSize]);

  const nextMove = getNextMove(currentMove, playersCount, blockedPlayers);

  // Проверяем победителя после каждого хода
  useEffect(() => {
    const result = checkWinner(cells, boardSize, winLength);

    // Проверяем, если все игроки заблокированы
    if (
      !result.winner &&
      !result.isDraw &&
      blockedPlayers.length >= playersCount
    ) {
      // Проверяем, были ли сделаны ходы (доска не пустая)
      const hasMoves = cells.some((cell) => cell !== null);

      if (!hasMoves && lastBlockedPlayer) {
        // Если никто не ходил, победитель - последний заблокированный игрок
        setGameState((prev) => ({
          ...prev,
          gameResult: {
            winner: lastBlockedPlayer,
            winningCells: [],
            isDraw: false,
          },
        }));
      } else {
        // Если были ходы, объявляем ничью
        setGameState((prev) => ({
          ...prev,
          gameResult: { winner: null, winningCells: [], isDraw: true },
        }));
      }
      return;
    }

    // Обновляем результат только если он действительно изменился
    if (result.winner || result.isDraw) {
      setGameState((prev) => {
        // Проверяем, нужно ли обновлять результат
        if (
          !prev.gameResult ||
          prev.gameResult.winner !== result.winner ||
          prev.gameResult.isDraw !== result.isDraw
        ) {
          return {
            ...prev,
            gameResult: result,
          };
        }
        return prev;
      });
    } else if (gameResult) {
      // Сбрасываем результат только если он есть
      setGameState((prev) => ({
        ...prev,
        gameResult: null,
      }));
    }
  }, [
    cells,
    boardSize,
    winLength,
    blockedPlayers,
    playersCount,
    lastBlockedPlayer,
  ]);

  const handleNextMove = (index) => {
    // Не позволяем делать ход, если игра завершена
    if (gameResult) return;

    setGameState((prevGameState) => {
      if (prevGameState.cells[index]) return prevGameState;

      // Проверяем, не заблокирован ли текущий игрок
      if (prevGameState.blockedPlayers.includes(prevGameState.currentMove)) {
        return prevGameState;
      }

      return {
        ...prevGameState,
        currentMove: getNextMove(
          prevGameState.currentMove,
          playersCount,
          prevGameState.blockedPlayers,
        ),
        cells: prevGameState.cells.map((cell, i) =>
          i === index ? prevGameState.currentMove : cell,
        ),
      };
    });
  };

  const blockPlayer = (playerSymbol) => {
    setGameState((prevGameState) => {
      if (prevGameState.blockedPlayers.includes(playerSymbol)) {
        return prevGameState;
      }

      const newBlockedPlayers = [...prevGameState.blockedPlayers, playerSymbol];
      const newCurrentMove =
        playerSymbol === prevGameState.currentMove
          ? getNextMove(
              prevGameState.currentMove,
              playersCount,
              newBlockedPlayers,
            )
          : prevGameState.currentMove;

      return {
        ...prevGameState,
        blockedPlayers: newBlockedPlayers,
        lastBlockedPlayer: playerSymbol, // запоминаем последнего заблокированного
        currentMove: newCurrentMove,
      };
    });
  };

  const resetGame = () => {
    setGameState({
      cells: new Array(boardSize * boardSize).fill(null),
      currentMove: GAME_SYMBOL.CROSS,
      gameResult: null,
      blockedPlayers: [],
      lastBlockedPlayer: null,
    });
  };

  return {
    nextMove,
    cells,
    currentMove,
    gameResult,
    blockedPlayers,
    handleNextMove,
    blockPlayer,
    resetGame,
  };
}
