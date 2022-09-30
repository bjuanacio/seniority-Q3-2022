import React from 'react'
import Slider from './../../components/atoms/slider/slider'

export const MyTeamForm = ({
  idPlayer,
  name,
  lastname,
  position,
  image,
  ataque,
  defensa,
  hp,
  skills,
  toggle,
  setName,
  setLastname,
  setPosition,
  setAtaque,
  setImage,
  setDefensa,
  setSkills,
  message,
  handleSubmit,
  updatePlayerById
}: {
  idPlayer: any
  name: string
  lastname: string
  position: string
  image: string
  ataque: number
  defensa: number
  skills: number
  hp: string
  toggle: any
  setName: any
  setLastname: any
  setPosition: any
  setAtaque: any
  setImage: any
  setDefensa: any
  setSkills: any
  message: string
  handleSubmit: any
  updatePlayerById: any
}) => {
  return (
    <>
      <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close" onClick={toggle}>
            &times;
          </span>
          <p>
            <b>{`${idPlayer === null ? 'Agregar jugador' : `Editar jugador ${name}`}`}</b>
          </p>
          <div className="row">
            <div className="col">
              <div className="labelStyle">
                <label htmlFor="">Nombre: </label>
              </div>
              <div className="inputStyle">
                <input
                  type="text"
                  id="name"
                  data-testid="name"
                  value={name}
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="col">
              <div className="labelStyle">
                <label htmlFor="">Apellido: </label>
              </div>
              <div className="inputStyle">
                <input
                  type="text"
                  id="lastname"
                  data-testid="lastname"
                  value={lastname}
                  placeholder="Apelliod"
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
            </div>
            <div className="col">
              <div className="labelStyle">
                <label htmlFor="">Imagen: </label>
              </div>
              <div className="inputStyle">
                <input
                  type="text"
                  placeholder="url"
                  data-testid="image"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
              </div>
            </div>
            <div className="col">
              <div className="labelStyle">
                <label htmlFor="">Posicion:</label>
              </div>
              <div className="inputStyle">
                <input
                  type="text"
                  id="position"
                  data-testid="position"
                  value={position}
                  placeholder="Posicion"
                  onChange={(e) => setPosition(e.target.value)}
                />
              </div>
            </div>

            <div className="col">
              <div className="labelStyle">
                <label htmlFor="">Ataque: </label>
              </div>
              <div className="inputStyle">
                <div className="slider">
                  <div className="slider__input-container">
                    <div className="slider__input-container-value">
                      <input
                        type="range"
                        className="slider__input"
                        min={0}
                        step={1}
                        max={100}
                        value={ataque}
                        onChange={(e) => setAtaque(e.target.value)}
                      />
                      <span className="slider__value">{ataque}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="labelStyle">
                <label htmlFor="">Defensa: </label>
              </div>
              <div className="inputStyle">
                <div className="slider">
                  <div className="slider__input-container">
                    <div className="slider__input-container-value">
                      <input
                        type="range"
                        className="slider__input"
                        min={0}
                        max={100}
                        step={1}
                        value={defensa}
                        onChange={(e) => setDefensa(e.target.value)}
                      />
                      <span className="slider__value">{defensa}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="colBig">
              <div className="labelStyleBig">
                <label htmlFor="">Skills: </label>
              </div>
              <div className="inputStyleBig">
                <div className="slider">
                  <div className="slider__input-container">
                    <div className="slider__input-container-value">
                      <input
                        type="range"
                        className="slider__input"
                        min={0}
                        max={100}
                        step={1}
                        value={skills}
                        onChange={(e) => setSkills(e.target.value)}
                      />
                      <span className="slider__value">{skills}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="colBig">
              <div className="labelStyleBig">
                <label htmlFor=""></label>
              </div>
              <div className="inputStyleBig"></div>
            </div>

            <div className="containerButton">
              <button
                type="submit"
                onClick={idPlayer === null ? handleSubmit : updatePlayerById}
                disabled={name === '' || image === '' || lastname === '' || position === ''}
                id="buttonSave"
                data-testid="buttonSave"
                className={`${
                  name !== '' && image !== '' && lastname !== '' && position !== ''
                    ? 'buttonForm'
                    : 'buttonInactive'
                }`}
              >
                &nbsp; Guardar
              </button>

              <button onClick={toggle} className="buttonForm">
                &nbsp; Cancelar
              </button>
            </div>
            <div className="message">{message ? <p>{message}</p> : null}</div>
          </div>
        </div>
      </div>
    </>
  )
}
