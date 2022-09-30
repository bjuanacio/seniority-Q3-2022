import React from 'react'
import { IPlayer } from '../../../store/store'
import DeleteIcon from './../../../assets/delete-icon.svg'
import EditIcon from './../../../assets/edit-icon.svg'
import './index.scss'

interface CardPlayerProps {
  player: IPlayer
  onEdit: (player: IPlayer) => void
  onDelete: (id: number | undefined) => void
}

export const PlayerCard: React.FC<CardPlayerProps> = ({ player, onDelete }) => {
  const completeName = (player.firstName + ' ' + player.lastName).toUpperCase()
  const imageDefault = player.image.length > 0 ? player.image : 'https://dummyimage.com/300x400/'

  return (
    <div className="playercard-container">
      <div className="playercard-container__image-container">
        <img src={imageDefault} alt="" className="playercard-container__image" />
        <div className="playercard-container__image-container-text">{completeName}</div>
      </div>
      <div className="playercard-container__text">
        <section className="playercard-container__section1">
          <p>Ataque</p>
          <p>Defense</p>
          <p>Skills</p>
        </section>
        <section className="playercard-container__section1">
          <p className="playercard-container__section1--number">{player.attack}</p>
          <p className="playercard-container__section1--number">{player.defense}</p>
          <p className="playercard-container__section1--number">{player.skills}</p>
        </section>
        <section className="playercard-container__section1">
          <img
            src={DeleteIcon}
            alt="delete-icon"
            className="playercard-container__icon"
            onClick={() => onDelete(player.id)}
          />
          <img src={EditIcon} alt="edit-icon" className="playercard-container__icon" />
        </section>
      </div>
    </div>
  )
}
