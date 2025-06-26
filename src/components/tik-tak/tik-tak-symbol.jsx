import { SYMBOL_O, SYMBOL_X } from "./tik-tak-constants";

export function TikTakSymbol({ symbol }) {
  const getCellStyles = (symbol) => {
    if (symbol === SYMBOL_O) return "text-red-600";
    if (symbol === SYMBOL_X) return "text-blue-600";
  };

  return <span className={getCellStyles(symbol)}>{symbol}</span>;
}
