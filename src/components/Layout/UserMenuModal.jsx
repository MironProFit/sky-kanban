import { Link, useLoaderData } from 'react-router-dom'
import { ButtonContainer, CheckBoxTheme, Container, ThemeContainer, ThemeTitle, TilteMail, TilteName } from './UserMenuModal.styles'
import { SecondaryButton } from '../Styles/GlobalStyle'
import { useAppContext } from '../../routes/AppContext'
import { useEffect, useRef } from 'react'

function UserMenuModal({ isTheme, handleTheme, handleAuth, $isDark }) {
    // const data = useLoaderData()
    // console.log(data)
    const { isMobile } = useAppContext()

    return (
        <Container $isDark={$isDark} id="user-set-target">
            <TilteName $isDark={$isDark}>Ivan Ivanov</TilteName>
            <TilteMail>ivan.ivanov@gmail.com</TilteMail>
            <ThemeContainer>
                <ThemeTitle $isDark={$isDark}>{isTheme ? 'Темная тема' : 'Светлая тема '}</ThemeTitle>
                <CheckBoxTheme checked={isTheme} onChange={handleTheme} type="checkbox" className="checkbox" name="checkbox"></CheckBoxTheme>
            </ThemeContainer>

            <ButtonContainer>
                <SecondaryButton style={{ height: isMobile ? '40px' : '30px' }} $isDark={$isDark} $width="72px" onClick={handleAuth} type="button">
                    Выйти
                </SecondaryButton>
            </ButtonContainer>
        </Container>
    )
}
export default UserMenuModal
