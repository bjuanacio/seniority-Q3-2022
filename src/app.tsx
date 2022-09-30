import { useEffect, useState } from 'react'
import './app.scss'

import SearchBar from './components/molecules/search-bar/search-bar'
import PlayerModal from './components/organisms/player-modal/player-modal'
import PlayersList from './components/organisms/players-list/players-list'
import { Player } from './interfaces/player'
import { useStore } from './store/store'

function App() {
  const { players, searchWord, modalState } = useStore()

  const [filteredPlayers, setFilteredPlayers] = useState<Player[]>([])

  useEffect(() => {
    const auxFilteredPlayers = players.filter((player) =>
      (player.firstName + ' ' + player.lastName).toLowerCase().includes(searchWord.toLowerCase())
    )
    setFilteredPlayers(auxFilteredPlayers)
  }, [players, searchWord])

  return (
    <div className="app">
      <h1 className="app__title">MI EQUIPO</h1>
      <SearchBar />
      <PlayersList players={filteredPlayers} />
      {modalState && <PlayerModal />}
    </div>
  )
}

export default App
