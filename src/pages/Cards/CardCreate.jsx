import { useMatch, useNavigate } from 'react-router-dom'
import { topicsList } from '../../data/data'
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
    ButtonGroup,
    FormDateControl,
    FormDateTitle,
    TopicContainer,
} from './CardViewEdit.styles'

import { PrimaryButton, SecondaryButton, TextContainer, Tooltip, TooltipWrapper, TopicButton } from '../../components/Styles/GlobalStyle'
import CalendarComponent from '../../components/Calendar/Calendar'
import { CalendarAndDateContainer } from '../../components/Calendar/Calendar.styles'
import { Theme } from '../../components/Card/Card.styles'
import { useAppContext } from '../../routes/AppContext'
import formattedDate from '../../utils/dateFormat'
import { createTask } from '../../services/tasks/createTask'

export default function CardView() {
    const { $isDark, token, setLoadingMessage, DEFAULT_MESSAGE_LOADING, isLoading, setIsLoading } = useAppContext()
    const [tooltipVisible, setTooltipVisible] = useState(true)
    const [tooltipOpacity, setTooltipOpacity] = useState(1) // Начальная opacity = 1

    const navigate = useNavigate()
    const [activeButton, setActiveButton] = useState(0)
    const [taskState, setTaskState] = useState({ title: '', description: '', date: '', topic: '' })
    const [isDisabled, setIsDisabled] = useState(true)

    const createMatch = useMatch('/card/create')
    const isEditMode = Boolean(createMatch)

    const { isModal, setIsModal } = useAppContext()

    const [editTaskState, setEditTaskState] = useState(taskState)
    const selectDate = editTaskState.date

    useEffect(() => {
        if (activeButton !== null) {
            const topicName = topicsList[activeButton].name
            setTaskState((prev) => ({ ...prev, topic: topicName }))
        }
    }, [activeButton])

    const validateTaskData = (taskData) => {
        return taskData.title !== '' && taskData.description !== '' && taskData.date !== '' && taskData.topic !== ''
    }
    useEffect(() => {
        setIsDisabled(!validateTaskData(taskState))
        console.log(taskState)
    }, [taskState])

    useEffect(() => {
        console.log(isDisabled)
    }, [isDisabled])

    const handleDateChange = (dateString) => {
        const dateFormated = new Date(dateString).toISOString()
        setEditTaskState((prev) => ({
            ...prev,
            date: dateFormated,
        }))
    }
    useEffect(() => {
        if (selectDate) {
            setTaskState((prev) => ({
                ...prev,
                date: selectDate,
            }))
        }
    }, [selectDate])

    useEffect(() => {
        if (isEditMode && isDisabled) {
            if (isDisabled) {
                setTooltipVisible(true)

                setTooltipOpacity(0.8)

                setTimeout(() => {
                    setTooltipOpacity(0)
                }, 10000)
            }
        }
    }, [])

    //Create task
    const handleCreateTasc = async () => {
        setLoadingMessage('Добавляем задачу')
        setIsLoading(true)

        try {
            setLoadingMessage('Обновляем задачи')
            const response = await createTask(token, taskState)
            console.log(response)
            handleClose()

            // console.log(taskState.title, taskState.topic, taskState.description, taskState.date)
            // const ucreatedTask = await createTask(token, taskState.title, taskState.topic, taskState.description, taskState.date)
        } catch (error) {
            const errMsg = error?.response?.data?.error || error?.response?.data?.message || error?.message || 'Ошибка создания задачи'
            setErrorMessage(errMsg) // Устанавливаем сообщение об ошибке
            console.error('Ошибка при добавлении задачи на сервер:', errMsg)
        } finally {
            
            setLoadingMessage('Данные обновлены')
            setIsLoading(false)
            setLoadingMessage(DEFAULT_MESSAGE_LOADING)
        }
    }

    useEffect(() => {
        console.log(tooltipVisible, tooltipOpacity)
    }, [tooltipVisible, tooltipOpacity])
    const handleActive = (i) => {
        setActiveButton(i)
    }

    function handleClose() {
        navigate(-1)
        setIsModal(false)
    }

    const getDescription = (value) => {
        setTaskState((prev) => ({ ...prev, description: value }))
    }
    const getTaskName = (value) => {
        setTaskState((prev) => ({ ...prev, title: value }))
    }
    return (
        <PopBrowse $isModal={isModal} id="popBrowse">
            <PopBrowseContainer>
                <PopBrowseBlock $isDark={$isDark}>
                    <PopBrowseContent>
                        <TopicContainer>
                            <PopBrowseTitle $isDark={$isDark}> Создание задачи</PopBrowseTitle>
                        </TopicContainer>

                        <FormWrap $isDark={$isDark}>
                            <Form action="#" id="formBrowseCard">
                                <FormBlock $isDark={$isDark} $marginBotton={'20px'}>
                                    <label htmlFor="formTitle" className="subttl">
                                        Название задачи
                                    </label>

                                    <FormArea
                                        $maxHeight={'50px'}
                                        onChange={(e) => {
                                            getTaskName(e.target.value)
                                        }}
                                        $isDark={$isDark}
                                        selectedDate={selectDate}
                                        name="text"
                                        id="formTitle"
                                        $isEditMode={isEditMode}
                                        style={{ cursor: 'text' }}
                                        placeholder="Введите название задачи..."
                                        autofocus
                                    />
                                </FormBlock>

                                <FormBlock $isDark={$isDark}>
                                    <label htmlFor="textArea01" className="subttl" style={{ marginTop: '20px' }}>
                                        Описание задачи
                                    </label>
                                    <FormArea
                                        onChange={(e) => {
                                            getDescription(e.target.value)
                                        }}
                                        $isDark={$isDark}
                                        selectedDate={selectDate}
                                        name="text"
                                        id="textArea01"
                                        // readOnly={!isEditMode}
                                        $isEditMode={isEditMode}
                                        style={{ cursor: 'text' }}
                                        placeholder="Введите описание задачи..."
                                    />
                                </FormBlock>
                            </Form>

                            <CalendarAndDateContainer>
                                <FormDateTitle>Даты</FormDateTitle>
                                <CalendarComponent isEditMode={isEditMode} handleDateChange={handleDateChange} selectDate={selectDate} $isDark={$isDark} />
                                <FormDateControl>
                                    {!selectDate ? (
                                        'Выберите срок исполнения.'
                                    ) : (
                                        <p>
                                            Cрок исполнения: <span>{formattedDate(selectDate)}</span>
                                        </p>
                                    )}
                                </FormDateControl>
                            </CalendarAndDateContainer>
                        </FormWrap>
                        <div>
                            <TextContainer $isDark={$isDark}>Категория</TextContainer>
                        </div>
                        <ButtonGroup className="buttongroup">
                            <Theme $isDark={$isDark} className={$isDark ? 'dark' : 'light'} style={{ marginBottom: '20px', padding: 0 }}>
                                {topicsList.map((topic, i) => {
                                    return (
                                        <TopicButton
                                            onClick={() => {
                                                handleActive(i)
                                            }}
                                            key={topic.name}
                                            className={`${topic.color} ${i === activeButton ? 'active' : ''}`}
                                            $isDark={$isDark}
                                            $
                                        >
                                            {topic.name}
                                        </TopicButton>
                                    )
                                })}
                            </Theme>
                        </ButtonGroup>
                        <ButtonGroup>
                            <SecondaryButton $isDark={$isDark} onClick={handleClose}>
                                Зыкрыть
                            </SecondaryButton>
                            <TooltipWrapper>
                                <PrimaryButton disabled={isDisabled} onClick={handleCreateTasc} $mobileFixed $width="auto" $isDark={$isDark}>
                                    Создать задачу
                                </PrimaryButton>
                                <Tooltip visible={tooltipVisible} style={{ opacity: tooltipOpacity }}>
                                    Заполните все поля
                                </Tooltip>
                            </TooltipWrapper>
                        </ButtonGroup>
                    </PopBrowseContent>
                </PopBrowseBlock>
            </PopBrowseContainer>
        </PopBrowse>
    )
}
