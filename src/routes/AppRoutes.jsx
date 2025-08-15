import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useState } from 'react'

import MainPage from '../pages/Main/MainPage'
import ConfirmExit from '../pages/Confirmation/ConfirmExit/ConfirmExit'
import NotFound from '../pages/Main/NotFound'
import Login from '../pages/Auth/Login'
import Register from '../pages/Auth/Register'
import CreateCard from '../pages/Cards/CreateCard'
import CardView from '../pages/Cards/CardView'
import PrivateRoute from './PrivateRoute'

import '../../src/App.css'
import Layout from '../components/Layout/Layout'

function AppRoutes({ isTheme, setIsTheme }) {
    const [isAuth, setIsAuth] = useState(false)

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout isAuth={isAuth} setIsAuth={setIsAuth} isTheme={isTheme} setIsTheme={setIsTheme} />,
            children: [
                { path: 'login', element: <Login isAuth={isAuth} setIsAuth={setIsAuth} isTheme={isTheme} /> },
                { path: 'register', element: <Register isAuth={isAuth} setIsAuth={setIsAuth} isTheme={isTheme} /> },
                {
                    element: <PrivateRoute isAuth={isAuth} setIsAuth={setIsAuth} />,
                    children: [
                        { index: true, element: <MainPage /> },
                        { path: 'exit', element: <ConfirmExit isAuth={isAuth} setIsAuth={setIsAuth} /> },
                        { path: 'createcard', element: <CreateCard /> },
                        { path: 'cardview/:id', element: <CardView /> },
                        { path: 'cardview/:id/edit', element: <CardView /> },
                    ],
                },
                { path: '*', element: <NotFound /> },
            ],
        },
    ])
    return <RouterProvider router={router} />
}

export default AppRoutes
