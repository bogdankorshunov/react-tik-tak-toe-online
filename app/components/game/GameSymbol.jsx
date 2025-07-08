import { Circle, Square, Triangle, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { GAME_SYMBOL } from "@/lib/constants";

export function GameSymbol({ symbol, size = 20, className }) {
  const symbolConfig = {
    [GAME_SYMBOL.CROSS]: {
      Icon: X,
      color: "text-red-500",
    },
    [GAME_SYMBOL.ZERO]: {
      Icon: Circle,
      color: "text-blue-500",
    },
    [GAME_SYMBOL.TRIANGLE]: {
      Icon: Triangle,
      color: "text-green-500",
    },
    [GAME_SYMBOL.SQUARE]: {
      Icon: Square,
      color: "text-purple-500",
    },
  };

  const config = symbolConfig[symbol] ?? symbolConfig[GAME_SYMBOL.CROSS];
  const Icon = config.Icon;
  const defaultColor = config.color;

  return <Icon size={size} className={cn(defaultColor, className)} />;
}
