import { FC } from 'react'
import './card.scss'
import DeleteIcon from '../../../assets/delete-icon.svg'
import EditIcon from '../../../assets/edit-icon.svg'
import CloseIcon from '../../../assets/close-icon.svg'

export interface CardProps {
  playerName: string
  playerImage: string
  atack: number
  deffense: number
  skills: number
}

const Card: FC<CardProps> = ({ playerName, playerImage, atack, deffense, skills }) => {
  return (
    <div className="card">
      <div className="card__img">
        <img src={playerImage} />
        <h1>{playerName}</h1>
      </div>
      <div className="card__data">
        <div className="data-view">
          <label>Ataque</label>
          {atack}
        </div>
        <div className="data-view">
          <label>Defensa</label>
          {deffense}
        </div>
        <div className="data-view">
          <label>Skills</label>
          {skills}
        </div>
      </div>

      <div className="card__options">
        <img src={DeleteIcon} alt="delete-icon" />
        <img src={EditIcon} alt="edit-icon" />
      </div>
    </div>
  )
}

export default Card
