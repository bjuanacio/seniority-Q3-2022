import './app.scss'
import Slider from './components/atoms/slider/slider'
import DeleteIcon from './assets/delete-icon.svg'
import EditIcon from './assets/edit-icon.svg'
import CloseIcon from './assets/close-icon.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MyTeamList } from './components/pages/MyTeamList'
import { MyTeamForm } from './components/templates/MyTeamForm'

function App() {
  return (
    <div className="app">
      <h1 className="app__title">MI EQUIPO</h1>
      <div style={{ display: 'none' }}>
        <div>
          <Slider label="Puntaje" value={55} />
        </div>
        <div>
          <img src={DeleteIcon} alt="delete-icon" />
          <img src={EditIcon} alt="edit-icon" />
          <img src={CloseIcon} alt="close-icon" />
        </div>
      </div>

      <Router>
        <Routes>
          <Route path="/" element={<MyTeamList />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
