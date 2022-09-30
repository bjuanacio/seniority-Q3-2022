import { FC, useState } from 'react'
import { Player } from '../../shared/interfaces/player'
import { SearcherInput } from '../atoms/SearcherInput/SearcherInput'
import Slider from '../atoms/slider/slider'
import CloseIcon from './../../assets/close-icon.svg'
import './modal.scss'
export interface ModalProps {
  closeModal: () => void
  onSubmit: (data: Player) => void
  submitChanges: () => void
  isVisible: boolean
  player: Player
  setPlayer: (data: React.ChangeEvent<HTMLInputElement>) => void
  isNewPlayer: boolean
}

export const Modal: FC<ModalProps> = ({
  closeModal,
  onSubmit,
  isVisible,
  player,
  setPlayer,
  submitChanges,
  isNewPlayer
}) => {
  return (
    <>
      {' '}
      {isVisible && (
        <div className="modalContainer">
          <div className="modal">
            <div>
              <h3>{isNewPlayer ? 'Agregar jugador' : 'Editar jugador'}</h3>
              <img
                src={CloseIcon}
                alt="close-icon"
                onClick={closeModal}
                data-testid={'close-icon'}
              />
            </div>
            <div>{player && <img src={player.image} alt="" />}</div>
            <div>
              <div>
                <SearcherInput
                  type={'text'}
                  onChange={setPlayer}
                  name="firstName"
                  value={player.firstName}
                />
                <SearcherInput
                  type={'text'}
                  onChange={setPlayer}
                  name="lastName"
                  value={player.lastName}
                />
                <SearcherInput
                  type={'text'}
                  onChange={setPlayer}
                  name="image"
                  value={player.image}
                />
                <SearcherInput
                  type={'text'}
                  onChange={setPlayer}
                  name="position"
                  value={player.idPosition}
                />
              </div>
              <div>
                <Slider label="attack" onChange={setPlayer} value={player.attack}></Slider>
                <Slider label="defense" onChange={setPlayer} value={player.defense}></Slider>
                <Slider label="skills" onChange={setPlayer} value={player.skills}></Slider>
              </div>
              <button
                type="submit"
                onClick={() => {
                  if (isNewPlayer) {
                    return onSubmit(player as Player)
                  }
                  submitChanges()
                }}
                data-testid="submit"
              >
                {isNewPlayer ? 'Subir' : 'Editar jugador'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
