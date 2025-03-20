import { ChevronDownIcon, ChevronUpIcon } from '@/resources/assets/mobile-icons'
import { useState } from 'react'
import MobileTheme from './mobile-theme'
import Link from 'next/link'

export default function MobileDropdown () {
  const [activeDropdown, setActiveDropdown] = useState(false)

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu)
  }

  return (
    <div className='mt-5'>
      <button
        type='button'
        onClick={() => toggleDropdown('td-1')}
        aria-expanded={activeDropdown === 'td-1'}
        className={`flex items-center justify-between px-3 py-1 w-full
        ${activeDropdown === 'td-1' ? 'dropdown' : 'bg-transparent'}`}
      >
        <span className='text-base font-medium'>Repository</span>

        {activeDropdown === 'td-1'
          ? <ChevronUpIcon className='size-5' />
          : <ChevronDownIcon className='size-5' />}
      </button>

      {activeDropdown === 'td-1' && (
        <article className='mt-3 px-3 text-sm'>
          Repository content
        </article>
      )}

      <button
        type='button'
        onClick={() => toggleDropdown('td-2')}
        aria-expanded={activeDropdown === 'td-2'}
        className={`mt-2 flex items-center justify-between px-3 py-1 w-full 
        ${activeDropdown === 'td-2' ? 'dropdown' : 'bg-transparent'}`}
      >
        <span className='text-base font-medium'>Information</span>

        {activeDropdown === 'td-2'
          ? <ChevronUpIcon className='size-5' />
          : <ChevronDownIcon className='size-5' />}
      </button>

      {activeDropdown === 'td-2' && (
        <article className='mt-3 px-3 text-sm'>
          Information content
        </article>
      )}

      <div className='mt-2 px-3 py-1'>
        <Link href='/about' className='text-base font-medium'>
          About
        </Link>
      </div>

      <div className='px-3 mt-3'>
        <MobileTheme />
      </div>
    </div>
  )
}
