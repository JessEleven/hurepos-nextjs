import { BracketsAngleIcon, RepositoryIcon, UsersIcon } from '@/resources/assets/user-card-icons'
import React from 'react'

export default function RepoCard ({ data }) {
  const result = (data.public_repos === 0 && data.public_gists === 0 && data.followers === 0)

  return (
    <div className='w-full mt-4 rounded-md border border-neutral-300 dark:border-neutral-700'>
      <div className='flex items-center justify-around py-3'>
        {data.public_repos !== 0 && (
          <article className='repo-card'>
            <RepositoryIcon className='size-5' />
            <h3 className='repo-title'>Repositories</h3>
            <h3 className='repo-number'>{data.public_repos}</h3>
          </article>
        )}

        {data.public_gists !== 0 && (
          <article className='repo-card'>
            <BracketsAngleIcon />
            <h3 className='repo-title'>Gists</h3>
            <h3 className='repo-number'>{data.public_gists}</h3>
          </article>
        )}

        {data.followers !== 0 && (
          <article className='repo-card'>
            <UsersIcon />
            <h3 className='repo-title'>Followers</h3>
            <h3 className='repo-number'>{data.followers}</h3>
          </article>
        )}
        {result && (
          <h3 className='px-3 text-sm'>It hasn't repos, gists or followers</h3>
        )}
      </div>
    </div>
  )
}
