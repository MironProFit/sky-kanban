import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import ConfirmExit from '../pages/Confirmation/ConfirmExit/ConfirmExit'
import NotFound from '../pages/Main/NotFound'
import CardCreate from '../pages/Cards/CardCreate'
import CardViewEdit from '../pages/Cards/CardViewEdit'
import PrivateRoute from './PrivateRoute'
import Layout from '../components/Layout/Layout'
import AuthModal from '../pages/Auth/AuthModal'
import MainWithModal from '../components/Layout/MainWithModal'
import ConfirmDelTask from '../pages/Confirmation/ConfirmDelTask/ConfirmDelTask'
function AppRoutes() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    element: <PrivateRoute />,
                    children: [
                        {
                            path: '',
                            element: <MainWithModal />,
                            children: [
                                { index: true, element: null },
                                {
                                    path: 'card',
                                    children: [
                                        { path: 'create', element: <CardCreate /> },
                                        { path: ':id', element: <CardViewEdit /> },
                                        { path: ':id/edit', element: <CardViewEdit /> },
                                        { path: ':id/delete', element: <ConfirmDelTask /> },
                                    ],
                                },
                                { path: 'exit', element: <ConfirmExit /> },
                            ],
                        },
                    ],
                },
                {
                    path: 'login',
                    element: <AuthModal />,
                },
                {
                    path: 'register',
                    element: <AuthModal />,
                },
            ],
        },
        { path: '*', element: <NotFound /> },
    ])
    return <RouterProvider router={router} />
}

export default AppRoutes
