import { Link, useLocation, useMatch, useNavigate, useParams } from 'react-router-dom'
import { statusList, cards } from '../../data/data'
import { useEffect, useState } from 'react'
import {
    PopBrowse,
    PopBrowseContainer,
    PopBrowseBlock,
    PopBrowseContent,
    PopBrowseTitle,
    FormWrap,
    Form,
    FormBlock,
    FormArea,
    Status,
    ButtonGroup,
    FormDateControl,
    FormDateTitle,
    TopicContainer,
    ButtonControlsWrap,
} from './CardViewEdit.styles'
import { PrimaryButton, SecondaryButton, TextContainer, TopicButton } from '../../components/Styles/GlobalStyle'
import CalendarComponent from '../../components/Calendar/Calendar'
import { CalendarAndDateContainer } from '../../components/Calendar/Calendar.styles'
import { getColorClass } from '../../components/Card/Card'
import { Theme, ThemeText } from '../../components/Card/Card.styles'
import { StatusButton, StatusText, StatusTheme, StatusThemes, StatusTitle } from './CardViewEdit.styles'
import formattedDate from '../../utils/dateFormat'

export default function CardView({ $isDark, isMobile }) {
    const [currentStatus, setCurrentStatus] = useState(null)
    // const [colorTopic, setColorTopic] = useState()
    const navigate = useNavigate()
    const location = useLocation()
    const { id } = useParams()
    const editMath = useMatch('/cardview/:id/edit')
    const isEditMode = Boolean(editMath)
    const card = cards.find((c) => String(c.id) === String(id))
    const { topic, title, date, status } = card || {}
    const [taskState, setTaskState] = useState({ ...card, date, id: currentStatus, description: card?.description || '' })
    const formattedTaskDate = formattedDate(date)
    const selectDate = taskState.date

    const handleDateChange = (dateString) => {
        setTaskState((prev) => ({
            ...prev,
            date: dateString,
        }))
    }

    const colorTopicClass = getColorClass(topic)

    const modalWindow = location.state?.modalWindow || false

    function handleClose() {
        navigate(-1)
    }
    const handleEditToggle = () => {
        if (!isEditMode) {
            navigate(`${location.pathname}/edit`, { state: { modalWindow: true }, replace: true, $isDark: $isDark })
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
    const getDesc = (value) => {
        return console.log(value)
    }
    return (
        <PopBrowse style={{ display: modalWindow ? 'block' : 'none' }} id="popBrowse">
            <PopBrowseContainer>
                <PopBrowseBlock $isDark={$isDark}>
                    <PopBrowseContent>
                        <TopicContainer>
                            <PopBrowseTitle $isDark={$isDark}>{title}</PopBrowseTitle>
                            {!isMobile ? (
                                <Theme style={{ height: '30px' }} className={`${$isDark ? 'dark' : 'light'} ${colorTopicClass}`}>
                                    <ThemeText>{topic}</ThemeText>
                                </Theme>
                            ) : (
                                ''
                            )}
                        </TopicContainer>

                        <Status $isDark={$isDark}>
                            <StatusTitle $isDark={$isDark}>Статус</StatusTitle>
                            <StatusThemes>
                                {!isEditMode ? (
                                    <StatusTheme>
                                        <StatusText $active $isDark={$isDark}>
                                            {status}
                                        </StatusText>
                                    </StatusTheme>
                                ) : (
                                    <StatusThemes>
                                        {statusList.map((status) => (
                                            <StatusButton key={status.id} $active={status.id === currentStatus} onClick={() => handleStatus(status.id)}>
                                                <StatusText $isDark={$isDark} $active={status.id === currentStatus}>
                                                    {status.name}
                                                </StatusText>
                                            </StatusButton>
                                        ))}
                                    </StatusThemes>
                                )}
                            </StatusThemes>
                        </Status>

                        <FormWrap $isDark={$isDark}>
                            <Form action="#" id="formBrowseCard">
                                <FormBlock $isDark={$isDark}>
                                    <label htmlFor="textArea01" className="subttl">
                                        Описание задачи
                                    </label>
                                    <FormArea
                                        onChange={(e) => {
                                            getDesc(e.target.value)
                                        }}
                                        $isDark={$isDark}
                                        selectedDate={selectDate}
                                        name="text"
                                        id="textArea01"
                                        readOnly={!isEditMode}
                                        $isEditMode={isEditMode}
                                        placeholder="Введите описание задачи..."
                                    />
                                </FormBlock>
                            </Form>

                            <CalendarAndDateContainer>
                                <FormDateTitle>Даты</FormDateTitle>
                                <CalendarComponent isEditMode={isEditMode} handleDateChange={handleDateChange} selectDate={selectDate} $isDark={$isDark} />
                                <FormDateControl>
                                    Срок исполнения: <span>{formattedTaskDate || ''}</span>
                                </FormDateControl>
                            </CalendarAndDateContainer>
                        </FormWrap>
                        <>
                            <TextContainer $secondaryColor>Категория</TextContainer>
                            <Theme style={{ height: '30px' }} className={`${$isDark ? 'dark' : 'light'} ${colorTopicClass}`}>
                                <ThemeText>{topic}</ThemeText>
                            </Theme>
                        </>

                        <ButtonGroup>
                            <>
                                {!isEditMode ? (
                                    <ButtonControlsWrap>
                                        <SecondaryButton $isDark={$isDark} onClick={handleEditToggle} state={{ modalWindow: true }}>
                                            Редактировать задачу
                                        </SecondaryButton>
                                        <SecondaryButton $isDark={$isDark}>Удалить задачу</SecondaryButton>
                                    </ButtonControlsWrap>
                                ) : (
                                    <div>
                                        <SecondaryButton $isDark={$isDark}>Сохранить</SecondaryButton>
                                        <Link to="/">
                                            <SecondaryButton $isDark={$isDark} onClick={handleEditToggle}>
                                                Отменить
                                            </SecondaryButton>
                                        </Link>
                                        <SecondaryButton $isDark={$isDark} id="btnDelete">
                                            Удалить задачу
                                        </SecondaryButton>
                                    </div>
                                )}
                            </>
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
