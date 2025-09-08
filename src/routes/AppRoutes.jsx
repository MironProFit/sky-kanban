import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import ConfirmExit from '../pages/Confirmation/ConfirmExit/ConfirmExit'
import NotFound from '../pages/Main/NotFound'
import CardCreate from '../pages/Cards/CardCreate'
import CardViewEdit from '../pages/Cards/CardViewEdit'
import PrivateRoute from './PrivateRoute'
import Layout from '../components/Layout/Layout'
import ErrorBoundary from '../components/Layout/ErrorBoundary'
import AuthModal from '../pages/Auth/AuthModal'
import { loginAction } from '../services/auth/login'
import MainWithModal from '../components/Layout/MainWithModal'
import { registerAction } from '../services/auth/register'
import Loading from '../pages/Loading/LoadingModal'

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
                                { path: '', element: <Loading /> },
                                {
                                    path: 'card',
                                    children: [
                                        { path: 'create', element: <CardCreate /> },
                                        { path: ':id', element: <CardViewEdit />, errorElement: <CardViewEdit /> },
                                        { path: ':id/edit', element: <CardViewEdit />, errorElement: <CardViewEdit /> },
                                        { path: ':id/delete', element: <CardViewEdit /> },
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
                    //  action: loginAction,
                    errorElement: <AuthModal />,
                },
                {
                    path: 'register',
                    element: <AuthModal />,
                    // action: registerAction,
                    errorElement: <AuthModal />,
                },
            ],
        },
        { path: '*', element: <NotFound />, errorElement: <ErrorBoundary /> },
    ])
    return <RouterProvider router={router} />
}

export default AppRoutes
