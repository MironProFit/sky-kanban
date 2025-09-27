import { useRouteError } from 'react-router-dom'

function ErrorBoundary() {
    const error = useRouteError()
    return <div>Error: {error.message}</div>
}

export default ErrorBoundary
