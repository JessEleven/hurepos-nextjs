import axios from 'axios'

export async function fetchGitHubUser (username) {
  try {
    const { data } = await axios.get(`https://api.github.com/users/${username}`)
    return data
  } catch (error) {
    throw new Error('User not found')
  }
}
