import React, { FC } from 'react'
import { Player } from '../../../utils/interfaces/player'
import DeleteIcon from '../../../assets/delete-icon.svg'
import EditIcon from '../../../assets/edit-icon.svg'
import './card.scss'

export interface CardProps {
  player: Player
}

const Card: FC<CardProps> = ({ player }) => {
  return (
    <div className="card">
      <div className="card__image">
        <img src={player.image} alt={player.firstName} />
        <div className="card__player">
          <span>{player.firstName + ' ' + player.lastName}</span>
        </div>
      </div>
      <div className="card__bottom">
        <div className="card__info">
          <div className="card__info-column">
            <span className="card__info-title">Ataque</span>
            <span className="card__info-value">{player.attack}</span>
          </div>
          <div className="card__info-column">
            <span className="card__info-title">Defensa</span>
            <span className="card__info-value">{player.defense}</span>
          </div>
          <div className="card__info-column">
            <span className="card__info-title">Skills</span>
            <span className="card__info-value">{player.skills}</span>
          </div>
        </div>

        <div className="card__buttons">
          <button className="card__button">
            <img src={EditIcon} />
          </button>
          <button className="card__button">
            <img src={DeleteIcon} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
