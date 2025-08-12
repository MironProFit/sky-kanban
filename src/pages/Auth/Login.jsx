import { Link, useNavigate } from 'react-router-dom'
import './Login.css'

function Login({ setIsAuth }) {
    const navigate = useNavigate()

    function toggleAuth(e) {
        e.preventDefault()
        setIsAuth(true)
        navigate('/')
    }
    return (
        <div className="wrapper">
            <div className="container-signin">
                <div className="modal">
                    <div className="modal__block">
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
