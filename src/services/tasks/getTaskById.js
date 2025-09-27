import axios from 'axios'

export async function getTaskById(token, id) {
    const res = await axios.get(
        `https://wedev-api.sky.pro/api/kanban/${id}`,

        {
            headers: {
                'Content-Type': 'raw',
                Authorization: `Bearer ${token}`,
                // Authorization: `Bearer c4bococcc874c4bococcc854cod06gc4bococcc86gc4bococcc8`,
            },
        }
    )
    return res.data.task
}
