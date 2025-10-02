import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useAppContext } from '../../routes/AppContext'

function Toastify() {
    const { isTheme } = useAppContext()

    return <ToastContainer theme={isTheme ? 'dark' : 'light'} autoClose={2500} newestOnTop={true} closeOnClick />
}

export default Toastify
