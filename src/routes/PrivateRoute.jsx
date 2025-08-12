import { Navigate, Outlet } from 'react-router-dom'

function PrivateRoute({ isAuth, setIsAuth }) {
    return <>{isAuth ? <Outlet /> : <Navigate to={'/login'} isAuth={isAuth} setIsAuth={setIsAuth} />}</>
}

export default PrivateRoute
