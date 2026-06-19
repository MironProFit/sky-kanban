import { getAllTasks } from './getTasks'

export const fetchTasks = async ({
  token,
  setUserData,
  setIsLoading,
  setLoadingMessage,
  setErrorMessage,
  DEFAULT_MESSAGE_LOADING,
  setLoadingCard,
}) => {
  setIsLoading(true)
  setLoadingMessage('Загрузка задач...')
  setErrorMessage('')
  setLoadingCard(true)

  try {
    const response = await getAllTasks(token)

    if (response && response.tasks) {
      setUserData(response.tasks)
    } else if (Array.isArray(response)) {
      setUserData(response)
    } else {
      setUserData([])
    }
    setLoadingMessage(DEFAULT_MESSAGE_LOADING)
  } catch (error) {
    const errMsg =
      error?.response?.data?.error ||
      error?.response?.data?.message ||
      error?.message ||
      'Ошибка получения задач'
    setErrorMessage(errMsg)
    setLoadingMessage(DEFAULT_MESSAGE_LOADING)
    console.error('Ошибка получения данных:', errMsg)
    setUserData([])
  } finally {
    setIsLoading(false)
    setLoadingCard(false)
  }
}
