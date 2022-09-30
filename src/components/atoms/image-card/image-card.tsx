import { FC } from 'react'
import './image-card.scss'

export interface ImageCardProps {
  label?: string
  image?: string
}

const ImageCard: FC<ImageCardProps> = ({ label, image }) => {
  return (
    <div className="image-card">
      <img
        className="image-card__image"
        src={image ?? 'http://www.gettyimages.com/detail/1325105287'}
      />
      <div className="image-card__text-over">
        <h2 className="__title">{label ?? ''}</h2>
      </div>
    </div>
  )
}

export default ImageCard
