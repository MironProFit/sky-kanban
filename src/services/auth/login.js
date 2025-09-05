import axios from 'axios'
import { useAppContext } from '../../routes/AppContext'

export async function loginUser(login, password) {
    try {
        const res = await axios.post(
            'https://wedev-api.sky.pro/api/user/login',
            {
                login: login,
                password: password,
            },
            {
                headers: {
                    'Content-Type': 'raw',
                },
            }
        )
        if (res.status === 200) {
            setIsAuth(true)
        }

        if (!res.status) {
            throw new Error(`HTTP Error: ${res.status}`)
        }
        return res.data
    } catch (error) {
        console.error('Ошибка:', error.response ? error.response.data : error.message)
        throw error
    }
}
