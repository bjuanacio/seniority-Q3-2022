import React from 'react'
import CloseIcon from './../../assets/close-icon.svg'

export const ModalDeletePlayer = ({
  name,
  message,
  toggleClose,
  deletePlayerById,
  idPlayerDelete
}: {
  name: string
  message: string
  toggleClose: any
  deletePlayerById: any
  idPlayerDelete: any
}) => {
  //console.log({nombre: name});
  return (
    <>
      <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close" data-testid="closeModal" onClick={toggleClose}>
            &times;
          </span>
          <p>
            <b>Eliminar Jugador</b>
          </p>
          <div className="row">
            <p data-testid="titleDelete">
              Está seguro que desea eliminar el jugador<b>{` ${name}`}</b>?
            </p>
            <div className="containerButton">
              <button
                type="submit"
                onClick={() => deletePlayerById(idPlayerDelete)}
                //disabled={name === "" || image === ""}
                id="buttonSave"
                className="buttonForm"
              >
                &nbsp; Confirmar
              </button>

              <button onClick={toggleClose} className="buttonForm">
                <img src={CloseIcon} alt="close-icon" />
                &nbsp; Cancelar
              </button>
            </div>
            <div className="message">{message ? <p>{message}</p> : null}</div>
          </div>
        </div>
      </div>
    </>
  )
}
