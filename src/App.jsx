import Main from './components/Main'
import Header from './components/Header'
import PopExit from './components/PopExit'
import PopBrowse from './components/PopBrowse'
import PopNewCard from './components/PopNewCard'
import './App.css'

function App() {
    return (
        <div className="wrapper">
            <Header />
            <Main />
            <PopExit />
            <PopBrowse />
            <PopNewCard />
        </div>
    )
}

export default App