import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL as string

export interface FirebaseWrapper<T> {
  data: T
}

export interface User {
  username: string
  email: string
  token: string
}

const headersApi = { author: '33' }

export class UserService {
  static async getUsers() {
    const response = await axios.get<User[]>(API_URL)
    return response.data
  }

  static async getPlayer() {
    const response = await axios.get<any>(`${API_URL}player`, { headers: headersApi })
    return response.data
  }
}
