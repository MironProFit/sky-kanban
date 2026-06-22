import { useEffect, useState, useRef } from 'react'
import { MainContainer, MainBlock, MainContent } from './MainPage.styles'
import Column from '../../components/Layout/Column'
import { Container } from '../../components/Styles/GlobalStyle'
import { useAuthContext } from '../../context/AuthContext'
import { useTasksContext } from '../../context/TasksContext'

export default function MainPage() {
  const { isMobile, $isDark, token } = useAuthContext()
  const { tasks, fetchTasks, editTask } = useTasksContext()
  const [isLoading, setIsLoading] = useState(true)
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
    if (token) {
      setIsLoading(true)
      fetchTasks(token).finally(() => {
        setIsLoading(false)
      })
    }
  }, [token, fetchTasks])

  useEffect(() => {
    if (Array.isArray(tasks)) {
      const updatedColumns = {
        'Без статуса': tasks.filter((card) => card.status === 'Без статуса'),
        'Нужно сделать': tasks.filter(
          (card) => card.status === 'Нужно сделать',
        ),
        'В работе': tasks.filter((card) => card.status === 'В работе'),
        Тестирование: tasks.filter((card) => card.status === 'Тестирование'),
        Готово: tasks.filter((card) => card.status === 'Готово'),
      }
      setColumns(updatedColumns)
    }
  }, [tasks])

  const handleCardDrop = async (cardId, targetStatus) => {
    const sourceStatus = Object.keys(columnsRef.current).find((status) =>
      columnsRef.current[status].some((card) => card._id === cardId),
    )

    if (sourceStatus) {
      const movedCard = columnsRef.current[sourceStatus].find(
        (card) => card._id === cardId,
      )

      try {
        setIsLoading(true)
        await editTask(
          token,
          movedCard._id,
          movedCard.title,
          movedCard.topic,
          targetStatus,
          movedCard.description,
          movedCard.date,
        )
      } catch (error) {
        console.error('Ошибка редактирования задачи:', error)
      } finally {
        setIsLoading(false)
      }
    }
  }

  return (
    <MainContainer $isMobile={isMobile} $isDark={$isDark}>
      <Container>
        <MainBlock $isDark={$isDark}>
          <MainContent>
            {Object.keys(columns).map((status) => (
              <Column
                $isDark={$isDark}
                key={status}
                title={status}
                cardsData={columns[status]}
                onCardDrop={handleCardDrop}
                isLoading={isLoading}
              />
            ))}
          </MainContent>
        </MainBlock>
      </Container>
    </MainContainer>
  )
}
