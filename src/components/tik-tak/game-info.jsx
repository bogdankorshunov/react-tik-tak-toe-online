import { useEffect, useState } from "react";
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
    name: "Brad Pitt 2",
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
export function GameInfo({ className, playersCount, currentMove }) {
  return (
    <div
      className={`${cn("grid grid-cols-2 gap-8 rounded-xl border border-gray-100 bg-white px-8 py-6 shadow-xl", className)}`}
    >
      {players.slice(0, playersCount).map((player, index) => {
        const mapperPlayer = {
          name: player.name,
          avatar: player.avatar,
          rating: player.rating,
          symbol: player.symbol,
        };
        return (
          <PlayersInfo
            key={player.id}
            player={mapperPlayer}
            position={index % 2 === 0 ? "left" : "right"}
            isRunning={currentMove === player.symbol}
          />
        );
      })}
    </div>
  );
}

function PlayersInfo({ player, position, isRunning }) {
  const [seconds, setSeconds] = useState(60);
  const minStr = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secStr = String(seconds % 60).padStart(2, "0");
  const isDanger = seconds < 10;

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setSeconds((s) => {
          if (s > 0) {
            return s - 1;
          }
          return 0;
        });
      }, 1000);
      return () => {
        clearInterval(interval);
        setSeconds(60);
      };
    }
  }, [isRunning]);
  return (
    <div className="flex items-center gap-5">
      <Profile
        name={player.name}
        description={`Рейтинг: ${player.rating} `}
        src={player.avatar}
        symbol={player.symbol}
        position={position}
      />
      <div
        className={cn(
          `mx-2 h-full w-px bg-gray-300`,
          position === "right" && "order-2",
        )}
      ></div>
      <div
        className={cn(
          `flex flex-shrink-0 items-center text-lg font-medium`,
          isDanger && "text-orange-600",
        )}
      >
        <div>
          {minStr}:{secStr}
        </div>
      </div>
    </div>
  );
}
