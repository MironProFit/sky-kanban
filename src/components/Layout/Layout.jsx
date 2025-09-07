import { Outlet } from 'react-router-dom'
import Header from '../Layout/Header'
import MainPage from '../../pages/Main/MainPage'
import { useAppContext } from '../../routes/AppContext'

function Layout() {
    const { isAuth } = useAppContext()
    return (
        <>
            <Header />
            {isAuth && <MainPage />}
            <Outlet />
        </>
    )
}

export default Layout
