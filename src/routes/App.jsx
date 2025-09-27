import { useEffect, useState } from 'react'
import AppRoutes from './AppRoutes.jsx'
import { GlobalStyle, Wrapper } from '../components/Styles/GlobalStyle.js'
import { AppProvider, useAppContext } from './AppContext.jsx'

function App() {
    const { isTheme, setIsTheme, isUserMenuOpen, toggleUserMenu } = useAppContext()

    return (
        <>
            <GlobalStyle $isDark={isTheme} />
            <Wrapper
                onClick={() => {
                    isUserMenuOpen && toggleUserMenu()
                }}
                $isDark={isTheme}
            >
                <AppRoutes isTheme={isTheme} setIsTheme={setIsTheme} />
            </Wrapper>
        </>
    )
}

export default App
