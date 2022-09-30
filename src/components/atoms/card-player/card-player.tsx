import React from 'react'
import DeleteIcon from '../../../assets/delete-icon.svg'
import EditIcon from '../../../assets/edit-icon.svg'
import './card-player.scss'

export const CardPlayer = () => {
  return (
    <>
      <div className="container">
        <div className="container__image">
          <img
            src="https://i.pinimg.com/originals/13/fb/ff/13fbff1dc5c89a448149f8cc895edb93.jpg"
            className="container__image__avatar"
          ></img>
          <div className="container__image__name">
            <h1>Lionel</h1>
          </div>
        </div>
        <div className="container__text">
          <div className="container__text__title">
            <span>Ataque</span>
            <span>Defensa</span>
            <span>Skill</span>
          </div>
          <div className="container__text__desc">
            <span>90</span>
            <span>30</span>
            <span>90</span>
          </div>
          <div className="container__text__icons">
            <img width={30} src={DeleteIcon} alt="delete-icon" />
            <img width={30} src={EditIcon} alt="edit-icon" />
          </div>
        </div>
      </div>
    </>
  )
}
