import React, { FC } from 'react'
import { Player } from '../../../types/types'
import Slider from '../../atoms/slider/slider'
import usePlayerForm from './use-player-form/use-player-form'
import './player-form.scss'

interface PlayerFormProps {
  handleClose: () => void
  show: boolean
}

const defaultValues: Player = {
  firstName: '',
  lastName: '',
  attack: 99,
  defense: 99,
  skills: 99,
  image: ''
}

const PlayerForm: FC<PlayerFormProps> = ({ handleClose, show }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none'
  const {
    values: formValues,
    updateValue: handleChange,
    updateValues
  } = usePlayerForm(defaultValues)

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <button type="button" onClick={handleClose}>
          Close
        </button>
        <form action="">
          <label htmlFor="firstName">Nombre:</label>
          <input
            id="firstName"
            aria-label="firstName"
            type="text"
            value={formValues.firstName}
            onChange={(e) => handleChange('firstName', e.target.value)}
            autoFocus
            required
          />
          <label htmlFor="lastName">Apellido:</label>
          <input
            id="lastName"
            aria-label="lastName"
            type="text"
            value={formValues.lastName}
            onChange={(e) => handleChange('lastName', e.target.value)}
            autoFocus
            required
          />
          <label htmlFor="image">Imagen:</label>
          <input
            id="image"
            aria-label="image"
            type="text"
            value={formValues.image}
            onChange={(e) => handleChange('image', e.target.value)}
            autoFocus
            required
          />
          <Slider
            defaultValue={55}
            value={formValues.attack}
            label={'Ataque'}
            onChange={(value) => handleChange('attack', value)}
          />
          <Slider
            defaultValue={55}
            value={formValues.defense}
            label={'Defensa'}
            onChange={(value) => handleChange('defense', value)}
          />
          <Slider
            defaultValue={55}
            value={formValues.skills}
            label={'Skills'}
            onChange={(value) => handleChange('skills', value)}
          />
        </form>
      </section>
    </div>
  )
}

export default PlayerForm
