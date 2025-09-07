import { Form, useActionData, useLoaderData, useLocation, useNavigate, useNavigation, useRouteError, useSubmit } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { ContainerSignin, FGLink, FGTitle, ModalBlock, ModalBtnEnter, ModalForm, ModalFormGroup, ModalSignin, ModalTitle, TextError, TextInput, Title } from './AuthModal.styled'
import { TextContainer, Wrapper } from '../../components/Styles/GlobalStyle'

import { loginUser } from '../../services/auth/login'
import { useAppContext } from '../../routes/AppContext'
import Loading from '../Loading/LoadingModal'
import { registerUser } from '../../services/auth/register'
function AuthModal() {
    const { setIsAuth, setIsLoading, $isDark, setUserName, setToken } = useAppContext()

    const [isPage, setIsPage] = useState('login')
    const location = useLocation()
    const navigate = useNavigate()
    const submit = useSubmit()

    // ----------------------------------------
    // Формы
    // ----------------------------------------
    // Логин
    const {
        register: registerLogin,
        handleSubmit: handleSubmitLogin,
        reset: resetLogin,
        formState: { errors: errorsLogin, isValid: isValidLogin },
    } = useForm({ mode: 'onChange' })

    // Регистрация
    const {
        register: registerSignUp,
        handleSubmit: handleSubmitSignUp,
        reset: resetSignUp,
        formState: { errors: errorsSignUp, isValid: isValidSignUp },
    } = useForm({ mode: 'onChange' })

    // ----------------------------------------
    // Mode change: сброс форм
    // ----------------------------------------
    useEffect(() => {
        if (location.pathname === '/register') {
            setIsPage('register')
            resetSignUp()
        } else {
            setIsPage('login')
            resetLogin()
        }
    }, [location.pathname])

    // Переключение
    const togglePage = () => {
        if (isPage === 'login') {
            setIsPage('register')
            navigate('/register')
            resetSignUp()
        } else {
            setIsPage('login')
            navigate('/login')
            resetLogin()
        }
    }

    // ----------------------------------------
    // Сабмитим через useSubmit!
    // ----------------------------------------

    // Логин
    const onLogin = (data) => {
        submit(data, { method: 'post', action: '/login' })
    }

    // Регистрация
    const onSignUp = (data) => {
        submit(data, { method: 'post', action: '/register' })
    }

    // ----------------------------------------
    // Обработка ответа action
    // ----------------------------------------
    const actionData = useActionData()
    const navigation = useNavigation()
    const isLoading = navigation.state === 'submitting'

    useEffect(() => {
        if (actionData?.res?.data?.user) {
            setUserName(actionData.res.data.user.name)
            setToken(actionData.res.data.user.token)
            setIsAuth(true)
            navigate('/', { replace: true }) // или location.state?.from ?? '/'
        }
    }, [actionData])

    // ----------------------------------------
    // Render
    // ----------------------------------------
    return (
        <Wrapper $isDark={$isDark}>
            <ContainerSignin $isLoading={isLoading} $isDark={$isDark}>
                <>
                    {isLoading && <Loading />}

                    <ModalSignin>
                        <ModalBlock $isDark={$isDark}>
                            <ModalTitle>
                                <Title $isDark={$isDark}>{isPage === 'login' ? 'Вход' : 'Регистрация'}</Title>
                            </ModalTitle>

                            {/* Ошибка от action */}
                            {actionData?.error && <TextContainer style={{ color: 'red', marginBottom: 10 }}>{actionData?.error}</TextContainer>}

                            {/* ---- LOGIN ---- */}
                            {isPage === 'login' && (
                                <ModalForm id="formLogIn" onSubmit={handleSubmitLogin(onLogin)}>
                                    <TextInput
                                        $isDark={$isDark}
                                        type="text"
                                        name="login"
                                        id="formlogin"
                                        placeholder="Логин или email"
                                        autoComplete="username"
                                        {...registerLogin('login', {
                                            required: 'Поле обязательно.',
                                            minLength: { value: 4, message: 'Минимум 3 символа.' },
                                        })}
                                    />
                                    {errorsLogin.login && <TextContainer style={{ color: 'red', marginBottom: 10 }}>{errorsLogin.login.message}</TextContainer>}

                                    <TextInput
                                        $isDark={$isDark}
                                        name="password"
                                        id="formpassword"
                                        placeholder="Пароль"
                                        type="password"
                                        autoComplete="current-password"
                                        {...registerLogin('password', {
                                            required: 'Пароль обязателен.',
                                            minLength: { value: 4, message: 'Минимум 4 символа.' },
                                        })}
                                    />
                                    {errorsLogin.password && <TextContainer style={{ color: 'red', marginBottom: 10 }}>{errorsLogin.password.message}</TextContainer>}

                                    <ModalBtnEnter type="submit" disabled={!isValidLogin}>
                                        Войти
                                    </ModalBtnEnter>

                                    <ModalFormGroup>
                                        <FGTitle>Нужно зарегистрироваться?</FGTitle>
                                        <FGLink type="button" onClick={togglePage}>
                                            Регистрируйтесь здесь
                                        </FGLink>
                                    </ModalFormGroup>
                                </ModalForm>
                            )}

                            {/* ---- REGISTER ---- */}
                            {isPage === 'register' && (
                                <ModalForm id="formLogUp" onSubmit={handleSubmitSignUp(onSignUp)}>
                                    <TextInput
                                        $isDark={$isDark}
                                        type="text"
                                        name="login"
                                        id="text"
                                        placeholder="Логин"
                                        autoComplete="username"
                                        {...registerSignUp('login', {
                                            required: 'Логин обязателен.',
                                            minLength: { value: 4, message: 'Логин слишком короткое.' },
                                        })}
                                    />
                                    {errorsSignUp.text && <TextContainer style={{ color: 'red', marginBottom: 10 }}>{errorsSignUp.text.message}</TextContainer>}

                                    <TextInput
                                        $isDark={$isDark}
                                        type="text"
                                        name="name"
                                        id="first-name"
                                        placeholder="Имя"
                                        {...registerSignUp('name', {
                                            required: 'Имя обязательно.',
                                            minLength: { value: 4, message: 'Имя слишком короткое.' },
                                        })}
                                    />
                                    {errorsSignUp['first-name'] && <TextContainer style={{ color: 'red', marginBottom: 10 }}>{errorsSignUp['first-name'].message}</TextContainer>}

                                    <TextInput
                                        $isDark={$isDark}
                                        type="password"
                                        name="password"
                                        id="passwordFirst"
                                        placeholder="Пароль"
                                        autoComplete="new-password"
                                        {...registerSignUp('password', {
                                            required: 'Пароль обязателен.',
                                            minLength: { value: 4, message: 'Минимум 4 символа.' },
                                        })}
                                    />
                                    {errorsSignUp.password && <TextContainer style={{ color: 'red', marginBottom: 10 }}>{errorsSignUp.password.message}</TextContainer>}

                                    <ModalBtnEnter
                                        type="submit"
                                        disabled={!isValidSignUp}
                                        
                                    >
                                        Зарегистрироваться
                                    </ModalBtnEnter>

                                    <ModalFormGroup>
                                        <FGTitle>
                                            Уже есть аккаунт?{' '}
                                            <FGLink type="button" onClick={togglePage}>
                                                Войдите здесь
                                            </FGLink>
                                        </FGTitle>
                                    </ModalFormGroup>
                                </ModalForm>
                            )}
                        </ModalBlock>
                    </ModalSignin>
                </>
            </ContainerSignin>
        </Wrapper>
    )
}

