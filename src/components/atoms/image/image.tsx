import { FC } from 'react'
import './image.scss'

export interface ImageProps {
  src?: string
}

const Image: FC<ImageProps> = ({ src }) => {
  const isValid = src && src.length > 0
  return (
    <>
      {isValid && <img src={src} />}
      {!isValid && <div className="image-not-found">NOT FOUND</div>}
    </>
  )
}

export default Image
