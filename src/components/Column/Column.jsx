import { useState, useEffect } from 'react'
import Card from '../Card/Card'

export default function Column({ title, cardsData }) {
    const [loading, setLoading] = useState(true)
    const [visibleCards, setVisibleCards] = useState([])
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        if (cardsData.length > 0) {
            const uniqueCards = Array.from(new Map(cardsData.map((card) => [card.id, card])).values())
            setLoading(true)
            let index = 0
            const interval = setInterval(() => {
                if (index < uniqueCards.length) {
                    setLoading(false)

                    setVisibleCards((prevCards) => {
                        return [...prevCards, uniqueCards[index]]
                    })

                    index++
                    setIsVisible(false)
                    setTimeout(() => setIsVisible(true), 50)
                    setIsVisible(true)
                } else {
                    clearInterval(interval)
                }
            }, 500)
            return () => clearInterval(interval)
        } else {
            setLoading(false)
        }
    }, [cardsData])

    return (
        <div className="main__column">
            <div className="column__title">
                <p>{title}</p>
            </div>
            <div className="cards">
                {loading ? (
                    <p>Загрузка данных...</p>
                ) : (
                    visibleCards.map((card) => (
                        <div className={`card ${isVisible ? 'visible' : ''}`}>
                            <Card {...card} />
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}
