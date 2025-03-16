import axios from 'axios'

export async function fetchGitHubUser (username) {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`)
    return response.data
  } catch (error) {
    if (error.response) {
      throw error
    }
    throw new Error('Service not available at the moment')
  }
}