export default AuthModal

// function AuthModal() {
//     const { setIsAuth, setIsLoading, $isDark, setUserName, setToken, token, isAuth } = useAppContext()

//     const [isPage, setIsPage] = useState('login')
//     const navigate = useNavigate()

//     const location = useLocation()

//     // react-hook-form для обеих форм:
//     const {
//         register,
//         reset,
//         formState: { errors, isValid },
//     } = useForm({ mode: 'onChange' })

//     // Для регистрации можно ещё один useForm, если разные поля
//     const {
//         register: registerSignUp,
//         handleSubmit: handleSubmitSignUp,
//         reset: resetSignUp,
//         formState: { errors: errorsSignUp, isValid: isValidSignUp },
//     } = useForm({ mode: 'onChange' })

//     useEffect(() => {
//         if (location.pathname === '/register') {
//             setIsPage('register')
//             resetSignUp()
//         } else {
//             setIsPage('login')
//             reset()
//         }
//         // eslint-disable-next-line
//     }, [location.pathname])

//     const togglePage = () => {
//         if (isPage === 'login') {
//             setIsPage('register')
//             navigate('/register')
//             resetSignUp()
//         } else {
//             setIsPage('login')
//             navigate('/login')
//             reset()
//         }
//     }

//     // useEffect(() => {
//     //     if (isAuth) {
//     //         const from = location.state?.from || '/'
//     //         navigate(from, { replace: true })
//     //     }
//     // }, [isAuth, location.state?.from, navigate])

//     const actionData = useActionData()
//     const navigation = useNavigation()
//     const isLoading = navigation.state === 'submitting'

