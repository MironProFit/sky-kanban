import { useState, useEffect } from 'react'
import Card from '../Card/Card'
import { CardsContainer, CardWrapper, ColumnTitle, MainColumn, TitleText } from './Column.styles'
import { useAppContext } from '../../routes/AppContext'

export default function Column({ title, cardsData, $isDark }) {
    // const { userData } = useAppContext()
    const [visibleCards, setVisibleCards] = useState([])
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        if (cardsData.length > 0) {
            const uniqueCards = Array.from(new Map(cardsData.map((card) => [card.id, card])).values())
            setVisibleCards(uniqueCards)
            setIsVisible(true)
        }
    }, [cardsData])

    return (
        <MainColumn>
            <ColumnTitle>
                <TitleText>{title}</TitleText>
            </ColumnTitle>
            <CardsContainer $isDark={$isDark}>
                {visibleCards.map((card) => (
                    <CardWrapper key={card.id} className={`${isVisible ? 'visible' : ''}`}>
                        <Card $isDark={$isDark} cardsData={cardsData} {...card} />
                    </CardWrapper>
                ))}
            </CardsContainer>
        </MainColumn>
    )
}
