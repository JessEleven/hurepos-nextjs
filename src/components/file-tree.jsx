'use client'

import { ChevronDownIcon, ChevronRightIcon, CodeIcon, FolderIcon, FolderOpenIcon } from '@/resources/assets/file-tree-icons'
import { useState } from 'react'

export default function FileTree ({ tree }) {
  const [openFolders, setOpenFolders] = useState({ src: false })

  const toggleFolder = (folder) => {
    setOpenFolders((prev) => ({ ...prev, [folder]: !prev[folder] }))
  }

  const renderTree = (items, level = 0) => {
    if (!items || items.length === 0) {
      return (
        <h3 className='text-sm font-normal pl-2.5 text-neutral-400'>Empty folder</h3>
      )
    }

    return (
      items.map((item) => (
        <div translate='no' key={item.name} className='pl-3'>
          {item.type === 'folder'
            ? (
              <div
                className='flex items-center cursor-pointer'
                onClick={() => toggleFolder(item.path)}
              >
                <div className='flex items-center'>
                  {openFolders[item.path] ? <ChevronDownIcon /> : <ChevronRightIcon />}
                  {openFolders[item.path] ? <FolderOpenIcon className='text-pink-500' /> : <FolderIcon />}
                  <h3 className='ml-1'>{item.name}</h3>
                </div>
              </div>
              )
            : (
              <div className='flex items-center text-neutral-400'>
                <CodeIcon className='ml-5' />
                <h3 className='ml-1'>{item.name}</h3>
              </div>
              )}
          {item.type === 'folder' && openFolders[item.path] && (
            <div className='border-l border-neutral-400 ml-[8.8px]'>
              <h3>{renderTree(item.content, level + 1)}</h3>
            </div>
          )}
        </div>
      ))
    )
  }

  return (
    <article className='w-full md:max-w-72 rounded-lg shadow-sm dark:shadow-none bg-neutral-200/25 dark:bg-neutral-700/25 pl-5 py-5 pr-1.5'>
      {tree && (
        <div className='h-52 overflow-y-auto text-sm font-normal'>
          <div
            className='flex items-center cursor-pointer'
            onClick={() => toggleFolder(tree.path)}
          >
            {openFolders[tree.path] ? <ChevronDownIcon /> : <ChevronRightIcon />}
            {openFolders[tree.path] ? <FolderOpenIcon className='text-pink-500' /> : <FolderIcon />}
            <h3 translate='no' className='ml-1'>
              {tree.name}
            </h3>
          </div>

          {openFolders[tree.path] && (
            <div className='border-l border-neutral-400 ml-[8.8px]'>
              {renderTree(tree.file_tree)}
            </div>
          )}
        </div>
      )}
    </article>
  )
}
