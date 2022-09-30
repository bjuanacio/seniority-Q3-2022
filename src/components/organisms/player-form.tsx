import { useState } from 'react'
import './player-form.scss'
import Slider from '../atoms/slider/slider'

function PlayerForm() {
  const [name, setName] = useState('')
  const [secondName, setSecondName] = useState('')
  const [position, setPosition] = useState('1')
  const [image, setImage] = useState('')

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
  }

  return (
    <>
      <section className="heading">
        <h1>Agregar jugador</h1>
      </section>
      <form onSubmit={onSubmit} className="form">
        <div className="player_form">
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="secondName">Apellido</label>
            <input
              type="text"
              className="form-control"
              value={secondName}
              onChange={(e) => setSecondName(e.target.value)}
            />
          </div>
        </div>
        <div className="player_form">
          <div className="form-group">
            <label htmlFor="image">Imagen</label>
            <input
              type="file"
              className="form-control"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="position">Posición</label>
            <select
              name="position"
              id="position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            >
              <option value={1}>Delantero</option>
              <option value={2}>Defensa</option>
              <option value={3}>Centrocampista</option>
              <option value={4}>Portero</option>
            </select>
          </div>
        </div>
        <Slider label="Ataque" value={55} />
        <Slider label="Defensa" value={55} />
        <Slider label="Skills" value={55} />
        <div className="form-group">
          <button className="btn-block">Agregar</button>
        </div>
      </form>
    </>
  )
}

export default PlayerForm
