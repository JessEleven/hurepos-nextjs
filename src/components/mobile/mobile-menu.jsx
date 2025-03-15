'use client'

import { MenuDeepIcon, XIcon } from '@/resources/assets/mobile-icons'
import { useState } from 'react'
import MobileDropdown from './mobile-dropdown'

export default function MobileMenu () {
  const [open, setOpen] = useState(false)

  return (
    <div className='z-40 block md:hidden'>
      <button
        type='button'
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className='hover-icon relative'
      >
        {open ? <XIcon className='w-5 h-5' /> : <MenuDeepIcon className='w-5 h-5' />}
      </button>

      {open &&
        (
          <section
            role='region'
            aria-label='Opciones de menú'
            className='absolute bg-neutral-50 dark:bg-neutral-800 px-5 left-0 right-0 top-14 bottom-0'
          >
            <MobileDropdown />
          </section>
        )}
    </div>
  )
}
