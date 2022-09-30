import React from 'react'
import { Player } from '../../../interfaces/interfaces'
import './player-card.scss'
import DeleteIcon from '../../../assets/delete-icon.svg'
import EditIcon from '../../../assets/edit-icon.svg'

interface Props {
  player: Player
}

export const PlayerCard = ({ player }: Props) => {
  const playerData: { [key: string]: string | number } = {
    Ataque: player.attack,
    Defensa: player.defense,
    Skills: player.skills
  }

  return (
    <div className="player">
      <div className="player__image">
        <img src={player.image} className="player__image__picture"></img>
        <div className="player__image__name">{`${player.firstName} ${player.lastName}`}</div>
      </div>
      <div className="player__info">
        <div className="player__data">
          {Object.keys(playerData).map((dataKey, idx) => (
            <div className="player__score" key={idx}>
              <div className="player__score__title">{dataKey}</div>
              <div className="player__score__value">{playerData[dataKey]}</div>
            </div>
          ))}
        </div>
        <div className="player__info__actions">
          <img className="player__action-icon" src={DeleteIcon} alt="delete-icon" />
          <img className="player__action-icon" src={EditIcon} alt="edit-icon" />
        </div>
      </div>
    </div>
  )
}
