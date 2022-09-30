import React, { FC, useRef } from 'react'
import CloseIcon from '../../../assets/close-icon.svg'
import { Input } from '../../atoms/input/input'
import Slider from '../../atoms/slider/slider'

export interface FormProps {
  closeModal?: () => void
  onChangeUserName?: (event: {
    target: {
      value: string
    }
  }) => void
}

export const Form: FC<FormProps> = ({ closeModal, onChangeUserName }) => {
  const form = useRef(null)
  const actionForm = 'New'

  // Función para cerrar el modal
  const onCancel = () => {
    //setOpenModal([false, ''])
  }

  /* const onHandle = () => {
    const formData = new FormData(form.current)
    const newPokemon = {
      name: formData.get('name'),
      image: formData.get('image'),
      attack: formData.get('attack'),
      defense: formData.get('defense'),
      hp: formData.get('hp'),
      type: 'Unknown',
      idAuthor: 1
    }
    if (actionForm === 'Editar') {
      editPokemon(infoPokemon.id, newPokemon)
    } else {
      addPokemon(newPokemon)
    }
  }*/

  const handleChange = () => {
    /*setInfoPokemon({
      ...infoPokemon,
      [name]: value.trim()
    })

    if (!infoPokemon.name || !infoPokemon.image) {
      setActive(true)
    } else {
      setActive(false)
    }*/
  }

  /*if (actionForm === 'Editar') {
    return (
      <form ref={form}>
        <h2>Modificar Pokemon: {infoPokemon.name}</h2>
        <section className="form-section">
          <label htmlFor="name">Nombre: </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Nombre"
            defaultValue={infoPokemon && infoPokemon.name}
          />
          <br />
          <label htmlFor="attack">Ataque: </label>
          <span>0</span>
          <input
            type="range"
            id="attack"
            name="attack"
            defaultValue={infoPokemon && infoPokemon.attack}
          />
          <span>100</span>
        </section>
        <section className="form-section">
          <label htmlFor="image">Imagen: </label>
          <input
            type="Text"
            id="image"
            name="image"
            placeholder="Url"
            defaultValue={infoPokemon && infoPokemon.image}
          />
          <br />
          <label htmlFor="defense">Defensa: </label>
          <span>0</span>
          <input
            type="range"
            id="defense"
            name="defense"
            defaultValue={infoPokemon && infoPokemon.defense}
          />
          <span>100</span>
          <br />
          <label htmlFor="hp">HP: </label>
          <span>0</span>
          <input type="range" id="hp" name="hp" defaultValue={infoPokemon && infoPokemon.hp} />
          <span>100</span>
        </section>
        <div className="form-button-container">
          <button
            type="button"
            className="form-button form-button--add"
            onClick={() => onHandle(actionForm)}
          >
            <span className="form-button-container__edit-icon"></span>
            Modificar
          </button>
          <button type="button" className="form-button form-button--cancel" onClick={onCancel}>
            <span className="form-button-container__cancel-icon"></span>
            Cancelar
          </button>
        </div>
      </form>
    )
  } else if (action === 'Eliminar') {
    return (
      <form>
        <h2 className="form-title__delete">
          Seguro deseas eliminar el pokemon: {infoPokemon.name}{' '}
        </h2>
        <div className="form-button-container">
          <button
            type="button"
            className="form-button form-button--add"
            onClick={() => deletePokemon(infoPokemon.id)}
          >
            <span className="form-button-container__check-icon"></span>
            Si
          </button>
          <button type="button" className="form-button form-button--cancel" onClick={onCancel}>
            <span className="form-button-container__cancel-icon"></span>
            Cancelar
          </button>
        </div>
      </form>
    )
  } else {*/
  return (
    <form ref={form}>
      <div>
        <h2>Nuevo Jugador</h2>
        <img src={CloseIcon} alt="close-icon" onClick={closeModal} />
      </div>
      <Input
        type="text"
        id="name"
        name="name"
        placeholder="Nombre"
        label="Nombre"
        value="s"
        onChange={onChangeUserName}
      />
      <Input
        type="text"
        id="name"
        name="name"
        placeholder="Nombre"
        label="Nombre"
        value="s"
        onChange={onChangeUserName}
      />
      <Input
        type="text"
        id="apellido"
        name="apellido"
        placeholder="Apellido"
        label="Apellido"
        value="s"
        onChange={onChangeUserName}
      />
      <Input
        type="text"
        id="img"
        name="img"
        placeholder="url"
        label="Imagen"
        value="s"
        onChange={onChangeUserName}
      />

      <Slider label="Puntaje" value={55} />
    </form>
  )
  //}
}
