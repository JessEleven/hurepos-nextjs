import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../public/logo.svg'
import { GitHubIcon } from '@/resources/assets/nav-icons'
import ThemeSwitch from '@/providers/theme-switch'

export default function Nav () {
  return (
    <header className='mt-3 mx-5 md:mx-0 border px-5 py-[5px] rounded-md border-neutral-300 dark:border-neutral-700'>
      <div className='flex items-center justify-between'>
        <Link translate='no' href='/' className='flex items-center gap-x-1.5'>
          <Image
            className='w-5 md:w-6'
            src={Logo}
            alt='Logo'
            priority
          />
          <h2 className='text-xl font-medium md:text-2xl'>Hurepos</h2>
        </Link>

        <div className='hidden md:flex md:items-center md:gap-x-[5px]'>
          <a
            className='hover-icon'
            href='https://github.com/JessEleven/hurepos-nextjs'
            target='_blank' rel='noreferrer'
          >
            <GitHubIcon className='w-5 h-5' />
          </a>
          <ThemeSwitch />
        </div>

      </div>
    </header>
  )
}
