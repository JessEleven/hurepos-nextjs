import apiResponse from '@/utils/api/api-response'
import { promises as fs } from 'fs'
import path from 'path'

export async function GET (req) {
  try {
    // Directorio raíz del proyecto
    const basePath = process.cwd()
    // Solo se muestra 'src' como nodo raíz
    const relativePath = 'src'
    const fullPath = path.join(basePath, relativePath)

    const tree = {
      name: 'src',
      type: 'folder',
      path: relativePath,
      file_tree: await getFileTree(fullPath, relativePath)
    }
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

async function getFileTree (dirPath, relativePath) {
  const entries = await fs.readdir(dirPath, { withFileTypes: true })

  const folders = []
  const files = []

  for (const entry of entries) {
    const entryPath = path.join(relativePath, entry.name)
    if (entry.isDirectory()) {
      folders.push({
        name: entry.name,
        type: 'folder',
        path: entryPath,
        content: await getFileTree(path.join(dirPath, entry.name), entryPath)
      })
    } else {
      files.push({
        name: entry.name,
        type: 'file',
        path: entryPath
      })
    }
  }
  return [...folders.sort((a, b) => a.name.localeCompare(b.name)), ...files.sort((a, b) => a.name.localeCompare(b.name))]
}
