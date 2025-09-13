import { useEffect, useMemo, useState } from 'react'
import { cards } from '../../data/data'
import { MainContainer, MainBlock, MainContent } from './MainPage.styles'
import Column from '../../components/Layout/Column'
import { Container } from '../../components/Styles/GlobalStyle'
import { useAppContext } from '../../routes/AppContext'
import Loading from '../Loading/LoadingModal'

export default function MainPage() {
    const { isModal, isMobile, isUserMenuOpen, toggleUserMenu, $isDark, isLoading, userData } = useAppContext()
    const [transformedTasks, setTransformedTasks] = useState([])
    const [columns, setColumns] = useState({
        'Без статуса': [],
        'Нужно сделать': [],
        'В работе': [],
        Тестирование: [],
        Готово: [],
    })

    useEffect(() => {
        if (Array.isArray(userData)) {
            const tasks = userData.map((task) => ({
                id: task._id,
                userId: task.userId,
                title: task.title,
                topic: task.topic,
                date: task.date,
                description: task.description,
                status: task.status,
            }))
            setTransformedTasks(tasks)
        } else {
            setTransformedTasks([])
        }
    }, [userData])

    useEffect(() => {
        const updatedColumns = {
            'Без статуса': transformedTasks.filter((card) => card.status === 'Без статуса'),
            'Нужно сделать': transformedTasks.filter((card) => card.status === 'Нужно сделать'),
            'В работе': transformedTasks.filter((card) => card.status === 'В работе'),
            Тестирование: transformedTasks.filter((card) => card.status === 'Тестирование'),
            Готово: transformedTasks.filter((card) => card.status === 'Готово'),
        }
        setColumns(updatedColumns)
    }, [transformedTasks])

    // const columns = {
    //     'Без статуса': transformedTasks.filter((card) => card.status === 'Без статуса'),
    //     'Нужно сделать': transformedTasks.filter((card) => card.status === 'Нужно сделать'),
    //     'В работе': transformedTasks.filter((card) => card.status === 'В работе'),
    //     Тестирование: transformedTasks.filter((card) => card.status === 'Тестирование'),
    //     Готово: transformedTasks.filter((card) => card.status === 'Готово'),
    // }

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
