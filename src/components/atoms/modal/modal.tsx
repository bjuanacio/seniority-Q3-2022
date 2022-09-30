import React from 'react'
import ReactDOM from 'react-dom'
import './modal.scss'

type Props = {
  children: JSX.Element
  container: HTMLElement
}

function Modal({ children, container }: Props) {
  return ReactDOM.createPortal(<div className="modal-background">{children}</div>, container)
}

export { Modal }
