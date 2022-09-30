import './app.scss'
import CardList from './components/organisms/card-list/card-list'

function App() {
  return (
    <div className="app">
      <h1 className="app__title">MI EQUIPO</h1>
      <div>
        <CardList />
      </div>
    </div>
  )
}

export default App
