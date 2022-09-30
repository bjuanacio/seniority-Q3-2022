import { useEffect, useState } from 'react'
import PlayersService, { Player } from '../../services/player.service'

const useApp = () => {
  const [showModal, setShowModal] = useState(false)
  const [players, setPlayers] = useState<Player[]>([])
  const [search, setSearch] = useState('')
  const [isEdit, setIsEdit] = useState(false)
  const [actualPlayer, setActualPlayer] = useState<Player | null>(null)

  const getPlayers = async () => {
    const playersResponse = (await PlayersService.getPlayers()) || []
    setPlayers(playersResponse)
  }

  useEffect(() => {
    getPlayers()
  }, [])

  const toggleModal = () => {
    setShowModal(!showModal)
  }

  const handleSearch = (value: string) => {
    setSearch(value)
  }

  const handleClickAdd = () => {
    setIsEdit(false)
    setActualPlayer(null)
    toggleModal()
  }

  const addPlayer = async (player: Player) => {
    await PlayersService.createPlayer(player)
    getPlayers()
    toggleModal()
  }

  const editPlayer = async (player: Player) => {
    await PlayersService.updatePlayer(player)
    getPlayers()
    toggleModal()
  }

  const handleAddOrEdit = (player: Player) => {
    if (isEdit) {
      editPlayer(player)
      return
    }
    addPlayer(player)
  }

  const handleOnEditClick = (player: Player) => {
    setIsEdit(true)
    setActualPlayer(player)
    toggleModal()
  }

  return {
    showModal,
    toggleModal,
    players,
    search,
    handleSearch,
    isEdit,
    handleClickAdd,
    handleAddOrEdit,
    actualPlayer,
    setActualPlayer,
    getPlayers,
    handleOnEditClick
  }
}

export default useApp
