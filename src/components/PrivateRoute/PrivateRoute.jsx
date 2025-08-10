import { Navigate, Outlet } from 'react-router-dom'
import Login from '../../pages/Login/Login'

function PrivateRoute({ isAuth, setIsAuth }) {
    return <>{isAuth ? <Outlet /> : <Navigate to={'/login'} isAuth={isAuth} setIsAuth={setIsAuth} />}</>
}

export default PrivateRoute
