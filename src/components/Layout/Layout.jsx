import { Outlet } from 'react-router-dom'
import Header from '../Layout/Header'

function Layout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default Layout
