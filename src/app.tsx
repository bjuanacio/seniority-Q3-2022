import './app.scss'
import { APP_CONSTANTS } from './constants/app-constants'
import { Header } from './components/organisms/header/header'

function App() {
  return (
    <div className="app">
      <Header title={APP_CONSTANTS.APP_TITLE} />
    </div>
  )
}

export default App
