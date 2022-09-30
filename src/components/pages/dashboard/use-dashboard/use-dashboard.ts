import { useEffect, useState } from 'react'
import { Player } from '../../../../types/types'
import { getPlayers } from '../../../../utils/rest/rest'

function useDashboard() {
  const [playerList, setPlayerList] = useState<Player[]>([])
  const [filteredList, setFilteredList] = useState<Player[]>([])
  const [openForm, setopenForm] = useState(false)
  const [currentPlayer, setcurrentPlayer] = useState<Player | undefined>(undefined)
  const [playerDelete, setPlayerDelete] = useState<number | undefined>(undefined)

  const initializeData = async () => {
    const data = await getPlayers()
    setPlayerList(data)
  }

  const handleOpenForm = () => {
    setopenForm(true)
  }

  const filterList = (searchText: string) => {
    setFilteredList(() => {
      const filteredListTemp = playerList?.filter(
        (player) =>
          player.firstName.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()) ||
          player.lastName.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
      )
      return filteredListTemp
    })
  }

  const editPlayer = (id: number) => {
    const playerSelected = playerList.find((p) => p.id === id)
    setcurrentPlayer(playerSelected)
    handleOpenForm()
  }

  const deletePlayer = async (id: number) => {
    setPlayerDelete(id)
  }

  const deleteSelected = async () => {
    await deletePlayer(playerDelete as number)
    initializeData()
  }

  useEffect(() => {
    initializeData()
  }, [])

  useEffect(() => {
    setFilteredList(playerList)
  }, [playerList])

  useEffect(() => {
    if (playerDelete) {
      deleteSelected()
    }
  }, [playerDelete])

  return {
    playerList,
    filteredList,
    openForm,
    currentPlayer,
    setopenForm,
    filterList,
    editPlayer,
    deletePlayer,
    handleOpenForm
  }
}

export default useDashboard
