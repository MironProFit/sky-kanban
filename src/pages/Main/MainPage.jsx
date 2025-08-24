import { useEffect, useMemo, useRef, useState } from 'react'
import cards from '../../data/data'
import { MainContainer, MainBlock, MainContent } from './MainPage.styles'
import Column from '../../components/Layout/Column'
import { Container } from '../../components/Styles/GlobalStyle'

export default function MainPage({ $isDark }) {
    const [cardsData] = useState(cards)
    const containerRef = useRef(null)

    const columns = useMemo(
        () => ({
            'Без статуса': cardsData.filter((card) => card.status === 'Без статуса'),
            'Нужно сделать': cardsData.filter((card) => card.status === 'Нужно сделать'),
            'В работе': cardsData.filter((card) => card.status === 'В работе'),
            Тестирование: cardsData.filter((card) => card.status === 'Тестирование'),
            Готово: cardsData.filter((card) => card.status === 'Готово'),
        }),
        [cardsData]
    )
    useEffect(() => {
        const container = containerRef.current
        container.addEventListener('wheel', handleWheel, { passive: false })
        return () => {
            container.removeEventListener('wheel', handleWheel)
        }
    }, [])
    const handleWheel = (e) => {
        // if (isMobileView) {
        e.preventDefault()
        e.currentTarget.scrollLeft += e.deltaY
        // }
    }

    return (
        <MainContainer $isDark={$isDark}>
            <Container>
                <MainBlock>
                    <MainContent ref={containerRef} 
                    // style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}
                    >
                        {Object.keys(columns).map((status) => (
                            <Column $isDark={$isDark} key={status} title={status} cardsData={columns[status]} />
                        ))}
                    </MainContent>
                </MainBlock>
            </Container>
        </MainContainer>
    )
}
