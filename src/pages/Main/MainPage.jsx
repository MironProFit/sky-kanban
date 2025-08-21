import { useMemo, useState } from 'react'

import cards from '../../data/data'
import { MainContainer, MainBlock, MainContent } from './MainPage.styles'
import Column from '../../components/Layout/Column'
import { Outlet } from 'react-router-dom'
import { Container } from '../../components/Styles/GlobalStyles'

export default function MainPage({ $isDark }) {
    const [cardsData] = useState(cards)
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
    Container
    return (
        <MainContainer $isDark={$isDark}>
            <Container>
                <MainBlock>
                    <MainContent>
                        {Object.keys(columns).map((status) => (
                            <Column $isDark={$isDark} key={status} title={status} cardsData={columns[status]} />
                        ))}
                    </MainContent>
                </MainBlock>
            </Container>
        </MainContainer>
    )
}

//  return (
//         <main className="main">
//             <div className="container">
//                 <div className="main__block">
//                     <div className="main__content">
//                         {Object.keys(columns).map((status) => (
//                             <Column key={status} title={status} cardsData={columns[status]} />
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </main>
//     )
