import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Player, Position } from '../../interfaces/interfaces'

export interface AppState {
  players: Player[]
  filteredPlayers: Player[]
  showModal: boolean
  positions: Position[]
}

const initialState: AppState = {
  players: [],
  filteredPlayers: [],
  showModal: false,
  positions: []
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setPlayers: (state, { payload }: PayloadAction<Player[]>) => {
      state.players = payload
    },
    setFilterPlayersByName: (state, { payload }: PayloadAction<string>) => {
      if (payload.length == 0) {
        state.filteredPlayers = state.players
      } else {
        state.filteredPlayers = state.players.filter((player) =>
          `${player.firstName} ${player.lastName}`.toLowerCase().includes(payload)
        )
      }
    },
    toggleShowModal: (state) => {
      state.showModal = !state.showModal
    },
    setPositions: (state, { payload }: PayloadAction<Position[]>) => {
      state.positions = payload
    }
  }
})

export const { setPlayers, setFilterPlayersByName, toggleShowModal, setPositions } =
  appSlice.actions

export default appSlice.reducer
