import { FC } from 'react'
import './modal.scss'

interface Props {
  Visible: boolean
  Message: string
  setModal: (paramFlag: any) => void
}

export const Modal: FC<any> = ({ Visible, Message, setModal }) => {
  return (
    <div>
      {Visible ? (
        <div className="modal">
          // molecula
          <div className="modal__popup">
            //algo dinamico en texto
            <div className="modal__popup-header">
              <h2>Agregar :</h2>
              <a
                className="modal__popup__close"
                onClick={() =>
                  setModal({
                    Visible: false,
                    Message: 'Sin operacion por mostrar'
                  })
                }
                href="#"
              >
                &times;
              </a>
            </div>
            <div className="modal__popup-content">
              <div className="modal__img">
                <img src="#" alt="futboolista" />
              </div>
              <div className="modal__popup-form">
                <div className="modal__input"></div>
                <div className="modal__actio"></div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
