import { useContext } from 'react'
import AppContext from '../../../../context'
import { PlayerService } from '../../../../services/players'

const useTarget = (id: number) => {
  const { playerReducer, modal } = useContext(AppContext)
  const { playerDispatch } = playerReducer
  const { setShowModal } = modal

  const onDelete = async (playerId: number) => {
    try {
      await PlayerService.deletePlayer(playerId)
      playerDispatch({ type: 'deletePlayer', payload: playerId })
    } catch (e) {}
  }

  const onEdit = () => {
    playerDispatch({ type: 'getPlayer', payload: id })
    setShowModal((state) => !state)
  }

  return {
    onEdit,
    onDelete
  }
}

export default useTarget
