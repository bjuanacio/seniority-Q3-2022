import { FC } from 'react'
import ImageCard from '../../atoms/image-card/image-card'
import StatsCard from '../../molecules/stats-card/stats-card'
import DeleteIcon from '../../../assets/delete-icon.svg'
import EditIcon from '../../../assets/edit-icon.svg'
import './card.scss'

interface StatBoxProps {
  id: number
  name?: string
  value?: number
}

export interface CardProps {
  stats: StatBoxProps[]
  label: string
  image: string
}

const Card: FC<CardProps> = ({ stats, label, image }) => {
  return (
    <div className="card">
      <ImageCard label={label ?? ''} image={image ?? ''} />
      <div className="card__container">
        <StatsCard stats={stats} />
        <div className="card__container__button">
          <img src={EditIcon} alt="edit-icon" />
          <img src={DeleteIcon} alt="delete-icon" />
        </div>
      </div>
    </div>
  )
}

export default Card
