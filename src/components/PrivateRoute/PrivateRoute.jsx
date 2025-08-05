import { Outlet } from 'react-router-dom'
import Login from '../../pages/Login/Login'

function PrivateRoute({ isAuth }) {
    return <>{isAuth ? <Outlet /> : <Login />}</>
}

export default PrivateRoute
