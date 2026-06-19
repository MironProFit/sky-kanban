import { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(
    () => localStorage.getItem('isAuth') === 'true',
  )
  const [isTheme, setIsTheme] = useState(
    () => localStorage.getItem('isTheme') === 'true',
  )
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [userName, setUserName] = useState(
    () => localStorage.getItem('userName') || '',
  )
  const [userLogin, setUserLogin] = useState(
    () => localStorage.getItem('userLogin') || '',
  )
  const [token, setToken] = useState(() => localStorage.getItem('token') || '')
  const [isLoading, setIsLoading] = useState(false)
  const [loadingMessage, setLoadingMessage] = useState('Загрузка данных...')
  const [errorMessage, setErrorMessage] = useState('')
  const [loadingCard, setLoadingCard] = useState(false)

  const DEFAULT_MESSAGE_LOADING = 'Загрузка данных...'

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    localStorage.setItem('isAuth', isAuth)
    if (!isAuth) {
      setToken('')
      setUserName('')
      setUserLogin('')
    }
  }, [isAuth])

  useEffect(() => {
    localStorage.setItem('isTheme', isTheme)
  }, [isTheme])

  useEffect(() => {
    localStorage.setItem('token', token)
  }, [token])

  useEffect(() => {
    localStorage.setItem('userName', userName)
  }, [userName])

  useEffect(() => {
    localStorage.setItem('userLogin', userLogin)
  }, [userLogin])

  const toggleUserMenu = () => setIsUserMenuOpen((prev) => !prev)

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
        isTheme,
        setIsTheme,
        $isDark: isTheme,
        isMobile,
        isUserMenuOpen,
        setIsUserMenuOpen,
        toggleUserMenu,
        userName,
        setUserName,
        userLogin,
        setUserLogin,
        token,
        setToken,
        isLoading,
        setIsLoading,
        loadingMessage,
        setLoadingMessage,
        DEFAULT_MESSAGE_LOADING,
        errorMessage,
        setErrorMessage,
        loadingCard,
        setLoadingCard,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)
