import React, { FC } from 'react'
import './player-card.scss'
import usePlayerCard from './use-player-card/use-player-card'
import { Player } from '../../../types/types'
import DeleteIcon from '../../../assets/delete-icon.svg'
import EditIcon from '../../../assets/edit-icon.svg'

export interface PlayerCardProps {
  playerStats: Player
  handleEdit: (id: number) => void
  handleDelete: (id: number) => void
}

const PlayerCard: FC<PlayerCardProps> = ({ playerStats, handleEdit, handleDelete }) => {
  const { currentValue } = usePlayerCard({ playerStats })

  return (
    <div role="card" className="card">
      <img className="card__image" src={playerStats.image} alt={playerStats.lastName} />
      <div className="card__name">{`${playerStats.firstName} ${playerStats.lastName}`}</div>
      <div className="card__stats">
        <div className="card__stats-container">
          <div>{`Ataque`}</div>
          <div>{playerStats.attack}</div>
        </div>
        <div className="card__stats-container">
          <div>{`Defensa`}</div>
          <div>{playerStats.defense}</div>
        </div>
        <div className="card__stats-container">
          <div>{`Skills`}</div>
          <div>{playerStats.skills}</div>
        </div>
      </div>
      <div className="card__actions">
        <img
          role="edit-button"
          aria-label="edit-button"
          className="card__icon"
          src={EditIcon}
          alt="edit-icon"
          onClick={(e) => {
            e.preventDefault()
            handleEdit(playerStats.id as number)
          }}
        />
        <img
          aria-label="delete-button"
          className="card__icon"
          src={DeleteIcon}
          alt="delete-icon"
          onClick={(e) => {
            e.preventDefault()
            handleDelete(playerStats.id as number)
          }}
        />
      </div>
    </div>
  )
}

export default PlayerCard
