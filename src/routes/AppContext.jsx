import { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const [isModal, setIsModal] = useState(false)
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
    const [isMobile, setISMobile] = useState(window.innerWidth <= 600)

    const [isTheme, setIsTheme] = useState(() => localStorage.getItem('isTheme') === 'true')

    const [isAuth, setIsAuth] = useState(() => localStorage.getItem('isAuth') === 'true')

    const [isLoading, setIsLoading] = useState(false)
    const DEFAULT_MESSAGE_LOADING = 'Загрузка данных...'
    const [loadingMessage, setLoadingMessage] = useState(DEFAULT_MESSAGE_LOADING)

    const [loadingCard, setLoadingCard] = useState(true)

    const [userName, setUserName] = useState(() => localStorage.getItem('userName') || '')
    const [token, setToken] = useState(() => localStorage.getItem('token') || '')
    const [userData, setUserData] = useState(() => {
        const stored = localStorage.getItem('userData')
        return stored ? JSON.parse(stored) : { tasks: [] }
    })

    useEffect(() => {
        localStorage.setItem('userData', JSON.stringify(userData))
    }, [userData])

    useEffect(() => {
        localStorage.setItem('isTheme', isTheme)
    }, [isTheme])

    useEffect(() => {
        !isAuth && localStorage.removeItem('userData')
        localStorage.setItem('isAuth', isAuth)
        if (!isAuth) {
            setToken(''), setUserName('')
        }
    }, [isAuth])

    useEffect(() => {
        localStorage.setItem('token', token)
    }, [token])

    useEffect(() => {
        localStorage.setItem('userName', userName)
    }, [userName])

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
    const handleTheme = () => {
        setIsTheme((prev) => !prev)
    }

    return (
        <AppContext.Provider
            value={{
                isModal,
                setIsModal,

                isMobile,
                setISMobile,

                isUserMenuOpen,
                setIsUserMenuOpen,

                isAuth,
                setIsAuth,

                isTheme,
                setIsTheme,
                $isDark: isTheme,

                isLoading,
                setIsLoading,

                userName,
                setUserName,

                token,
                setToken,

                handleModalOpen,
                handleModalClose,
                handleTheme,
                toggleUserMenu,

                userData,
                setUserData,

                loadingMessage,
                setLoadingMessage,
                

                DEFAULT_MESSAGE_LOADING,

                loadingCard,
                setLoadingCard,
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
