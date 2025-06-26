import { useState } from "react";
import { computeWinner } from "../helpers/tik-tak-compute-winner";
import { SYMBOL_O, SYMBOL_X } from "../components/tik-tak/tik-tak-constants";

export function useTikTak() {
  const [currentStep, setCurrentStep] = useState(SYMBOL_X);
  const [winnerSequence, setWinnerSequence] = useState([]);
  const [cells, setCells] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const handleClick = (index) => {
    if (cells[index] || winnerSequence.length > 0) return;

    // Создаем новый массив с обновленной ячейкой
    const newCells = cells.map((item, i) => (i === index ? currentStep : item));

    // Проверяем победителя на новом массиве
    const winner = computeWinner(newCells);
    // Обновляем состояние
    setCells(newCells);

    // Если есть победитель, не меняем текущий ход (чтобы правильно показать победителя)
    if (!winner) {
      setCurrentStep(currentStep === SYMBOL_X ? SYMBOL_O : SYMBOL_X);
    }

    setWinnerSequence(winner || []);
  };

  const resetGame = () => {
    setCells(Array.from({ length: 9 }, () => null));

    setCurrentStep(SYMBOL_X);
    setWinnerSequence([]);
  };
  const isDraw =
    !winnerSequence.length && cells.filter((item) => item).length === 9;
  const winnerSymbol = winnerSequence ? cells[winnerSequence[0]] : undefined;

  return {
    isDraw,
    resetGame,
    winnerSymbol,
    handleClick,
    cells,
    winnerSequence,
    currentStep,
  };
}
