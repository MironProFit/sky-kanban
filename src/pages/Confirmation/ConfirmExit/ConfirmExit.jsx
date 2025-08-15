import { Link, useLocation } from 'react-router-dom'

export default function ConfirmExit() {
    const location = useLocation()
    const { modalWindow } = location.state || {}

    return (
        <>
            
            
            
            
            <div className="pop-exit" style={{ display: modalWindow ? 'block' : '' }} id="popExit">
                <div className="pop-exit__container">
                    <div className="pop-exit__block">
                        <div className="pop-exit__ttl">
                            <h2>Выйти из аккаунта?</h2>
                        </div>
                        <form className="pop-exit__form" id="formExit" action="#">
                            <div className="pop-exit__form-group">
                                <div className="pop-exit__exit-yes _hover01" id="exitYes">
                                    <Link to="/login">Да, выйти</Link>
                                </div>
                                <div className="pop-exit__exit-no _hover03" id="exitNo">
                                    <Link to="/">Нет, остаться</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
