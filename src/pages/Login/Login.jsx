import { Link } from 'react-router-dom'
import './Login.css'

function SignIn({ isAuth, setIsAuth }) {
    function toggleAuth(event) {
        // event.preventDefault()
        setIsAuth((prev) => !prev)
    }
    return (
        <div className="wrapper">
            <div className="container-signin">
                <div className="modal">
                    <div className="modal__block">
                        <div className="modal__ttl">
                            <h2>Вход</h2>
                        </div>
                        <form className="modal__form-login" id="formLogIn" action="#">
                            <input className="modal__input" type="email" name="login" id="formlogin" placeholder="Эл. почта"  />
                            <input className="modal__input" type="password" name="password" id="formpassword" placeholder="Пароль" />
                            <Link to="/" type="submit" className="modal__btn-enter _hover01" id="btnEnter" onClick={toggleAuth}>
                                Войти
                            </Link>
                            <div className="modal__form-group">
                                <p>Нужно зарегистрироваться?</p>
                                <Link to="register">Регистрируйтесь здесь</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn
