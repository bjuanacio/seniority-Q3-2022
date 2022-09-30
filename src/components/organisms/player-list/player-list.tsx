import React, { FC } from 'react'
import { Player } from '../../../services/player.service'
import PlayerCard from '../../molecules/player-card/player-card'
import './player-list.scss'

interface PlayerListProps {
  players: Player[]
  filter?: string
  onEdit: (player: Player) => void
  onDelete: () => void
}

export const PlayerList: FC<PlayerListProps> = ({ players, onDelete, onEdit, filter = '' }) => {
  return (
    <div className="player-list">
      {players
        .filter((player) =>
          `${player.firstName.toLowerCase()} ${player.lastName.toLowerCase()}`.includes(
            filter.toLowerCase()
          )
        )
        .map((player) => (
          <div key={player.id} className="player-list__player">
            <PlayerCard player={player} onDelete={onDelete} onEdit={onEdit} />
          </div>
        ))}
    </div>
  )
}

export default PlayerList
