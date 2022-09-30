import { FC } from 'react'
import { Player } from '../../../services/user.service'
import DeleteIcon from '../../../assets/delete-icon.svg'
import EditIcon from '../../../assets/edit-icon.svg'
import './player-list.scss'

export type InputType = 'text' | 'password' | 'email' | 'checkbox'

export interface PlayerProps {
  players?: Player[]
}

export const PlayerList: FC<PlayerProps> = ({ players }) => {
  return (
    <section className="players">
      {players &&
        players.map((player: Player) => (
          <div className="players__card" key={player.id}>
            <section className="players__img">
              <img src={player.image} alt={player.firstName} />
            </section>
            <section className="players__title">
              <h3>
                {player.firstName} {player.lastName}
              </h3>
            </section>
            <section className="players__skills">
              <p>
                <b>ATAQUE</b> <br /> {player.attack}
              </p>
              <p>
                <b>DEFENSA</b> <br />
                {player.defense}
              </p>
              <p>
                <b>SKILLS</b> <br />
                {player.skills}
              </p>
            </section>
            <section className="players__action">
              <img src={EditIcon} alt="edit-icon" />
              <img src={DeleteIcon} alt="delete-icon" />
            </section>
          </div>
        ))}
    </section>
  )
}
