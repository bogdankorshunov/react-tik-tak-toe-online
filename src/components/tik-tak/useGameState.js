import { useState, useEffect } from "react";
import { GAME_SYMBOL, GAME_SYMBOL_ORDER } from "../../constants";
import { checkWinner } from "../../utils/gameWinnerUtils";

const getNextMove = (currentMove, playersCount) => {
  const slicedOrder = GAME_SYMBOL_ORDER.slice(0, playersCount);
  const currentIndex = slicedOrder.indexOf(currentMove);
  const nextMoveIndex = (currentIndex + 1) % slicedOrder.length;

  return slicedOrder[nextMoveIndex] ?? slicedOrder[0];
};

export function useGameState(playersCount, boardSize = 19, winLength = 5) {
  const [{ cells, currentMove, gameResult }, setGameState] = useState({
    cells: new Array(boardSize * boardSize).fill(null),
    currentMove: GAME_SYMBOL.CROSS,
    gameResult: null, // { winner, winningCells, isDraw }
  });

  // Пересоздаем поле при изменении размера
  useEffect(() => {
    setGameState((prev) => ({
      ...prev,
      cells: new Array(boardSize * boardSize).fill(null),
      gameResult: null,
    }));
  }, [boardSize]);

  const nextMove = getNextMove(currentMove, playersCount);

  // Проверяем победителя после каждого хода
  useEffect(() => {
    const result = checkWinner(cells, boardSize, winLength);

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
  }, [cells, boardSize, winLength]); // убираем gameResult из зависимостей

  const handleNextMove = (index) => {
    // Не позволяем делать ход, если игра завершена
    if (gameResult) return;

    setGameState((prevGameState) => {
      if (prevGameState.cells[index]) return prevGameState;
      return {
        ...prevGameState,
        currentMove: getNextMove(prevGameState.currentMove, playersCount),
        cells: prevGameState.cells.map((cell, i) =>
          i === index ? prevGameState.currentMove : cell,
        ),
      };
    });
  };

  const resetGame = () => {
    setGameState({
      cells: new Array(boardSize * boardSize).fill(null),
      currentMove: GAME_SYMBOL.CROSS,
      gameResult: null,
    });
  };

  return {
    nextMove,
    cells,
    currentMove,
    gameResult,
    handleNextMove,
    resetGame,
  };
}
