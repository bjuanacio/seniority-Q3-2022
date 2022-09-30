import { FC } from 'react'
import Input from '../../atoms/input/input'
import CloseIcon from '../../../assets/close-icon.svg'
import './modal-body.scss'
import Slider from '../../atoms/slider/slider'
import Button from '../../atoms/button/button'
import Select from '../../atoms/select/select'
import { Player } from '../../../services/player.service'
import useModalBody from './use-modal-body/use-modal-body'

interface ModalBodyProps {
  isEdit?: boolean
  onEditOrAdd: (player: Player) => void
  onClose: () => void
  actualPlayer: Player | null
}

export const ModalBody: FC<ModalBodyProps> = ({ isEdit, onEditOrAdd, onClose, actualPlayer }) => {
  const { handleChangeInput, player, titleAndButton, positions, isButtonEnabled } = useModalBody({
    isEdit,
    actualPlayer
  })

  return (
    <div className="modal-body">
      <div className="modal-body__image-container">
        <div className="modal-body__image-container__text">{titleAndButton.title}</div>
        <img
          width={360}
          className="modal-body__image-container__image"
          src={player.image}
          alt="Imagen del Jugador"
        />
      </div>
      <div className="modal-body__content">
        <div className="modal-body__content__close">
          <img onClick={onClose} src={CloseIcon} alt="Cerrar" width={36} />
        </div>
        <div className="modal-body__content__inputs">
          <div>
            <div>Nombre</div>
            <Input
              onChange={handleChangeInput}
              placeholder="Nombre"
              value={player.firstName}
              error={player.firstName ? '' : 'Nombre no válido'}
              name="firstName"
            />
          </div>
          <div>
            <div>Apellido</div>
            <Input
              onChange={handleChangeInput}
              placeholder="Apellido"
              value={player.lastName}
              error={player.lastName ? '' : 'Nombre no válido'}
              name="lastName"
            />
          </div>
        </div>
        <div className="modal-body__content__inputs">
          <div>
            <div>Imagen</div>
            <Input
              onChange={handleChangeInput}
              placeholder="Imagen"
              value={player.image}
              error={player.image ? '' : 'Imagen no válida'}
              name="image"
            />
          </div>
          <div>
            <div>Posición</div>
            <Select
              options={positions}
              onChange={handleChangeInput}
              selectedValue={player.idPosition}
              name="idPosition"
            />
          </div>
        </div>

        <div className="modal-body__content__sliders">
          <Slider
            label="Ataque"
            defaultValue={player.attack}
            onChange={handleChangeInput}
            name="attack"
          />
          <Slider
            label="Defensa"
            defaultValue={player.defense}
            onChange={handleChangeInput}
            name="defense"
          />
          <Slider
            label="Skills"
            defaultValue={player.skills}
            onChange={handleChangeInput}
            name="skills"
          />
        </div>

        <div className="modal-body__content__actions">
          <Button
            disabled={!isButtonEnabled}
            onClick={() => onEditOrAdd(player)}
            text={titleAndButton.button}
          />
        </div>
      </div>
    </div>
  )
}

export default ModalBody
