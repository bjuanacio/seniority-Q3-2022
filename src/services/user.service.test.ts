import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { PlayerProps } from '../interfaces/player'
import { UserService } from './user.service'

const axiosMock = new MockAdapter(axios)

describe('User Service', () => {
  it('should get navigation properties', async () => {
    axiosMock.onGet().reply(200, [
      {
        id: 'test',
        firstName: 'test',
        lastName: 'test',
        image: 'test',
        attack: 'test',
        defense: 'test',
        skills: 'test',
        idAuthor: 'test',
        idPosition: 'test'
      }
    ] as PlayerProps[])
    const users = await UserService.getPalyers()
    expect(users).toBeDefined()
    expect(users).toBeInstanceOf(Array)
  })
})
