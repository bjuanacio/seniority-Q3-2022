import { FC } from 'react'
import { Player } from '../../shared/interfaces/player'
import DeleteIcon from './../../assets/delete-icon.svg'
import EditIcon from './../../assets/edit-icon.svg'

export interface PlayerCardProps {
  player: Player
  deletePlayer: (player: Player) => void
  modifyPlayer: (player: Player) => void
}

export const PlayerCard: FC<PlayerCardProps> = ({ player, deletePlayer, modifyPlayer }) => {
  return (
    <div className="card">
      <div>
        <img src={player.image} alt="" />
      </div>
      <div>{player.firstName}</div>
      <div>
        <div>
          <span>Ataque</span>
          <br />
          <span>{player.attack}</span>
        </div>
        <div>
          <span>Defensa</span>
          <br />
          <span>{player.defense}</span>
        </div>
        <div>
          <span>Skills</span>
          <br />
          <span>{player.skills}</span>
        </div>
      </div>
      <div>
        <img src={DeleteIcon} alt="delete-icon" onClick={() => deletePlayer(player)} />
        <img
          src={EditIcon}
          alt="edit-icon"
          onClick={() => modifyPlayer(player)}
          data-testid="edit-icon"
        />
      </div>
    </div>
  )
}
