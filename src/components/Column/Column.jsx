import { useState, useEffect } from 'react'
import Card from '../Card/Card'
import cards from '../../data'

export default function Column({ title, cardsData }) {
    const [loading, setLoading] = useState(true)
    const [visibleCards, setVisibleCards] = useState([])
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        console.log(visibleCards)
        console.log(cardsData)

        if (cardsData.length > 0) {
            setLoading(true)
            let index = 0
            const interval = setInterval(() => {
                // setInterval(() => {
                if (index < cardsData.length) {
                    setLoading(false)

                    setVisibleCards((prevCards) => [...prevCards, ...cardsData.slice(index, index + 1)])
                    setIsVisible(false) // скрываем до обновления
                    setTimeout(() => setIsVisible(true), 50) // добавляем небольшую задержку для начала анимации
                    setIsVisible(true)
                    index++
                } else {
                    clearInterval(interval)
                }
            }, 500)
            // }, 1000)
            // Возвращаем функцию очистки интервала
            return () => clearInterval(interval)
        } else {
            setLoading(false)
        }
    }, [cardsData])
    console.log(visibleCards)

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
                            <Card {...card} key={`${card.id}`} />
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}
