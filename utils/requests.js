export const fetchUser = async () => {
  const response = await fetch('https://randomuser.me/api/');
  try {
    const data = await response.json()
    return data.results[0]
  } catch (error) {
    throw new Error(`there is an error! ${error}`)
  }
}


