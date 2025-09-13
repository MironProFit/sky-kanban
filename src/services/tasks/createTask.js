import axios from 'axios'

export async function createTask(token, title, topic, description, date) {
    console.log(token, title, topic, description, date)
    const res = await axios.post(
        'https://wedev-api.sky.pro/api/kanban',
        {
            title: title,
            topic: topic,
            status: 'Без статуса',
            description: description,
            date: date,
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
