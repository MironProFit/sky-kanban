import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Container, LinkButton, Wrapper } from '../Styles/GlobalStyle'
import { HeaderStyled, HeaderLogo, HeaderBlock, HeaderNav, HeaderNavBtn, HeaderNavBtnFixed, HeaderNavBtnWrap } from './Header.styles'
import UserMenuModal from './UserMenuModal'

export default function Header({ isAuth, setIsAuth, isTheme, setIsTheme, $isDark }) {
    const [modalOpen, setModalOpen] = useState(false)
    const [isAuthPage, setIsAuthPage] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        if (location.pathname === '/login' || location.pathname === '/register') {
            setIsAuthPage(true)
        } else {
            setIsAuthPage(false)
        }
    }, [location.pathname])

    function toggleModal(event) {
        event.preventDefault()
        setModalOpen((prev) => !prev)
    }

    const handleTheme = () => {
        setIsTheme((prev) => !prev)
    }

    useEffect(() => {
        setModalOpen(false)
    }, [location])

    const handleAuth = () => {
        setIsAuth(true)
        navigate('/exit', { state: { modalWindow: true } })
    }
    Wrapper

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
                                        <Link to="createcard" state={{ modalWindow: true }}>
                                            <HeaderNavBtn $isDark={$isDark} id="btnMainNew" type="button">
                                                Создать новую задачу
                                            </HeaderNavBtn>
                                        </Link>
                                        <LinkButton $isDark={$isDark} $isOpen={modalOpen} onClick={toggleModal}>
                                            Ваше имя
                                        </LinkButton>

                                        {modalOpen && <UserMenuModal isAuth={isAuth} toggleModal={toggleModal} handleTheme={handleTheme} handleAuth={handleAuth} isTheme={isTheme} $isDark={$isDark} />}
                                    </HeaderNav>
                                </>
                            )}
                        </HeaderBlock>
                        <HeaderNavBtnWrap>
                            <Link to="createcard" state={{ modalWindow: true }}>
                                <HeaderNavBtnFixed $isDark={$isDark} id="btnMainNew" type="button">
                                    Создать новую задачу
                                </HeaderNavBtnFixed>
                            </Link>
                        </HeaderNavBtnWrap>
                    </>
                )}
            </Container>
        </HeaderStyled>
    )
}
