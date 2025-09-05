import axios from 'axios'

export async function fetchUsers() {
    try {
        const res = await axios.post('https://wedev-api.sky.pro/api/user', { login: 'Miron', password: 'Miron' })

        if (!res.status) {
            throw new Error(`HTTP Error: ${res.status}`)
        }
        return res.data
    } catch (error) {
        console.error('Ошибка:', error.response ? error.response.data : error.message)
        throw error
    }
}
