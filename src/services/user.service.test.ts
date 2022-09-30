import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { Player, UserService } from './user.service'

const axiosMock = new MockAdapter(axios)

describe('User Service', () => {
  it('should get navigation properties', async () => {
    /*axiosMock.onGet().reply(200, [
      {
        email: 'myemail@domain.com'
      }
    ] as Player[])
    const users = await UserService.getPlayers()
    expect(users).toBeDefined()
    expect(users).toBeInstanceOf(Array)*/
  })
})
