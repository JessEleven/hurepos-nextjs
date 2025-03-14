'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { LoaderIcon, MoonIcon, SunIcon, SystemIcon } from '@/resources/assets/nav-icons'

const options = [
  { value: 'light', label: 'Light', icon: <SunIcon /> },
  { value: 'dark', label: 'Dark', icon: <MoonIcon /> },
  { value: 'system', label: 'System', icon: <SystemIcon /> }
]

export default function ThemeSwitch () {
  const [mounted, setMounted] = useState(false)
  const [open, setOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className='p-[5px] bg-neutral-200 dark:bg-neutral-700 rounded-sm'>
        <LoaderIcon className='w-5 h-5 animate-spin' />
      </div>
    )
  }
  const selectedOption = options.find((opt) => opt.value === (theme))

  return (
    <div className='relative flex flex-1'>
      <button type='button' className='hover-icon cursor-pointer' onClick={() => setOpen(!open)}>
        <h3 className='w-5 h-5'>{selectedOption?.icon}</h3>
      </button>

      {open && (
        <div className='absolute z-50 bg-neutral-50 dark:bg-neutral-800 -right-[21px] p-[5px] mt-[41px] border border-neutral-300 dark:border-neutral-700 rounded-md shadow-md'>
          {options.map((op) => (
            <button
              key={op.value}
              type='button'
              onClick={() => {
                setTheme(op.value)
                setOpen(false)
              }}
              className='flex items-center w-full px-2 gap-1.5 py-[5px] rounded-sm hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors duration-300 ease-in-out cursor-pointer'
            >
              <span className='w-4 h-4'>{op.icon}</span>
              <span className='text-xs font-medium'>{op.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
