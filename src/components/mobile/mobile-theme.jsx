import { themeOptions, useThemeLogic } from '@/utils/theme'

export default function MobileTheme () {
  const { theme, setOpen, setTheme } = useThemeLogic()

  return (
    <div className='flex justify-between'>
      <h3 className='text-base font-medium'>Theme</h3>
      <div className='flex items-center gap-x-2.5 py-1 px-3 rounded-full border border-neutral-300 dark:border-neutral-700'>
        {themeOptions.map((op) => (
          <button
            key={op.value}
            type='button'
            onClick={() => {
              setTheme(op.value)
              setOpen(false)
            }}
            className={`flex items-center ${op.value === theme && 'text-sky-500'}`}
          >
            <span className='w-[18px] h-[18px]'>{op.icon}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
