import axios from 'axios'

export async function registerUser(login, password, name, setIsAuth, setIsLoading, setUserName, setToken) {
    setIsLoading(true)
    try {
        const res = await axios.post(
            'https://wedev-api.sky.pro/api/user/login',
            {
                login: login,
                name: name,
                password: password,
            },
            {
                headers: {
                    'Content-Type': 'raw',
                },
            }
        )
        if (res.status === 200 || res.status === 201) {
            setUserName(res.data.user.name)
            setToken(res.data.user.token)
        }

        if (!res.status) {
            throw new Error(`HTTP Error: ${res.status}`)
        }
        setIsAuth(true)

        console.log(res.data.user.name)
        return res.data
    } catch (error) {
        console.error('Ошибка:', error.response ? error.response.data : error.message)
        throw error
    } finally {
        setIsLoading(false)
    }
}
