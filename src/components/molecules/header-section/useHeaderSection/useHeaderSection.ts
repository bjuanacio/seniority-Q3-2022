import { usePlayerContext } from '../../../../context/player-context'
import { UserService } from '../../../../services/user.service'

export type UseHeaderSection = () => {
  isOpenForm: boolean
  actions: {
    handleSearch: (value: string) => Promise<void>
    handleOpenPlayerForm: () => void
  }
}

export const useHeaderSection: UseHeaderSection = () => {
  const {
    players,
    openPlayerForm,
    actions: { setPlayersList, handleOpenForm, handlePlayerToEdit }
  } = usePlayerContext()

  const handleSearch = async (value: string) => {
    try {
      let newList = [...players]

      if (value === '' || !value) {
        newList = await UserService.getPalyers()
      } else {
        const palyerFound = newList.filter((player) =>
          player.firstName.toLocaleLowerCase().includes(value.toLocaleLowerCase())
        )
        newList = [...palyerFound]
      }

      setPlayersList(newList)
    } catch (error) {}
  }

  const handleOpenPlayerForm = () => {
    handlePlayerToEdit()
    handleOpenForm(true)
  }

  return {
    isOpenForm: openPlayerForm,
    actions: {
      handleSearch,
      handleOpenPlayerForm
    }
  }
}

export default useHeaderSection
