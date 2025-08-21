import { Link } from 'react-router-dom'
import { ButtonContainer, CheckBoxTheme, Container, ThemeContainer, ThemeTitle, TilteMail, TilteName } from './UserMenuModal.styles'
import { SecondaryButton } from '../Styles/GlobalStyles'

function UserMenuModal({ toggleModal, isTheme, handleTheme, handleAuth, $isDark }) {
    return (
        <Container $isDark={$isDark} id="user-set-target">
            <Link className="pop-user-set__close" onClick={toggleModal}>
                &#10006;
            </Link>
            <TilteName $isDark={$isDark}>Ivan Ivanov</TilteName>
            <TilteMail>ivan.ivanov@gmail.com</TilteMail>
            <ThemeContainer>
                <ThemeTitle $isDark={$isDark}>{isTheme ? 'Темная тема' : 'Светлая тема '}</ThemeTitle>
                <CheckBoxTheme checked={isTheme} onChange={handleTheme} type="checkbox" className="checkbox" name="checkbox"></CheckBoxTheme>
            </ThemeContainer>

            <ButtonContainer>
                <SecondaryButton $isDark={$isDark} $width="72px" onClick={handleAuth} type="button">
                    Выйти
                </SecondaryButton>
            </ButtonContainer>
        </Container>
    )
}
export default UserMenuModal
