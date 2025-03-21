import { promises as fs } from 'fs'
import path from 'path'

export async function treeFile () {
  try {
    const filePath = path.join(process.cwd(), 'src/resources/json', 'file-tree.json')
    const fileContent = await fs.readFile(filePath, 'utf-8')

    return JSON.parse(fileContent)
  } catch (error) {
    throw new Error('Error reading file-tree.json')
  }
}
