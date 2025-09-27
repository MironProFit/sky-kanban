import { useLocation, useMatch, useNavigate, useParams } from 'react-router-dom'
import { statusList } from '../../data/data'
import _ from 'lodash'
import { useEffect, useRef, useState } from 'react'
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
import { editTask } from '../../services/tasks/editTask'
import { getTaskById } from '../../services/tasks/getTaskById'
export default function CardViewEdit() {
    const { isModal, setIsModal, $isDark, setUserData, toggleUserMenu, isMobile, isUserMenuOpen, setErrorMessage, setLoadingMessage, setIsLoading, token, DEFAULT_MESSAGE_LOADING } = useAppContext()
    const navigate = useNavigate()
    const location = useLocation()
    const { id: initialId, topic: initialTopic, title: initialTitle, date: initialDate, status: initialStatus, description: initialDescription } = location.state || {}
    const editMath = useMatch('/card/:id/edit')
    const isEditMode = Boolean(editMath)
    const { id } = useParams()

    const [taskState, setTaskState] = useState({
        id: initialId || '',
        topic: initialTopic || '',
        title: initialTitle || '',
        date: initialDate || '',
        status: initialStatus || 'Без статуса',
        description: initialDescription || '',
    })

    const [editTaskState, setEditTaskState] = useState(taskState)
    const selectDate = editTaskState.date
    const formattedTaskDate = formattedDate(editTaskState.date)
    const [isDisabled, setIsDisabled] = useState(false)

    const hasFetchedData = useRef(false)

    useEffect(() => {
        setEditTaskState(taskState)
    }, [taskState])

    useEffect(() => {
        setIsDisabled(_.isEqual(taskState, editTaskState) || editTaskState.description === '')
    }, [taskState, editTaskState])

    useEffect(() => {
        console.log(taskState)
    }, [taskState])

    useEffect(() => {
        const fetchTaskData = async () => {
            setErrorMessage('')
            setLoadingMessage('Загружаем задачу')
            setIsLoading(true)
            try {
                const response = await getTaskById(token, id)
                if (response) {
                    console.log(response)
                    setTaskState({
                        id: response._id || '',
                        title: response.title || '',
                        topic: response.topic || '',
                        date: response.date || '',
                        description: response.description || '',
                        status: response.status || 'Без статуса',
                    })
                }
            } catch (error) {
                const errMsg = error?.response?.data?.error || error?.response?.data?.message || error?.message || 'Ошибка загрузки задачи'
                setErrorMessage(errMsg)
                console.error('Ошибка загрузки задачи:', error)
            } finally {
                setLoadingMessage('Данные обновлены')
                setIsLoading(false)
                setLoadingMessage(DEFAULT_MESSAGE_LOADING)
            }
        }

        // Проверяем, нужно ли загружать данные
        if (location.state === null && !hasFetchedData.current) {
            setIsModal(true)
            fetchTaskData() // Выполняем запрос данных
            hasFetchedData.current = true // Обновляем реф, чтобы избежать повторных вызовов
        } else if (location.state) {
            // Если state не null, инициализируем состояние из этого объекта
            setTaskState({
                id: location.state.id || '',
                title: location.state.title || '',
                topic: location.state.topic || '',
                date: location.state.date || '',
                description: location.state.description || '',
                status: location.state.status || 'Без статуса',
            })
        }
    }, [id, location.state]) // Добавляем зависимости

    // Сохранение изсенений
    const handleEditTask = async () => {
        setErrorMessage('')
        setLoadingMessage('Редактируем задачу')
        setIsLoading(true)

        try {
            // Вызов editTask, если изменения есть

            const response = await editTask(editTaskState.id, token, editTaskState.title, editTaskState.topic, editTaskState.status, editTaskState.description, editTaskState.date)

            await setUserData(response)

            localStorage.setItem('userData', JSON.stringify(response))

            setIsLoading(false)
            setIsModal(false)
            navigate('/')

            setLoadingMessage('Обновляем задачи')
        } catch (error) {
            const errMsg = error?.response?.data?.error || error?.response?.data?.message || error?.message || 'Ошибка редактирования задачи'
            setErrorMessage(errMsg)
            console.error('Ошибка редактирования задачи:', error)
        } finally {
            setLoadingMessage('Данные обновлены')
            setIsLoading(false)
            setLoadingMessage(DEFAULT_MESSAGE_LOADING)
        }
    }

    //Переключение режима редактирования
    const handleEditToggle = () => {
        if (!isEditMode) {
            navigate(`${location.pathname}/edit`, {
                replace: true,
                $isDark: $isDark,
            })
        } else {
            const basePath = location.pathname.replace(/\/edit$/, '')
            navigate(basePath, { replace: true })
        }
    }

    //Удаление задачи
    const handleDeleteTask = (e) => {
        e.preventDefault()
        navigate(`/card/${taskState.id}/delete`, {
            state: {
                taskId: taskState.id, // Передаем ID задачи
                taskName: taskState.title, // Передаем название задачи
            },
        })
    }
    const handleChange = (field, value) => {
        setEditTaskState((prev) => ({ ...prev, [field]: value }))
    }

    const handleClose = () => {
        navigate('/')
        setIsModal(false)
    }

    //Отмена изменений при редактировании
    const handleCancelChanges = () => {
        setEditTaskState(taskState)

        const basePath = location.pathname.replace(/\/edit$/, '')

        navigate(basePath, { replace: true })
    }
    const handleDateChange = (dateString) => {
        const dateFormated = new Date(dateString).toISOString()
        setEditTaskState((prev) => ({
            ...prev,
            date: dateFormated,
        }))
    }

    const colorTopicClass = getColorClass(taskState.topic)

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
                            <PopBrowseTitle $isDark={$isDark}>{taskState.title}</PopBrowseTitle>
                            {!isMobile ? (
                                <Theme style={{ height: '30px' }} className={`${$isDark ? 'dark' : 'light'} ${colorTopicClass}`}>
                                    <ThemeText>{taskState.topic}</ThemeText>
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
                                            {taskState.status}
                                        </StatusText>
                                    </StatusTheme>
                                ) : (
                                    <StatusThemes>
                                        {statusList.map((statusItem) => (
                                            <StatusButton key={statusItem.id} $active={statusItem.name === editTaskState.status} onClick={() => handleChange('status', statusItem.name)}>
                                                <StatusText $isDark={$isDark} $active={statusItem.name === editTaskState.status}>
                                                    {statusItem.name}
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
                                        onChange={(e) => handleChange('description', e.target.value)}
                                        value={isEditMode ? editTaskState.description || '' : taskState.description}
                                        $isDark={$isDark}
                                        selectedDate={selectDate}
                                        name="text"
                                        id="textArea01"
                                        readOnly={!isEditMode}
                                        $isEditMode={isEditMode}
                                        placeholder="Введите описание задачи..."
                                        autoFocus={isEditMode}
                                    />
                                </FormBlock>
                            </Form>

                            <CalendarAndDateContainer>
                                <FormDateTitle>Даты</FormDateTitle>
                                <CalendarComponent isEditMode={isEditMode} handleDateChange={handleDateChange} selectDate={editTaskState.date} $isDark={$isDark} />
                                <FormDateControl>
                                    Срок исполнения: <span>{formattedTaskDate}</span>
                                </FormDateControl>
                            </CalendarAndDateContainer>
                        </FormWrap>

                        {isMobile ? (
                            <>
                                <TextContainer $secondaryColor>Категория</TextContainer>
                                <Theme style={{ height: '30px' }} className={`${$isDark ? 'dark' : 'light'} ${colorTopicClass}`}>
                                    <ThemeText>{taskState.topic}</ThemeText>
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

                                        <SecondaryButton $fixedBtn $isDark={$isDark} onClick={handleDeleteTask}>
                                            Удалить задачу
                                        </SecondaryButton>
                                        {isMobile && (
                                            <PrimaryButton $fixedBtn $width="auto" $isDark={$isDark} onClick={handleClose}>
                                                Закрыть
                                            </PrimaryButton>
                                        )}
                                    </ButtonControlsWrap>
                                ) : (
                                    <ButtonControlsWrap $fixed style={{ bottom: '180px', display: 'flex' }}>
                                        <PrimaryButton disabled={isDisabled} onClick={handleEditTask} $width="auto" $fixedBtn $isDark={$isDark}>
                                            Сохранить
                                        </PrimaryButton>
                                        {isMobile && (
                                            <PrimaryButton $fixedBtn $width="auto" $isDark={$isDark} onClick={handleClose}>
                                                Закрыть
                                            </PrimaryButton>
                                        )}
                                        <SecondaryButton $fixedBtn $isDark={$isDark} onClick={handleCancelChanges}>
                                            Отменить
                                        </SecondaryButton>
                                        <SecondaryButton $fixedBtn $isDark={$isDark} onClick={handleDeleteTask}>
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
