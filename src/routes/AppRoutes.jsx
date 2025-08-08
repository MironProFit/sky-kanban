import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useState } from 'react'

import Header from '../components/Header/Header'
import MainPage from '../pages/MainPage/MainPage'
import Exit from '../pages/Exit/Exit'
import NotFound from '../pages/NotFound/NotFound'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import CreateCard from '../pages/CreateCard/CreateCard'
import CardView from '../pages/CardView/CardView'
import PrivateRoute from '../components/PrivateRoute/PrivateRoute'

import '../../src/App.css'

function AppRoutes() {
    const location = useLocation()
    const [isAuth, setIsAuth] = useState(false)
    const isAuthPage = location.pathname === '/login' || location.pathname === '/register'
    return (
        <div className="wrapper">
            <Header isAuthPage={isAuthPage} isAuth={isAuth} setIsAuth={setIsAuth} />
            <Routes>
                <Route path="exit/login" element={<Navigate to="/login" replace />} />
                <Route path="login/register" element={<Navigate to="/register" replace />} />
                <Route path="register/login" element={<Navigate to="/login" replace />} />
                <Route path="login" element={<Login isAuth={isAuth} setIsAuth={setIsAuth} />} />
                <Route path="register" element={<Register isAuth={isAuth} setIsAuth={setIsAuth} />} />
                <Route element={<PrivateRoute isAuth={isAuth} setIsAuth={setIsAuth} />}>
                    <Route path="/" element={<MainPage />}>
                        <Route path="exit" element={<Exit />} />
                        <Route path="newcard" element={<CreateCard />} />
                        <Route path="cardview/:id" element={<CardView />} />
                    </Route>
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    )
}

export default AppRoutes
