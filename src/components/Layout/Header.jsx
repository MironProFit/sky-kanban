import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Container, LinkButton, PrimaryButton, Wrapper } from '../Styles/GlobalStyle'
import { HeaderStyled, HeaderLogo, HeaderBlock, HeaderNav, HeaderNavBtn } from './Header.styles'
import UserMenuModal from './UserMenuModal'
import { useAppContext } from '../../routes/AppContext'

export default function Header({ isAuth, setIsAuth, isTheme, setIsTheme, $isDark }) {
    const [userMenu, setUserMenu] = useState(false)
    const [isAuthPage, setIsAuthPage] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()

    const { isModal, handleModalClose, isMobile, handleModalOpen } = useAppContext()

    useEffect(() => {
        if (location.pathname === '/login' || location.pathname === '/register') {
            setIsAuthPage(true)
        } else {
            setIsAuthPage(false)
        }
    }, [location.pathname])

    // function toggleModal(event) {
    //     event.preventDefault()
    //     setModalOpen((prev) => !prev)
    // }

    const handleTheme = () => {
        setIsTheme((prev) => !prev)
    }
    // const handleCreateModal = (event) => {
    //     event.preventDefault()

    //     handleModalOpen()
    //     console.log(isModal)
    // }

    const handleAuth = () => {
        setUserMenu(false)
        setIsAuth(true)
        navigate('/exit')
    }
    const toggleUserMenu = (e) => {
        e.preventDefault()
        setUserMenu((prev) => !prev)
    }
    console.log(userMenu)
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

                                        <LinkButton $isDark={$isDark} $isOpen={userMenu} onClick={toggleUserMenu}>
                                            Ваше имя
                                        </LinkButton>

                                        {userMenu && (
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
