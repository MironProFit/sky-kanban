import { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem('token') || '')
  const [userName, setUserName] = useState(
    () => localStorage.getItem('userName') || '',
  )
  const [userLogin, setUserLogin] = useState(
    () => localStorage.getItem('userLogin') || '',
  )
  const [isAuth, setIsAuth] = useState(
    () => localStorage.getItem('isAuth') === 'true',
  )
  const [isTheme, setIsTheme] = useState(
    () => localStorage.getItem('isTheme') === 'true',
  )
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [loadingMessage, setLoadingMessage] = useState('Загрузка данных...')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    localStorage.setItem('token', token)
  }, [token])

  useEffect(() => {
    localStorage.setItem('userName', userName)
  }, [userName])

  useEffect(() => {
    localStorage.setItem('userLogin', userLogin)
  }, [userLogin])

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

  const toggleUserMenu = () => setIsUserMenuOpen((prev) => !prev)

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        userName,
        setUserName,
        userLogin,
        setUserLogin,
        isAuth,
        setIsAuth,
        isTheme,
        setIsTheme,
        $isDark: isTheme,
        isUserMenuOpen,
        setIsUserMenuOpen,
        toggleUserMenu,
        isLoading,
        setIsLoading,
        loadingMessage,
        setLoadingMessage,
        errorMessage,
        setErrorMessage,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)
