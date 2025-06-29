import { Circle, X } from "lucide-react";
import { AvatarItem } from "./avatar-item";
import srcAvatar from "../../../public/images/avatar.jpg";

export function GameInfo() {
  return (
    <div className="border border-gray-100 py-6 px-8 rounded-xl shadow-xl bg-white flex gap-2 items-center justify-between">
      {/* Avatar with icon */}
      <div className="relative">
        <div className="p-1 bg-white rounded-full shadow absolute -top-2 -left-2 z-10">
          <X size={16} className="text-red-500" />
        </div>
        <AvatarItem
          src={srcAvatar}
          name="Brad Pitt"
          description="Рейтинг: 322"
        />
      </div>
      {/* Avatar with icon */}
      <div className="h-8 bg-gray-300 w-[1px] mx-2"></div>
      <div className="flex gap-10 font-medium text-lg">
        <div>01:08</div>
        <div className="text-orange-600">00:08</div>
      </div>
      <div className="h-8 bg-gray-300 w-[1px] mx-2"></div>
      {/* Avatar with icon */}
      <div className="relative">
        <div className="p-1 bg-white rounded-full shadow absolute -top-2 -left-2 z-10">
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
