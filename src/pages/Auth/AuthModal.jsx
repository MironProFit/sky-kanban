import { useLocation, useNavigate } from 'react-router-dom'
import { ContainerSignin, FGLink, FGTitle, ModalBlock, ModalBtnEnter, ModalForm, ModalFormGroup, ModalSignin, ModalTitle, TextInput, Title } from './AuthModal.styled'
import { useEffect, useState } from 'react'
import { Wrapper } from '../../components/Styles/GlobalStyle'

function AuthModal({ setIsAuth, isTheme, $isDark, toggleAuth }) {
    const [isPage, setIsPage] = useState('login')
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        if (location.pathname === '/register') {
            setIsPage('register')
        } else {
            setIsPage('login')
        }
    }, [location.pathname])

    const togglePage = () => {
        if (isPage === 'login') {
            setIsPage('register')
            navigate('/register')
        } else {
            setIsPage('login')
            navigate('/login')
        }
    }
    function toggleAuth(e) {
        e.preventDefault()
        setIsAuth(true)
        navigate('/')
    }

    return (
        <Wrapper $isDark={$isDark}>
            <ContainerSignin $isDark={$isDark}>
                <ModalSignin>
                    <ModalBlock $isDark={$isDark}>
                        <ModalTitle>
                            <Title $isDark={$isDark}>{isPage === 'login' ? 'Вход' : 'Регистрация'}</Title>
                        </ModalTitle>

                        {isPage === 'login' && (
                            <ModalForm id="formLogIn" onSubmit={toggleAuth}>
                                <TextInput $isDark={$isDark} type="email" name="login" id="formlogin" placeholder="Эл. почта" />

                                <TextInput $isDark={$isDark} type="password" name="password" id="formpassword" placeholder="Пароль" />

                                <ModalBtnEnter type="submit" id="btnEnter">
                                    Войти
                                </ModalBtnEnter>

                                <ModalFormGroup>
                                    <FGTitle>Нужно зарегистрироваться?</FGTitle>
                                    <FGLink onClick={togglePage}>Регистрируйтесь здесь</FGLink>
                                </ModalFormGroup>
                            </ModalForm>
                        )}

                        {isPage === 'register' && (
                            <ModalForm id="formLogUp" onSubmit={toggleAuth}>
                                <TextInput $isDark={$isDark} type="text" name="first-name" id="first-name" placeholder="Имя" />

                                <TextInput $isDark={$isDark} type="email" name="login" id="loginReg" placeholder="Эл. почта" />

                                <TextInput $isDark={$isDark} type="password" name="password" id="passwordFirst" placeholder="Пароль" />

                                <ModalBtnEnter type="submit" id="SignUpEnter">
                                    Зарегистрироваться
                                </ModalBtnEnter>

                                <ModalFormGroup>
                                    <FGTitle>
                                        Уже есть аккаунт? <FGLink onClick={togglePage}>Войдите здесь</FGLink>
                                    </FGTitle>
                                </ModalFormGroup>
                            </ModalForm>
                        )}
                    </ModalBlock>
                </ModalSignin>
            </ContainerSignin>
        </Wrapper>
    )
}

export default AuthModal
