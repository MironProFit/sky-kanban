import { Link } from "react-router-dom"


function Register() {
    return (
        <div className="wrapper">
            <div className="container-signup">
                <div className="modal">
                    <div className="modal__block">
                        <div className="modal__ttl">
                            <h2>Регистрация</h2>
                        </div>
                        <form className="modal__form-login" id="formLogUp">
                            <input className="modal__input first-name" type="text" name="first-name" id="first-name" placeholder="Имя" required />
                            <input className="modal__input login" type="email" name="login" id="loginReg" placeholder="Эл. почта" required />
                            <input className="modal__input password-first" type="password" name="password" id="passwordFirst" placeholder="Пароль" required />
                            <Link to='/' type="submit" className="modal__btn-signup-ent _hover01" id="SignUpEnter">
                                Зарегистрироваться
                            </Link>
                            <div className="modal__form-group">
                                <p>
                                    Уже есть аккаунт? <Link to="login">Войдите здесь</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
