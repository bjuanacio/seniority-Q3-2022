import React, { FC } from 'react'
import './player-stat.scss'

interface PlayerStatProps {
  stat: 'Ataque' | 'Defensa' | 'Skills'
  value: number
}

export const PlayerStat: FC<PlayerStatProps> = ({ stat, value }) => {
  return (
    <div className="player-stat">
      <div>{stat}</div>
      <div className="player-stat__value">{value}</div>
    </div>
  )
}

export default PlayerStat
