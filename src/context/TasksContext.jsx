import { createContext, useContext, useState } from 'react'

const TasksContext = createContext()

export const TasksProvider = ({ children }) => {
  const [isModal, setIsModal] = useState(false)
  const [userData, setUserData] = useState([])

  const handleModalOpen = () => setIsModal(true)
  const handleModalClose = () => setIsModal(false)

  return (
    <TasksContext.Provider
      value={{
        isModal,
        setIsModal,
        handleModalOpen,
        handleModalClose,
        userData,
        setUserData,
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}

export const useTasksContext = () => useContext(TasksContext)
