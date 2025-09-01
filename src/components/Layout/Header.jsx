import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Container, LinkButton, PrimaryButton, Wrapper } from '../Styles/GlobalStyle'
import { HeaderStyled, HeaderLogo, HeaderBlock, HeaderNav, HeaderNavBtn } from './Header.styles'
import UserMenuModal from './UserMenuModal'
import { useAppContext } from '../../routes/AppContext'

export default function Header({ isAuth, setIsAuth, isTheme, setIsTheme, $isDark }) {
    const [isAuthPage, setIsAuthPage] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()

    const { isModal, handleModalClose, isMobile, handleModalOpen, isUserMenuOpen, setIsUserMenuOpen, toggleUserMenu } = useAppContext()

    useEffect(() => {
        if (location.pathname === '/login' || location.pathname === '/register') {
            setIsAuthPage(true)
        } else {
            setIsAuthPage(false)
        }
    }, [location.pathname])

    const handleTheme = () => {
        setIsTheme((prev) => !prev)
    }

    const handleAuth = () => {
        setIsUserMenuOpen(false)
        setIsAuth(false)
        navigate('/exit')
    }

    return (
        <HeaderStyled $isDark={$isDark}>
            <Container>
                {!isAuthPage && isAuth && (
                    <>
                        <HeaderBlock>
                            <HeaderLogo>
                                <Link to="/" target="_self">
                                    <img src={`../../../public/${isTheme ? 'logo_dark.png' : 'logo.png'}`} alt="logo"></img>
                                </Link>
                            </HeaderLogo>

                            {!isAuthPage && isAuth && (
                                <>
                                    <HeaderNav>
                                        {location.pathname === '/' ? (
                                            <Link style={{ marginRight: '20px' }} to="createcard" state={{ createMode: true }}>
                                                <PrimaryButton $fixed={isMobile && location.pathname === '/'} onClick={handleModalOpen} $isDark={$isDark} id="btnMainNew" type="button">
                                                    Создать новую задачу
                                                </PrimaryButton>
                                            </Link>
                                        ) : (
                                            ''
                                        )}

                                        <LinkButton $isDark={$isDark} $isOpen={isUserMenuOpen} onClick={toggleUserMenu}>
                                            Ваше имя
                                        </LinkButton>

                                        {isUserMenuOpen && (
                                            <UserMenuModal toggleUserMenu={toggleUserMenu} isAuth={isAuth} handleTheme={handleTheme} handleAuth={handleAuth} isTheme={isTheme} $isDark={$isDark} />
                                        )}
                                    </HeaderNav>
                                </>
                            )}
                        </HeaderBlock>
                    </>
                )}
            </Container>
        </HeaderStyled>
    )
}
