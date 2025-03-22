import apiResponse from '@/utils/api/api-response.js'
import { fetchGitHubUser } from '@/utils/api/github.js'

export async function GET (req) {
  const { searchParams } = new URL(req.url)
  const username = searchParams.get('username')

  if (!username) {
    return apiResponse.error(
      400,
      'No username provided'
    )
  }

  try {
    const userData = await fetchGitHubUser(username)

    return apiResponse.success(
      200,
      'User found successfully',
      userData
    )
  } catch (error) {
    // console.error('GitHub API error:', error)

    if (error.response) {
      if (error.response.status === 404) {
        return apiResponse.error(
          404,
          'User not found'
        )
      }

      if (error.response.status === 403) {
        return apiResponse.error(
          403,
          'API rate limit exceeded'
        )
      }
    }
    return apiResponse.error(
      500,
      'Internal Server Error',
      { message: error.message }
    )
  }
}
