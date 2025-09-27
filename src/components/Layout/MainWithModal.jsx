import { Outlet } from 'react-router-dom'
import MainPage from '../../pages/Main/MainPage'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

export default function MainWithModal() {
    return (
        <>
            <DndProvider backend={HTML5Backend}>
                <MainPage />
            </DndProvider>
            <Outlet />
        </>
    )
}
