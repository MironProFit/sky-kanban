import { useAppContext } from '../../routes/AppContext'
import { getAllTasks } from './getTasks'

// Функция для получения задач

export const fetchTasks = async (token, setUserData, setIsLoading, setLoadingMessage, setErrorMessage, setIsAuth, DEFAULT_MESSAGE_LOADING, setLoadingCard) => {
    // setIsLoading(true)
    // setLoadingMessage('Получаем данные')
    setErrorMessage('')
    setLoadingCard(true)
    setIsAuth(true)

    try {
        const response = await getAllTasks(token)

        // Если сервер возвращает { tasks: [...] }
        if (response && response.tasks) {
            setUserData(response.tasks)
            localStorage.setItem('userData', JSON.stringify(response.tasks))
        }
        // Если сервер возвращает массив напрямую
        else if (Array.isArray(response)) {
            setUserData(response)
            localStorage.setItem('userData', JSON.stringify(response))
        }
        // Если что-то пошло не так
        else {
            setUserData([])
            localStorage.setItem('userData', JSON.stringify([]))
        }
        setLoadingCard(false)
    } catch (error) {
        const errMsg = error?.response?.data?.error || error?.response?.data?.message || error?.message || 'Ошибка получения данных'
        setErrorMessage(errMsg)
        console.error('Ошибка получения данных:', errMsg)
    } finally {
        setIsLoading(false)
        setLoadingMessage(DEFAULT_MESSAGE_LOADING)
    }
}
