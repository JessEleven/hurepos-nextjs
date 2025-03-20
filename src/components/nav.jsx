import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../public/logo.svg'
import { GitHubIcon, InfoCircleIcon } from '@/resources/assets/nav-icons'
import ThemeDropdown from '@/components/theme-dropdown'
import MobileMenu from '@/components/mobile/mobile-menu'

export default function Nav () {
  return (
    <header className='mt-3 px-5 py-[5px] rounded-md border-0 md:border md:border-neutral-300 md:dark:border-neutral-700'>
      <div className='flex items-center justify-between'>
        <Link translate='no' href='/' className='flex items-center gap-x-1.5'>
          <Image
            className='size-6 md:size-7'
            src={Logo}
            alt='Logo'
            priority
          />
          <h2 className='text-xl font-medium md:text-2xl'>Hurepos</h2>
        </Link>

        <div className='hidden md:flex md:items-center md:gap-x-[5px]'>
          <Link href='/about' className='hover-icon'>
            <InfoCircleIcon />
          </Link>
          <a
            datatype='GitHub'
            className='hover-icon'
            href='https://github.com/JessEleven/hurepos-nextjs'
            rel='noreferrer'
            target='_blank'
          >
            <GitHubIcon className='size-5' />
          </a>
          <ThemeDropdown />
        </div>
        <MobileMenu />
      </div>
    </header>
  )
}
