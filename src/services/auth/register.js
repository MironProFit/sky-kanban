export async function registerUser({ login, name, password }) {
  const response = await fetch('https://wedev-api.sky.pro/api/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'raw',
    },
    body: JSON.stringify({ login, name, password }),
  })

  if (!response.ok) {
    const errorData = await response.json()
    throw { response: { data: errorData, status: response.status } }
  }

  const data = await response.json()
  return { data }
}
