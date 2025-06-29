import { Circle, X } from "lucide-react";
import { AvatarItem } from "./avatar-item";
import srcAvatar from "../../../public/images/avatar.jpg";
import { cn } from "../../utils/cn";

export function GameInfo({ className }) {
  return (
    <div
      className={`${cn("flex items-center justify-between gap-2 rounded-xl border border-gray-100 bg-white px-8 py-6 shadow-xl", className)}`}
    >
      {/* Avatar with icon */}
      <div className="relative">
        <div className="absolute -top-2 -left-2 z-10 rounded-full bg-white p-1 shadow">
          <X size={16} className="text-red-500" />
        </div>
        <AvatarItem
          src={srcAvatar}
          name="Brad Pitt"
          description="Рейтинг: 322"
        />
      </div>
      {/* Avatar with icon */}
      <div className="mx-2 h-8 w-[1px] bg-gray-300"></div>
      <div className="flex gap-10 text-lg font-medium">
        <div>01:08</div>
        <div className="text-orange-600">00:08</div>
      </div>
      <div className="mx-2 h-8 w-[1px] bg-gray-300"></div>
      {/* Avatar with icon */}
      <div className="relative">
        <div className="absolute -top-2 -left-2 z-10 rounded-full bg-white p-1 shadow">
          <Circle size={16} className="text-teal-500" />
        </div>
        <AvatarItem
          src={srcAvatar}
          name="Brad Pitt"
          description="Рейтинг: 322"
        />
      </div>
      {/* Avatar with icon */}
    </div>
  );
}
