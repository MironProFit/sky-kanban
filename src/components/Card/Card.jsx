import { Link, useNavigate } from 'react-router-dom'
import formattedDate from '../../utils/dateFormat'
import {
  CardContent,
  CardDate,
  CardDateText,
  CardGroup,
  CardItem,
  CardTitle,
  CardWrapper,
  Dot,
  DotContainer,
  Theme,
  ThemeText,
} from './Card.styles'
import { useAuthContext } from '../../context/AuthContext'
import { useDrag } from 'react-dnd'

export const getColorClass = (topic) => {
  switch (topic) {
    case 'Web Design':
      return '_orange'
    case 'Research':
      return '_green'
    case 'Copywriting':
      return '_purple'
    default:
      return '_gray'
  }
}

export default function Card({ id, topic, title, date, status, description }) {
  const { $isDark } = useAuthContext()
  const navigate = useNavigate()

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: 'CARD',
      item: { id },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    [id],
  )

  if (!id) {
    console.error(' Card: id не найдена!', { id, topic, title })
    return null
  }

  const colorTopicClass = getColorClass(topic)

  const handleMenuClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    navigate(`card/${id}/edit`, {
      state: { id, topic, title, date, status, description },
    })
  }

  return (
    <CardItem>
      <CardWrapper
        $isDark={$isDark}
        ref={drag}
        style={{ opacity: isDragging ? 0.5 : 1 }}
      >
        <CardGroup>
          <Theme className={`${$isDark ? 'dark' : 'light'} ${colorTopicClass}`}>
            <ThemeText>{topic}</ThemeText>
          </Theme>
          <DotContainer onClick={handleMenuClick} style={{ cursor: 'pointer' }}>
            <Dot />
            <Dot />
            <Dot />
          </DotContainer>
        </CardGroup>
        <Link
          to={`card/${id}`}
          state={{ id, topic, title, date, status, description }}
          style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}
        >
          <CardContent>
            <CardTitle $isDark={$isDark}>{title}</CardTitle>
            <CardDate>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="transparent"
              >
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
        </Link>
      </CardWrapper>
    </CardItem>
  )
}
