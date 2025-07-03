import { cn } from "../../utils/cn";
import { AvatarItem } from "./avatar-item";
import { GameSymbol } from "./game-symbol";

export const Profile = ({
  name,
  description,
  src,
  symbol,
  position = "left",
}) => {
  return (
    <div className="flex items-center gap-5">
      <div
        className={cn(
          `relative min-w-0 flex-1`,
          position === "right" && "order-3",
        )}
      >
        <div className="absolute -top-2 -left-2 z-10 rounded-full bg-white p-1 shadow">
          <GameSymbol size={16} symbol={symbol} />
        </div>
        <AvatarItem src={src} name={name} description={description} />
      </div>
      <div
        className={cn(
          `mx-2 h-full w-px bg-gray-300`,
          position === "right" && "order-2",
        )}
      ></div>
      <div
        className={cn(`flex flex-shrink-0 items-center text-lg font-medium`)}
      >
        <div>10:08</div>
      </div>
    </div>
  );
};
