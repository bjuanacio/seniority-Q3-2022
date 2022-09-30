import React, { useState } from 'react'
import { IPlayer } from '../../../store/store'
import { Input } from '../../atoms/input'
import Slider from '../../atoms/slider/slider'
import CloseIcon from './../../../assets/close-icon.svg'
import './index.scss'

interface ModalProps {
  handleCloseModal: () => void
  handleAddNew: (player: IPlayer) => void
  nuevo: boolean
}

export const FormPlayer: React.FC<ModalProps> = ({ handleCloseModal, handleAddNew, nuevo }) => {
  const [playerInfo, setPlayerInfo] = useState({
    firstName: '',
    lastName: '',
    image: 'https://dummyimage.com/300x400/',
    attack: 55,
    defense: 55,
    skills: 55,
    idPosition: 0,
    idAuthor: 41
  })

  const handleInfo =
    (property: 'firstName' | 'lastName' | 'image' | 'attack' | 'defense' | 'skills' | 'position') =>
    (value: string | number) => {
      setPlayerInfo((current) => ({
        ...current,
        [property]: value
      }))
      console.log(playerInfo)
    }
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Agregar Jugador</h4>
          <img src={CloseIcon} alt="modal-button" onClick={handleCloseModal} />
        </div>
        <div className="modal-body">
          <section className="form-container">
            <div className="form-container-section1">
              <img src={playerInfo.image} alt="image" className="form-container-image" />
            </div>
            <section>
              <section>
                <div className="form-container-section1">
                  <div>
                    <p>Nombre</p>
                    <Input onChange={handleInfo('firstName')} />
                  </div>
                  <div>
                    <p>Apellido</p>
                    <Input onChange={handleInfo('firstName')} />
                  </div>
                </div>
                <div className="form-container-section1">
                  <div>
                    <p>Imagen</p>
                    <Input onChange={handleInfo('firstName')} />
                  </div>
                  <div>
                    <p>Posición</p>
                    <Input onChange={handleInfo('position')} />
                  </div>
                </div>
              </section>
              <section className="form-container-section2">
                <div>
                  <Slider label="Ataque" value={55} onChange={handleInfo('attack')} />
                </div>
                <div>
                  <Slider label="Defensa" value={55} onChange={handleInfo('defense')} />
                </div>
                <div>
                  <Slider label="Skills" value={55} onChange={handleInfo('skills')} />
                </div>
              </section>
            </section>
          </section>
          <div className="modal-footer">
            {nuevo && (
              <button className="modal-button" onClick={() => handleAddNew(playerInfo)}>
                Agregar
              </button>
            )}
            {!nuevo && (
              <button className="modal-button" onClick={() => handleAddNew(playerInfo)}>
                Editar
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
