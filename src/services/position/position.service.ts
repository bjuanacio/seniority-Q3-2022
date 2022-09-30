import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL as string

export interface Position {
  id: number
  description: string
}
export class PositionService {
  static async getPositions() {
    const response = await axios.get<Position[]>(`${API_URL}position`)
    return response.data
  }

  static async getPosition(positionId: number) {
    const response = await axios.get<Position>(`${API_URL}position/${positionId}`)
    return response.data
  }
}
