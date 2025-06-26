import { TikTakSymbol } from "./tik-tak-symbol";

export function TikTakInfo({ isDraw, winnerSymbol, currentStep }) {
  if (isDraw) {
    return (
      <div className="mb-4">
        <p className="flex items-center">Ничья!</p>
      </div>
    );
  }

  if (winnerSymbol) {
    return (
      <div className="mb-4">
        <p className="flex items-center">
          Победитель: <TikTakSymbol symbol={winnerSymbol ?? currentStep} />
        </p>
      </div>
    );
  }
  return (
    <div className="mb-4">
      <p className="flex items-center">
        Текущий ход: <TikTakSymbol symbol={winnerSymbol ?? currentStep} />
      </p>
    </div>
  );
}
