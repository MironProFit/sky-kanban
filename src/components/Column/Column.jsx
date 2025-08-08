import { useState, useEffect } from 'react'
import Card from '../Card/Card'

export default function Column({ title }) {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 2000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="main__column">
            {loading ? (
                <p>Загрузка данных...</p>
            ) : (
                <>
                    <div className="column__title">
                        <p>{title}</p>
                    </div>
                    <div className="cards">
                        <Card />
                    </div>
                </>
            )}
        </div>
    )
}
