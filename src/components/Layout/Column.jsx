import { useState, useEffect } from 'react'
import Card from '../Card/Card'
import { CardsContainer, CardWrapper, ColumnTitle, MainColumn, TitleText } from './Column.styles'
import { useAppContext } from '../../routes/AppContext'
import CardStub from '../Card/CardStub'

export default function Column({ title, cardsData, $isDark }) {
    const { setLoadingCard } = useAppContext()
    const [visibleCards, setVisibleCards] = useState([])
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        if (cardsData && cardsData.length > 0) {
            const uniqueCards = Array.from(new Map(cardsData.map((card) => [card.id, card])).values())
            setVisibleCards(uniqueCards)
            setIsVisible(true)
        } else {
            setVisibleCards([])
            setIsVisible(false)
        }
        setLoadingCard(false)
    }, [cardsData, setLoadingCard])



    return (
        <MainColumn>
            <ColumnTitle>
                <TitleText>{title}</TitleText>
            </ColumnTitle>
            <CardsContainer $isDark={$isDark}>
                {visibleCards.length > 0 ? (
                    visibleCards.map((card) => (
                        <CardWrapper key={card.id} className={isVisible ? 'visible' : ''}>
                            <Card $isDark={$isDark} cardsData={cardsData} {...card} />
                        </CardWrapper>
                    ))
                ) : (
                    <CardStub />
                )}
            </CardsContainer>
        </MainColumn>
    )
}
