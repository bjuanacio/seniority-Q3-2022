import Slider from '../../components/atoms/slider/slider'
import DeleteIcon from './assets/delete-icon.svg'
import EditIcon from './assets/edit-icon.svg'
import CloseIcon from './assets/close-icon.svg'
import { FC, useState, useEffect } from 'react'
import { Players } from '../../interfaces/interfaces'
import { UserService } from '../../services/user.service'

export interface HomeProps {
  setPleyerById: (value: Players) => void
  navigateFunction: (value: string) => void
  searchValue: string
  searchCategoryPlayers: string
  setSearchValue: (value: string) => void
  setSearchCategoryPlayers: (value: string) => void
  setIsEdited: (value: boolean) => void
}
export const Home: FC<HomeProps> = (props: HomeProps) => {
  const [players, setPlayers] = useState<Players[]>([])

  return (
    <div className="app">
      <h1 className="app__title">MI EQUIPO</h1>
      <div>
        <Slider label="Puntaje" value={55} />
      </div>
      <div>
        <img src={DeleteIcon} alt="delete-icon" />
        <img src={EditIcon} alt="edit-icon" />
        <img src={CloseIcon} alt="close-icon" />
      </div>
    </div>
  )
}
