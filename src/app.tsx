import './app.scss'
import Slider from './components/atoms/slider/slider'
import DeleteIcon from './assets/delete-icon.svg'
import EditIcon from './assets/edit-icon.svg'
import CloseIcon from './assets/close-icon.svg'
import { Cards } from './components/organism/cards/cards'
import { Modal } from './components/organism/modal/modal'
import { useState } from 'react'

function App() {
  const [ModalState, setModalState] = useState({
    Visible: false,
    Message: 'Agregar futbolista'
  })

  return (
    <div className="app">
      <Modal Visible={ModalState.Visible} Message={ModalState.Message} setModal={setModalState} />
      <div className="app__header">
        <div className="app__header-actions">
          <h1 className="app__header-title">MI EQUIPO</h1>
          <div className="app__header-input">
            <input type="text" />
          </div>
        </div>
        <div className="app__header__agregar">
          <button
            onClick={() => setModalState({ ...ModalState, Visible: true })}
            className="app__header__agregar__button"
          >
            Agregar
          </button>
        </div>
      </div>

      <div className="app__main">
        <Cards />
      </div>
      <div>
        <img src={DeleteIcon} alt="delete-icon" />
        <img src={EditIcon} alt="edit-icon" />
        <img src={CloseIcon} alt="close-icon" />
      </div>
    </div>
  )
}

export default App
{
  /* <Slider label="Puntaje" value={55} /> */
}
