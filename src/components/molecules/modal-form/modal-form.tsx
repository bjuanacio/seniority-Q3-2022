import { FC } from 'react'
import Image from '../../atoms/image/image'
import Input from '../../atoms/input/input'
import Select from '../../atoms/select/select'
import Slider from '../../atoms/slider/slider'
import CloseIcon from '../../../assets/close-icon.svg'

import './modal-form.scss'
import Button from '../../atoms/button/button'
import useModalForm from './use-modal-form'
import { Player } from '../../../utils/interfaces/player'

export interface ModalFormProps {
  title: string
  savePlayer: (player: Player) => void
  closeModal: () => void
}
const ModalForm: FC<ModalFormProps> = ({ closeModal, title, savePlayer }) => {
  const { formData, positions, onChangeData } = useModalForm()

  return (
    <div className="modal" data-testid="modal-form">
      <div className="modal__body">
        <div className="modal__header">
          <h3>{title}</h3>
          <button className="modal__close " onClick={closeModal}>
            <img src={CloseIcon} alt="close-icon" />
          </button>
        </div>
        <div className="modal__info">
          <div className="modal__image">
            <Image src={formData.image} />
          </div>
          <div className="modal__form">
            <div className="modal__form-row">
              <Input
                label="Nombre"
                id="firstName"
                onChange={onChangeData}
                value={formData.firstName}
              />
              <Input
                label="Apellido"
                id="lastName"
                onChange={onChangeData}
                value={formData.lastName}
              />
            </div>
            <div className="modal__form-row">
              <Input label="Imagen" id="image" onChange={onChangeData} value={formData.image} />
              <Select
                label="Posición"
                id="idPosition"
                data={positions}
                onChange={onChangeData}
                value={formData.idPosition}
              />
            </div>
            <div className="modal__form-slider-row">
              <Slider
                label="Ataque"
                value={formData.attack}
                onChange={(val) => {
                  onChangeData('attack', val.toString())
                }}
              />
            </div>
            <div className="modal__form-slider-row">
              <Slider
                label="Defensa"
                value={formData.defense}
                onChange={(val) => {
                  onChangeData('defense', val.toString())
                }}
              />
            </div>
            <div className="modal__form-slider-row ">
              <Slider
                label="Skills"
                value={formData.skills}
                onChange={(val) => {
                  onChangeData('skills', val.toString())
                }}
              />
            </div>
            <div className="modal__button">
              <Button label="Agregar" onClick={() => savePlayer({ ...formData, idAuthor: 48 })} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalForm
