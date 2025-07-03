import { ArrowLeft, HistoryIcon, StarIcon, UserRoundIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "../../utils/cn";

export function GameTitle({ className, playersCount }) {
  return (
    <div className={`${cn(className)}`}>
      <div className="mb-2 flex items-center gap-1 text-blue-500 hover:text-blue-400 hover:underline">
        <ArrowLeft size={20} />
        <Link href="#">На главную</Link>
      </div>
      <h1 className="mb-2 text-4xl">Крестики нолики</h1>
      <div className="flex items-center gap-2 text-gray-400">
        <StarIcon size={14} />
        <div className="flex items-center gap-2">
          <UserRoundIcon size={14} />
          <div>{playersCount}</div>
        </div>
        <div className="flex items-center gap-2">
          <HistoryIcon size={14} />
          <span>1 мин на ход</span>
        </div>
      </div>
    </div>
  );
}
