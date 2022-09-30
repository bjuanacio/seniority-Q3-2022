import React, { FC } from 'react'
import usePlayersList from './use-players-list/use-players-list'
import { Player } from '../../../types/types'
import PlayerCard from '../../molecules/player-card/player-card'
import './players-list.scss'

interface PlayersListProps {
  players: Player[]
  handleDelete: (id: number) => void
  handleEdit: (id: number) => void
}

const PlayersList: FC<PlayersListProps> = ({ players, handleDelete, handleEdit }) => {
  const { currentValue } = usePlayersList({ players })
  return (
    <div className="players-list">
      {players.map((player) => {
        return (
          <PlayerCard
            key={player.id}
            playerStats={player}
            handleDelete={() => handleDelete(player.id as number)}
            handleEdit={() => handleEdit(player.id as number)}
          />
        )
      })}
    </div>
  )
}

export default PlayersList
