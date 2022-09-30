import axios from 'axios'
import { createContext, useContext, useEffect, useState } from 'react'
import { Player, Position } from '../interfaces/player'

interface StoreProviderProps {
  children: React.ReactNode
}

interface StoreProps {
  players: Player[]
  positions: Position[]
  searchWord: string
  modalState: '' | 'add' | 'edit'
  addPlayer: (arg: Player) => void
  editPlayer: (arg: Player) => void
  deletePlayer: (arg: number) => void
  setSearchWord: (arg: string) => void
  selectedPlayerId: number | null
  setSelectedPlayerId: (arg: number | null) => void
  setModalState: (arg: '' | 'add' | 'edit') => void
}

export const StoreContext = createContext<StoreProps>({
  players: [],
  positions: [],
  searchWord: '',
  selectedPlayerId: null,
  modalState: '',
  addPlayer: () => {},
  deletePlayer: () => {},
  setSearchWord: () => {},
  setModalState: () => {},
  setSelectedPlayerId: () => {},
  editPlayer: () => {}
})

const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
  const [players, setPlayers] = useState<Player[]>([])
  const [positions, setPositions] = useState<Position[]>([])
  const [searchWord, setSearchWord] = useState('')
  const [modalState, setModalState] = useState<'' | 'add' | 'edit'>('')
  const [selectedPlayerId, setSelectedPlayerId] = useState<null | number>(null)

  const addPlayer = async (player: Player) => {
    const res = await axios.post(process.env.REACT_APP_API_URL + 'player', player)
    const data = res.data as Player
    const newPlayer = { ...data } as unknown as Player
    setPlayers((prev) => [newPlayer, ...prev])
  }

  const editPlayer = async (player: Player) => {
    const { id } = player
    await axios.patch(process.env.REACT_APP_API_URL + 'player/' + id, player)
    const playerIndex = players.findIndex((py) => py.id === id)
    const auxPlayers = [...players]
    auxPlayers[playerIndex] = player
    setPlayers([...auxPlayers])
  }

  const getPlayers = async () => {
    const res = await axios.get(process.env.REACT_APP_API_URL + 'player', {
      headers: { author: process.env.REACT_APP_AUTHOR_ID || '32' }
    })
    setPlayers(res.data)
  }

  const deletePlayer = async (id: number) => {
    await axios.delete(process.env.REACT_APP_API_URL + 'player/' + id.toString())
    setPlayers((prev) => prev.filter((player) => player.id !== id))
  }

  const getPositions = async () => {
    const res = await axios.get(process.env.REACT_APP_API_URL + 'position')
    setPositions(res.data)
  }

  useEffect(() => {
    getPlayers()
    getPositions()
  }, [])

  return (
    <StoreContext.Provider
      value={{
        players,
        addPlayer,
        searchWord,
        setSearchWord,
        deletePlayer,
        modalState,
        setModalState,
        positions,
        editPlayer,
        selectedPlayerId,
        setSelectedPlayerId
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}

export default StoreProvider
export const useStore = () => useContext(StoreContext)
