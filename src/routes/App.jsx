import { useEffect, useState } from 'react'
import { GlobalStyle } from '../components/Styles/Global.Style.js'
import { Wrapper } from '../components/Styles/GlobalStyles.js'
import AppRoutes from './AppRoutes.jsx'

function App() {
    const [isTheme, setIsTheme] = useState(() => localStorage.getItem('isTheme') === 'true')
    useEffect(() => {
        localStorage.setItem('isTheme', isTheme)
    }, [isTheme])
    return (
        <>
            <GlobalStyle $isDark={isTheme} />
            <Wrapper $isDark={isTheme}>
                <AppRoutes isTheme={isTheme} setIsTheme={setIsTheme} />
            </Wrapper>
        </>
    )
}

export default App
