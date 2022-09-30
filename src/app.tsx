import './app.scss'
import { Routes, Route } from 'react-router-dom'
import { Home } from './Pages/home/home'
import { useState } from 'react'

export default function App() {
  const navigate = useNavigate()
  const [playerById, setPlayerById] = useState<Players>({
    firstName: '',
    lastName: '',
    image: '',
    attack: '',
    defense: '',
    skills: '',
    idAuthor: '',
    idPosition: ''
  })

  return(
    <Route path = '/' element={<Home
      navigateFunction={navigate}
      />}
  )
}

