import { Circle, Square, Triangle, X } from "lucide-react";
import { GAME_SYMBOL } from "../../constants";

export function GameSymbol({ symbol, size = 20, className }) {
  const Icon =
    {
      [GAME_SYMBOL.CROSS]: X,
      [GAME_SYMBOL.ZERO]: Circle,
      [GAME_SYMBOL.TRIANGLE]: Triangle,
      [GAME_SYMBOL.SQUARE]: Square,
    }[symbol] ?? X;

  return <Icon size={size} className={className} />;
}
