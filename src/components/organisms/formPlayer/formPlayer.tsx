import React from 'react'
import './index.scss'

interface ModalProps {
  handleCloseModal: () => void
  handleConfirmDelete: () => void
}

export const formPlayer: React.FC<ModalProps> = ({ handleCloseModal, handleConfirmDelete }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Agregar</h4>
        </div>
        <div className="modal-body">Desea eliminar el pokemon?</div>
        <div className="modal-footer">
          <button className="btn-modal" onClick={handleCloseModal}>
            Cancelar
          </button>
          <button className="btn-modal" onClick={handleConfirmDelete}>
            Aceptar
          </button>
        </div>
      </div>
    </div>
  )
}
