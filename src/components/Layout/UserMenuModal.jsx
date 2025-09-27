import { ButtonContainer, CheckBoxTheme, Container, ThemeContainer, ThemeTitle, TilteMail, TilteName } from './UserMenuModal.styles'
import { SecondaryButton } from '../Styles/GlobalStyle'
import { useAppContext } from '../../routes/AppContext'

function UserMenuModal({ handleAuth }) {
    const { isMobile, isTheme, handleTheme, $isDark, userName, userLogin } = useAppContext()

    return (
        <Container $isDark={$isDark} id="user-set-target">
            <TilteName $isDark={$isDark}>{userName || 'Личный кабинет'}</TilteName>
            <TilteMail>{userLogin}</TilteMail>
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
