import axios from 'axios'

// Функция для регистрации пользователя
export async function registerUser(login, name, password) {
    console.log(login, name, password)
    const res = await axios.post(
        'https://wedev-api.sky.pro/api/user',
        { login, name, password },
        {
            headers: {
                'Content-Type': 'raw',
            },
        }
    )
    return res
}

// Action для React Router
export async function registerAction({ request }) {
    const formData = await request.formData()
    const login = formData.get('login')
    const name = formData.get('name')
    const password = formData.get('password')
    console.log(formData, login, password)
    try {
        const res = await registerUser(login, name, password)
        return { res }
    } catch (e) {
        const errMsg = e?.response?.data?.error || e?.response?.data?.message || e?.message || 'Ошибка регистрации'

        return { error: errMsg }
    }
}
