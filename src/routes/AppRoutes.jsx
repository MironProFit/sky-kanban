import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useState } from 'react'

import ConfirmExit from '../pages/Confirmation/ConfirmExit/ConfirmExit'
import NotFound from '../pages/Main/NotFound'
import CardCreate from '../pages/Cards/CardCreate'
import CardViewEdit from '../pages/Cards/CardViewEdit'
import PrivateRoute from './PrivateRoute'
import Layout from '../components/Layout/Layout'

function AppRoutes({ isTheme, setIsTheme }) {
    const [isAuth, setIsAuth] = useState(false)
    // const [isCreateMode, setIsCreateMode] = useState(false)
задачи
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout isAuth={isAuth} setIsAuth={setIsAuth} isTheme={isTheme} $isDark={isTheme} setIsTheme={setIsTheme} />,
            children: [
                {
                    element: <PrivateRoute isAuth={isAuth} setIsAuth={setIsAuth} />,
                    children: [
                        { path: 'exit', element: <ConfirmExit isAuth={isAuth} setIsAuth={setIsAuth} $isDark={isTheme} /> },
                        { path: 'createcard', element: <CardCreate $isDark={isTheme} /> },
                        { path: 'cardview/:id', element: <CardViewEdit $isDark={isTheme} /> },
                        { path: 'cardview/:id/edit', element: <CardViewEdit $isDark={isTheme} /> },
                        { path: 'cardview/:id/delete', element: <CardViewEdit $isDark={isTheme} /> },
                    ],
                },
                { path: '*', element: <NotFound /> },
            ],
        },
    ])
    return <RouterProvider router={router} />
}

export default AppRoutes
