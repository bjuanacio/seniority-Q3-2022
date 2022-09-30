import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Player, Position } from '../../interfaces/interfaces'

export interface AppState {
  players: Player[]
  filteredPlayers: Player[]
  showModal: boolean
  positions: Position[]
  currentPlayer?: Player
}

const initialState: AppState = {
  players: [],
  filteredPlayers: [],
  showModal: false,
  positions: [],
  currentPlayer: undefined
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
    },
    setCurrentPlayer: (state, { payload }: PayloadAction<Player>) => {
      state.currentPlayer = payload
    },
    addPlayer: (state, { payload }: PayloadAction<Player>) => {
      state.players = [...state.players, payload]
      state.filteredPlayers = [...state.players, payload]
    },
    editPlayerStore: (state, { payload }: PayloadAction<Player>) => {
      state.players = state.players.map((player) => {
        if (player.id === payload.id) return payload
        return player
      })
      state.filteredPlayers = state.players.map((player) => {
        if (player.id === payload.id) return payload
        return player
      })
    },
    removePlayerStore: (state, { payload }: PayloadAction<Player>) => {
      state.players = state.players.filter((player) => player.id !== payload.id)
      state.filteredPlayers = state.players.filter((player) => player.id !== payload.id)
    }
  }
})

export const {
  setPlayers,
  setFilterPlayersByName,
  toggleShowModal,
  setPositions,
  addPlayer,
  editPlayerStore,
  setCurrentPlayer,
  removePlayerStore
} = appSlice.actions

export default appSlice.reducer
