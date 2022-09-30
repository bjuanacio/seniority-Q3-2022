import { createSlice } from '@reduxjs/toolkit'

const PlayerSlice = createSlice({
  name: 'slider',
  initialState: {
    valueSearch: '',
    firstName: '',
    lastName: '',
    image: '',
    attack: 0,
    defense: 0,
    skills: 0,
    idAuthor: 0,
    idPosition: 0
  },
  reducers: {
    search: (state, action) => {
      state.valueSearch = action.payload
    }
  }
})

export const { search } = PlayerSlice.actions
export default PlayerSlice.reducer
