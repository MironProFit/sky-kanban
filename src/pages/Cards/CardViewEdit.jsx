import { useLocation, useMatch, useNavigate, useParams, useRouteError } from 'react-router-dom'
import { statusList } from '../../data/data'
import _ from 'lodash'
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

export default function CardViewEdit() {
    const { isModal, setIsModal, $isDark, userData, setUserData, toggleUserMenu, isMobile, isUserMenuOpen } = useAppContext()
    const navigate = useNavigate()
    const location = useLocation()
    const { id: initialId, topic: initialTopic, title: initialTitle, date: initialDate, status: initialStatus, description: initialDescription } = location.state || {}
    const editMath = useMatch('/card/:id/edit')
    const isEditMode = Boolean(editMath)
    const [taskState, setTaskState] = useState({
        id: initialId || '',
        topic: initialTopic || '',
        title: initialTitle || '',
        date: initialDate || '',
        status: initialStatus || 'Без статуса',
        description: initialDescription || '',
    })

    const { id } = useParams()
    const card = userData.find((task) => task.id === id)

    const [editTaskState, setEditTaskState] = useState(taskState)
    const selectDate = editTaskState.date

    // useEffect(() => {
    //     console.log(editTaskState.date)
    // }, [editTaskState.date])

    const saveEditData = () => {
        // Если данные изменились, обновляем массив задач
        if (!_.isEqual(taskState, editTaskState)) {
            const updatedTasks = userData.map((task) => (task._id === id ? { ...task, ...editTaskState } : task))

            // Сохраняем в нужное состояние (например, если userData – основное хранилище)
            setUserData(updatedTasks)
            console.log('Обновление выполнено в массиве задач')

            try {
                // Если требуется обновление на сервере
                // const updatedTask = await updateTask(id, editTaskState, token)
            } catch (error) {
                console.error('Ошибка при обновлении задачи на сервере:', error)
            }
        }
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

    const handleDeleteTask = async () => {
        try {
            // Удаляем задачу на сервере
            // await deleteTask(id, token)

            // Удаляем задачу из локального состояния
            if (userData && Array.isArray(userData)) {
                const updatedTasks = userData.filter((task) => task.id !== id)
                setUserData(updatedTasks)
            }

            navigate('/')
            setIsModal(false)
        } catch (error) {
            console.error('Ошибка при удалении задачи:', error)
        }
    }
    const formattedTaskDate = formattedDate(editTaskState.date)
    // useEffect(() => {
    //     console.log(typeof editTaskState.date)
    // }, [editTaskState.date])

    const handleChange = (field, value) => {
        setEditTaskState((prev) => ({ ...prev, [field]: value }))
    }

    // useEffect(() => {
    //     console.log('editTaskState:', editTaskState, 'taskState:', taskState)
    // }, [editTaskState, taskState])

    const handleClose = () => {
        navigate('/')
        setIsModal(false)
    }

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
    // useEffect(() => {
    //     console.log(object)
    // }, [])
    const colorTopicClass = getColorClass(taskState.topic)
    // const handleStatus = (id) => {
    //     setCurrentStatus(id)
    // }

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
                                    <ButtonControlsWrap $fixed style={{ bottom: '180px' }}>
                                        <SecondaryButton onClick={saveEditData} $fixedBtn $isDark={$isDark}>
                                            Сохранить
                                        </SecondaryButton>
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
