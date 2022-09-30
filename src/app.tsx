import './app.scss'
import Input from './components/atoms/input/input'
import Button from './components/atoms/button/button'
import useApp from './hooks/use-app/use-app'
import Modal from './components/organisms/modal/modal'
import PlayerList from './components/organisms/player-list/player-list'

function App() {
  const {
    showModal,
    toggleModal,
    players,
    handleSearch,
    search,
    handleClickAdd,
    actualPlayer,
    handleAddOrEdit,
    getPlayers,
    handleOnEditClick
  } = useApp()

  return (
    <div className="app">
      <h1 className="app__title">MI EQUIPO</h1>
      <div className="app__actions">
        <Input onChange={handleSearch} placeholder="Buscar por nombre" value={search} />
        <Button onClick={handleClickAdd} />
      </div>
      <PlayerList
        players={players}
        filter={search}
        onEdit={handleOnEditClick}
        onDelete={getPlayers}
      />
      {showModal && (
        <Modal onClose={toggleModal} onEditOrAdd={handleAddOrEdit} actualPlayer={actualPlayer} />
      )}
    </div>
  )
}

export default App
