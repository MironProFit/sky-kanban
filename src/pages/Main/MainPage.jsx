import { useEffect, useState, useRef } from 'react'
import { MainContainer, MainBlock, MainContent } from './MainPage.styles'
import Column from '../../components/Layout/Column'
import { Container } from '../../components/Styles/GlobalStyle'
import { useAppContext } from '../../routes/AppContext'
import { editTask } from '../../services/tasks/editTask'

export default function MainPage() {
    const { isModal, isMobile, $isDark, userData, setUserData, token, setErrorMessage, setLoadingMessage, setIsLoading, DEFAULT_MESSAGE_LOADING, setLoadingCard, loadingCard } = useAppContext()
    const [transformedTasks, setTransformedTasks] = useState([])
    const [columns, setColumns] = useState({
        'Без статуса': [],
        'Нужно сделать': [],
        'В работе': [],
        Тестирование: [],
        Готово: [],
    })
    const columnsRef = useRef(columns)

    useEffect(() => {
        columnsRef.current = columns
    }, [columns])

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

    //Интеграция DND

    const handleCardDrop = async (cardId, targetStatus) => {
        if (!loadingCard) {
            setLoadingMessage('Обновляем задачи')
            setIsLoading(true)
            setLoadingCard(true)

            const sourceStatus = Object.keys(columnsRef.current).find((status) => columnsRef.current[status].some((card) => card.id === cardId))

            if (sourceStatus) {
                const updatedSourceColumn = columnsRef.current[sourceStatus].filter((card) => card.id !== cardId)
                const movedCard = columnsRef.current[sourceStatus].find((card) => card.id === cardId)

                const updatedTargetColumn = [...columnsRef.current[targetStatus], { ...movedCard, status: targetStatus }]

                setColumns({
                    ...columnsRef.current,
                    [sourceStatus]: updatedSourceColumn,
                    [targetStatus]: updatedTargetColumn,
                })

                try {
                    const response = await editTask(movedCard.id, token, movedCard.title, movedCard.topic, targetStatus, movedCard.description, movedCard.date)
                    await setUserData(response)
                    localStorage.setItem('userData', JSON.stringify(response))
                } catch (error) {
                    const errMsg = error?.response?.data?.error || error?.response?.data?.message || error?.message || 'Ошибка редактирования задачи'
                    setErrorMessage(errMsg)
                    console.error('Ошибка редактирования задачи:', error)
                } finally {
                    setLoadingMessage('Данные обновлены')
                    setIsLoading(false)
                    setLoadingMessage(DEFAULT_MESSAGE_LOADING)
                    setLoadingCard(false)
                }
            }
        }
    }

    return (
        <MainContainer $isModal={isModal} $isMobile={isMobile} $isDark={$isDark}>
            <Container>
                <MainBlock $isDark={$isDark}>
                    <MainContent>
                        {Object.keys(columns).map((status) => (
                            <Column $isDark={$isDark} key={status} title={status} cardsData={columns[status]} onCardDrop={handleCardDrop} />
                        ))}
                    </MainContent>
                </MainBlock>
            </Container>
        </MainContainer>
    )
}
