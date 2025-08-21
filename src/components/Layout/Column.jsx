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

    // return (
    //     <div className="main__column">
    //         <div className="column__title">
    //             <p>{title}</p>
    //         </div>
    //         <div className="cards">
    //             {visibleCards.length === 0 ? (
    //                 <p>Загрузка данных...</p>
    //             ) : (
    //                 visibleCards.map((card) => (
    //                     <div key={card.id} className={`card ${isVisible ? 'visible' : ''}`}>
    //                         <Card cardsData={cardsData} {...card} />
    //                     </div>
    //                 ))
    //             )}
    //         </div>
    //     </div>
    // )
    CardsContainer
    return (
        <MainColumn>
            <ColumnTitle>
                <TitleText>{title}</TitleText>
            </ColumnTitle>
            <CardsContainer>
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
