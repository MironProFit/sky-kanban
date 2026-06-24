import { createContext, useContext, useState, useCallback } from 'react'
import { getAllTasks } from '../services/tasks/getTasks'
import { createTask as createTaskApi } from '../services/tasks/createTask'
import { editTask as editTaskApi } from '../services/tasks/editTask'
import { removeTask as removeTaskApi } from '../services/tasks/removeTask'

const TasksContext = createContext()

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([])

  const fetchTasks = useCallback(async (token) => {
    try {
      const response = await getAllTasks(token)
      if (response && response.tasks) {
        setTasks(response.tasks)
      } else if (Array.isArray(response)) {
        setTasks(response)
      } else {
        setTasks([])
      }
    } catch (error) {
      console.error('Ошибка получения задач:', error)
      setTasks([])
    }
  }, [])

  const createTask = useCallback(
    async (token, title, topic, description, date) => {
      const response = await createTaskApi(
        token,
        title,
        topic,
        description,
        date,
      )
      await fetchTasks(token)
      return response
    },
    [fetchTasks],
  )

  const editTask = useCallback(
    async (token, id, title, topic, status, description, date) => {
      const response = await editTaskApi(
        id,
        token,
        title,
        topic,
        status,
        description,
        date,
      )
      await fetchTasks(token)
      return response
    },
    [fetchTasks],
  )

  const removeTask = useCallback(
    async (token, id) => {
      try {
        const response = await removeTaskApi(id, token)
        await fetchTasks(token)
        return response
      } catch (error) {
        console.error('Ошибка удаления задачи:', error)
        throw error
      }
    },
    [fetchTasks],
  )

  return (
    <TasksContext.Provider
      value={{ tasks, fetchTasks, createTask, editTask, removeTask }}
    >
      {children}
    </TasksContext.Provider>
  )
}

export const useTasksContext = () => useContext(TasksContext)
