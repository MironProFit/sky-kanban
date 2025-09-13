import { Form, useActionData, useLoaderData, useLocation, useNavigate, useNavigation, useRouteError, useSubmit } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { ContainerSignin, FGLink, FGTitle, ModalBlock, ModalBtnEnter, ModalForm, ModalFormGroup, ModalSignin, ModalTitle, TextError, TextInput, Title } from './AuthModal.styled'
import { TextContainer, Wrapper } from '../../components/Styles/GlobalStyle'

import { loginUser } from '../../services/auth/login'
import { useAppContext } from '../../routes/AppContext'

import { registerUser, registerAction } from '../../services/auth/register'
import { getAllTasks } from '../../services/tasks/getTasks'
import { fetchTasks } from '../../services/tasks/taskService'

function AuthModal() {
    const { isAuth, setIsAuth, $isDark, setUserData, setUserName, setToken, errorMessage, setErrorMessage, loadingMessage, setLoadingMessage, setIsLoading, DEFAULT_MESSAGE_LOADING, setLoadingCard } =
        useAppContext()
    const [isPage, setIsPage] = useState('login')
    const location = useLocation()
    const navigate = useNavigate()

    // Настройка форм
    const {
        register: registerLogin,
        handleSubmit: handleSubmitLogin,
        reset: resetLogin,
        formState: { errors: errorsLogin, isValid: isValidLogin },
    } = useForm({ mode: 'onChange' })

    const {
        register: registerSignUp,
        handleSubmit: handleSubmitSignUp,
        reset: resetSignUp,
        formState: { errors: errorsSignUp, isValid: isValidSignUp },
    } = useForm({ mode: 'onChange' })

    // Смена страницы и сброс форм
    useEffect(() => {
        if (location.pathname === '/register') {
            setIsPage('register')
            resetSignUp()
        } else {
            setIsPage('login')
            resetLogin()
        }
    }, [location.pathname, resetLogin, resetSignUp])

    useEffect(() => {
        if (isAuth) {
            navigate('/', { replace: true })
        }
    }, [isAuth])

    // Обработчик логина
    const onLogin = async (data) => {
        setLoadingMessage('Авторизация пользователя')
        setIsLoading(true)
        setErrorMessage('')
        try {
            const response = await loginUser(data.login, data.password)
            const userData = response.data
            setUserName(userData.user.name)
            setToken(userData.user.token)
            // setIsLoading(false)

            // Получаем задачи после успешного логина
            setLoadingCard(true)
            await fetchTasks(userData.user.token, setUserData, setIsLoading, setLoadingMessage, setErrorMessage, setIsAuth, DEFAULT_MESSAGE_LOADING, setLoadingCard)
        } catch (error) {
            const errMsg = error?.response?.data?.error || error?.response?.data?.message || error?.message || 'Ошибка входа'
            setErrorMessage(errMsg)
            console.error('Ошибка входа:', errMsg)
        } finally {
            setLoadingMessage(DEFAULT_MESSAGE_LOADING)
            setLoadingCard(false)
        }
    }

    // Обработчик регистрации
    const onSignUp = async (data) => {
        setLoadingMessage('Регистрируем пользователя')
        setIsLoading(true)
        setErrorMessage('')
        try {
            const response = await registerUser(data)
            const newUserData = response.data
            console.log('Регистрация успешна:', newUserData)
            // После регистрации можно автоматически войти
            setUserName(newUserData.user.name)
            setToken(newUserData.user.token)
            await fetchTasks(newUserData.user.token)
        } catch (error) {
            const errMsg = error?.response?.data?.error || error?.response?.data?.message || error?.message || 'Ошибка регистрация'
            setErrorMessage(errMsg) // Устанавливаем сообщение об ошибке

            console.error('Ошибка регистрация:', errMsg)
            // Обработка ошибки
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Wrapper $isDark={$isDark}>
            <ContainerSignin $isDark={$isDark}>
                <ModalSignin>
                    <ModalBlock $isDark={$isDark}>
                        <ModalTitle>
                            <Title $isDark={$isDark}>{isPage === 'login' ? 'Вход' : 'Регистрация'}</Title>
                        </ModalTitle>
                        {/* ---- ФОРМА ЛОГИНА ---- */}
                        {isPage === 'login' && (
                            <ModalForm onSubmit={handleSubmitLogin(onLogin)}>
                                <TextInput
                                    $isDark={$isDark}
                                    type="text"
                                    name="login"
                                    placeholder="Логин или email"
                                    autoComplete="username"
                                    {...registerLogin('login', { required: 'Поле обязательно.', minLength: { value: 4, message: 'Минимум 4 символа.' } })}
                                />
                                {errorsLogin.login && <TextContainer style={{ color: 'red' }}>{errorsLogin.login.message}</TextContainer>}

                                <TextInput
                                    $isDark={$isDark}
                                    name="password"
                                    placeholder="Пароль"
                                    type="password"
                                    autoComplete="current-password"
                                    {...registerLogin('password', { required: 'Пароль обязателен.', minLength: { value: 4, message: 'Минимум 4 символа.' } })}
                                />
                                {errorsLogin.password && <TextContainer style={{ color: 'red' }}>{errorsLogin.password.message}</TextContainer>}

                                <TextContainer style={{ color: 'red' }}>{errorMessage}</TextContainer>

                                <ModalBtnEnter type="submit" disabled={!isValidLogin}>
                                    Войти
                                </ModalBtnEnter>
                                <ModalFormGroup>
                                    <FGTitle>Нужно зарегистрироваться?</FGTitle>
                                    <FGLink type="button" onClick={() => setIsPage('register')}>
                                        Регистрируйтесь здесь
                                    </FGLink>
                                </ModalFormGroup>
                            </ModalForm>
                        )}
                        {/* ---- ФОРМА РЕГИСТРАЦИИ ---- */}
                        {isPage === 'register' && (
                            <ModalForm onSubmit={handleSubmitSignUp(onSignUp)}>
                                <TextInput
                                    $isDark={$isDark}
                                    type="text"
                                    name="login"
                                    placeholder="Логин"
                                    autoComplete="username"
                                    {...registerSignUp('login', { required: 'Логин обязателен.', minLength: { value: 4, message: 'Логин слишком короткое.' } })}
                                />
                                {errorsSignUp.login && <TextContainer style={{ color: 'red' }}>{errorsSignUp.login.message}</TextContainer>}

                                <TextInput
                                    $isDark={$isDark}
                                    type="text"
                                    name="name"
                                    placeholder="Имя"
                                    {...registerSignUp('name', { required: 'Имя обязательно.', minLength: { value: 4, message: 'Имя слишком короткое.' } })}
                                />
                                {errorsSignUp.name && <TextContainer style={{ color: 'red' }}>{errorsSignUp.name.message}</TextContainer>}

                                <TextInput
                                    $isDark={$isDark}
                                    type="password"
                                    name="password"
                                    placeholder="Пароль"
                                    autoComplete="new-password"
                                    {...registerSignUp('password', { required: 'Пароль обязателен.', minLength: { value: 4, message: 'Минимум 4 символа.' } })}
                                />
                                {errorsSignUp.password && <TextContainer style={{ color: 'red' }}>{errorsSignUp.password.message}</TextContainer>}

                                <TextContainer style={{ color: 'red' }}>{errorMessage}</TextContainer>
                                <ModalBtnEnter type="submit" disabled={!isValidSignUp}>
                                    Зарегистрироваться
                                </ModalBtnEnter>
                                <ModalFormGroup>
                                    <FGTitle>
                                        Уже есть аккаунт?{' '}
                                        <FGLink type="button" onClick={() => setIsPage('login')}>
                                            Войдите здесь
                                        </FGLink>
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
