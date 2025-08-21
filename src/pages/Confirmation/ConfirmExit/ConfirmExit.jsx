import { useLocation, useNavigate } from 'react-router-dom'
import { PopExit, PopExitContainer, PopExitBlock, PopExitTitle, PopExitButtonYes, PopExitButtonNo, PopExitFormGroup } from '../ConfirmExit/ConfirmExit.styles'
export default function ConfirmExit({ $isDark, setIsAuth, toggleAuth, isAuth }) {
    const location = useLocation()
    const navigate = useNavigate()
    const { modalWindow } = location.state || {}
    console.log(isAuth)

    function toggleAuth(e) {
        e.preventDefault()
        setIsAuth(true)
        navigate('/')
    }

    return (
        <PopExit style={{ display: modalWindow ? 'block' : 'none' }} id="popExit" $isDark={$isDark}>
            <PopExitContainer>
                <PopExitBlock $isDark={$isDark}>
                    <PopExitTitle $isDark={$isDark}>Выйти из аккаунта?</PopExitTitle>
                    <form className="pop-exit__form" id="formExit" action="#">
                        <PopExitFormGroup>
                            <PopExitButtonYes id="exitYes" to="/login" $isDark={$isDark}>
                                Да, выйти
                            </PopExitButtonYes>
                            <PopExitButtonNo onClick={toggleAuth} id="exitNo" $isDark={$isDark}>
                                Нет, остаться
                            </PopExitButtonNo>
                        </PopExitFormGroup>
                    </form>
                </PopExitBlock>
            </PopExitContainer>
        </PopExit>
    )
}
