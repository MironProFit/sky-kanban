import { CardsContainer, CardItem, CardWrapper, CardGroup, Theme, ThemeText, CardContent, CardTitle, CardDate } from './Card.styles'
import { useAppContext } from '../../routes/AppContext'

export default function CardStub() {
    const { $isDark } = useAppContext()
    return (
        <CardsContainer>
            <CardItem>
                <CardWrapper $isDark={$isDark} style={{ opacity: 0.8 }} />
            </CardItem>
        </CardsContainer>
    )
}
