import { useState, useEffect } from 'react'
import { PlayerProps } from '../../../../interfaces/player'
import { usePlayerContext } from '../../../../context/player-context'
import { DeleteService } from '../../../../services/user.service'

type UseCardSection = () => {
  dataSource: PlayerProps[]
  openPlayerForm: boolean
  playerToEdit: PlayerProps | undefined
  actions: {
    editPlayer: (item: PlayerProps) => () => void
    deletePlayer: (id: string) => () => Promise<void>
    setPlayersList: (newPokemonsList: PlayerProps[]) => void
  }
}

export const useCardSection: UseCardSection = () => {
  const [dataSource, setDataSource] = useState<PlayerProps[]>([])

  const {
    players,
    playerToEdit,
    openPlayerForm,
    actions: { handleOpenForm, handlePlayerToEdit, setPlayersList }
  } = usePlayerContext()

  useEffect(() => {
    const newListDataSource: PlayerProps[] = players.map((item) => ({
      id: item.id,
      firstName: item.firstName,
      lastName: item.lastName,
      image: item.image,
      attack: item.attack,
      defense: item.defense,
      skills: item.skills,
      idPosition: item.idPosition,
      idAuthor: item.idAuthor
    }))

    setDataSource(newListDataSource)
  }, [players])

  const editPlayer = (item: PlayerProps) => () => {
    handlePlayerToEdit(item)
    handleOpenForm(true)
  }

  const deleteItemPlayer = (id: string) => async () => {
    try {
      console.log('item')
      await DeleteService.deletePalyer(id)
      const newListPlayers = players.filter((element) => element.id !== id)
      setPlayersList(newListPlayers)
    } catch (error) {
      alert('No se pudo eliminar el jugador.')
    }
  }

  return {
    dataSource,
    openPlayerForm,
    playerToEdit,
    actions: {
      editPlayer,
      deletePlayer: deleteItemPlayer,
      setPlayersList
    }
  }
}
