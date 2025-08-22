import { useState, useEffect } from 'react'
import Card from '../Card/Card'
import { CardsContainer, CardWrapper, ColumnTitle, MainColumn, TitleText } from './Column.styles'

export default function Column({ title, cardsData, $isDark }) {
    const [visibleCards, setVisibleCards] = useState([])
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        if (cardsData.length > 0) {
            const uniqueCards = Array.from(new Map(cardsData.map((card) => [card.id, card])).values())
            setVisibleCards(uniqueCards)
            setIsVisible(true)
        }
    }, [cardsData])

    // const ScrollableCards = () => {
    const handleWheel = (e) => {
        e.preventDefault()
        e.currentTarget.scrollLeft += e.deltaY
    }

    return (
        <MainColumn>
            <ColumnTitle>
                <TitleText>{title}</TitleText>
            </ColumnTitle>
            <CardsContainer onWheel={handleWheel}>
                {visibleCards.length === 0 ? (
                    <p>Загрузка данных...</p>
                ) : (
                    visibleCards.map((card) => (
                        <CardWrapper key={card.id} className={`${isVisible ? 'visible' : ''}`}>
                            <Card $isDark={$isDark} cardsData={cardsData} {...card} />
                        </CardWrapper>
                    ))
                )}
            </CardsContainer>
        </MainColumn>
    )
}
