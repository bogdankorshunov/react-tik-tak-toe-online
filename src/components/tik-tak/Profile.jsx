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
  );
};
