import { useEffect, useState } from 'react'
import AppRoutes from './AppRoutes.jsx'
import { GlobalStyle, Wrapper } from '../components/Styles/GlobalStyle.js'
import { AppProvider } from './AppContext.jsx'

function App() {
    const [isTheme, setIsTheme] = useState(() => localStorage.getItem('isTheme') === 'true')
    useEffect(() => {
        localStorage.setItem('isTheme', isTheme)
    }, [isTheme])

    return (
        <AppProvider>
            <GlobalStyle $isDark={isTheme} />
            <Wrapper $isDark={isTheme}>
                <AppRoutes isTheme={isTheme} setIsTheme={setIsTheme} />
            </Wrapper>
        </AppProvider>
    )
}

export default App
