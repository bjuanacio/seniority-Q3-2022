import './app.scss'
import Slider from './components/atoms/slider/slider'

import CloseIcon from './assets/close-icon.svg'
import { Input } from './components/atoms/input'
import { useEffect, useState } from 'react'
import PlayerList from './components/organism/player-list'
import { useList } from './hooks/useLists'
import { IPlayerResponse } from './models'

function App() {
  const { players: playersList, refetch, createTodo, deleteTodo, editTodo } = useList()
  const [players, setTodos] = useState<IPlayerResponse[]>([])

  const [selectedTodo, setSelectedTodo] = useState<IPlayerResponse>()

  useEffect(() => {
    setTodos(playersList)
  }, [playersList])

  useEffect(() => {
    refetch()
  }, [])

  return (
    <div className="app">
      <h1 className="app__title">MI EQUIPO</h1>

      <PlayerList
        todoList={[...players]}
        setEditTodo={setSelectedTodo}
        updateList={setTodos}
        deleteTodo={deleteTodo}
      />

      <div>
        <img src={CloseIcon} alt="close-icon" />
      </div>
    </div>
  )
}

export default App
