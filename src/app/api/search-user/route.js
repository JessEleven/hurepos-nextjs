import { fetchGitHubUser } from '@/utils/api/github'

export async function GET (req) {
  const { searchParams } = new URL(req.url)
  const username = searchParams.get('username')

  if (!username) {
    return new Response(
      JSON.stringify({
        error: 'No username provided'
      }), { status: 400 }
    )
  }

  try {
    const userData = await fetchGitHubUser(username)
    return new Response(
      JSON.stringify(userData), { status: 200 }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }), { status: 404 }
    )
  }
}
