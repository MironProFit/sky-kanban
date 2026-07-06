export async function loginUser(login, password) {
  const response = await fetch('https://wedev-api.sky.pro/api/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'raw',
    },
    body: JSON.stringify({ login, password }),
  })

  if (!response.ok) {
    const errorData = await response.json()
    throw { response: { data: errorData, status: response.status } }
  }

  const data = await response.json()
  return { data }
}
