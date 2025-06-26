import { TikTakSymbol } from "./tik-tak-symbol";

export function TikTakCell({ isWinner, onClick, symbol }) {
  return (
    <button
      onClick={onClick}
      className={`border-2 h-10 w-10 border-gray-300 rounded flex hover:bg-amber-200 items-center justify-center text-2xl font-bold ${
        isWinner ? "bg-green-200" : ""
      }`}
    >
      <TikTakSymbol symbol={symbol} />
    </button>
  );
}
