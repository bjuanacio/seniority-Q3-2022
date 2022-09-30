import { useState } from 'react'
import Nav from '../molecules/nav/nav'
import Modal from '../organisms/modal/modal'

function Home() {
  const [valueSearch, setValueSearch] = useState('')

  const handleChange = (e: any) => {
    setValueSearch(e.target.value)
  }

  const handleClickButton = () => {
    console.log('Dio clic')
  }

  return (
    <div className="app">
      <h1 className="app__title">MI EQUIPO</h1>
      <div>
        <Nav
          placeholder="Buscar por nombre"
          value={valueSearch}
          handleChange={handleChange}
          label="Agregar"
          handleClick={handleClickButton}
        />
        <Modal title="Agregar jugador" />
      </div>
    </div>
  )
}

export default Home
