import './app.scss'
import Slider from './components/atoms/slider/slider'
import DeleteIcon from './assets/delete-icon.svg'
import EditIcon from './assets/edit-icon.svg'
import CloseIcon from './assets/close-icon.svg'
import Card from './components/atoms/card/card'
import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from './app/hooks'
import { fetchAllPlayer } from './features/player/playerSlice'
import Modal from './components/molecules/modal/modal'

function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchAllPlayer())
  }, [])

  const playerList = useAppSelector((state) => state.players.players)

  return (
    <div className="app">
      <h1 className="app__title">MI EQUIPO</h1>
      <div className="app__options">
        <input placeholder="Buscar por nombre" />
        <button>Agregar</button>
      </div>
      <Modal display="block" type="agregar" />

      {/* <div>
        <Slider label="Puntaje" value={55} />
      </div> */}
      <div className="app__players">
        {playerList.map((player) => {
          return (
            <Card
              atack={player.attack}
              deffense={player.defense}
              playerImage={player.image}
              playerName={player.firstName + ' ' + player.lastName}
              skills={player.skills}
            />
          )
        })}
      </div>
    </div>
  )
}

export default App
