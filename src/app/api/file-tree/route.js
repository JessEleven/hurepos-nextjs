import apiResponse from '@/utils/api/api-response'
import { promises as fs } from 'fs'
import path from 'path'

export async function GET () {
  try {
    const filePath = path.join(process.cwd(), 'public', 'file-tree.json')
    const fileContent = await fs.readFile(filePath, 'utf-8')
    const tree = JSON.parse(fileContent)

    return apiResponse.success(
      200,
      'File tree fetched successfully',
      tree
    )
  } catch (error) {
    return apiResponse.error(
      500,
      'Internal Server Error',
      { message: error.message }
    )
  }
}
