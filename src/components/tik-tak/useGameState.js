import { useState } from "react";
import { GAME_SYMBOL, GAME_SYMBOL_ORDER } from "../../constants";

const getNextMove = (currentMove, playersCount) => {
  const slicedOrder = GAME_SYMBOL_ORDER.slice(0, playersCount);
  const currentIndex = slicedOrder.indexOf(currentMove);
  const nextMoveIndex = (currentIndex + 1) % slicedOrder.length;

  return slicedOrder[nextMoveIndex] ?? slicedOrder[0];
};

export function useGameState(playersCount) {
  const [{ cells, currentMove }, setGameState] = useState({
    cells: new Array(19 * 19).fill(null),
    currentMove: GAME_SYMBOL.CROSS,
  });

  const nextMove = getNextMove(currentMove, playersCount);

  const handleNextMove = (index) => {
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

  return { nextMove, cells, currentMove, handleNextMove };
}
