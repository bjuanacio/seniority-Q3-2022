import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'

interface ModalProps {
  onBackdropClick: () => void
}
const Modal: React.FC<ModalProps> = ({ onBackdropClick, children }) => {
  return ReactDOM.createPortal(
    <div className="overlay" onClick={onBackdropClick}>
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>,
    document.getElementById('modal-root')!
  )
}
export default Modal
