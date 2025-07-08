import { cn } from "@/lib/cn";
import { GameSymbol } from "./GameSymbol";
import { UIAvatarItem } from "@/ui/UIAvatarItem";

export function GamePlayersInfo({
  player,
  position,
  isRunning,
  gameResult,
  isBlocked,
  blockPlayer,
  seconds,
}) {
  const minStr = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secStr = String(seconds % 60).padStart(2, "0");
  const isDanger = seconds < 10;
  const hasWinner = gameResult?.winner || gameResult?.isDraw;
  const getTimerColor = () => {
    if (hasWinner) {
      return "text-gray-300";
    }
    if (isBlocked) {
      return "text-red-500";
    }
    if (!isRunning) {
      return "text-gray-400";
    }
    if (isDanger) {
      return "text-orange-600";
    }
    return "text-gray-900";
  };

  return (
    <div className={cn("flex items-center gap-5", isBlocked && "opacity-60")}>
      <div
        className={cn(
          `relative min-w-0 flex-1`,
          position === "right" && "order-3",
        )}
      >
        <div className="absolute -top-2 -left-2 z-10 rounded-full bg-white p-1 shadow">
          <GameSymbol size={16} symbol={player.symbol} />
        </div>
        <UIAvatarItem
          src={player.avatar}
          name={player.name}
          description={player.description}
        />
      </div>
      <div
        className={cn(
          `mx-2 h-full w-px bg-gray-300`,
          position === "right" && "order-2",
        )}
      ></div>
      <div
        className={cn(
          `flex flex-shrink-0 items-center text-lg font-medium`,
          getTimerColor(),
        )}
      >
        <div>{isBlocked ? "00:00" : `${minStr}:${secStr}`}</div>
      </div>
    </div>
  );
}
