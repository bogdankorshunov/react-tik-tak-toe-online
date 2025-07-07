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
export function GameInfo({
  className,
  playersCount,
  currentMove,
  gameResult,
  blockedPlayers,
  blockPlayer,
}) {
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
            gameResult={gameResult}
            isBlocked={blockedPlayers?.includes(player.symbol)}
            blockPlayer={blockPlayer}
          />
        );
      })}
    </div>
  );
}

function PlayersInfo({
  player,
  position,
  isRunning,
  gameResult,
  isBlocked,
  blockPlayer,
}) {
  const [seconds, setSeconds] = useState(1);
  const minStr = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secStr = String(seconds % 60).padStart(2, "0");
  const isDanger = seconds < 10;
  const hasWinner = gameResult?.winner || gameResult?.isDraw;

  useEffect(() => {
    if (seconds === 0 && isRunning && !hasWinner && !isBlocked && blockPlayer) {
      blockPlayer(player.symbol);
    }
  }, [seconds, isRunning, hasWinner, isBlocked, blockPlayer, player.symbol]);

  useEffect(() => {
    if (hasWinner) {
      setSeconds(5);
      return;
    }

    if (isBlocked) {
      setSeconds(0);
      return;
    }

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
      };
    }
  }, [isRunning, hasWinner, isBlocked]);

  const getTimerColor = () => {
    if (hasWinner) {
      return "text-gray-300";
    }
    if (isBlocked) {
      return "text-red-500";
    }
    if (!isRunning) {
      return "text-gray-400";
    }
    if (isDanger) {
      return "text-orange-600";
    }
    return "text-gray-900";
  };
  return (
    <div className={cn("flex items-center gap-5", isBlocked && "opacity-60")}>
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
          getTimerColor(),
        )}
      >
        <div>{isBlocked ? "00:00" : `${minStr}:${secStr}`}</div>
      </div>
    </div>
  );
}
