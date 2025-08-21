import { Outlet } from 'react-router-dom'
import Header from '../Layout/Header'
import MainPage from '../../pages/Main/MainPage'
import AuthModal from '../../pages/Auth/AuthModal'

function Layout({ isAuth, setIsAuth, isTheme, setIsTheme }) {
    return (
        <>
            <Header isAuth={isAuth} setIsAuth={setIsAuth} isTheme={isTheme} setIsTheme={setIsTheme} $isDark={isTheme} />

            {isAuth ? (
                <>
                    <MainPage $isDark={isTheme} />
                    <Outlet />
                </>
            ) : (
                <AuthModal isAuth={isAuth} setIsAuth={setIsAuth} $isDark={isTheme} />
            )}
        </>
    )
}

export default Layout
