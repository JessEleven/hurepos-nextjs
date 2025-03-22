'use client'

import { ClipboardIcon, CopyIcon } from '@/resources/assets/api-reference-icons'
import { useEffect, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

export default function EndpointFileTree ({ baseUrl }) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [copied])

  return (
    <div className='mt-1.5 flex items-center justify-between px-3 py-1.5 rounded-md shadow-sm dark:shadow-none bg-neutral-200/25 dark:bg-neutral-700/25'>
      <h3 className='text-xs 2xl:text-sm'>{baseUrl}</h3>
      <CopyToClipboard text={baseUrl} onCopy={() => setCopied(true)}>
        <button type='button' className='cursor-pointer'>
          {copied ? <ClipboardIcon className='text-pink-500' /> : <CopyIcon className='hover:text-pink-500 transition-colors ease-in-out duration-200' />}
        </button>
      </CopyToClipboard>
    </div>
  )
}
