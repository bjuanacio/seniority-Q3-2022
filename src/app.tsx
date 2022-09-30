import './app.scss'
import { Input } from './components/atoms/input/input'
import { Button } from './components/atoms/button/button'
import { Modal } from './components/atoms/modal/modal'
import { useApp } from './hooks/use-app'
import { PlayerList } from './components/organisms/player-list/player-list'
import { Form } from './components/organisms/form/form'
import { Search } from './components/molecules/search/search'

function App() {
  const { action, values } = useApp()
  return (
    <div className="app">
      <h1 className="app__title">MI EQUIPO</h1>
      <div>
        <Search onChangeSearch={action.onChangeSearch} searchValue={values.searchValue} />
        <Button color="primary" size="medium" onClick={action.openModal}>
          Registrar
        </Button>
        <PlayerList players={values.playerList} />
        {!!values.isOpen && (
          <Modal container={document.getElementById('modal') as HTMLElement}>
            <Form closeModal={action.closeModal} onChangeUserName={action.onChangeUserName} />
          </Modal>
        )}
      </div>
    </div>
  )
}

export default App
