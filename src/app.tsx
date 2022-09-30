import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/home'
import PlayerForm from './components/organisms/player-form'
import Players from './components/organisms/Players/players'

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-player" element={<PlayerForm />} />
        </Routes>
        <Players />
      </div>
    </Router>
  )
}

export default App
