import { cleanup } from '@testing-library/react'
import { axiosMock } from '../setupTests'
import { PlayerService } from './player.service'

describe('Services', () => {
  afterEach(() => {
    cleanup()
    jest.clearAllMocks()
  })
  test('Should get a player list', async () => {
    axiosMock.get.mockResolvedValueOnce({
      data: [{}, {}]
    })
    const players = await PlayerService.getPlayers()
    expect(players).toHaveLength(2)
  })
})
