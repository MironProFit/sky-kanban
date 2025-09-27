import axios from 'axios'

export async function loginUser(login, password) {
    const res = await axios.post(
        'https://wedev-api.sky.pro/api/user/login',
        { login, password },
        {
            headers: {
                'Content-Type': 'raw',
            },
        }
    )
    return res
}

export async function loginAction({ request }) {
    const formData = await request.formData()
    const login = formData.get('login')
    const password = formData.get('password')

    try {
        const res = await loginUser(login, password)

        return { res }
    } catch (e) {
        const errMsg = e?.response?.data?.error || e?.response?.data?.message || e?.message || 'Ошибка входа'

        return { error: errMsg }
    }
}
