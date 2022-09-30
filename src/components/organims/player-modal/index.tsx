import { FC } from "react";
import { PlayerModel } from "../../../models/player";
import Modal from "../../molecules/modal";
import { PlayerForm } from "../player-form";

interface PlayerModalProps {
  player?: PlayerModel;
  label?: string;
  onClose?(): void;
  action(data: any): void;
}

export const PlayerModal: FC<PlayerModalProps> = ({
  onClose,
  action,
  label = "Agregar juagador",
  player,
}) => {
  return (
    <Modal onClose={onClose}>
      <PlayerForm player={player} action={action} label={label}></PlayerForm>
    </Modal>
  );
};
