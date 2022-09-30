/* eslint-disable prettier/prettier */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import playerService from './playerService'
import { extractErrorMessage } from '../utils/ds-utils'

const initialState = {
  players: null
}

export const createPlayer = createAsyncThunk('players/create', async (playerData, thunkAPI) => {
  try {
    return await playerService.createPlayer(playerData)
  } catch (error) {
    return thunkAPI.rejectWithValue(extractErrorMessage(error))
  }
})

export const getPlayers = createAsyncThunk('players/getAll', async (_, thunkAPI) => {
  try {
    return await playerService.getPlayers()
  } catch (error) {
    return thunkAPI.rejectWithValue(extractErrorMessage(error))
  }
})

export const playerSlice = createSlice({
    name: 'player',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getPlayers.pending, (state) => {
            state.players = null
        })
        .addCase(getPlayers.fulfilled, (state, action) => {
            state.players = action.payload
          })
    },
    reducers: {}
})

export default playerSlice.reducer
