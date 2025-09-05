import { Outlet, useLoaderData } from 'react-router-dom'
import Header from '../Layout/Header'
import MainPage from '../../pages/Main/MainPage'
import AuthModal from '../../pages/Auth/AuthModal'
import { useState } from 'react'
import { useAppContext } from '../../routes/AppContext'
import UserMenuModal from './UserMenuModal'

function Layout() {
    const { isAuth } = useAppContext()
    const data = useLoaderData()
    console.log(data)

    return (
        <>
            <Header />

            {isAuth ? (
                <>
                    <MainPage />

                    <Outlet />
                </>
            ) : (
                <AuthModal />
            )}
        </>
    )
}

export default Layout
