import { CardsContainer, CardItem, CardWrapper } from './Card.styles'
import { useAuthContext } from '../../context/AuthContext'

export default function CardStub() {
  const { $isDark } = useAuthContext()
  return (
    <CardsContainer>
      <CardItem>
        <CardWrapper $isDark={$isDark} style={{ opacity: 0.8 }} />
      </CardItem>
    </CardsContainer>
  )
}
