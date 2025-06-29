import clsx from "clsx";
import { ArrowLeft, HistoryIcon, StarIcon, UserRoundIcon } from "lucide-react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { cn } from "../../utils/cn";

export function GameTitle({ className }) {
  return (
    <div className={`${cn(className)}`}>
      <div className="text-blue-500 flex items-center gap-1 hover:underline hover:text-blue-400 mb-2">
        <ArrowLeft size={20} />
        <Link href="#">На главную</Link>
      </div>
      <h1 className="text-4xl mb-2">Крестики нолики</h1>
      <div className="flex gap-2 text-gray-400 items-center">
        <StarIcon size={14} />
        <div className="flex gap-2 items-center">
          <UserRoundIcon size={14} />
          <div>2</div>
        </div>
        <div className="flex gap-2 items-center">
          <HistoryIcon size={14} />
          <span>1 мин на ход</span>
        </div>
      </div>
    </div>
  );
}
