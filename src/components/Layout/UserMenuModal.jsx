import { Link } from 'react-router-dom'
import { CheckBoxThemeUSM, ContainerUSM, ThemeContainerUSM, ThemeTitleUSM, TilteMailUSM, TilteNameUSM } from './UserMenuModal.styles'
import { PrimaryButton } from '../Styles/GlobalStyles'

// USM  User Settings Modal

function UserMenuModal({ toggleModal, isTheme, handleTheme, handleAuth, $isDark }) {
    return (
        <ContainerUSM $isDark={$isDark} id="user-set-target">
            <Link className="pop-user-set__close" onClick={toggleModal}>
                &#10006;
            </Link>
            <TilteNameUSM $isDark={$isDark}>Ivan Ivanov</TilteNameUSM>
            <TilteMailUSM>ivan.ivanov@gmail.com</TilteMailUSM>
            <ThemeContainerUSM>
                <ThemeTitleUSM $isDark={$isDark}>{isTheme ? 'Темная тема' : 'Светлая тема '}</ThemeTitleUSM>
                <CheckBoxThemeUSM checked={isTheme} onChange={handleTheme} type="checkbox" className="checkbox" name="checkbox"></CheckBoxThemeUSM>
            </ThemeContainerUSM>

            <PrimaryButton $width="" onClick={handleAuth} type="button">
                Выйти
            </PrimaryButton>
        </ContainerUSM>
    )
}

export default UserMenuModal
