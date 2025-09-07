import { Outlet } from 'react-router-dom'
import MainPage from '../../pages/Main/MainPage'

function MainWithCard() {
    return (
        <div>
            <MainPage />
            <Outlet />
        </div>
    )
}

export default MainWithCard
