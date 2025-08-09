import { Link, replace, useLocation, useMatch, useNavigate, useParams } from 'react-router-dom'
import Calendar from '../../components/Calendar/Calendar'
import cards from '../../data/data'
import { statusList } from '../../data/data'
import formattedDate from '../../utils/dateFormat'
import { useEffect, useState } from 'react'

export default function CardView() {
    const [currentStatus, setCurrentStatus] = useState(null)
    const navigate = useNavigate()
    const location = useLocation()
    const { id } = useParams()
    const editMath = useMatch('/cardview/:id/edit')
    const isEditMode = Boolean(editMath)
    const card = cards.find((c) => String(c.id) === String(id))
    const { modalWindow, topic, title, date, status, colorTopic } = card || {}

    function handleClose() {
        navigate(-1)
    }
    const handleEditToggle = () => {
        if (!isEditMode) {
            navigate(`${location.pathname}/edit`, { replace: true })
        } else {
            const basePath = location.pathname.replace(/\/edit$/, '')
            navigate(basePath, { replace: true })
        }
    }

    useEffect(() => {
        const found = statusList.find((item) => item.name === status)
        setCurrentStatus(found)
    }, [status])

    const handleStatus = (id) => {
        setCurrentStatus(id)
    }

    return (
        <div className="pop-browse" style={{ display: modalWindow ? 'block' : '' }} id="popBrowse">
            <div className="pop-browse__container">
                <div className="pop-browse__block">
                    <div className="pop-browse__content">
                        <div className="pop-browse__top-block">
                            <h3 className="pop-browse__ttl">{title}</h3>
                            <div className={`categories__theme theme-top ${colorTopic} _active-category`}>
                                <p className={colorTopic}>{topic}</p>
                            </div>
                        </div>
                        <div className="pop-browse__status status">
                            <p className="status__p subttl">Статус</p>
                            <div className="status__themes">
                                {!isEditMode ? (
                                    <div className="status__theme _gray">
                                        <p className="_gray">{status}</p>
                                    </div>
                                ) : (
                                    <div className="status__themes">
                                        {statusList.map((status) => (
                                            <button key={status.id} onClick={() => handleStatus(status.id)} className={`status__theme ${status.id === currentStatus ? '_gray' : ''}`}>
                                                <p className={status.id === currentStatus ? '_gray' : ''}>{status.name}</p>
                                            </button>
                                        ))}
                                        {/* <button onClick={() => handleStatus(0)} className={`status__theme ${currentStatus === 0 ? '_gray' : ''}`}>
                                            <p className={currentStatus === 0 ? '_gray' : ''}>Без статуса</p>
                                        </button>
                                        <button onClick={() => handleStatus(1)} className={`status__theme ${currentStatus === 1 ? '_gray' : ''}`}>
                                            <p className={currentStatus === 1 ? '_gray' : ''}>Нужно сделать</p>
                                        </button>
                                        <button onClick={() => handleStatus(2)} className={`status__theme ${currentStatus === 2 ? '_gray' : ''}`}>
                                            <p className={currentStatus === 2 ? '_gray' : ''}>В работе</p>
                                        </button>
                                        <button onClick={() => handleStatus(3)} className={`status__theme ${currentStatus === 3 ? '_gray' : ''}`}>
                                            <p className={currentStatus === 3 ? '_gray' : ''}>Тестирование</p>
                                        </button>
                                        <button onClick={() => handleStatus(4)} className={`status__theme ${currentStatus === 4 ? '_gray' : ''}`}>
                                            <p className={currentStatus === 4 ? '_gray' : ''}>Готово</p>
                                        </button> */}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="pop-browse__wrap">
                            <form className="pop-browse__form form-browse" id="formBrowseCard" action="#">
                                <div className="form-browse__block">
                                    <label htmlFor="textArea01" className="subttl">
                                        Описание задачи
                                    </label>
                                    <textarea className="form-browse__area" name="text" id="textArea01" readOnly placeholder="Введите описание задачи..."></textarea>
                                </div>
                            </form>
                            <div className="pop-new-card__calendar calendar">
                                <p className="calendar__ttl subttl">Даты</p>
                                <div className="calendar__block">
                                    <div className="calendar__nav">
                                        <div className="calendar__month">Сентябрь 2023</div>
                                        <div className="nav__actions">
                                            <div className="nav__action" data-action="prev">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11">
                                                    <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
                                                </svg>
                                            </div>
                                            <div className="nav__action" data-action="next">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11">
                                                    <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <Calendar />

                                    <input type="hidden" id="datepick_value" value="08.09.2023"></input>
                                    <div className="calendar__period">
                                        <p className="calendar__p date-end">
                                            Срок исполнения: <span className="date-control">{formattedDate(date)}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="theme-down__categories theme-down">
                            <p className="categories__p subttl">Категория</p>
                            <div className="categories__theme _orange _active-category">
                                <p className="_orange">Web Design</p>
                            </div>
                        </div>
                        <div className="pop-browse__btn-browse ">
                            {!isEditMode ? (
                                <div className="btn-group">
                                    <button onClick={handleEditToggle} className="btn-browse__edit _btn-bor _hover03">
                                        Редактировать задачу
                                    </button>

                                    <button className="btn-browse__delete _btn-bor _hover03">
                                        <a href="#">Удалить задачу</a>
                                    </button>
                                </div>
                            ) : (
                                <div className="btn-group">
                                    <button className="btn-edit__edit _btn-bg _hover01">
                                        <a href="#">Сохранить</a>
                                    </button>
                                    <button onClick={handleEditToggle} className="btn-edit__edit _btn-bor _hover03">
                                        Отменить
                                    </button>
                                    <button className="btn-edit__delete _btn-bor _hover03" id="btnDelete">
                                        <a href="#">Удалить задачу</a>
                                    </button>
                                </div>
                            )}

                            <button onClick={handleClose} className="btn-browse__close _btn-bg _hover01">
                                Закрыть
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
