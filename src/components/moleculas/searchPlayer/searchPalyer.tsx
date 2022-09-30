import { Input } from '../../atoms/input/input'
import { Select } from '../../atoms/select/select'
import { useState, useEffect } from 'react'
import { UserService } from '../../../services/user.service'
import { ICategory } from '../../../interfaces/interfaces'
import { FC } from 'react'
import './searchPlayer.scss'

export interface SearchPlayerProps {
  setSearchValue: (value: string) => void
  setSearchCategoryPlayer: (value: string) => void
}
export const SearchPlayer: FC<SearchPlayerProps> = (props: SearchPlayerProps) => {
  const [categories, setCategories] = useState<ICategory[]>([])
  useEffect(() => {
    UserService.PlayerByCategory().then((response: ICategory[]) => {
      if (response.length > 0) {
        setCategories(response)
      }
    })
  }, [])

  return (
    <section className="search">
      <div className="search__input">
        <Input
          placeholder="Jugador"
          onChange={(event: React.FormEvent<HTMLInputElement>) =>
            props.setSearchValue(event.currentTarget.value)
          }
          type="text"
        ></Input>
      </div>
      <div className="search__select">
        <Select
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
            props.setSearchCategoryPlayer(event.currentTarget.value)
          }
          options={categories}
        ></Select>
      </div>
    </section>
  )
}
