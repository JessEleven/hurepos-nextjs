import axios from 'axios'
import { headers } from 'next/headers'

export async function treeFile () {
  try {
    const host = headers().get('host')
    const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http'
    const baseUrl = `${protocol}://${host}`

    const response = await axios.get(`${baseUrl}/api/file-tree?path=src`)
    return response.data.data
  } catch (error) {
    if (error.response) {
      throw error
    }
    throw new Error('Error reading directory')
  }
}
