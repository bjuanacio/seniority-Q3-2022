import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export interface PlayerSlice {
  players: Array<Player>
}

export interface Player {
  id: number
  firstName: string
  lastName: string
  image: string
  attack: number
  defense: number
  skills: number
  idAutho: number
  idPosition: number
}

const initialState: PlayerSlice = {
  players: []
}

export const playerSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    setPlayers: (state, action) => {
      state.players = action.payload
    },

    addPlayer: (state, action) => {},

    removePlayer: (state, action) => {},

    updatePlayer: (state, action) => {}
  }
})

export const { setPlayers, addPlayer, removePlayer, updatePlayer } = playerSlice.actions

export default playerSlice.reducer

export const fetchAllPlayer = () => (dispatch: any) => {
  axios
    .get('https://api-exercise-q3.herokuapp.com/player', {
      headers: {
        author: '56'
      }
    })
    .then((response) => {
      dispatch(setPlayers(response.data))
    })
    .catch((error) => console.error(error))
}
