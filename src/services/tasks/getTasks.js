import axios from 'axios'

export async function getAllTasks(token) {
    const res = await axios.get(
        'https://wedev-api.sky.pro/api/kanban',

        {
            headers: {
                'Content-Type': 'raw',
                Authorization: `Bearer ${token}`,
                // Authorization: `Bearer c4bococcc874c4bococcc854cod06gc4bococcc86gc4bococcc8`,
            },
        }
    )
    return res.data.tasks
}
