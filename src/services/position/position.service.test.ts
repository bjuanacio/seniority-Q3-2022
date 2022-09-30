import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { Position, PositionService } from './position.service'

const axiosMock = new MockAdapter(axios)

describe('Position Service', () => {
  const mockedPosition: Position = {
    id: 1,
    description: 'Delantero'
  }

  it('should get all the positions available', async () => {
    axiosMock.onGet().reply(200, [mockedPosition] as Position[])
    const positions = await PositionService.getPositions()
    expect(positions).toBeInstanceOf(Array)
    expect(positions[0]).toEqual(mockedPosition)
  })

  it('should get a position by its id', async () => {
    const mockedPositionId = 1
    axiosMock.onGet().reply(200, mockedPosition as Position)

    const position = await PositionService.getPosition(mockedPositionId)
    expect(position).toEqual(mockedPosition)
  })
})
