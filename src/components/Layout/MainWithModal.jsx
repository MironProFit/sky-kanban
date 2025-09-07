import { Outlet } from 'react-router-dom'
import MainPage from '../../pages/Main/MainPage'

export default function MainWithModal() {
    return (
        <>
            <MainPage />
            <Outlet />
        </>
    )
}
