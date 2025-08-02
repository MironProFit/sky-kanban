import { useState, useEffect } from 'react'
import Column from '../Column/Column'
import cards from '../../data'

export default function Main() {
    const [cardsData] = useState(cards)
  
    const columns = {
        'Без статуса': cardsData.filter((card) => card.status === 'Без статуса'),
        'Нужно сделать': cardsData.filter((card) => card.status === 'Нужно сделать'),
        'В работе': cardsData.filter((card) => card.status === 'В работе'),
        Тестирование: cardsData.filter((card) => card.status === 'Тестирование'),
        Готово: cardsData.filter((card) => card.status === 'Готово'),
    }
   
    return (
        <main className="main">
            <div className="container">
                <div className="main__block">
                    <div className="main__content">
                        {Object.keys(columns).map((status) => (
                            <Column key={status} title={status} cardsData={columns[status]} />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}
