import { useLocation, useNavigate } from 'react-router-dom'
import { PopExit, PopExitContainer, PopExitBlock, PopExitTitle, PopExitButtonYes, PopExitButtonNo, PopExitFormGroup } from '../ConfirmExit/ConfirmExit.styles'
import { useAppContext } from '../../../routes/AppContext'
import { useEffect, useState } from 'react'
import { removeTask } from '../../../services/tasks/removeTask'
import _ from 'lodash'

export default function ConfirmDelTask() {
    const { $isDark, isModal, setIsModal, token, DEFAULT_MESSAGE_LOADING, setLoadingMessage, setIsLoading, setErrorMessage, setUserData, userData, setLoadingCard, showToast } = useAppContext()
    const location = useLocation()
    const navigate = useNavigate()
    const [taskState, setTaskStat] = useState([])
    useEffect(() => {
        setTaskStat(userData)
    }, [userData])
    const taskTitle = location.state?.taskName
    const taskId = location.state?.taskId

    // Удаление задачи
    const handleConfirmClick = async (e) => {
        e.preventDefault()
        setErrorMessage('')
        setIsModal(false)
        setLoadingMessage('Удаление задачи...')
        setIsLoading(true)
        setLoadingCard(true)

        try {
            const response = await removeTask(taskId, token)

            if (response && Array.isArray(response)) {
                await setUserData(response)
                localStorage.setItem('userData', JSON.stringify(response))
                setLoadingMessage('Задача успешно удалена')
            }

            setIsModal(false)
            showToast('Задача успешно удалена', 'warning')

            navigate('/')
        } catch (error) {
            const errMsg = error?.response?.data?.error || error?.response?.data?.message || error?.message || 'Ошибка удаления задачи'
            console.error('Ошибка удаления задачи:', errMsg)
            setErrorMessage(errMsg)
        } finally {
            setIsLoading(false)
            setLoadingCard(false)

            setLoadingMessage(DEFAULT_MESSAGE_LOADING)
        }
    }

    const handleCancelClick = (e) => {
        e.preventDefault()
        setIsModal(false)
        navigate('/')
    }

    return (
        <PopExit style={{ display: isModal ? 'block' : 'none' }} id="popExit" $isDark={$isDark}>
            <PopExitContainer>
                <PopExitBlock $isDark={$isDark}>
                    <PopExitTitle $isDark={$isDark}>{`Вы действительно хотите удалить задачу ${taskTitle}?`}</PopExitTitle>
                    <form className="pop-exit__form" id="formExit" action="#">
                        <PopExitFormGroup>
                            <PopExitButtonYes $isDark={$isDark} onClick={handleConfirmClick}>
                                Да, удалить
                            </PopExitButtonYes>
                            <PopExitButtonNo $isDark={$isDark} onClick={handleCancelClick}>
                                Нет, оставить
                            </PopExitButtonNo>
                        </PopExitFormGroup>
                    </form>
                </PopExitBlock>
            </PopExitContainer>
        </PopExit>
    )
}
