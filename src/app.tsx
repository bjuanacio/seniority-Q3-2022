import './app.scss'
import Slider from './components/atoms/slider/slider'
import EditIcon from './assets/edit-icon.svg'
import Button from './components/atoms/button/button'
import CloseIcon from './assets/close-icon'
import DeleteIcon from './assets/delete-icon'
import HeaderSection from './components/molecules/header-section/header-section'
import useApp from './hooks/useApp/useApp'
import CardSection from './components/molecules/cards-section/cards-section'

function App() {
  const { openPlayerForm } = useApp()
  return (
    <div className="app">
      <HeaderSection />
      <CardSection />
      {/* <Slider label="Puntaje" value={55} /> */}
      {/* <div>
        <Slider label="Puntaje" value={55} />
      </div>
      <Button icon={<DeleteIcon />}>Borrar</Button>
      <div>
        <DeleteIcon />
        <img src={EditIcon} alt="edit-icon" />
        <CloseIcon />
        <CloseIcon />
      </div> */}
    </div>
  )
}

export default App
