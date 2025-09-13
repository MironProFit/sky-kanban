import { getAllTasks } from './getTasks'

// Функция для получения задач

export const fetchTasks = async (token, setUserData, setIsLoading, setLoadingMessage, setErrorMessage, setIsAuth, DEFAULT_MESSAGE_LOADING) => {
    setIsLoading(true)
    setLoadingMessage('Получаем данные')
    setErrorMessage('')

    try {
        const response = await getAllTasks(token)
        // console.log(`response taskService: ${response}`)

        // Если сервер возвращает { tasks: [...] }
        if (response && response.tasks) {
            // console.log(1)
            setUserData(response.tasks) // сохраняем массив tasks
            localStorage.setItem('userData', JSON.stringify(response.tasks))
        }
        // Если сервер возвращает массив напрямую
        else if (Array.isArray(response)) {
            // console.log(2)

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
