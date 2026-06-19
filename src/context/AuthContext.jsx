import { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem('token') || '')
  const [userName, setUserName] = useState(
    () => localStorage.getItem('userName') || '',
  )
  const [isAuth, setIsAuth] = useState(
    () => localStorage.getItem('isAuth') === 'true',
  )
  const [isTheme, setIsTheme] = useState(
    () => localStorage.getItem('isTheme') === 'true',
  )
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem('token', token)
  }, [token])

  useEffect(() => {
    localStorage.setItem('userName', userName)
  }, [userName])

  useEffect(() => {
    localStorage.setItem('isAuth', isAuth)
    if (!isAuth) {
      setToken('')
      setUserName('')
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
        isAuth,
        setIsAuth,
        isTheme,
        setIsTheme,
        $isDark: isTheme,
        isUserMenuOpen,
        setIsUserMenuOpen,
        toggleUserMenu,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)
