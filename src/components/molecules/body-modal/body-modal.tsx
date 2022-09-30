import React from 'react'
import LabelInput from '../label-input/label-input'
import './body-modal.scss'

export interface BodyModalProps {
  valueName: string
  handleChangeName: (e: any) => any
  valueLastName: string
  handleChangeLastName: (e: any) => any
  valueImage: string
  handleChangeImage: (e: any) => any
}

const BodyModal = (props: BodyModalProps) => {
  const {
    valueName,
    handleChangeName,
    valueLastName,
    handleChangeLastName,
    valueImage,
    handleChangeImage
  } = props
  console.log(valueImage)
  return (
    <div className="content">
      <div className="image">
        {valueImage.length === 0 ? (
          <div className="image__not-found">NOT FOUND</div>
        ) : (
          <img className="" src={valueImage} alt="Player image" />
        )}
      </div>
      <div>
        <div className="row">
          <LabelInput
            title="Nombre"
            isSearch={false}
            placeholder="Ingrese un valor"
            value={valueName}
            handleChange={handleChangeName}
          />
          <LabelInput
            title="Apellido"
            isSearch={false}
            placeholder="Ingrese un valor"
            value={valueLastName}
            handleChange={handleChangeLastName}
          />
        </div>
        <div className="row">
          <LabelInput
            title="Imagen"
            isSearch={false}
            placeholder="Ingrese un valor"
            value={valueImage}
            handleChange={handleChangeImage}
          />
        </div>
      </div>
    </div>
  )
}

export default BodyModal
