import { Outlet } from 'react-router-dom'
import Header from '../Layout/Header'
import MainPage from '../../pages/Main/MainPage'
import Loading from '../../pages/Loading/LoadingModal'

function Layout() {
    return (
        <>
            <Header />
            <Loading />
            <Outlet />
        </>
    )
}

export default Layout
