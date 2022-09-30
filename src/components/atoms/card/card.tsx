import { FC } from 'react'
import DeleteIcon from '../../../assets/delete-icon'
import { useCardSection } from '../../molecules/cards-section/useCardSection/useCardSection'
import { CardContainer, ImgContainer } from './card.styles'

interface PlayerCardProps {
  id: string
  firstName: string
  lastName: string
  image: string
}

const Card: FC<PlayerCardProps> = ({ image, firstName, lastName, id }) => {
  const {
    actions: { deletePlayer }
  } = useCardSection()
  return (
    <CardContainer className="grid-item">
      <ImgContainer src={image} alt={id} />
      <div className="name">{`${firstName} ${lastName}`}</div>
      <div className="buttons">
        <DeleteIcon onClick={deletePlayer(id)} style={{ cursor: 'ponter' }} />
      </div>
    </CardContainer>
  )
}

export default Card
