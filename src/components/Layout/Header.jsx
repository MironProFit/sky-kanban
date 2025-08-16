import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Container, PrimaryButton } from '../Styles/GlobalStyles'
import { HeaderStyled, HeaderLogo, HeaderBlock, HeaderNav, HeaderModalBtn, HeaderNavBtn } from './Header.styles'

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
    return (
        <HeaderStyled $isDark={$isDark}>
            <Container>
                {!isAuthPage && (
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
                                    <HeaderModalBtn $isDark={$isDark} $isOpen={modalOpen} onClick={toggleModal}>
                                        Ваше имя
                                    </HeaderModalBtn>

                                    {modalOpen && (
                                        <div className="header__pop-user-set pop-user-set" id="user-set-target">
                                            <Link className="pop-user-set__close" onClick={toggleModal}>
                                                &#10006;
                                            </Link>
                                            <p className="pop-user-set__name">Ivan Ivanov</p>
                                            <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
                                            <div className="pop-user-set__theme">
                                                <p>{isTheme ? 'Темная тема' : 'Светлая тема '}</p>
                                                <input checked={isTheme} onChange={handleTheme} type="checkbox" className="checkbox" name="checkbox"></input>
                                            </div>

                                            <button onClick={handleAuth} type="button" className="_hover03">
                                                Выйти
                                            </button>
                                        </div>
                                    )}
                                </HeaderNav>
                            </>
                        )}
                    </HeaderBlock>
                )}
            </Container>
        </HeaderStyled>
    )
}
