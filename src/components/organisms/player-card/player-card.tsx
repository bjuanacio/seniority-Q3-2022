import React from 'react'
import { Player } from '../../../interfaces/interfaces'
import './player-card.scss'
import DeleteIcon from '../../../assets/delete-icon.svg'
import EditIcon from '../../../assets/edit-icon.svg'
import { removePlayer } from '../../../services/user.service'
import { useDispatch } from 'react-redux'
import { setCurrentPlayer, toggleShowModal } from '../../../store/slices/app-slice'

interface Props {
  player: Player
}

export const PlayerCard = ({ player }: Props) => {
  const playerData: { [key: string]: string | number } = {
    Ataque: player.attack,
    Defensa: player.defense,
    Skills: player.skills
  }

  const dispatch = useDispatch()

  const handleDelete = () => removePlayer(player)
  const handleEdit = () => {
    dispatch(setCurrentPlayer(player))
    dispatch(toggleShowModal())
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
          <div onClick={handleDelete}>
            <img className="player__action-icon" src={DeleteIcon} alt="delete-icon" />
          </div>
          <div onClick={handleEdit}>
            <img className="player__action-icon" src={EditIcon} alt="edit-icon" />
          </div>
        </div>
      </div>
    </div>
  )
}
