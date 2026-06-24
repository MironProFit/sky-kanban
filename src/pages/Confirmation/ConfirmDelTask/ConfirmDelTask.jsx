import { useLocation, useNavigate } from 'react-router-dom'
import {
  PopExit,
  PopExitContainer,
  PopExitBlock,
  PopExitTitle,
  PopExitButtonYes,
  PopExitButtonNo,
  PopExitFormGroup,
} from '../ConfirmExit/ConfirmExit.styles'
import { useAuthContext } from '../../../context/AuthContext'
import { useTasksContext } from '../../../context/TasksContext'

export default function ConfirmDelTask() {
  const { $isDark, token } = useAuthContext()
  const { removeTask } = useTasksContext()
  const location = useLocation()
  const navigate = useNavigate()

  const taskTitle = location.state?.taskName
  const taskId = location.state?.taskId

  const handleConfirmClick = async (e) => {
    e.preventDefault()
    try {
      await removeTask(token, taskId)
      navigate('/')
    } catch (error) {
      console.error('Ошибка удаления задачи:', error)
    }
  }

  const handleCancelClick = (e) => {
    e.preventDefault()
    navigate('/')
  }

  return (
    <PopExit style={{ display: 'block' }} id="popExit" $isDark={$isDark}>
      <PopExitContainer>
        <PopExitBlock $isDark={$isDark}>
          <PopExitTitle $isDark={$isDark}>
            {`Вы действительно хотите удалить задачу ${taskTitle}?`}
          </PopExitTitle>
          <form className="pop-exit__form" id="formExit" action="#">
            <PopExitFormGroup>
              <PopExitButtonYes
                $isDark={$isDark}
                type="button"
                onClick={handleConfirmClick}
              >
                Да, удалить
              </PopExitButtonYes>
              <PopExitButtonNo
                $isDark={$isDark}
                type="button"
                onClick={handleCancelClick}
              >
                Нет, оставить
              </PopExitButtonNo>
            </PopExitFormGroup>
          </form>
        </PopExitBlock>
      </PopExitContainer>
    </PopExit>
  )
}
