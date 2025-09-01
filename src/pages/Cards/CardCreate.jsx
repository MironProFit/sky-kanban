import { useLocation, useMatch, useNavigate, useParams } from 'react-router-dom'
import { topicsList } from '../../data/data'
import { useState } from 'react'
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
import { PrimaryButton, TextContainer, TopicButton } from '../../components/Styles/GlobalStyle'
import CalendarComponent from '../../components/Calendar/Calendar'
import { CalendarAndDateContainer } from '../../components/Calendar/Calendar.styles'
import { Theme } from '../../components/Card/Card.styles'
import { useAppContext } from '../../routes/AppContext'

export default function CardView({ $isDark }) {
    const navigate = useNavigate()
    const location = useLocation()
    const [activeButton, setActiveButton] = useState(null)
    const [taskState, setTaskState] = useState([])

    const createMatch = useMatch('/createcard/')
    const isEditMode = Boolean(createMatch)

    const [selectDate, setSelectDate] = useState('')

    const { isModal, setIsModal } = useAppContext()

    const handleDateChange = (dateString) => {
        setTaskState((prev) => ({
            ...prev,
            date: dateString,
        }))
        setSelectDate(dateString)
    }

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
        setTaskState((prev) => ({ ...prev, topic: value }))
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
                                        readOnly={!isEditMode}
                                        $isEditMode={isEditMode}
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
                                    {!selectDate ? (
                                        'Выберите срок исполнения.'
                                    ) : (
                                        <p>
                                            Cрок исполнения: <span>{selectDate}</span>
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
                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <PrimaryButton $fixed $width="auto" $isDark={$isDark} onClick={handleClose}>
                                Создать задачу
                            </PrimaryButton>
                        </div>
                    </PopBrowseContent>
                </PopBrowseBlock>
            </PopBrowseContainer>
        </PopBrowse>
    )
}
