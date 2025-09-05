import { useLocation, useMatch, useNavigate, useParams } from 'react-router-dom'
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
import { PrimaryButton, SecondaryButton, TextContainer } from '../../components/Styles/GlobalStyle'
import CalendarComponent from '../../components/Calendar/Calendar'
import { CalendarAndDateContainer } from '../../components/Calendar/Calendar.styles'
import { getColorClass } from '../../components/Card/Card'
import { Theme, ThemeText } from '../../components/Card/Card.styles'
import { StatusButton, StatusText, StatusTheme, StatusThemes, StatusTitle } from './CardViewEdit.styles'
import formattedDate from '../../utils/dateFormat'
import { useAppContext } from '../../routes/AppContext'

export default function CardView() {
    const { $isDark } = useAppContext()
    const [currentStatus, setCurrentStatus] = useState(null)
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

    const { isMobile, isModal, setIsModal, handleModalClose, isUserMenuOpen, toggleUserMenu } = useAppContext()

    const handleDateChange = (dateString) => {
        setTaskState((prev) => ({
            ...prev,
            date: dateString,
        }))
    }

    const colorTopicClass = getColorClass(topic)

    function handleClose() {
        navigate('/')
        setIsModal(false)
    }
    const handleEditToggle = () => {
        if (!isEditMode) {
            navigate(`${location.pathname}/edit`, {
                // state: { modalWindow: true },
                replace: true,
                $isDark: $isDark,
            })
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
        <PopBrowse style={{ display: isModal ? 'block' : 'none' }} id="popBrowse">
            <PopBrowseContainer
                onClick={() => {
                    isUserMenuOpen && toggleUserMenu()
                }}
            >
                <PopBrowseBlock $isEditMode={isEditMode} $isDark={$isDark}>
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
                        {isMobile ? (
                            <>
                                <TextContainer $secondaryColor>Категория</TextContainer>
                                <Theme style={{ height: '30px' }} className={`${$isDark ? 'dark' : 'light'} ${colorTopicClass}`}>
                                    <ThemeText>{topic}</ThemeText>
                                </Theme>
                            </>
                        ) : (
                            ''
                        )}

                        <ButtonGroup $fixed>
                            <>
                                {!isEditMode ? (
                                    <ButtonControlsWrap $fixed>
                                        <SecondaryButton $fixedBtn $isDark={$isDark} onClick={handleEditToggle}>
                                            Редактировать задачу
                                        </SecondaryButton>
                                        <SecondaryButton $fixedBtn $isDark={$isDark}>
                                            Удалить задачу
                                        </SecondaryButton>
                                        {isMobile && (
                                            <PrimaryButton $fixedBtn $width="auto" $isDark={$isDark} onClick={handleClose}>
                                                Закрыть
                                            </PrimaryButton>
                                        )}
                                    </ButtonControlsWrap>
                                ) : (
                                    <ButtonControlsWrap $fixed style={{ bottom: '180px' }}>
                                        <SecondaryButton $fixedBtn $isDark={$isDark}>
                                            Сохранить
                                        </SecondaryButton>
                                        {isMobile && (
                                            <PrimaryButton $fixedBtn $width="auto" $isDark={$isDark} onClick={handleClose}>
                                                Закрыть
                                            </PrimaryButton>
                                        )}
                                        <SecondaryButton $fixedBtn $isDark={$isDark} onClick={handleModalClose}>
                                            Отменить
                                        </SecondaryButton>

                                        <SecondaryButton $fixedBtn $isDark={$isDark} id="btnDelete">
                                            Удалить задачу
                                        </SecondaryButton>
                                    </ButtonControlsWrap>
                                )}
                            </>
                            {!isMobile && (
                                <PrimaryButton $fixedBtn $width="auto" $isDark={$isDark} onClick={handleClose}>
                                    Закрыть
                                </PrimaryButton>
                            )}
                        </ButtonGroup>
                    </PopBrowseContent>
                </PopBrowseBlock>
            </PopBrowseContainer>
        </PopBrowse>
    )
}
