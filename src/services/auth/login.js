import axios from 'axios'

export async function loginUser() {
    try {
        const res = await axios.post(
            'https://wedev-api.sky.pro/api/user/login',
            {
                login: 'Miron',
                password: 'Miron',
            },
            {
                headers: {
                    'Content-Type': 'raw',
                },
            }
        )

        if (!res.status) {
            throw new Error(`HTTP Error: ${res.status}`)
        }
        
        return res.data
    } catch (error) {
        console.error('Ошибка:', error.response ? error.response.data : error.message)
        throw error
    }
}
