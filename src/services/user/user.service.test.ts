import { User, UserService } from './user.service'
import { axiosMock } from '../../mocks/axiosMock'

describe('User Service', () => {
  it('should get navigation properties', async () => {
    axiosMock.onGet().reply(200, [
      {
        email: 'myemail@domain.com'
      }
    ] as User[])
    const users = await UserService.getUsers()
    expect(users).toBeDefined()
    expect(users).toBeInstanceOf(Array)
  })
})
