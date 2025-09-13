import axios from 'axios'
export async function removeTask(id, token) {
    console.log(id)
    const res = await axios.delete(
        `https://wedev-api.sky.pro/api/kanban/${id}`,

        {
            headers: {
                'Content-Type': 'raw',
                Authorization: `Bearer ${token}`,
            },
        }
    )
    return res.data.tasks
}
