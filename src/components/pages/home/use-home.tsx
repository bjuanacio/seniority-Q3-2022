import { useEffect, useState } from 'react'
import { PlayerService } from '../../../services/player.service'
import { Player } from '../../../utils/interfaces/player'

const useHome = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [title, setTitle] = useState('Agregar jugador')
  const [players, setPlayers] = useState<Player[]>([])
  const [filteredPlayers, setFilteredPlayers] = useState<Player[]>([])

  const addPlayer = () => {
    setIsModalVisible(true)
  }

  const closeModal = () => {
    setIsModalVisible(false)
  }

  const getPlayers = async () => {
    const response = await PlayerService.getPlayers()
    setPlayers(response)
    setFilteredPlayers(response)
  }

  const postPlayer = async (player: Player) => {
    const response = await PlayerService.savePlayer(player)
    console.log(response)
    getPlayers()
  }

  const searchByName = (searchText: string) => {
    setFilteredPlayers(
      players.filter((player) => {
        const fullName = `${player.firstName} ${player.lastName}`
        return fullName.includes(searchText)
      })
    )
  }

  useEffect(() => {
    getPlayers()
  }, [])

  const savePlayer = (player: Player) => {
    const newPlayer = {
      ...player,
      idAuthor: 48
    } as Player
    postPlayer(newPlayer)
    closeModal()
  }
  return {
    isModalVisible,
    title,
    addPlayer,
    savePlayer,
    closeModal,
    players,
    searchByName,
    filteredPlayers
  }
}

export default useHome
