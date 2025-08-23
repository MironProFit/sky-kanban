import { useState, useEffect, useRef } from 'react'
import Card from '../Card/Card'
import { CardsContainer, CardWrapper, ColumnTitle, MainColumn, TitleText } from './Column.styles'

export default function Column({ title, cardsData, $isDark }) {
    const [visibleCards, setVisibleCards] = useState([])
    const [isVisible, setIsVisible] = useState(false)
    const containerRef = useRef(null)
    const [isMobileView, setIsMobileView] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth < 600)
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    useEffect(() => {
        if (cardsData.length > 0) {
            const uniqueCards = Array.from(new Map(cardsData.map((card) => [card.id, card])).values())
            setVisibleCards(uniqueCards)
            setIsVisible(true)
        }
    }, [cardsData])
    useEffect(() => {
        const container = containerRef.current
        container.addEventListener('wheel', handleWheel, { passive: false })
        return () => {
            container.removeEventListener('wheel', handleWheel)
        }
    }, [])
    const handleWheel = (e) => {
        if (isMobileView) {
            e.preventDefault()
            e.currentTarget.scrollLeft += e.deltaY
        }
    }

    return (
        <MainColumn>
            <ColumnTitle>
                <TitleText>{title}</TitleText>
            </ColumnTitle>
            <CardsContainer ref={containerRef}>
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
