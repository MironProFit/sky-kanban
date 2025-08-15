import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import { Wrapper } from '../../components/Styles/GlobalStyles'
import { ContainerSignin, ModalBlock, ModalSignin } from './Auth.styled'

function Login({ setIsAuth, isTheme }) {
    const navigate = useNavigate()

    function toggleAuth(e) {
        e.preventDefault()
        setIsAuth(true)
        navigate('/')
    }
    return (
        <Wrapper $color="#151419">
            <ContainerSignin>
                <ModalSignin>
                    <ModalBlock isTheme={isTheme}>
                        <div className="modal__ttl">
                            <h2>Вход</h2>
                        </div>
                        <form className="modal__form-login" id="formLogIn" action="#" onSubmit={toggleAuth}>
                            <input className="modal__input" type="email" name="login" id="formlogin" placeholder="Эл. почта" />
                            <input className="modal__input" type="password" name="password" id="formpassword" placeholder="Пароль" />
                            <button type="submit" className="modal__btn-enter _hover01" id="btnEnter">
                                Войти
                            </button>
                            <div className="modal__form-group">
                                <p>Нужно зарегистрироваться?</p>
                                <Link to="/register">Регистрируйтесь здесь</Link>
                            </div>
                        </form>
                    </ModalBlock>
                </ModalSignin>
            </ContainerSignin>
        </Wrapper>
    )
}

export default Login
