import { createContext, useContext, useEffect, useState } from 'react'
const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const [isModal, setIsModal] = useState(false)
    const [isMobile, setISMobile] = useState(window.innerWidth <= 600)
    useEffect(() => {
        const handleResize = () => {
            setISMobile(window.innerWidth <= 600)
        }

        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    const handleModalOpen = () => {
        // e.preventDefault()
        setIsModal(true)
    }
    const handleModalClose = () => {
        // e.preventDefault()
        setIsModal(false)
    }
    console.log(isMobile)

    return <AppContext.Provider value={{ isModal, setIsModal, isMobile, setISMobile, handleModalOpen, handleModalClose }}>{children}</AppContext.Provider>
}

export default AppProvider

export const useAppContext = () => {
    return useContext(AppContext)
}
