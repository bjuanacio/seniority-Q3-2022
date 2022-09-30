import { useEffect, useState } from 'react'
import { Player } from '../../../interfaces/player'
import { useStore } from '../../../store/store'
import Button from '../../atoms/button/button'
import Input from '../../atoms/input/input'
import Slider from '../../atoms/slider/slider'
import { Styles } from './player-modal.styles'

const PlayerModal = () => {
  const {
    modalState,
    setModalState,
    addPlayer,
    positions,
    selectedPlayerId,
    players,
    editPlayer,
    setSelectedPlayerId
  } = useStore()

  const [disabledButton, setDisabledButton] = useState(true)
  const [newPlayer, setNewPlayer] = useState<Player>({
    firstName: '',
    lastName: '',
    image: '',
    attack: 55,
    defense: 55,
    skills: 55,
    idAuthor: parseInt(process.env.REACT_APP_AUTHOR_ID),
    idPosition: 0
  })

  useEffect(() => {
    const selectedPlayer = players.find((py) => py.id === selectedPlayerId)
    if (selectedPlayer) setNewPlayer(selectedPlayer)
  }, [selectedPlayerId])

  useEffect(() => {
    if (
      newPlayer.firstName.length > 0 &&
      newPlayer.lastName.length > 0 &&
      newPlayer.image.includes('http')
    )
      setDisabledButton(false)
    else setDisabledButton(true)
  }, [newPlayer])

  const handleEditNewPlayer = (property: string, value: any) => {
    setNewPlayer((prev) => ({ ...prev, [property]: value }))
  }

  const closeModal = () => {
    setSelectedPlayerId(null)
    setModalState('')
  }

  const handleCreatePlayer = () => {
    if (disabledButton) return
    if (selectedPlayerId) editPlayer(newPlayer)
    else addPlayer(newPlayer)
    closeModal()
  }

  return (
    <Styles>
      <div className="playerModal__background"></div>
      <div className="playerModal__content">
        <div className="playerModal__bar">
          <pichincha-typography variant="h3" weight="bold">
            {modalState === 'add' ? 'Agregar jugador' : 'Editar jugador'}
          </pichincha-typography>
          <button onClick={closeModal}>X</button>
        </div>
        <div className="playerModal__form">
          <div className="playerModal__form__img">
            {newPlayer.image.includes('http') ? (
              <img src={newPlayer.image} alt="player" width={400} height={400} />
            ) : (
              'NOT FOUND'
            )}
          </div>
          <div>
            <div className="playerModal__inputs">
              <Input
                value={newPlayer.firstName}
                label="Nombre"
                errorHelper="Nombre no válido"
                state={newPlayer.firstName.length > 0 ? 'normal' : 'error'}
                onChange={(e) => handleEditNewPlayer('firstName', e)}
              />
              <Input
                value={newPlayer.lastName}
                label="Apellido"
                errorHelper="Apellido no válido"
                state={newPlayer.lastName.length > 0 ? 'normal' : 'error'}
                onChange={(e) => handleEditNewPlayer('lastName', e)}
              />
              <Input
                value={newPlayer.image}
                label="Imagen"
                errorHelper="Imagen no válida"
                state={newPlayer.image.includes('http') ? 'normal' : 'error'}
                onChange={(e) => handleEditNewPlayer('image', e)}
              />
              <div>
                <select
                  value={newPlayer.idPosition}
                  onChange={(e) => handleEditNewPlayer('idPosition', parseInt(e.target.value))}
                >
                  {positions.map((pos) => (
                    <option value={pos.id}>{pos.description}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="playerModal__sliders">
              <Slider
                value={newPlayer.attack}
                label="Ataque"
                onChange={(e) => handleEditNewPlayer('attack', e)}
              />
              <Slider
                value={newPlayer.defense}
                label="Defensa"
                onChange={(e) => handleEditNewPlayer('defense', e)}
              />
              <Slider
                value={newPlayer.skills}
                label="Skills"
                onChange={(e) => handleEditNewPlayer('skills', e)}
              />
            </div>
            <Button color="secondary" disabled={disabledButton} onClick={handleCreatePlayer}>
              {modalState === 'add' ? 'Agregar' : 'Editar'}
            </Button>
          </div>
        </div>
      </div>
    </Styles>
  )
}

export default PlayerModal
