import { HistoryIcon, StarIcon, UserRoundIcon } from "lucide-react";
import { cn } from "@/lib/cn";

export function GameInfo({ className, playersCount, isRatingGame, timeMode }) {
  return (
    <div className={`${cn(className)}`}>
      <div className="flex items-center gap-2 text-gray-400">
        {isRatingGame && <StarIcon size={14} />}
        <div className="flex items-center gap-2">
          <UserRoundIcon size={14} />
          <div>{playersCount}</div>
        </div>
        <div className="flex items-center gap-2">
          <HistoryIcon size={14} />
          <span>{timeMode}</span>
        </div>
      </div>
    </div>
  );
}
