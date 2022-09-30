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
import { FormPlayer } from './components/organisms/formPlayer/formPlayer'

const App = observer(() => {
  const [openNew, setOpenNew] = useState(false)
  useEffect(() => {
    store.getAllPlayers()
  }, [])

  const handleEdit = (player: IPlayer) => {}
  const handleDelete = (id: number | undefined) => {
    store.deletePlayer(id)
  }

  const handleFilter = (filter: string) => {
    store.filterPlayers(filter)
  }

  const handleAddPlayer = () => {
    setOpenNew(true)
  }

  const onHandleCloseModal = () => {
    setOpenNew(false)
  }

  const handleCreateNew = (player: IPlayer) => {
    store.postPlayer(player)
    onHandleCloseModal()
  }
  return (
    <div className="app">
      {openNew && (
        <FormPlayer handleCloseModal={onHandleCloseModal} handleAddNew={handleCreateNew} nuevo />
      )}
      <h1 className="app__title">MI EQUIPO</h1>
      <SearchBar handleFilter={handleFilter} handleAdd={handleAddPlayer} />

      <section className="app__cards">
        {store.filteredPlayers?.map((player) => (
          <PlayerCard
            key={player.id}
            player={player}
            onEdit={() => handleEdit(player)}
            onDelete={() => handleDelete(player.id)}
          />
        ))}
      </section>
    </div>
  )
})

export default App
