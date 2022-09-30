import { FC } from 'react'
import './dataPlayers.scss'

export interface DataPlayersProps {
  text: string
  info: string
}

export const DataPlayers: FC<DataPlayersProps> = (props: DataPlayersProps) => {
  return (
    <div className="dataPlayers">
      <p className="dataPlayers__item">{props.text}</p>
      <p>{props.info}</p>
    </div>
  )
}
