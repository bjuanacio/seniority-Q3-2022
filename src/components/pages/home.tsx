import { Link } from 'react-router-dom'
import './home.scss'
function Home() {
  return (
    <div className="app">
      <h1 className="app__title">MI EQUIPO</h1>
      <div className="add_button">
        <Link to="/new-player" className="btn btn-reverse btn-block">
          Agregar
        </Link>
      </div>
    </div>
  )
}

export default Home
