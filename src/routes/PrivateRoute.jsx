import { Navigate, Outlet } from 'react-router-dom'
import { useAppContext } from './AppContext'

function PrivateRoute() {
    const { isAuth } = useAppContext()

    return isAuth ? <Outlet /> : <Navigate to={'/login'} replace />
}

export default PrivateRoute
