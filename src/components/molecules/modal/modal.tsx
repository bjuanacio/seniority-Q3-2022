import { FC } from 'react'
import FormInput from '../../atoms/form-input/form-input'
import Slider from '../../atoms/slider/slider'
import './modal.scss'
import { useAppSelector, useAppDispatch } from '../../../app/hooks'
import { useDispatch } from 'react-redux'
import formSlice, {
  setLastName,
  setName,
  setAtack,
  setDeffense,
  setImage
} from '../../../features/player/formSlice'

export interface ModalProps {
  type: 'agregar' | 'actualizar'
  display: string
}

const Modal: FC<ModalProps> = ({ type, display }) => {
  const { attack, defense, firstName, image, lastName, skills } = useAppSelector(
    (state) => state.form
  )

  const dispatch = useDispatch()
  return (
    <div className="modal" style={{ display: display }}>
      <div className="modal__content">
        <div className="title">
          <h1>{type === 'agregar' ? 'Agregar Juador' : 'Editar Jugador'}</h1>
        </div>

        <div className="body">
          <div className="image-container">
            <img src={image} alt="" />
          </div>
          <div className="form">
            <div className="row">
              <FormInput
                label="Nombre"
                value={firstName}
                handleChange={(value: string) => dispatch(setName(value))}
              />
              <FormInput
                label="Apellido"
                value={lastName}
                handleChange={(value: string) => dispatch(setLastName(value))}
              />
            </div>
            <div className="row">
              <FormInput
                label="imagen"
                value={image}
                handleChange={(value: string) => dispatch(setImage(value))}
              />
              <select name="Posicón" id="position">
                <option value="volvo">Delantero</option>
                <option value="saab">Medio</option>
                <option value="opel">Defesa </option>
              </select>
            </div>
            <div className="slide">
              <Slider label="Ataque" value={attack} />
            </div>
            <div className="slide">
              <Slider label="Defensa" value={defense} />
            </div>
            <div className="slide">
              <Slider label="Skills" value={skills} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
