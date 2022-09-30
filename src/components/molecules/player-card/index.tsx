import { FC, useState } from "react";
import { PlayerModel } from "../../../models/player";
import { Container } from "../../atoms/container";
import { Controls } from "../controls";
import { PlayerInfo } from "../player-info";
import NotFoundImage from "../../../assets/not-found-image.jpeg";
import "./styles.scss";
import { PlayerModal } from "../../organims/player-modal";

export interface PlayerCardProps {
  player: PlayerModel;
  onDelete(data: any): void;
  onEdit(data: any): void;
}

export const PlayerCard: FC<PlayerCardProps> = ({
  player,
  onDelete,
  onEdit,
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleOnEdit = (data: any) => {
    onEdit({
      ...data,
      id: player.id,
    });
  };

  return (
    <Container>
      <div className="card-player-image">
        <object data={NotFoundImage} type="image/jpge">
          <img height="100%" width="100%" src={player.image}></img>
        </object>
      </div>
      <div className="card-player-detail">
        <PlayerInfo {...player} />
        <Controls
          onEdit={() => setShowModal(true)}
          onDelete={() => onDelete(player)}
        ></Controls>
      </div>
      {showModal && (
        <PlayerModal
          onClose={() => setShowModal(false)}
          action={handleOnEdit}
        ></PlayerModal>
      )}
    </Container>
  );
};
