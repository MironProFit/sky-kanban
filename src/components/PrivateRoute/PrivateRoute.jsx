import { Outlet } from 'react-router-dom'
import SignIn from '../../pages/Login/Login'

function PrivateRoute({ isAuth }) {
    return <>{isAuth ? <Outlet /> : <SignIn />}</>
}

export default PrivateRoute
