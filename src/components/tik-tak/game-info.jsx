import srcAvatar from "../../../public/images/avatar.jpg";
import { GAME_SYMBOL } from "../../constants";
import { cn } from "../../utils/cn";
import { Profile } from "./Profile";
const players = [
  {
    id: "1",
    name: "Brad Pitt 1",
    rating: "4",
    symbol: GAME_SYMBOL.CROSS,
    avatar: srcAvatar,
  },
  {
    id: "2",
    name: "Brad Pitt 3",
    rating: "44",
    symbol: GAME_SYMBOL.ZERO,
    avatar: srcAvatar,
  },
  {
    id: "3",
    name: "Brad Pitt 3",
    rating: "444",
    symbol: GAME_SYMBOL.TRIANGLE,
    avatar: srcAvatar,
  },
  {
    id: "4",
    name: "Brad Pitt 4",
    rating: "4444",
    symbol: GAME_SYMBOL.SQUARE,
    avatar: srcAvatar,
  },
];
export function GameInfo({ className, playersCount }) {
  return (
    <div
      className={`${cn("grid grid-cols-2 gap-8 rounded-xl border border-gray-100 bg-white px-8 py-6 shadow-xl", className)}`}
    >
      {players.slice(0, playersCount).map((player, index) => (
        <Profile
          name={player.name}
          description={`Рейтинг: ${player.rating} `}
          src={player.avatar}
          key={player.id}
          symbol={player.symbol}
          position={index % 2 === 0 ? "left" : "right"}
        />
      ))}
    </div>
  );
}
