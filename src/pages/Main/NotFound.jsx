import { Link, useRouteError } from 'react-router-dom'
import { Container, SecondaryButton, Wrapper } from '../../components/Styles/GlobalStyle'
import { useAppContext } from '../../routes/AppContext'
import { Title404, Subtitle, Img, Wrap404 } from './NotFound.styles'

function NotFound() {
    const error = useRouteError()
    const { $isDark } = useAppContext()
    return (
        <Wrapper $isDark={$isDark}>
            <Container $isDark={$isDark} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Wrap404 style={{ display: 'flex', flexDirection: 'column' }}>
                    <Title404>404</Title404>
                    <Subtitle $isDark={$isDark}>Страница не найдена</Subtitle>
                    {error && <Subtitle $isDark={$isDark}>{String(error)}</Subtitle>}
                    <Img src="/404-werled-3.png" alt="404 изображение" />
                </Wrap404>{' '}
                <Link to={'/'}>
                    <SecondaryButton $isDark={$isDark}>Перейти на главную</SecondaryButton>
                </Link>
            </Container>
        </Wrapper>
    )
}

export default NotFound
