import { useLocation, useMatch, useNavigate, useParams } from 'react-router-dom'
import cards from '../../data/data'
import { statusList } from '../../data/data'
import formattedDate from '../../utils/dateFormat'
import { useEffect, useState } from 'react'
import { PopBrowse, PopBrowseContainer, PopBrowseBlock, PopBrowseContent, PopBrowseTitle, FormWrap, Form, FormBlock, FormArea, Status, ButtonGroup } from './CardView.styles'
import { PrimaryButton, SecondaryButton } from '../../components/Styles/GlobalStyle'

export default function CardView({ $isDark }) {
    const [currentStatus, setCurrentStatus] = useState(null)
    const navigate = useNavigate()
    const location = useLocation()
    const { id } = useParams()
    const editMath = useMatch('/cardview/:id/edit')
    const isEditMode = Boolean(editMath)
    const card = cards.find((c) => String(c.id) === String(id))
    const { topic, title, date, status, colorTopic } = card || {}

    const modalWindow = location.state?.modalWindow || false

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
        setCurrentStatus(found.id)
    }, [status])

    const handleStatus = (id) => {
        setCurrentStatus(id)
    }

    return (
        <PopBrowse style={{ display: modalWindow ? 'block' : 'none' }} id="popBrowse">
            <PopBrowseContainer>
                <PopBrowseBlock $isDark={$isDark}>
                    <PopBrowseContent>
                        <div>
                            <PopBrowseTitle $isDark={$isDark}>{title}</PopBrowseTitle>
                            <div className={`categories__theme theme-top ${colorTopic} _active-category`}>
                                <p className={colorTopic}>{topic}</p>
                            </div>
                        </div>
                        <Status $isDark={$isDark}>
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
                                    </div>
                                )}
                            </div>
                        </Status>
                        <FormWrap $isDark={$isDark}>
                            <Form action="#" id="formBrowseCard">
                                <FormBlock $isDark={$isDark}>
                                    <label htmlFor="textArea01" className="subttl">
                                        Описание задачи
                                    </label>
                                    <FormArea $isDark={$isDark} name="text" id="textArea01" readOnly placeholder="Введите описание задачи..." />
                                </FormBlock>
                            </Form>
                            <div className="theme-down__categories theme-down">
                                <p className="categories__p subttl">Категория</p>
                                <div className="categories__theme _orange _active-category">
                                    <p className="_orange">Web Design</p>
                                </div>
                            </div>
                            <p className="calendar__p date-end">
                                Срок исполнения: <span className="date-control">{formattedDate(date)}</span>
                            </p>
                        </FormWrap>
                        <ButtonGroup>
                            <div>
                                {!isEditMode ? (
                                    <>
                                        <SecondaryButton $isDark={$isDark} onClick={handleEditToggle}>
                                            Редактировать задачу
                                        </SecondaryButton>
                                        <SecondaryButton $isDark={$isDark}>Удалить задачу</SecondaryButton>
                                    </>
                                ) : (
                                    <>
                                        <button className="btn-edit__edit _btn-bg _hover01">
                                            <a href="#">Сохранить</a>
                                        </button>
                                        <button onClick={handleEditToggle} className="btn-edit__edit _btn-bor _hover03">
                                            Отменить
                                        </button>
                                        <SecondaryButton id="btnDelete">Удалить задачу</SecondaryButton>
                                    </>
                                )}
                            </div>
                            <PrimaryButton $width="auto" $isDark={$isDark} onClick={handleClose}>
                                Закрыть
                            </PrimaryButton>
                        </ButtonGroup>
                    </PopBrowseContent>
                </PopBrowseBlock>
            </PopBrowseContainer>
        </PopBrowse>
    )
}
