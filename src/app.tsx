import './app.scss'
import AppContext from './context'
import usePlayers from './hooks/use-players/use-players'
import useModal from './hooks/use-modal/use-modal'

import TargetList from './components/organisms/target-list'
import PlayerForm from './components/organisms/player-form'

function App() {
  const playerReducer = usePlayers()
  const modal = useModal()

  const store = {
    playerReducer,
    modal
  }
  return (
    <AppContext.Provider value={store}>
      <PlayerForm />
      <div className="app">
        <h1 className="app__title">MI EQUIPO</h1>
        <TargetList />
      </div>
    </AppContext.Provider>
  )
}

export default App
