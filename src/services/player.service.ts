import axios from 'axios'
import { Player } from '../shared/interfaces/player'

export class PlayerService {
  static async getPlayers() {
    const response = await axios.get(`${'https://api-exercise-q3.herokuapp.com/'}${'player'}`, {
      headers: { author: '35' }
    })
    const responseData: Player[] = response.data
    return responseData
  }

  static async postPlayer(body: Player) {
    console.log('post')
    await axios.post(`${'https://api-exercise-q3.herokuapp.com/'}${'player'}`, body)
  }

  static async deletePlayer(player: any) {
    await axios.delete(`${'https://api-exercise-q3.herokuapp.com/'}${'player'}/${player.id}`)
  }

  static async modifyPlayer(body: any) {
    console.log('patch')
    await axios.patch(`${'https://api-exercise-q3.herokuapp.com/'}${'player'}/${body.id}`, body)
  }
}
