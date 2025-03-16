'use client'

import { LoaderIcon } from '@/resources/assets/search-user-icons'
import { themeOptions, useThemeLogic } from '@/utils/theme'

export default function ThemeDropdown () {
  const { mounted, open, setOpen, setTheme, selectedOption } = useThemeLogic()

  if (!mounted) {
    return (
      <div className='p-[5px] bg-neutral-200 dark:bg-neutral-700 rounded-sm'>
        <LoaderIcon className='size-5 animate-spin' />
      </div>
    )
  }

  return (
    <div className='relative flex flex-1'>
      <button type='button' className='hover-icon cursor-pointer' onClick={() => setOpen(!open)}>
        <h3 className='size-5'>{selectedOption?.icon}</h3>
      </button>

      {open && (
        <article className='absolute z-40 bg-neutral-50 dark:bg-neutral-800 right-0 md:-right-[21px] -top-[5px] md:top-0 p-[5px] mt-[41px] border border-neutral-300 dark:border-neutral-700 rounded-md shadow-md'>
          {themeOptions.map((op) => (
            <button
              key={op.value}
              type='button'
              onClick={() => {
                setTheme(op.value)
                setOpen(false)
              }}
              className='flex items-center w-full px-2 gap-1.5 py-[5px] rounded-sm hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors duration-300 ease-in-out cursor-pointer'
            >
              <span className='size-4'>{op.icon}</span>
              <span className='text-xs font-medium'>{op.label}</span>
            </button>
          ))}
        </article>
      )}
    </div>
  )
}
