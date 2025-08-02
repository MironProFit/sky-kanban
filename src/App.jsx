import Main from './components/Main/Main'
import Header from './components/Header/Header'
import Leyout from './components/Leyout'

// import PopExit from './components/PopExit/PopExit'
// import PopBrowse from './components/PopBrowse/PopBrowse'
// import PopNewCard from './components/PopNewCard/PopNewCard'
// import Calendar from './components/Calendar/Calendar'
// import Card from './components/Card/Card'
// import Column from './components/Column/Column'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const router = createBrowserRouter([{ path: '/', element: <Leyout /> }])

function App() {
    return <RouterProvider router={router} />
}

export default App

