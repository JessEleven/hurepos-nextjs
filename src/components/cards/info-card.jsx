'use client'

import Image from 'next/image'
import { GitHubIcon } from '@/resources/assets/nav-icons'
import { useSearch } from '@/context/search-context'
import RepoCard from './repo-card'
import SocialCard from './social-card'

export default function InfoCard () {
  const { userData } = useSearch()
  const data = userData?.data

  if (!data) {
    return (
      <div className='animate-pulse mt-[230px] text-3xl font-bold'>
        <div className='flex opacity-25 items-center justify-center'>
          <h2>Hurepos</h2>
        </div>
      </div>
    )
  }

  return (
    <>
      {data && (
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
                    src={data?.avatar_url}
                    width={88}
                    height={88}
                    alt={`User ${data?.login}`}
                    priority
                  />
                </div>

                <div className='flex flex-col items-center text-center justify-center mt-2'>
                  <h3 className='text-sm font-medium break-all'>
                    <span>@</span>{data?.login}
                  </h3>

                  <div className='w-36 h-0.5 rounded my-2 bg-linear-90 from-emerald-500 to-emerald-200' />

                  <h3 className='text-sm font-medium'>
                    {new Date(data?.created_at || '').toLocaleDateString('en', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </h3>

                  <a
                    translate='no'
                    data-type='GitHub'
                    className='flex items-center gap-x-1 mt-4 rounded-md px-5 py-1.5 bg-orange-500/75 hover:bg-orange-600/75 transition-colors duration-300 ease-in-out'
                    href={data?.html_url}
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
                  {data?.name}
                </h2>

                {data.bio && (
                  <p className='h-full md:min-h-[96px] leading-relaxed text-sm font-normal'>
                    {data.bio}
                  </p>
                )}

                <RepoCard data={data} />

                <SocialCard data={data} />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
