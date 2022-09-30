import axios from 'axios'
import { PlayerProps } from '../interfaces/player'

const API_URL = 'https://api-exercise-q3.herokuapp.com/'

export interface FirebaseWrapper<T> {
  data: T
}

export class UserService {
  static async getPalyers() {
    const response = await axios.get<PlayerProps[]>(`${API_URL}player`, {
      headers: {
        author: '30'
      }
    })
    return response.data
  }
}

export class DeleteService {
  static async deletePalyer(id: string) {
    console.log(`${API_URL}/${id}`)
    await axios.delete(`${API_URL}player/${id}`)
  }
}
