import './app.scss'
import { useEffect } from 'react'
import Slider from './components/atoms/slider/slider'
import CloseIcon from './assets/close-icon.svg'
import { UseStoreJSI } from './components/atoms/store/use-store/use-store'
import { useGetPlayerQuery } from './services/api/player.api'
import { Input } from './components/atoms/input'
import { Button } from './components/atoms/button/button'
import { useDebouncedValue } from './components/atoms/debouncer/use-debouncer'
import { CardPlayer } from './components/atoms/card-player/card-player'

function App() {
  const { count, valueSearch, search } = UseStoreJSI()

  const { data } = useGetPlayerQuery('')

  const debouncedValue = useDebouncedValue(valueSearch)

  const onDebounce = (value: string) => {
    /* setFileteredList(
      todoList.filter((todo) => todo.description.toLowerCase().includes(value.toLowerCase()))
    ) */
    console.log('val>>', value)
  }

  useEffect(() => {
    onDebounce(debouncedValue)
  }, [debouncedValue])

  const goToCreate = () => {
    console.log('Modal')
  }
  console.log('hwy', data)
  return (
    <div className="app">
      <h1 className="app__title">MI EQUIPO</h1>
      <div className="app__search">
        <div className="app__search__input">
          <Input placeholder="Buscar por nombre" onChange={(e: any) => search(e)}></Input>
        </div>
        <div className="app__search__btn">
          <Button onClick={goToCreate}>Agregar</Button>
        </div>
      </div>
      <div className="app__cards-container">
        <CardPlayer></CardPlayer>
        <CardPlayer></CardPlayer>
        <CardPlayer></CardPlayer>
      </div>
      <span>{valueSearch}</span>

      <div>
        <Slider label="Puntaje" />
      </div>
      <div>
        <img src={CloseIcon} alt="close-icon" />
      </div>
      <span>{count}</span>
      <div className="user">
        <div className="user__avatar">Avatar</div>
        <div className="user__data">Data</div>
      </div>
    </div>
  )
}

export default App
