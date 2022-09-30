import './app.scss'
import DeleteIcon from './assets/delete-icon.svg'
import EditIcon from './assets/edit-icon.svg'
import CloseIcon from './assets/close-icon.svg'
import { APP_CONSTANTS } from './constants/app-constants'

function App() {
  return (
    <div className="app">
      <h1 className="app__title">{APP_CONSTANTS.APP_TITLE}</h1>
      <div></div>
      <div>
        <img src={DeleteIcon} alt="delete-icon" />
        <img src={EditIcon} alt="edit-icon" />
        <img src={CloseIcon} alt="close-icon" />
      </div>
    </div>
  )
}

export default App
