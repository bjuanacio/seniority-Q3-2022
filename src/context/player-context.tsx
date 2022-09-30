import { createContext, FC, ReactNode, useContext, useState } from 'react'
import { PlayerProps } from '../interfaces/player'

export const INITIAL_STATE = {
  players: [] as PlayerProps[],
  playerToEdit: undefined as PlayerProps | undefined,
  openPlayerForm: false,
  actions: {
    setPlayersList: (newPlayersList: PlayerProps[]) => {},
    handlePlayerToEdit: (player?: PlayerProps) => {},
    handleOpenForm: (open: boolean) => {}
  }
}

type InitialStateType = typeof INITIAL_STATE

const PlayerContext = createContext<InitialStateType>(INITIAL_STATE)

export const usePlayerContext = () => useContext(PlayerContext)

export const PlayerContextProvider: FC<{
  children: ReactNode
  initialState?: Partial<InitialStateType>
}> = ({ children, initialState }) => {
  const [players, setPlayers] = useState<PlayerProps[]>(
    initialState?.players ?? INITIAL_STATE.players
  )
  const [openPlayerForm, setOpenPlayerForm] = useState<boolean>(false)
  const [playerToEdit, setPlayerEdit] = useState<PlayerProps | undefined>(
    initialState?.playerToEdit
  )

  const setPlayersList = (newPlayersList: PlayerProps[]) => {
    setPlayers(newPlayersList)
  }

  const handleOpenForm = (open: boolean) => {
    setOpenPlayerForm(open)
  }

  const handlePlayerToEdit = (player?: PlayerProps) => {
    setPlayerEdit(player)
  }

  return (
    <PlayerContext.Provider
      value={{
        players,
        openPlayerForm,
        playerToEdit,
        actions: {
          setPlayersList,
          handleOpenForm,
          handlePlayerToEdit
        }
      }}
    >
      {children}
    </PlayerContext.Provider>
  )
}
