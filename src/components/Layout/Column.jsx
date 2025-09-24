import { useState, useEffect } from 'react'
import Card from '../Card/Card'
import { CardsContainer, CardWrapper, ColumnTitle, MainColumn, TitleText } from './Column.styles'
import { useAppContext } from '../../routes/AppContext'
import CardStub from '../Card/CardStub'
import { useDrop } from 'react-dnd'

// Инnеграция DND

export default function Column({ title, $isDark, cardsData, onCardDrop }) {
    const { setLoadingCard, loadingCard } = useAppContext()
    const [visibleCards, setVisibleCards] = useState([])
    const [isVisible, setIsVisible] = useState(false)

    //Интеграция DND
    const [, drop] = useDrop(
        () => ({
            accept: 'CARD',
            drop(item, monitor) {
                if (!monitor.didDrop()) {
                    // <-- ЭТО ВАЖНО
                    onCardDrop(item.id, title)
                }
            },
        }),
        [cardsData]
    )

    useEffect(() => {
        // setLoadingCard(true)

        if (cardsData && cardsData.length > 0) {
            const uniqueCards = Array.from(new Map(cardsData.map((card) => [card.id, card])).values())
            setVisibleCards(uniqueCards)
            setIsVisible(true)
        } else {
            setVisibleCards([])
            setIsVisible(false)
        }
        // setLoadingCard(false)
    }, [cardsData])

    return (
        <MainColumn ref={drop}>
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
