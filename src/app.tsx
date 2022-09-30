import './app.scss'
// import Slider from './components/atoms/slider/slider'
// import DeleteIcon from './assets/delete-icon.svg'
// import EditIcon from './assets/edit-icon.svg'
// import CloseIcon from './assets/close-icon.svg'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { HomScreen } from './screens/home-screen/home-screen'

function App() {
  return (
    <Provider store={store}>
      <HomScreen />
      {/* <div className="app">
        <h1 className="app__title">MI EQUIPO</h1>
        <div>
          <Slider label="Puntaje" value={55} />
        </div>
        <div>
          <img src={DeleteIcon} alt="delete-icon" />
          <img src={EditIcon} alt="edit-icon" />
          <img src={CloseIcon} alt="close-icon" />
        </div>
      </div> */}
    </Provider>
  )
}

export default App
