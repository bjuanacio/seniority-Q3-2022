import { Container } from "../../atoms/container";
import { IconModalWrapper, ModalWrapper } from "./style";
import CloseIcon from "../../../assets/close-icon.svg";
import { FC } from "react";

interface ModalProps {
  onClose?(): void;
}

const Modal: FC<ModalProps> = ({ children, onClose }) => {
  return (
    <ModalWrapper>
      <Container backgroundColor="white" padding="2rem">
        <IconModalWrapper>
          <img onClick={onClose} src={CloseIcon} alt="close-icon" />
        </IconModalWrapper>
        <div>{children}</div>
      </Container>
    </ModalWrapper>
  );
};

export default Modal;
