import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header({ isAuthPage, isAuth, setIsAuth }) {
    const [modalOpen, setModalOpen] = useState(false)
    const location = useLocation()

    function toggleModal(event) {
        event.preventDefault()
        setModalOpen((prev) => !prev)
    }

    useEffect(() => {
        setModalOpen(false)
    }, [location])
    function toggleAuth(event) {
        // event.preventDefault()
        setIsAuth((prev) => !prev)
    }

    return (
        <header className="header">
            <div className="container">
                <div className="header__block">
                    <div className="header__logo _show _light">
                        <Link to="/" target="_self">
                            <img src="/logo.png" alt="logo"></img>
                        </Link>
                    </div>
                    {/* <div>
                        <button onClick={toggleAuth}>Активация авторизации</button>
                    </div> */}
                    {!isAuthPage && isAuth && (
                        <>
                            <div className="header__logo _dark">
                                <Link to="/" target="_self">
                                    <img src="/logo_dark.png" alt="logo"></img>
                                </Link>
                            </div>
                            <nav className="header__nav">
                                <Link to="newcard" state={{ modalWindow: true }}>
                                    <button className="header__btn-main-new _hover01" id="btnMainNew" type="button">
                                        Создать новую задачу
                                    </button>
                                </Link>

                                <Link to="login">
                                    <button className="header__user _hover02" onClick={toggleModal}>
                                        Ваше имя
                                    </button>
                                </Link>
                                {modalOpen && (
                                    <div className="header__pop-user-set pop-user-set" id="user-set-target">
                                        <Link className="pop-user-set__close" to="#" onClick={toggleModal}>
                                            x
                                        </Link>
                                        <p className="pop-user-set__name">Ivan Ivanov</p>
                                        <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
                                        <div className="pop-user-set__theme">
                                            <p>Темная тема</p>
                                            <input type="checkbox" className="checkbox" name="checkbox"></input>
                                        </div>
                                        <Link to="/exit" state={{ modalWindow: true }} type="button" className="_hover03">
                                            Выйти
                                        </Link>
                                    </div>
                                )}
                            </nav>
                        </>
                    )}
                </div>
            </div>
        </header>
    )
}
