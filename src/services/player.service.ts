import axios from 'axios'
import { Player } from '../utils/interfaces/player'
import { SelectItem } from '../utils/interfaces/select-item'

const API_URL = 'https://api-exercise-q3.herokuapp.com'

export interface FirebaseWrapper<T> {
  data: T
}

export class PlayerService {
  static async getPositions() {
    const response = await axios.get<SelectItem[]>(`${API_URL}/position`)
    return response.data
  }

  static async savePlayer(player: Player) {
    const response = await axios.post(`${API_URL}/player`, player)
    return response.data
  }

  static async getPlayers() {
    const response = await axios.get<Player[]>(`${API_URL}/player`, {
      headers: {
        author: '48'
      }
    })
    return response.data
  }
}
