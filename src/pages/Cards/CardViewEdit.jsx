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
import {
  PrimaryButton,
  SecondaryButton,
} from '../../components/Styles/GlobalStyle'
import CalendarComponent from '../../components/Calendar/Calendar'
import { CalendarAndDateContainer } from '../../components/Calendar/Calendar.styles'
import { getColorClass } from '../../components/Card/Card'
import { Theme, ThemeText } from '../../components/Card/Card.styles'
import {
  StatusButton,
  StatusText,
  StatusTheme,
  StatusThemes,
  StatusTitle,
} from './CardViewEdit.styles'
import formattedDate from '../../utils/dateFormat'
import { useAuthContext } from '../../context/AuthContext'
import { useTasksContext } from '../../context/TasksContext'
import { getTaskById } from '../../services/tasks/getTaskById'

export default function CardViewEdit() {
  const { $isDark, token, setIsLoading, setLoadingMessage } = useAuthContext()
  const { editTask } = useTasksContext()
  const navigate = useNavigate()
  const location = useLocation()
  const editMatch = useMatch('/card/:id/edit')
  const isEditMode = Boolean(editMatch)
  const { id } = useParams()

  const [taskState, setTaskState] = useState({
    id: '',
    topic: '',
    title: '',
    date: '',
    status: 'Без статуса',
    description: '',
  })

  const [editTaskState, setEditTaskState] = useState(taskState)
  const [isDisabled, setIsDisabled] = useState(false)
  const hasFetchedData = useRef(false)

  // Синхронизируем editTaskState с taskState
  useEffect(() => {
    setEditTaskState(taskState)
  }, [taskState])

  // Блокируем кнопку "Сохранить" если нет изменений
  useEffect(() => {
    setIsDisabled(
      _.isEqual(taskState, editTaskState) ||
        editTaskState.description.trim() === '',
    )
  }, [taskState, editTaskState])

  // Загрузка данных задачи
  useEffect(() => {
    const fetchTaskData = async () => {
      setIsLoading(true)
      setLoadingMessage('Загружаем задачу...')
      try {
        const response = await getTaskById(token, id)
        if (response) {
          const newTaskState = {
            id: response._id || '',
            title: response.title || '',
            topic: response.topic || '',
            date: response.date || '',
            description: response.description || '',
            status: response.status || 'Без статуса',
          }
          setTaskState(newTaskState)
        }
      } catch (error) {
        console.error('Ошибка загрузки задачи:', error)
      } finally {
        setIsLoading(false)
        setLoadingMessage('Загрузка данных...')
      }
    }

    if (location.state && location.state.id) {
      // Данные пришли через state (клик с главной)
      setTaskState({
        id: location.state.id || '',
        title: location.state.title || '',
        topic: location.state.topic || '',
        date: location.state.date || '',
        description: location.state.description || '',
        status: location.state.status || 'Без статуса',
      })
    } else if (id && !hasFetchedData.current) {
      // Перезагрузка страницы — загружаем с сервера
      fetchTaskData()
      hasFetchedData.current = true
    }
  }, [id, location.state, token, setIsLoading, setLoadingMessage])

  const handleEditTask = async () => {
    setIsLoading(true)
    setLoadingMessage('Сохраняем изменения...')
    try {
      await editTask(
        token,
        editTaskState.id,
        editTaskState.title,
        editTaskState.topic,
        editTaskState.status,
        editTaskState.description,
        editTaskState.date,
      )
      navigate('/')
    } catch (error) {
      console.error('Ошибка редактирования задачи:', error)
    } finally {
      setIsLoading(false)
      setLoadingMessage('Загрузка данных...')
    }
  }

  const handleEditToggle = () => {
    const taskData = {
      id: taskState.id,
      title: taskState.title,
      topic: taskState.topic,
      date: taskState.date,
      status: taskState.status,
      description: taskState.description,
    }

    if (!isEditMode) {
      navigate(`${location.pathname}/edit`, {
        replace: true,
        state: taskData,
      })
    } else {
      const basePath = location.pathname.replace(/\/edit$/, '')
      navigate(basePath, {
        replace: true,
        state: taskData,
      })
    }
  }

  const handleDeleteTask = (e) => {
    e.preventDefault()
    navigate(`/card/${taskState.id}/delete`, {
      state: {
        taskId: taskState.id,
        taskName: taskState.title,
      },
    })
  }

  const handleChange = (field, value) => {
    setEditTaskState((prev) => ({ ...prev, [field]: value }))
  }

  const handleClose = () => {
    navigate('/')
  }

  const handleCancelChanges = () => {
    setEditTaskState(taskState)
    const basePath = location.pathname.replace(/\/edit$/, '')
    navigate(basePath, { replace: true })
  }

  const handleDateChange = (dateObject) => {
    console.log('📅 Дата выбрана:', dateObject)
    const dateFormatted = new Date(dateObject).toISOString()
    setEditTaskState((prev) => ({
      ...prev,
      date: dateFormatted,
    }))
  }

  const colorTopicClass = getColorClass(taskState.topic)

  return (
    <PopBrowse style={{ display: 'block' }} id="popBrowse">
      <PopBrowseContainer>
        <PopBrowseBlock $isEditMode={isEditMode} $isDark={$isDark}>
          <PopBrowseContent>
            <TopicContainer>
              <PopBrowseTitle $isDark={$isDark}>
                {taskState.title || 'Загрузка...'}
              </PopBrowseTitle>
              <Theme
                style={{ height: '30px' }}
                className={`${$isDark ? 'dark' : 'light'} ${colorTopicClass}`}
              >
                <ThemeText>{taskState.topic}</ThemeText>
              </Theme>
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
                  statusList.map((statusItem) => (
                    <StatusButton
                      key={statusItem.id}
                      $active={statusItem.name === editTaskState.status}
                      onClick={() => handleChange('status', statusItem.name)}
                    >
                      <StatusText
                        $isDark={$isDark}
                        $active={statusItem.name === editTaskState.status}
                      >
                        {statusItem.name}
                      </StatusText>
                    </StatusButton>
                  ))
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
                    onChange={(e) =>
                      handleChange('description', e.target.value)
                    }
                    value={
                      isEditMode
                        ? editTaskState.description || ''
                        : taskState.description || ''
                    }
                    $isDark={$isDark}
                    $selectedDate={editTaskState.date}
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
                <CalendarComponent
                  canEdit={isEditMode}
                  handleDateChange={handleDateChange}
                  selectDate={editTaskState.date}
                  $isDark={$isDark}
                />
                <FormDateControl>
                  Срок исполнения:{' '}
                  <span>{formattedDate(editTaskState.date)}</span>
                </FormDateControl>
              </CalendarAndDateContainer>
            </FormWrap>

            <ButtonGroup $fixed>
              {!isEditMode ? (
                <ButtonControlsWrap $fixed>
                  <SecondaryButton
                    $fixedBtn
                    $isDark={$isDark}
                    onClick={handleEditToggle}
                  >
                    Редактировать задачу
                  </SecondaryButton>
                  <SecondaryButton
                    $fixedBtn
                    $isDark={$isDark}
                    onClick={handleDeleteTask}
                  >
                    Удалить задачу
                  </SecondaryButton>
                </ButtonControlsWrap>
              ) : (
                <ButtonControlsWrap $fixed>
                  <PrimaryButton
                    disabled={isDisabled}
                    onClick={handleEditTask}
                    $width="auto"
                    $fixedBtn
                    $isDark={$isDark}
                  >
                    Сохранить
                  </PrimaryButton>
                  <SecondaryButton
                    $fixedBtn
                    $isDark={$isDark}
                    onClick={handleCancelChanges}
                  >
                    Отменить
                  </SecondaryButton>
                  <SecondaryButton
                    $fixedBtn
                    $isDark={$isDark}
                    onClick={handleDeleteTask}
                  >
                    Удалить задачу
                  </SecondaryButton>
                </ButtonControlsWrap>
              )}
              <PrimaryButton
                $fixedBtn
                $width="auto"
                $isDark={$isDark}
                onClick={handleClose}
              >
                Закрыть
              </PrimaryButton>
            </ButtonGroup>
          </PopBrowseContent>
        </PopBrowseBlock>
      </PopBrowseContainer>
    </PopBrowse>
  )
}
