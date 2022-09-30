import './app.scss'
import Slider from './components/atoms/slider/slider'
import DeleteIcon from './assets/delete-icon.svg'
import EditIcon from './assets/edit-icon.svg'
import { UserService } from './services/user.service'
import Home from './components/pages/home'

function App() {
  UserService.getPlayer().then((resp) => console.log(resp))
  /* return (
    <div className="app">
      <h1 className="app__title">MI EQUIPO</h1>
      <div>
        <Slider label="Puntaje" value={55} />
      </div>
      <div>
        <img src={DeleteIcon} alt="delete-icon" />
        <img src={EditIcon} alt="edit-icon" />
      </div>
    </div>
  ) */
  return <Home />
}

export default App
