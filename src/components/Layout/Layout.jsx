import { Outlet } from 'react-router-dom'
import Header from '../Layout/Header'

function Layout({ isAuth, setIsAuth, isTheme, setIsTheme }) {
    return (
        <>
            <Header isAuth={isAuth} setIsAuth={setIsAuth} isTheme={isTheme} setIsTheme={setIsTheme} $isDark={isTheme} />
            <Outlet />
        </>
    )
}

export default Layout
