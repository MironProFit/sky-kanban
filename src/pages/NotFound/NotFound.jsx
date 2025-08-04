import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div>
            <h1>404</h1>
            <h2>Страница не найдена</h2>
            <Link to={'/'}> Перейти на главную</Link>
        </div>
    )
}

export default NotFound
