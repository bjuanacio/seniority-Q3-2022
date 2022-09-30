import { createSlice } from '@reduxjs/toolkit'

const SliderSlice = createSlice({
  name: 'slider',
  initialState: {
    count: 25
  },
  reducers: {
    increment: (state, action) => {
      state.count = action.payload
    },
    clear: (state) => {
      state.count = 0
    }
  }
})

export const { increment, clear } = SliderSlice.actions
export default SliderSlice.reducer
