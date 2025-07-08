import { GameBackLink } from "./GameBackLink";
import { GameLayout } from "./GameLayout";
import { GameTitle } from "./GameTitle";
import { GameInfo } from "./GameInfo";
import { GamePlayersInfo } from "./GamePlayersInfo";
import { PLAYERS } from "@/lib/constants";
export function Game() {
  return (
    <GameLayout
      className="mt-10"
      backLink={<GameBackLink />}
      title={<GameTitle />}
      info={<GameInfo playersCount={4} isRatingGame timeMode="1 мин на ход" />}
      playersList={PLAYERS.map((player, index) => (
        <GamePlayersInfo
          seconds={60}
          key={player.id}
          player={player}
          position={index % 2 === 0 ? "left" : "right"}
        />
      ))}
    ></GameLayout>
  );
}
