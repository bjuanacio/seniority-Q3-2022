import { act, renderHook } from '@testing-library/react-hooks'
import useHeaderSection from './useHeaderSection'
import { PlayerContextProvider } from '../../../../context/player-context'
import * as SERVICES from '../../../../services/user.service'
import { PlayerProps } from '../../../../interfaces/player'

describe('useHeaderSection tests', () => {
  const renderCustomHook = () => {
    return renderHook(() => useHeaderSection(), {
      wrapper: ({ children }: { children: JSX.Element }) => (
        <PlayerContextProvider>{children}</PlayerContextProvider>
      )
    })
  }

  it('should open modal when handleOpenPokemonForm is executed', () => {
    const { result } = renderCustomHook()
    act(() => {
      result.current.actions.handleOpenPlayerForm()
    })

    expect(result.current.isOpenForm).toBeTruthy()
  })
})
