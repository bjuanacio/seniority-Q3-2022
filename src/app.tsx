import './app.scss'
import Slider from './components/atoms/slider/slider'
import DeleteIcon from './assets/delete-icon.svg'
import EditIcon from './assets/edit-icon.svg'
import CloseIcon from './assets/close-icon.svg'
import { SearchBar } from './components/organisms/searchBar/searchBar'
import { useEffect, useState } from 'react'
import { PlayerCard } from './components/organisms/playerCard/playerCard'
import store, { IPlayer } from './store/store'
import { observer } from 'mobx-react'

const App = observer(() => {
  const [openNew, setOpenNew] = useState(false)
  useEffect(() => {
    store.getAllPlayers()
  }, [])

  const handleEdit = (player: IPlayer) => {}
  const handleDelete = (id: number | undefined) => {}

  const handleFilter = (e: string) => {
    console.log(e)
    store.filterPlayers(e)
  }
  return (
    <div className="app">
      <h1 className="app__title">MI EQUIPO</h1>
      <SearchBar handleFilter={handleFilter} />

      <section className="app__cards">
        {store.filteredPlayers.map((player) => (
          <PlayerCard
            key={player.id}
            player={player}
            onEdit={() => handleEdit(player)}
            onDelete={() => handleDelete(player.id)}
          />
        ))}
      </section>

      <div>
        <Slider label="Puntaje" value={55} />
      </div>
      <div>
        <img src={DeleteIcon} alt="delete-icon" />
        <img src={EditIcon} alt="edit-icon" />
        <img src={CloseIcon} alt="close-icon" />
      </div>
    </div>
  )
})

export default App
