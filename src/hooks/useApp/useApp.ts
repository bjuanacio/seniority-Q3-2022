import { useEffect } from 'react'
import { usePlayerContext } from '../../context/player-context'
import { PlayerProps } from '../../interfaces/player'
import { UserService } from '../../services/user.service'

export type UseApp = () => {
  openPlayerForm: boolean
}

const useApp: UseApp = () => {
  const {
    openPlayerForm,
    actions: { setPlayersList }
  } = usePlayerContext()

  useEffect(() => {
    UserService.getPalyers().then((players: PlayerProps[]) => setPlayersList(players))
  }, [])

  return {
    openPlayerForm
  }
}

export default useApp
