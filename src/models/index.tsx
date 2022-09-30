export interface IPlayerResponse {
  id: number
  firstName: string
  lastName: string
  image: string
  attack: number
  defense: number
  skills: number
}

export interface ITodoCreate {
  description: string
  finish_at: string
  id_author: number
  status: number
}

export interface ITodoEdit {
  description: string
  finish_at: string
  id_author: number
  status: number
  id: number
}
