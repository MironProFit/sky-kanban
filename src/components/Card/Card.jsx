import { Link } from 'react-router-dom'
import formattedDate from '../../utils/dateFormat'
import { CardContent, CardDate, CardDateText, CardGroup, CardItem, CardLink, CardsContainer, CardTitle, CardWrapper, Dot, DotContainer, Theme, ThemeText } from './Card.styles'

export default function Card({ id, topic, title, date, status, $isDark }) {
    const getColorClass = (topic) => {
        switch (topic) {
            case 'Web Design':
                return '_orange'
            case 'UI/UX':
                return '_green'
            case 'Проблемы и ошибки':
                return '_purple'
            case 'Web Development':
                return '_gray'
            default:
                return ''
        }
    }

    const colorTopicClass = getColorClass(topic)

    return (
        <CardsContainer >
            <Link to={`cardview/${id}`} state={{ modalWindow: true, topic, title, date, status }}>
                <CardItem key={id}>
                    <CardWrapper $isDark={$isDark}>
                        <CardGroup>
                            <Theme className={`${$isDark ? 'dark' : 'light'} ${colorTopicClass}`}>
                                <ThemeText>{topic}</ThemeText>
                            </Theme>
                            <CardLink to={`cardview/${id}`} state={{ modalWindow: true, topic, title, date, status }}>
                                <DotContainer>
                                    <Dot />
                                    <Dot />
                                    <Dot />
                                </DotContainer>
                            </CardLink>
                        </CardGroup>
                        <CardContent>
                            <CardTitle $isDark={$isDark}>{title}</CardTitle>
                            <CardDate>
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                    <g clipPath="url(#clip0_1_415)">
                                        <path
                                            d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z"
                                            stroke="#94A6BE"
                                            strokeWidth="0.8"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z"
                                            stroke="#94A6BE"
                                            strokeWidth="0.8"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_415">
                                            <rect width="13" height="13" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                                <CardDateText>{formattedDate(date)}</CardDateText>
                            </CardDate>
                        </CardContent>
                    </CardWrapper>
                </CardItem>
            </Link>
        </CardsContainer>
    )
}
