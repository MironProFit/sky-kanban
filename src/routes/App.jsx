import { useEffect, useState } from 'react'
import { GlobalStyle } from '../components/Styles/Global.Style.js'
import { Wrapper } from '../components/Styles/GlobalStyles.js'
import AppRoutes from './AppRoutes.jsx'

function App() {
    const [isTheme, setIsTheme] = useState(localStorage.getItem('isTheme') || false)
    useEffect(() => {
        localStorage.setItem('isTheme', isTheme)
    }, [isTheme])
    return (
        <>
            <GlobalStyle isTheme={isTheme} />
            <Wrapper $darkcolor="#151419" $lightcolor="#EAEEF6" isTheme={isTheme}>
                <AppRoutes isTheme={isTheme} setIsTheme={setIsTheme} />
            </Wrapper>
        </>
    )
}

export default App
