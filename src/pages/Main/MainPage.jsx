import { useMemo, useState } from 'react'
import { cards } from '../../data/data'
import { MainContainer, MainBlock, MainContent } from './MainPage.styles'
import Column from '../../components/Layout/Column'
import { Container } from '../../components/Styles/GlobalStyle'
import { useAppContext } from '../../routes/AppContext'
import Loading from '../Loading/LoadingModal'

export default function MainPage() {
    const { isModal, isMobile, isUserMenuOpen, toggleUserMenu, $isDark, isLoading, userTasks } = useAppContext()

    const [cardsData] = useState(cards)
    console.log([cardsData])
    console.log([userTasks])

 const columns = useMemo(() => {
  // убедимся, что данные — это массив объектов
  const data = Array.isArray(cardsData) && Array.isArray(cardsData[0]) ? cardsData[0] : cardsData;

  return {
    'Без статуса': data.filter((card) => card.status === 'Без статуса'),
    'Нужно сделать': data.filter((card) => card.status === 'Нужно сделать'),
    'В работе': data.filter((card) => card.status === 'В работе'),
    'Тестирование': data.filter((card) => card.status === 'Тестирование'),
    'Готово': data.filter((card) => card.status === 'Готово'),
  };
}, [cardsData]);

    return (
        <MainContainer
            onClick={() => {
                isUserMenuOpen && toggleUserMenu()
            }}
            $isModal={isModal}
            $isMobile={isMobile}
            $isDark={$isDark}
        >
            <Container>
                {isLoading && <Loading />}
                <MainBlock $isDark={$isDark}>
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
