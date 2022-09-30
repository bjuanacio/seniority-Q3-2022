import './app.scss'
import DeleteIcon from './assets/delete-icon.svg'
import EditIcon from './assets/edit-icon.svg'
import CloseIcon from './assets/close-icon.svg'
import { APP_CONSTANTS } from './constants/app-constants'
import { Header } from './components/organisms/header/header'

function App() {
  return (
    <div className="app">
      <Header title={APP_CONSTANTS.APP_TITLE} />
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
