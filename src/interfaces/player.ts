export interface Player {
  firstName: string
  lastName: string
  image: string
  attack: number
  defense: number
  skills: number
  idAuthor: number
  idPosition: number
  id?: number
}

export interface SearchPlayerProps {
  search: string
}

export interface UpdatePlayerProps {
  firstName?: string
  lastName?: string
  image?: string
  attack?: number
  defense?: number
  skills?: number
  idAuthor?: number
  idPosition?: number
}

export interface Position {
  id: string
  description: string
}
