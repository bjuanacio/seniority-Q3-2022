import React from 'react'
import Modal from './Modal'

interface BaseModalWrapperProps {
  isModalVisible: boolean
  onBackdropClick: () => void
}
const BaseModalWrapper: React.FC<BaseModalWrapperProps> = ({ onBackdropClick, isModalVisible }) => {
  if (!isModalVisible) {
    return null
  }

  return (
    <Modal onBackdropClick={onBackdropClick}>
      <div className="modal-container">
        <div className="row">
          <div className="col">Image</div>
          <div className="col">Form</div>
        </div>
      </div>
    </Modal>
  )
}
export default BaseModalWrapper
