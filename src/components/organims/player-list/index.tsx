import { FC } from "react";
import { PlayerModel } from "../../../models/player";
import { PlayerCard } from "../../molecules/player-card";

export interface PlayerListProps {
  players: PlayerModel[];
  onDelete(data: any): void;
  onEdit(data: any): void;
}

const PlayerList: FC<PlayerListProps> = ({ players, onDelete, onEdit }) => {
  return (
    <>
      {players.map((player) => (
        <PlayerCard
          onDelete={onDelete}
          onEdit={onEdit}
          player={player}
          key={player.id}
        />
      ))}
    </>
  );
};
export default PlayerList;
