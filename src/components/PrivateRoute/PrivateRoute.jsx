import { Outlet } from 'react-router-dom'
import Login from '../../pages/Login/Login'

function PrivateRoute({ isAuth, setIsAuth }) {
    return <>{isAuth ? <Outlet /> : <Login isAuth={isAuth} setIsAuth={setIsAuth} />}</>
}

export default PrivateRoute
