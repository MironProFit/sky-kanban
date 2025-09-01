import { useLocation, useNavigate } from 'react-router-dom'
import { PopExit, PopExitContainer, PopExitBlock, PopExitTitle, PopExitButtonYes, PopExitButtonNo, PopExitFormGroup } from '../ConfirmExit/ConfirmExit.styles'
import { useAppContext } from '../../../routes/AppContext'
import { useState } from 'react'

export default function ConfirmExit({ $isDark, setIsAuth, toggleAuth }) {
    const location = useLocation()
    const navigate = useNavigate()

    const { isMobile } = useAppContext()
    const [isExit] = useState(location.pathname === '/exit')

    function toggleAuth(e) {
        e.preventDefault()
        setIsAuth(true)
        navigate('/')
    }
    console.log(isExit)

    return (
        <PopExit style={{ display: isExit ? 'block' : 'none' }} id="popExit" $isDark={$isDark}>
            <PopExitContainer>
                <PopExitBlock $isMobile={isMobile} $isDark={$isDark}>
                    <PopExitTitle $isDark={$isDark}>Выйти из аккаунта?</PopExitTitle>
                    <form className="pop-exit__form" id="formExit" action="#">
                        <PopExitFormGroup $isMobile={isMobile}>
                            <PopExitButtonYes $isMobile={isMobile} id="exitYes" to="/login" $isDark={$isDark}>
                                Да, выйти
                            </PopExitButtonYes>
                            <PopExitButtonNo $isMobile={isMobile} onClick={toggleAuth} id="exitNo" $isDark={$isDark}>
                                Нет, остаться
                            </PopExitButtonNo>
                        </PopExitFormGroup>
                    </form>
                </PopExitBlock>
            </PopExitContainer>
        </PopExit>
    )
}
