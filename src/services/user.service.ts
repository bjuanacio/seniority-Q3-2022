import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL as string

export interface FirebaseWrapper<T> {
  data: T
}

export interface Player {
  id?: number
  firstName: string
  lastName: string
  image: string
  attack: number
  defense: number
  skills: number
  idAuthor: number
  idPosition: number
}

export class UserService {
  static async getPlayers() {
    //console.log(API_URL)
    const response = await axios.get<Player[]>(`${API_URL}/player`, {
      headers: {
        // Token : `Bearer ${sessionStorage.getItem('token')}`
        author: '55'
      }
    })
    //console.log(response.data)
    return response.data
  }
}

/*
  static async existUsers(value = '') {
    const response = await axios.get<UserExist>(`${API_URL}/users/exist-name/${value}`)
    //console.log(response.data)
    return response.data
  }

  static async loginUsers(value: { username: string; password: string }) {
    //console.log(value)
    //axios.post<Credentials, Login>()
    const response = await axios.post(`${API_URL}/users/login`, value)
    //console.log(response, 'd')
    return response.data as unknown as LoginReturn
  }

  static async userBooks(value = '') {
    console.log(value)
    const response = await axios.get<Books[]>(`${API_URL}/books/owner`, {
      headers: {
        // Token : `Bearer ${sessionStorage.getItem('token')}`
        Authorization: `token ${value}`
      }
    })
    console.log(response.data)
    return response.data
  }
*/