//     useEffect(() => {
//         console.log(actionData?.res?.data)
//         if (actionData?.res?.data.user) {
//             setUserName(actionData?.res?.data.user.name), setToken(actionData?.res?.data.user.token)
//             setIsAuth(true)
//             const from = location.state?.from || '/'
//             navigate(from, { replace: true })
//         }
//     }, [actionData])
//     return (
//         <Wrapper $isDark={$isDark}>
//             <ContainerSignin $isLoading={isLoading} $isDark={$isDark}>
//                 <>
//                     {isLoading && <Loading />}

//                     <ModalSignin>
//                         <ModalBlock $isDark={$isDark}>
//                             <ModalTitle>
//                                 <Title $isDark={$isDark}>{isPage === 'login' ? 'Вход' : 'Регистрация'}</Title>
//                             </ModalTitle>

//                             {actionData?.error && <TextError>{actionData?.error}</TextError>}

//                             {isPage === 'login' && (
//                                 <ModalForm method="post" action="/login" id="formLogIn">
//                                     <TextInput
//                                         $isDark={$isDark}
//                                         type="text"
//                                         name="login"
//                                         id="formlogin"
//                                         placeholder="Логин или email"
//                                         {...register('login', {
//                                             required: 'Поле обязательно.',
//                                             minLength: { value: 3, message: 'Минимум 3 символа.' },
//                                         })}
//                                     />
//                                     {errors.login && <TextContainer style={{ color: 'red', marginBottom: 10 }}>{errors.login.message}</TextContainer>}

//                                     <TextInput
//                                         $isDark={$isDark}
//                                         name="password"
//                                         id="formpassword"
//                                         placeholder="Пароль"
//                                         type="password"
//                                         autoComplete="current-password"
//                                         {...register('password', {
//                                             required: 'Пароль обязателен.',
//                                             minLength: { value: 4, message: 'Минимум 4 символа.' },
//                                         })}
//                                     />
//                                     {errors.password && <TextContainer style={{ color: 'red', marginBottom: 10 }}>{errors.password.message}</TextContainer>}

//                                     <ModalBtnEnter $isValid={isValid} type="submit" id="btnEnter" disabled={!isValid}>
//                                         Войти
//                                     </ModalBtnEnter>

//                                     <ModalFormGroup>
//                                         <FGTitle>Нужно зарегистрироваться?</FGTitle>
//                                         <FGLink type="button" onClick={togglePage}>
//                                             Регистрируйтесь здесь
//                                         </FGLink>
//                                     </ModalFormGroup>
//                                 </ModalForm>
//                             )}

//                             {isPage === 'register' && (
//                                 <ModalForm method="post" action="/register" id="formLogUp">
//                                     <TextInput
//                                         $isDark={$isDark}
//                                         type="text"
//                                         name="text"
//                                         id="text"
//                                         placeholder="Логин"
//                                         {...registerSignUp('text', {
//                                             required: 'Логин обязателен.',
//                                             minLength: { value: 2, message: 'Логин слишком короткое.' },
//                                         })}
//                                     />
//                                     {errorsSignUp['text'] && <TextContainer style={{ color: 'red', marginBottom: 10 }}>{errorsSignUp['text'].message}</TextContainer>}

//                                     <TextInput
//                                         $isDark={$isDark}
//                                         type="text"
//                                         name="first-name"
//                                         id="first-name"
//                                         placeholder="Имя"
//                                         {...registerSignUp('first-name', {
//                                             required: 'Имя обязательно.',
//                                             minLength: { value: 2, message: 'Имя слишком короткое.' },
//                                         })}
//                                     />
//                                     {errorsSignUp['first-name'] && <TextContainer style={{ color: 'red', marginBottom: 10 }}>{errorsSignUp['first-name'].message}</TextContainer>}

//                                     <TextInput
//                                         $isDark={$isDark}
//                                         type="password"
//                                         name="password"
//                                         id="passwordFirst"
//                                         placeholder="Пароль"
//                                         {...registerSignUp('password', {
//                                             required: 'Пароль обязателен.',
//                                             minLength: { value: 4, message: 'Минимум 4 символа.' },
//                                         })}
//                                     />
//                                     {errorsSignUp.password && <TextContainer style={{ color: 'red', marginBottom: 10 }}>{errorsSignUp.password.message}</TextContainer>}

//                                     <ModalBtnEnter type="submit" id="SignUpEnter" disabled={!isValidSignUp}>
//                                         Зарегистрироваться
//                                     </ModalBtnEnter>

//                                     <ModalFormGroup>
//                                         <FGTitle>
//                                             Уже есть аккаунт?{' '}
//                                             <FGLink type="button" onClick={togglePage}>
//                                                 Войдите здесь
//                                             </FGLink>
//                                         </FGTitle>
//                                     </ModalFormGroup>
//                                 </ModalForm>
//                             )}
//                         </ModalBlock>
//                     </ModalSignin>
//                 </>
//             </ContainerSignin>
//         </Wrapper>
//     )
// }

// export default AuthModal
