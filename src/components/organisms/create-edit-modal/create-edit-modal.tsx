import React, { FormEvent, useState } from 'react'
import Slider from '../../atoms/slider/slider'
import './create-edit-modal.scss'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import { editPlayer, fetchPlayerPositions, createPlayer } from '../../../services/user.service'
import { setPositions, toggleShowModal } from '../../../store/slices/app-slice'
import { useForm } from '../../../hooks/use-form'
import CloseIcon from '../../../assets/close-icon.svg'

interface InputField {
  type: string
  error?: string
  name: string
}

const requiredFields = [
  'firstName',
  'lastName',
  'image',
  'attack',
  'defense',
  'skills',
  'idAuthor',
  'idPosition'
]

export const CreateEditModal = () => {
  const { positions, currentPlayer } = useSelector((state: RootState) => state.app)
  const dispatch = useDispatch()
  const [invalidForm, setInvalidForm] = useState(true)

  useEffect(() => {
    if (positions.length > 0) return
    fetchPlayerPositions()
      .then(({ data: fetchedPositions }) => dispatch(setPositions(fetchedPositions)))
      .catch(() => window.alert('Hubo un problema al cargar las posiciones'))
  }, [])

  const inputFields: { [key: string]: InputField }[][] = [
    [
      {
        Nombre: {
          type: 'input',
          error: 'Nombre no válido',
          name: 'firstName'
        },
        Apellido: {
          type: 'input',
          error: 'Apellido no válido',
          name: 'lastName'
        }
      }
    ],
    [
      {
        Imagen: {
          type: 'input',
          error: 'Imagen es obligatoria',
          name: 'image'
        },
        Posición: {
          type: 'comboBox',
          error: 'Nombre no válido',
          name: 'idPosition'
        }
      }
    ],
    [{ Ataque: { type: 'slider', name: 'attack' } }],
    [{ Defensa: { type: 'slider', name: 'defense' } }],
    [{ Skills: { type: 'slider', name: 'skills' } }]
  ]

  const { values, handleInputChange, reset, validation } = useForm({
    firstName: '',
    lastName: '',
    image: '',
    attack: 55,
    defense: 55,
    skills: 55,
    idAuthor: 50,
    idPosition: 0
  })

  useEffect(() => {
    if (currentPlayer) {
      reset({ ...currentPlayer })
    }
  }, [currentPlayer])

  useEffect(() => {
    console.log(validation)
    setInvalidForm(
      Object.keys(validation)
        .filter((key) => requiredFields.includes(key))
        .map((key) => (validation as any)[key])
        .includes(false)
        ? true
        : false
    )
  }, [validation])

  const handleCancel = () => {
    dispatch(toggleShowModal())
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (invalidForm) {
      return
    } else if (currentPlayer) {
      editPlayer({ ...currentPlayer, ...values })
    } else {
      createPlayer({ ...values })
    }
  }

  return (
    <div className="modal">
      <div className="modal__container">
        <div className="modal__header">
          <div className="modal__title">Agregar Jugador</div>
          <div onClick={handleCancel}>
            <img className="modal__close-icon" src={CloseIcon} alt="close-icon" />
          </div>
        </div>
        <div className="modal__body">
          <img
            onClick={handleCancel}
            src={
              values.image
                ? values.image
                : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png'
            }
            alt="playe image"
            className="modal__img"
          />
          <form onSubmit={handleSubmit} className="modal__body__inputs">
            {inputFields.map((inputGroups) => (
              <div className="modal__body__inputs__row">
                {inputGroups.map((group) =>
                  Object.keys(group).map((fieldKey, idx) => (
                    <div className="modal__input__container" key={idx}>
                      {group[fieldKey].type != 'slider' && (
                        <div className="modal__input__title">{fieldKey}</div>
                      )}
                      {group[fieldKey].type == 'input' && (
                        <input
                          className="modal__input"
                          value={values[group[fieldKey].name]}
                          onChange={({ target }) =>
                            handleInputChange({ name: group[fieldKey].name, value: target.value })
                          }
                        />
                      )}
                      {group[fieldKey].type == 'comboBox' && (
                        <select
                          className="modal__select"
                          value={values[group[fieldKey].name]}
                          onChange={({ target }) =>
                            handleInputChange({ name: group[fieldKey].name, value: target.value })
                          }
                        >
                          {positions.map((position, idx2) => (
                            <option value={position.id} key={idx2}>
                              {position.description}
                            </option>
                          ))}
                        </select>
                      )}
                      {group[fieldKey].type == 'slider' && (
                        <Slider
                          label={fieldKey}
                          value={values[group[fieldKey].name]}
                          onChange={(value) =>
                            handleInputChange({ name: group[fieldKey].name, value })
                          }
                        />
                      )}
                      {!(validation as any)[group[fieldKey].name] && (
                        <div className="modal__input-error">{group[fieldKey].error}</div>
                      )}
                    </div>
                  ))
                )}
              </div>
            ))}
            <button className="modal__button" type="submit">
              Guardar
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
