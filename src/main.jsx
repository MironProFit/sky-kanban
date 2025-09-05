import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './routes/App'
import AppProvider from './routes/AppContext'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AppProvider>
            <App />
        </AppProvider>
    </StrictMode>
)

