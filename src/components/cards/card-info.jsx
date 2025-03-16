'use client'

import Image from 'next/image'
import CardSocial from './card-social'
import { RepositoryIcon, UsersIcon } from '@/resources/assets/user-card-icons'
import { GitHubIcon } from '@/resources/assets/nav-icons'

export default function Cardinfo () {
  return (
    <section
      role='region'
      aria-label='User information'
      className='mt-7 mx-5 md:mx-0 mb-5 dark:shadow-none bg-neutral-200/25 dark:bg-neutral-700/25 rounded-lg shadow-md'
    >
      <div className='container mx-auto flex flex-col'>
        <div className='flex flex-col sm:flex-row p-5'>
          <div className='sm:w-1/3 sm:mr-4 text-center mb-4 md:mb-0'>
            <div className='text-sm overflow-hidden inline-flex items-center justify-center'>

              <Image
                className='rounded-full object-contain'
                src='/logo.svg'
                width={96}
                height={96}
                alt=''
                priority
              />

            </div>

            <div className='flex flex-col items-center text-center justify-center mt-2'>
              <h3 className='text-sm font-medium break-all'>
                <span>@</span>JessEleven
              </h3>

              <div className='w-36 h-0.5 rounded my-2 bg-linear-90 from-emerald-500 to-emerald-200' />

              <h3 className='text-sm font-medium'>
                26 de Sep, 2025
              </h3>

              <a
                data-type='GitHub'
                className='flex items-center gap-x-1 mt-4 rounded-md px-5 py-1.5 bg-orange-500/75 hover:bg-orange-600/75 transition-colors duration-300 ease-in-out'
                href='#'
                rel='noreferrer'
                target='_blank'
              >
                <GitHubIcon className='size-4 text-neutral-900' />
                <span className='mt-0.5 text-sm font-medium text-neutral-900'>GitHub</span>
              </a>
            </div>
          </div>

          <div className='sm:w-2/3 h-full'>

            <h2 className='text-center md:text-left text-base font-medium mb-2'>
              Jesús Mendoza
            </h2>

            <p className='h-full md:min-h-[96px] leading-relaxed text-sm font-normal mb-4'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam aspernatur illo commodi natus necessitatibus ab nemo repellendus! Soluta, recusandae facere.
            </p>

            <div className='w-full rounded-md border border-neutral-300 dark:border-neutral-700'>
              <div className='grid grid-cols-3 py-5'>
                <article className='repo-card'>
                  <div className='repo-icon'>
                    <RepositoryIcon />
                  </div>
                  <h3 className='repo-title'>Repositories</h3>
                  <h3 className='repo-number'>8</h3>
                </article>

                <article className='repo-card'>
                  <div className='repo-icon'>
                    <UsersIcon />
                  </div>
                  <h3 className='repo-title'>Followers</h3>
                  <h3 className='repo-number'>10</h3>
                </article>

                <article className='repo-card'>
                  <div className='repo-icon'>
                    <UsersIcon />
                  </div>
                  <h3 className='repo-title'>Following</h3>
                  <h3 className='repo-number'>48</h3>
                </article>
              </div>
            </div>

            <CardSocial />
          </div>
        </div>
      </div>
    </section>
  )
}
