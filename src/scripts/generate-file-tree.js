import chokidar from 'chokidar'
import path from 'path'
import fs from 'fs/promises'

const DIRECTORY_TO_WATCH = 'src'
const OUTPUT_FILE = path.join('src/resources/json', 'file-tree.json')

// Función para obtener la estructura de archivos
async function getFileTree (dirPath, relativePath = '') {
  try {
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
    return [...folders, ...files]
  } catch (error) {
    console.error(`Error reading directory ${dirPath}:`, error)
    return []
  }
}

// Se genera el árbol de archivos y se guarda en
// src/resources/json/file-tree.json
async function generateTree () {
  const tree = {
    name: DIRECTORY_TO_WATCH,
    type: 'folder',
    path: DIRECTORY_TO_WATCH,
    file_tree: await getFileTree(DIRECTORY_TO_WATCH)
  }
  await fs.writeFile(OUTPUT_FILE, JSON.stringify(tree, null, 2))
  // console.log(`📂 File tree updated in ${OUTPUT_FILE}`)
}

// Monitoreo con chokidar para saber si hay cambios dentro de src
const watcher = chokidar.watch(DIRECTORY_TO_WATCH, {
  persistent: true,
  ignoreInitial: false
})

watcher
  .on('add', path => {
    console.log(`📄 File added: ${path}`)
    generateTree()
  })
  // Para leer los cambios dentro de un archivo dentro de src
  /* .on('change', path => {
    console.log(`✏️ File changed: ${path}`)
    generateTree()
  }) */
  .on('unlink', path => {
    console.log(`🗑️ File removed: ${path}`)
    generateTree()
  })
  .on('addDir', path => {
    console.log(`📁 Directory added: ${path}`)
    generateTree()
  })
  .on('unlinkDir', path => {
    console.log(`🗑️ Directory removed: ${path}`)
    generateTree()
  })
  .on('error', error => console.error(`🚨 Watcher error: ${error}`))
  .on('ready', () => console.log('✅ Watching for changes...'))
