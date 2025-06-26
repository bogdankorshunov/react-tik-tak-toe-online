export const computeWinner = (cells) => {
  const winLines = [
    [0, 1, 2], // горизонтальные
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], // вертикальные
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], // диагональные
    [2, 4, 6],
  ];

  for (let i = 0; i < winLines.length; i++) {
    const [a, b, c] = winLines[i];
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      return [a, b, c];
    }
  }
};
