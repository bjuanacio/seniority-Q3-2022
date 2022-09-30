import Button from '../atoms/button/button'
import Card from '../molecules/card/card'
import ModalForm from '../molecules/modal-form/modal-form'
import './home.scss'
import useHome from './home/use-home'

const Home = () => {
  const { title, isModalVisible, addPlayer, closeModal, players, savePlayer } = useHome()
  return (
    <div className="home">
      <h1>MI EQUIPO</h1>
      <div className="home__top-bar">
        <div className="search-box" data-testid="search-box">
          <input id="search-input" name="search-input" />
        </div>
        <Button label="Agregar" onClick={addPlayer} />
      </div>
      <div className="home__players">
        {players.map((player) => (
          <Card player={player} />
        ))}
      </div>

      {isModalVisible && (
        <ModalForm title={title} closeModal={closeModal} savePlayer={savePlayer} />
      )}
    </div>
  )
}

export default Home
