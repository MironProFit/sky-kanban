import { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const [isModal, setIsModal] = useState(false)
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
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
        setIsModal(true)
    }
    const handleModalClose = () => {
        setIsModal(false)
    }

    const toggleUserMenu = () => {
        setIsUserMenuOpen((prev) => !prev)
    }

    const [isAuth, setIsAuth] = useState(false)
    const [isTheme, setIsTheme] = useState(() => localStorage.getItem('isTheme') === 'true')
    useEffect(() => {
        localStorage.setItem('isTheme', isTheme)
    }, [isTheme])

    return (
        <AppContext.Provider
            value={{
                isModal,
                setIsModal,

                isMobile,
                setISMobile,

                handleModalOpen,
                handleModalClose,

                isUserMenuOpen,
                setIsUserMenuOpen,

                toggleUserMenu,

                isAuth,
                setIsAuth,

                isTheme,
                setIsTheme,
                $isDark: isTheme,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider

export const useAppContext = () => {
    return useContext(AppContext)
}
