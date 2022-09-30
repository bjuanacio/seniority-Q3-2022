import React, { FC, ReactNode } from 'react'
import CloseIcon from '../../../assets/close-icon'
import { ModalWrapper } from './moda.styles'

export interface ModalProps {
  display?: boolean
  // eslint-disable-next-line @typescript-eslint/ban-types
  closeHandler?: Function
  mobileOnly?: boolean
  modalFooter?: ReactNode
  centerModalMobile?: boolean
  modalSubFooter?: string
}

const Modal: FC<ModalProps> = ({
  children,
  display,
  closeHandler,
  mobileOnly,
  modalFooter,
  centerModalMobile,
  modalSubFooter
}) => {
  return (
    <>
      {display ? (
        <ModalWrapper
          mobileOnly={mobileOnly}
          onClick={() => {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            closeHandler && closeHandler()
          }}
        >
          <div className={`${centerModalMobile ? 'modal_backdrop_center' : 'modal_backdrop'}`}>
            <div
              className={`modal ${modalSubFooter ? 'terms' : ''}`}
              onClick={(e) => {
                e.stopPropagation()
              }}
            >
              <div className="modal_header">
                <div
                  className="close"
                  onClick={() => {
                    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                    closeHandler && closeHandler()
                  }}
                >
                  <CloseIcon />
                </div>
              </div>
              <div className="modal_body">{children}</div>
              {modalSubFooter && <div className="modal_subfooter">{modalSubFooter}</div>}
              {modalFooter && <div className="modal_footer">{modalFooter}</div>}
            </div>
          </div>
        </ModalWrapper>
      ) : (
        <></>
      )}
    </>
  )
}

export default Modal
