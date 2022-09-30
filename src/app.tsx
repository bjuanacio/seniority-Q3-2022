import './app.scss'
import { useEffect } from 'react'

import { UseStoreJSI } from './components/atoms/store/use-store/use-store'
import { useGetPlayerQuery } from './services/api/player.api'
import { Input } from './components/atoms/input'
import { Button } from './components/atoms/button/button'
import { CardPlayer, CardPlayerProps } from './components/atoms/card-player/card-player'

function App() {
  const { valueSearch, search } = UseStoreJSI()

  const { data, isLoading } = useGetPlayerQuery('')

  const renderData = () => {
    if (!isLoading) {
      return data
        .filter(
          (playerFil: CardPlayerProps) =>
            playerFil.lastName.toLowerCase().includes(valueSearch.toLowerCase()) ||
            playerFil.firstName.toLowerCase().includes(valueSearch.toLowerCase())
        )
        .map((player: CardPlayerProps) => <CardPlayer {...player} />)
    }
    return <div> No data found </div>
  }

  const goToCreate = () => {
    console.log('Modal')
  }

  useEffect(() => {
    console.log('hwy', data)
  }, [data])
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
      <div className="app__cards-container">{data ? renderData() : <></>}</div>
    </div>
  )
}

export default App
