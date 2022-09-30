import './app.scss'
import Slider from './components/atoms/slider/slider'
import DeleteIcon from './assets/delete-icon.svg'
import EditIcon from './assets/edit-icon.svg'
import CloseIcon from './assets/close-icon.svg'
import PlayerCard from './components/molecules/player-card/player-card'
import { PLAYERS } from './utils/constants/constants'
import Dashboard from './components/pages/dashboard/dashboard'

function App() {
  return (
    <div className="app">
      <h1 className="app__title">MI EQUIPO</h1>
      {/* <div>
        <Slider label="Puntaje" value={55} />
      </div>
      <div>
        <img src={DeleteIcon} alt="delete-icon" />
        <img src={EditIcon} alt="edit-icon" />
        <img src={CloseIcon} alt="close-icon" />
      </div> */}
      <div>
        {/* <PlayerCard playerStats={PLAYERS[0]} handleEdit={() => {}} handleDelete={() => {}} /> */}
        <Dashboard />
      </div>
    </div>
  )
}

export default App
