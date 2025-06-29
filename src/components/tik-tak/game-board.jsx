import { Circle, X } from "lucide-react";
import { UIButton } from "../ui-kit/ui-button";
import { cn } from "../../utils/cn";

const cells = new Array(19 * 19).fill(null);

export function GameBoard({ className }) {
  return (
    <div className={`${cn(className, "rounded-xl bg-white p-8 shadow-xl")}`}>
      <div className="mb-2 flex justify-between">
        <div className="flex flex-col gap-0.5">
          <div className="flex items-center gap-1 text-xl font-medium">
            <span>Ход:</span>
            <Circle size={16} strokeWidth={3} className="mt-1 text-teal-500" />
          </div>
          <div className="flex items-center gap-1">
            <span className="text-sm text-gray-500">Следующий:</span>
            <X size={20} className="text-red-500" />
          </div>
        </div>
        <div className="flex gap-4">
          <UIButton>Ничья</UIButton>
          <UIButton variant="outline">Сдаться</UIButton>
        </div>
      </div>
      <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)]">
        {cells.map((value, index) => {
          return (
            <button
              key={index}
              className="-mt-px -ml-px flex items-center justify-center border border-gray-300"
            >
              <Circle size={20} className="text-teal-500" />
              {/* <X size={20} className="text-red-500" /> */}
            </button>
          );
        })}
      </div>
    </div>
  );
}
