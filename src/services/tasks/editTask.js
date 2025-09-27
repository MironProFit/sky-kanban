import axios from 'axios'
export async function editTask(id, token, title, topic, status, description, date) {
    const res = await axios.put(
        `https://wedev-api.sky.pro/api/kanban/${id}`,
        {
            title,
            topic,
            status,
            description,
            date,
        },
        {
            headers: {
                'Content-Type': 'raw',
                Authorization: `Bearer ${token}`,
            },
        }
    )
    return res.data.tasks
}
