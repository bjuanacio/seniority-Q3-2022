import { useCallback, useContext, useEffect } from 'react'

import AppContext from '../../../../context'
import { PlayerService } from '../../../../services/players'

const useTargetList = () => {
  const { playerReducer, modal } = useContext(AppContext)
  const { setShowModal } = modal
  const { playerState, playerDispatch } = playerReducer
  const { players } = playerState

  const refetch = useCallback(async () => {
    const payload = await PlayerService.getPlayers()
    playerDispatch({ type: 'getForServer', payload })
  }, [playerDispatch])

  useEffect(() => {
    refetch()
  }, [refetch])

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    playerDispatch({ type: 'searchPlayer', payload: value })
  }

  const onClose = () => {
    setShowModal((state) => !state)
  }

  return {
    players,
    onSearch,
    onClose
  }
}

export default useTargetList
