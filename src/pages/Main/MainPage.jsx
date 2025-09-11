import { useMemo, useState } from 'react'
import { cards } from '../../data/data'
import { MainContainer, MainBlock, MainContent } from './MainPage.styles'
import Column from '../../components/Layout/Column'
import { Container } from '../../components/Styles/GlobalStyle'
import { useAppContext } from '../../routes/AppContext'
import Loading from '../Loading/LoadingModal'

export default function MainPage() {
    const { isModal, isMobile, isUserMenuOpen, toggleUserMenu, $isDark, isLoading, userData } = useAppContext()

    const { transformedTasks, columns } = useMemo(() => {
        const tasks = Array.isArray(userData) ? userData : []
        const transformedTasks = tasks.map((task) => ({
            id: task._id,
            userId: task.userId,
            title: task.title,
            topic: task.topic,
            date: task.date,
            description: task.description,
            status: task.status,
        }))
        // console.log(transformedTasks)

        const columns = {
            'Без статуса': transformedTasks.filter((card) => card.status === 'Без статуса'),
            'Нужно сделать': transformedTasks.filter((card) => card.status === 'Нужно сделать'),
            'В работе': transformedTasks.filter((card) => card.status === 'В работе'),
            Тестирование: transformedTasks.filter((card) => card.status === 'Тестирование'),
            Готово: transformedTasks.filter((card) => card.status === 'Готово'),
        }

        return { transformedTasks, columns }
    }, [userData])

    return (
        <MainContainer $isModal={isModal} $isMobile={isMobile} $isDark={$isDark}>
            <Container>
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
