import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { SelectItem } from '../utils/interfaces/select-item'
import { PlayerService } from './player.service'

const axiosMock = new MockAdapter(axios)

describe('Players Service', () => {
  it('should get navigation properties', async () => {
    axiosMock.onGet().reply(200, [
      {
        id: '1',
        description: 'delantero'
      }
    ] as SelectItem[])
    const positions = await PlayerService.getPositions()
    expect(positions).toBeDefined()
    expect(positions).toBeInstanceOf(Array)
  })
})
