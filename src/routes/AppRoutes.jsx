import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import ConfirmExit from '../pages/Confirmation/ConfirmExit/ConfirmExit'
import NotFound from '../pages/Main/NotFound'
import CardCreate from '../pages/Cards/CardCreate'
import CardViewEdit from '../pages/Cards/CardViewEdit'
import PrivateRoute from './PrivateRoute'
import Layout from '../components/Layout/Layout'
import ErrorBoundary from '../components/Layout/ErrorBoundary'
import { loginUser } from '../services/auth/login'

function AppRoutes() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            // errorElement: <ErrorBoundary />,

            children: [
                {
                    element: <PrivateRoute />,
                    children: [
                        { path: 'exit', element: <ConfirmExit /> },
                        { path: 'createcard', element: <CardCreate /> },
                        { path: 'cardview/:id', element: <CardViewEdit /> },
                        { path: 'cardview/:id/edit', element: <CardViewEdit /> },
                        { path: 'cardview/:id/delete', element: <CardViewEdit /> },
                    ],
                },
                { path: '*', element: <NotFound /> },
            ],
        },
    ])
    return <RouterProvider router={router} />
}

export default AppRoutes
