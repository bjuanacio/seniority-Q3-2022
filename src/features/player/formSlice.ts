import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export interface FormSlice {
  firstName: string
  lastName: string
  image: string
  attack: number
  defense: number
  skills: number
}

export interface Player {
  firstName: string
  lastName: string
  image: string
  attack: number
  defense: number
  skills: number
}

const initialState: FormSlice = {
  firstName: '',
  lastName: '',
  image: '',
  attack: 50,
  defense: 50,
  skills: 50
}

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.firstName = action.payload
    },
    setLastName: (state, action) => {
      state.lastName = action.payload
    },
    setImage: (state, action) => {
      state.image = action.payload
    },
    setAtack: (state, action) => {
      state.attack = action.payload
    },
    setDeffense: (state, action) => {
      state.defense = action.payload
    },
    setSkills: (state, action) => {
      state.skills = action.payload
    }
  }
})

export const { setAtack, setDeffense, setImage, setLastName, setName, setSkills } =
  formSlice.actions

export default formSlice.reducer
