import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import ConfirmExit from '../pages/Confirmation/ConfirmExit/ConfirmExit'
import NotFound from '../pages/Main/NotFound'
import CardCreate from '../pages/Cards/CardCreate'
import CardViewEdit from '../pages/Cards/CardViewEdit'
import PrivateRoute from './PrivateRoute'
import Layout from '../components/Layout/Layout'
import ErrorBoundary from '../components/Layout/ErrorBoundary'
import AuthModal from '../pages/Auth/AuthModal'
import { loginAction, loginUser } from '../services/auth/login'
import MainPage from '../pages/Main/MainPage'
function AppRoutes() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    element: <PrivateRoute />,
                    children: [
                        { index: true, element: <MainPage /> },
                        {
                            path: 'card',
                            children: [
                                { path: 'create', element: <CardCreate /> },
                                { path: ':id', element: <CardViewEdit /> },
                                { path: ':id/edit', element: <CardViewEdit /> },
                                { path: ':id/delete', element: <CardViewEdit /> },
                            ],
                        },
                        { path: 'exit', element: <ConfirmExit /> },
                    ],
                },
                { path: 'login', element: <AuthModal />, action: loginAction, errorElement: <AuthModal /> },
                { path: 'register', element: <AuthModal /> },
            ],
        },
        { path: '*', element: <NotFound />, errorElement: <ErrorBoundary /> },
    ])
    return <RouterProvider router={router} />
}

export default AppRoutes
