import React from 'react'
import { Player } from '../../../interfaces/player'
import PlayerCard from '../../molecules/player-card/player-card'
import { Styles } from './players-list.styles'

interface PlayersListProps {
  players: Player[]
}

const PlayersList: React.FC<PlayersListProps> = ({ players }) => {
  return (
    <Styles>
      {players.map((player) => (
        <PlayerCard {...player} key={player.id} />
      ))}
    </Styles>
  )
}

export default PlayersList
