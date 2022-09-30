import React, { useState } from 'react'
import BodyModal from '../../molecules/body-modal/body-modal'
import HeaderModal, { HeaderProps } from '../../molecules/header-modal/header-modal'
import './modal.scss'

const Modal = (props: HeaderProps) => {
  const [valueName, setValueName] = useState('')
  const [valueLastName, setValueLastName] = useState('')
  const [valueImage, setValueImage] = useState('')

  const handleChangeName = (e: any) => {
    setValueName(e.target.value)
  }

  const handleChangeLastName = (e: any) => {
    setValueLastName(e.target.value)
  }

  const handleChangeImage = (e: any) => {
    setValueImage(e.target.value)
  }
  const { title } = props
  return (
    <div className="modal">
      <div className="modal-content">
        <HeaderModal title={title} />
        <BodyModal
          valueName={valueName}
          handleChangeName={handleChangeName}
          valueLastName={valueLastName}
          handleChangeLastName={handleChangeLastName}
          valueImage={valueImage}
          handleChangeImage={handleChangeImage}
        />
      </div>
    </div>
  )
}

export default Modal
