'use client'

import { useState } from 'react'
import { useSearch } from '@/Context/search-context'
import { LoaderIcon, SearchIcon } from '@/resources/assets/search-user-icons'

export default function SearchUser () {
  const [input, setInput] = useState('')
  const { searchUser, error, loading } = useSearch()

  const handleSubmit = (e) => {
    e.preventDefault()
    searchUser(input)
    setInput('')
  }

  return (
    <form onSubmit={handleSubmit} className='mt-10 md:mt-[50px] mx-5 md:mx-0'>
      <div className='flex items-center text-sm'>
        <div className='relative flex w-full bg-slate-800/75 rounded-md text-neutral-50'>
          <div className='flex absolute top-3.5 pl-5 text-neutral-50/75'>
            <SearchIcon className='size-4' />
          </div>
          <input
            className='outline-none py-3 bg-transparent flex items-center w-full pr-5 pl-10 rounded-l-md placeholder:text-neutral-50/75 caret-orange-500/75'
            name='username'
            type='search'
            placeholder='e.g. JessEleven, bluuweb...'
            autoFocus
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <div className='border-2 border-orange-500/75 rounded my-2' />

          <button type='submit' className='py-3 2xl:min-w-[125px] min-w-[115px] disabled:cursor-progress flex items-center justify-center rounded-r-md'>
            {loading
              ? (
                <span className='flex items-center justify-center gap-x-1'>
                  <LoaderIcon className='size-5 animate-spin' />
                  Buscando
                </span>
                )
              : (<span>Buscar</span>)}
          </button>
        </div>
      </div>
      {error && (
        <h3 className='mt-1.5 rounded-md text-sm font-normal py-[5px] px-5 bg-neutral-200 dark:bg-neutral-700'>
          {error}
        </h3>
      )}
    </form>
  )
}
