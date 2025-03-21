import { promises as fs } from 'fs'
import path from 'path'

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

async function generateTree () {
  const basePath = process.cwd()
  const relativePath = 'src'
  const fullPath = path.join(basePath, relativePath)

  const tree = {
    name: 'src',
    type: 'folder',
    path: relativePath,
    file_tree: await getFileTree(fullPath, relativePath)
  }
  await fs.writeFile('./public/file-tree.json', JSON.stringify(tree, null, 2))
  console.log('File tree generated correctly!')
}
generateTree().catch(console.error)
