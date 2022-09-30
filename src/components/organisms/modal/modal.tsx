import React, { FC } from 'react'
import { Player } from '../../../services/player.service'
import ModalBody from '../../molecules/modal-body/modal-body'
import './modal.scss'

interface ModalProps {
  onClose: () => void
  onEditOrAdd: (player: Player) => void
  actualPlayer: Player | null
}

export const Modal: FC<ModalProps> = ({ onClose, onEditOrAdd, actualPlayer }) => {
  return (
    <div className="modal">
      <div className="modal__outside" data-testid="modal-testid" onClick={onClose}></div>
      <div className="modal__body">
        <ModalBody onEditOrAdd={onEditOrAdd} onClose={onClose} actualPlayer={actualPlayer} />
      </div>
    </div>
  )
}

export default Modal
