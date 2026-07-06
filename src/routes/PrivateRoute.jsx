import { Navigate, Outlet } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'

function PrivateRoute() {
  const { isAuth, token } = useAuthContext()

  if (!token || !isAuth) {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}

export default PrivateRoute
