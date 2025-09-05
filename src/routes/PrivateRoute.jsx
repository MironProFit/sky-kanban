import { Navigate, Outlet } from 'react-router-dom'
import { useAppContext } from './AppContext'

function PrivateRoute() {
    const { isAuth, setIsAuth } = useAppContext()

    return <>{isAuth ? <Outlet /> : <Navigate to={'/login'} isAuth={isAuth} setIsAuth={setIsAuth} />}</>
}

export default PrivateRoute
