import React, { FC } from "react";
import { Button } from "../../atoms/button";
import DeleteIcon from "../../../assets/delete-icon.svg";
import EditIcon from "../../../assets/edit-icon.svg";
import { ControlsWrapper } from "./styles";

interface ControlsProps {
  onDelete(): void;
  onEdit(): void;
}

export const Controls: FC<ControlsProps> = ({ onDelete, onEdit }) => {
  return (
    <ControlsWrapper>
      <Button backgroundColor="transparent">
        <img onClick={onEdit} src={EditIcon} alt="edit-icon" width="24" />
      </Button>
      <Button onClick={onDelete} backgroundColor="transparent">
        <img src={DeleteIcon} alt="delete-icon" width="24" />
      </Button>
    </ControlsWrapper>
  );
};
