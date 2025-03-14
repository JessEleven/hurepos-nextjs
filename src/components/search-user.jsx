import { SearchIcon } from '@/resources/assets/search-user-icons'

export default function SearchUser () {
  return (
    <form className='mt-[50px] mx-5 md:mx-0'>
      <div className='flex items-center text-sm'>
        <div className='relative flex w-full bg-slate-900/50 dark:bg-slate-700/50 rounded-md text-neutral-50'>
          <div className='flex absolute top-3.5 pl-5 text-neutral-50/75'>
            <SearchIcon className='w-4 h-4' />
          </div>
          <input
            className='outline-none py-3 bg-transparent flex items-center w-full pr-5 pl-10 rounded-l-md placeholder:text-neutral-50/75 caret-sky-500'
            name='username'
            type='text'
            placeholder='e.g. JessEleven, bluuweb...'
            autoFocus
          />
          <div className='border-2 border-sky-500 rounded my-2' />

          <button type='submit' className='py-3 2xl:min-w-[125px] min-w-[115px] disabled:cursor-progress flex items-center justify-center rounded-r-md'>
            Buscar
          </button>
        </div>
      </div>
    </form>
  )
}
