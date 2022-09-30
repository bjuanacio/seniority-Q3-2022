import Card from '../../atoms/card/card'
import { SectionContainer } from './card-section.styles'
import { useCardSection } from './useCardSection/useCardSection'

function CardSection() {
  const { dataSource } = useCardSection()

  return (
    <SectionContainer>
      {dataSource.map((data) => {
        return (
          <Card
            key={data.id}
            id={data.id}
            image={data.image}
            firstName={data.firstName}
            lastName={data.lastName}
          />
        )
      })}
    </SectionContainer>
  )
}

export default CardSection
