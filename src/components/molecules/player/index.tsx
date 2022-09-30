import { FC } from 'react'
import DeleteIcon from '../../../assets/delete-icon.svg'
import EditIcon from '../../../assets/edit-icon.svg'
//import { useHistory } from 'react-router-dom'
import './index.scss'
import { IPlayerResponse } from '../../../models'
/* import { COLORS } from '../../../shared/theme/colors'
import { IconButton } from '../../atoms/icon-button'
import Typography from '../../atoms/typography' */
export interface PlayerProps {
  todo: IPlayerResponse
  isEven: boolean
  setEditTodo: () => void
  toggleComplete?(todo: IPlayerResponse): void
  deleteTodo?(): void
}

export const Player: FC<PlayerProps> = ({
  todo,
  isEven,
  setEditTodo,
  toggleComplete = () => {},
  deleteTodo = () => {}
}) => {
  //const history = useHistory()

  return (
    <div className="player-list">
      <div className="player-list--card">
        <div className="player-list--shadow">
          <img className="player-list--card-img-top" src={todo.image} alt="Card image cap" />
          <h5 className="player-list--shadow-title">
            {todo.firstName} {todo.lastName}
          </h5>
          <div className="player-list--shadow-box"></div>
        </div>
        <div className="player-content player-list--card-body">
          <div className="player-content--card-text">
            <div className="player-content--between">
              <div className="player-content--between__attack">
                Ataque
                <span className="player-content--between__attack--value">{todo.attack}</span>
              </div>
              <div className="player-content--between__defense">
                Defensa
                <span className="player-content--between__defense--value">{todo.defense}</span>
              </div>
              <div className="player-content--between__skill">
                Skills
                <span className="player-content--between__skill--value">{todo.skills}</span>
              </div>
            </div>
            <div className="player-content__arround">
              <div className="player-content__arround--attack">
                <img
                  className="player-content__arround--attack__img"
                  src={EditIcon}
                  alt="edit-icon"
                />
              </div>
              <div className="player-content__arround--defense">
                <img
                  className="player-content__arround--attack__img"
                  src={DeleteIcon}
                  alt="delete-icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
