import React, { FC } from 'react'
import PlayerStat from '../../atoms/player-stat/player-stat'
import DeleteIcon from '../../../assets/delete-icon.svg'
import EditIcon from '../../../assets/edit-icon.svg'
import './player-card.scss'
import PlayersService, { Player } from '../../../services/player.service'

interface PlayerCardProps {
  player: Player
  onEdit: (player: Player) => void
  onDelete: () => void
}

interface PlayerStats {
  stat: 'Ataque' | 'Defensa' | 'Skills'
  value: number
}

export const PlayerCard: FC<PlayerCardProps> = ({ player, onEdit, onDelete }) => {
  const { attack, defense, firstName, lastName, image, skills, id } = player
  const name = `${firstName} ${lastName}`
  const stats: PlayerStats[] = [
    { stat: 'Ataque', value: attack },
    { stat: 'Defensa', value: defense },
    { stat: 'Skills', value: skills }
  ]
  const deletePlayer = async () => {
    await PlayersService.deletePlayer(id)
    onDelete()
  }

  return (
    <div className="player-card">
      <div className="player-card__header">
        <img src={image} alt={name} />
        <div className="player-card__header__text">{name}</div>
      </div>
      <div className="player-card__content">
        <div className="player-card__content__stats">
          {stats.map(({ stat, value }) => (
            <PlayerStat key={stat} stat={stat} value={value} />
          ))}
        </div>
        <div className="player-card__content__actions">
          <img onClick={() => onEdit(player)} src={EditIcon} alt="Edit" width={30} />
          <img onClick={deletePlayer} src={DeleteIcon} alt="Delete" width={30} />
        </div>
      </div>
    </div>
  )
}

export default PlayerCard
