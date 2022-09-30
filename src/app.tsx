import './app.scss'
import DeleteIcon from './assets/delete-icon.svg'
import EditIcon from './assets/edit-icon.svg'
import CloseIcon from './assets/close-icon.svg'
import { SearcherInput } from './components/atoms/SearcherInput/SearcherInput'
import { useEffect, useState } from 'react'
import { PlayerService } from './services/player.service'
import { Player } from './shared/interfaces/player'
import { PlayerCard } from './components/molecules/playerCard'
import { Modal } from './components/molecules/modal'

function App() {
  const [players, setPlayers] = useState<Player[]>([])
  const [playersToShow, setPlayersToShow] = useState<Player[]>([])
  const [isModalVisible, setIsModalVisisble] = useState(false)
  const [currentPlayer, setCurrentPlayer] = useState<any>({})
  const [isNewPlayer, setIsNewPlayer] = useState(false)
  const setPlayer = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentPlayer({
      ...currentPlayer,
      [e.target.name]: e.target.value,
      idAuthor: 35
    })
  }
  const fetchPlayers = () => {
    PlayerService.getPlayers().then((fetchedPlayers) => {
      setPlayers(fetchedPlayers)
      setPlayersToShow(fetchedPlayers)
    })
  }
  useEffect(() => {
    fetchPlayers()
  }, [])
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    setPlayersToShow(
      players.filter(
        (player) => player?.firstName?.includes(value) || player?.lastName?.includes(value)
      )
    )
  }
  const handleSubmit = (data: Player) => {
    PlayerService.postPlayer(data).then(() => {
      fetchPlayers()
      setIsModalVisisble(false)
    })
  }
  const handleDeletePlayer = (data: Player) => {
    PlayerService.deletePlayer(data).then(() => {
      fetchPlayers()
    })
  }
  const submitPlayerChanges = () => {
    PlayerService.modifyPlayer(currentPlayer).then(() => {
      setIsModalVisisble(false)
      setCurrentPlayer({})
      fetchPlayers()
    })
  }
  const handleModifyPlayer = (data: Player) => {
    setCurrentPlayer(data)
    setIsNewPlayer(false)
    setIsModalVisisble(true)
  }
  return (
    <div className="app">
      <h1 className="app__title">MI EQUIPO</h1>
      <Modal
        submitChanges={submitPlayerChanges}
        setPlayer={(e) => setPlayer(e)}
        player={currentPlayer}
        isVisible={isModalVisible}
        closeModal={() => {
          setIsModalVisisble(false)
          setCurrentPlayer({})
        }}
        onSubmit={(data) => handleSubmit(data)}
        isNewPlayer={isNewPlayer}
      />
      <div className="inputs">
        <SearcherInput onChange={(e) => handleSearch(e)} />
        <button
          onClick={() => {
            setIsModalVisisble(true)
            setIsNewPlayer(true)
          }}
        >
          Agregar
        </button>
      </div>
      <div>
        <section className="cards">
          {playersToShow.map((player) => (
            <PlayerCard
              player={player}
              deletePlayer={handleDeletePlayer}
              modifyPlayer={handleModifyPlayer}
            />
          ))}
        </section>
      </div>
    </div>
  )
}

export default App
