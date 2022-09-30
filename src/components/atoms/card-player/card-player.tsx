import { skipToken } from '@reduxjs/toolkit/dist/query'
import React from 'react'
import DeleteIcon from '../../../assets/delete-icon.svg'
import EditIcon from '../../../assets/edit-icon.svg'
import './card-player.scss'

export interface CardPlayerProps {
  id: 13
  firstName: string
  lastName: string
  image: string
  attack: number
  defense: number
  skills: number
  idAuthor: number
  idPosition: number
}

export const CardPlayer = (props: CardPlayerProps) => {
  const { firstName, lastName, image, attack, defense, skills } = props
  return (
    <>
      <div className="container">
        <div className="container__image">
          <img src={image} className="container__image__avatar"></img>
          <div className="container__image__name">
            <h1>
              {firstName} {lastName}
            </h1>
          </div>
        </div>
        <div className="container__text">
          <div className="container__text__title">
            <span>Ataque</span>
            <span>Defensa</span>
            <span>Skill</span>
          </div>
          <div className="container__text__desc">
            <span>{attack}</span>
            <span>{defense}</span>
            <span>{skills}</span>
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
