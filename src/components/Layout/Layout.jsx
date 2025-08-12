import { Outlet } from 'react-router-dom'
import Header from '../Layout/Header'

function Layout({ isAuth, setIsAuth }) {
    return (
        <div className="wrapper">
            <Header isAuth={isAuth} setIsAuth={setIsAuth} className="wrapper" />
            <Outlet />
        </div>
    )
}

export default Layout
