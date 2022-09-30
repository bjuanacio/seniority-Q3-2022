import { Player } from '../../../interfaces/player'
import { Styles } from './player-card.styles'
import DeleteIcon from '../../../assets/delete-icon.svg'
import EditIcon from '../../../assets/edit-icon.svg'
import { useStore } from '../../../store/store'

const PlayerCard: React.FC<Player> = ({
  id,
  image,
  firstName,
  lastName,
  attack,
  defense,
  skills
}) => {
  const { deletePlayer, setModalState, setSelectedPlayerId } = useStore()

  const handleDeletePlayer = () => deletePlayer(id as number)
  const handleEditPlayer = () => {
    setSelectedPlayerId(id as number)
    setModalState('edit')
  }

  return (
    <Styles>
      <div>
        <div className="playerCard__image">
          <img src={image} alt={firstName + lastName} />
          <div className="playerCard__name">
            <pichincha-typography color="white" variant="h2" weight="bold">
              {(firstName + ' ' + lastName).toUpperCase()}
            </pichincha-typography>
          </div>
        </div>
      </div>
      <div className="playerCard__stats">
        <div>
          <pichincha-typography color="white" variant="smallText">
            Ataque
          </pichincha-typography>
          <pichincha-typography color="white" variant="h3" weight="bold">
            {attack.toString()}
          </pichincha-typography>
        </div>
        <div>
          <pichincha-typography color="white" variant="smallText">
            Defensa
          </pichincha-typography>
          <pichincha-typography color="white" variant="h3" weight="bold">
            {defense.toString()}
          </pichincha-typography>
        </div>
        <div>
          <pichincha-typography color="white" variant="smallText">
            Skills
          </pichincha-typography>
          <pichincha-typography color="white" variant="h3" weight="bold">
            {skills.toString()}
          </pichincha-typography>
        </div>
      </div>
      <div className="playerCard__icons">
        <img src={EditIcon} alt="edit-icon" width={30} onClick={handleEditPlayer} />
        <img src={DeleteIcon} alt="delete-icon" width={30} onClick={handleDeletePlayer} />
      </div>
    </Styles>
  )
}

export default PlayerCard
