/**
 * Определяет победителя в игре крестики-нолики
 * @param {Array} cells - массив ячеек поля
 * @param {number} boardSize - размерность поля (например, 19 для поля 19x19)
 * @param {number} winLength - количество символов подряд для победы (например, 5)
 * @returns {Object} - объект с информацией о победителе
 */
export function checkWinner(cells, boardSize, winLength) {
  // Проверяем все возможные направления: горизонталь, вертикаль, диагонали
  const directions = [
    { row: 0, col: 1 }, // горизонталь
    { row: 1, col: 0 }, // вертикаль
    { row: 1, col: 1 }, // диагональ ↘
    { row: 1, col: -1 }, // диагональ ↙
  ];

  // Проверяем каждую ячейку как потенциальную начальную точку линии
  for (let row = 0; row < boardSize; row++) {
    for (let col = 0; col < boardSize; col++) {
      const startIndex = row * boardSize + col;
      const symbol = cells[startIndex];

      // Пропускаем пустые ячейки
      if (!symbol) continue;

      // Проверяем каждое направление
      for (const direction of directions) {
        const winningCells = checkDirection(
          cells,
          boardSize,
          row,
          col,
          direction.row,
          direction.col,
          symbol,
          winLength,
        );

        if (winningCells.length >= winLength) {
          return {
            winner: symbol,
            winningCells: winningCells,
            isDraw: false,
          };
        }
      }
    }
  }

  // Проверяем на ничью (все ячейки заполнены)
  const isDraw = cells.every((cell) => cell !== null);

  return {
    winner: null,
    winningCells: [],
    isDraw,
  };
}

/**
 * Проверяет линию в определенном направлении
 * @param {Array} cells - массив ячеек
 * @param {number} boardSize - размер поля
 * @param {number} startRow - начальная строка
 * @param {number} startCol - начальная колонка
 * @param {number} rowDir - направление по строке
 * @param {number} colDir - направление по колонке
 * @param {string} symbol - символ для проверки
 * @param {number} winLength - необходимая длина линии
 * @returns {Array} - массив индексов выигрышных ячеек
 */
function checkDirection(
  cells,
  boardSize,
  startRow,
  startCol,
  rowDir,
  colDir,
  symbol,
  winLength,
) {
  const winningCells = [];

  for (let i = 0; i < winLength; i++) {
    const row = startRow + i * rowDir;
    const col = startCol + i * colDir;

    // Проверяем границы поля
    if (row < 0 || row >= boardSize || col < 0 || col >= boardSize) {
      break;
    }

    const index = row * boardSize + col;

    // Проверяем, что ячейка содержит нужный символ
    if (cells[index] !== symbol) {
      break;
    }

    winningCells.push(index);
  }

  return winningCells;
}

/**
 * Проверяет, является ли ячейка выигрышной
 * @param {number} cellIndex - индекс ячейки
 * @param {Array} winningCells - массив индексов выигрышных ячеек
 * @returns {boolean} - true, если ячейка выигрышная
 */
export function isWinningCell(cellIndex, winningCells) {
  return winningCells.includes(cellIndex);
}
