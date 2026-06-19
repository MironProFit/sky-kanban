import { useLocation, useNavigate } from 'react-router-dom'
import {
  PopExit,
  PopExitContainer,
  PopExitBlock,
  PopExitTitle,
  PopExitButtonYes,
  PopExitButtonNo,
  PopExitFormGroup,
} from '../ConfirmExit/ConfirmExit.styles'
import { useAuthContext } from '../../../context/AuthContext'
import { useState } from 'react'

export default function ConfirmExit() {
  const { $isDark, isMobile, setIsAuth } = useAuthContext()

  const location = useLocation()
  const navigate = useNavigate()

  const [isExit] = useState(location.pathname === '/exit')

  function toggleAuth(e) {
    e.preventDefault()
    setIsAuth(true)
    navigate('/')
  }

  function toggleLogout(e) {
    e.preventDefault()
    setIsAuth(false)
    navigate('/')
  }

  return (
    <PopExit
      style={{ display: isExit ? 'block' : 'none' }}
      id="popExit"
      $isDark={$isDark}
    >
      <PopExitContainer>
        <PopExitBlock $isMobile={isMobile} $isDark={$isDark}>
          <PopExitTitle $isDark={$isDark}>Выйти из аккаунта?</PopExitTitle>
          <form className="pop-exit__form" id="formExit" action="#">
            <PopExitFormGroup $isMobile={isMobile}>
              <PopExitButtonYes
                onClick={toggleLogout}
                $isMobile={isMobile}
                id="exitYes"
                to="/login"
                $isDark={$isDark}
              >
                Да, выйти
              </PopExitButtonYes>
              <PopExitButtonNo
                $isMobile={isMobile}
                onClick={toggleAuth}
                id="exitNo"
                $isDark={$isDark}
              >
                Нет, остаться
              </PopExitButtonNo>
            </PopExitFormGroup>
          </form>
        </PopExitBlock>
      </PopExitContainer>
    </PopExit>
  )
}
