import { getAllTasks } from './getTasks'

// Функция для получения задач

export const fetchTasks = async (token, setUserData, setIsLoading, setLoadingMessage, setErrorMessage, setIsAuth) => {
    setIsLoading(true)
    setLoadingMessage('Получаем данные')
    setErrorMessage('')

    try {
        const response = await getAllTasks(token)

        // Если сервер возвращает { tasks: [...] }
        if (response && response.tasks) {
            setUserData(response.tasks) // сохраняем массив tasks
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
        setIsAuth(true)
    } catch (error) {
        const errMsg = error?.response?.data?.error || error?.response?.data?.message || error?.message || 'Ошибка получения данных'
        setErrorMessage(errMsg) // Устанавливаем сообщение об ошибке
        console.error('Ошибка получения данных:', errMsg)
    } finally {
        setIsLoading(false)
        setLoadingMessage(DEFAULT_MESSAGE_LOADING)
    }
}
