import ApiReference from '@/components/api-reference'
import FileTree from '@/components/file-tree'
import { treeFile } from '@/utils/api/file-tree.js'
import { headers } from 'next/headers'

export default async function AboutPage () {
  const tree = await treeFile()
  const host = headers().get('host')
  const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http'
  const baseUrl = `${protocol}://${host}/api/file-tree?path=src`

  return (
    <main className='mx-5 md:mx-0 mt-10 md:mt-[50px] block md:flex gap-x-0 md:gap-x-5'>
      <div className='w-full md:min-w-[325px] 2xl:max-w-[315px]'>
        <FileTree tree={tree} />
      </div>

      <article className='mt-5 md:mt-0'>
        <section role='region' aria-label='File tree'>
          <h3 className='text-center md:text-left font-medium text-base'>File tree</h3>
          <div className='text-sm font-normal'>
            <p className='mt-2.5'>Project structure in the form of a tree,
              allowing folders to expand and collapse,
              highlighting the active folder with a different color.
            </p>
          </div>
        </section>

        <ApiReference baseUrl={baseUrl} />

        <section role='region' aria-label='Endpoint' className='p-3 mt-3.5 rounded-md border border-neutral-300 dark:border-neutral-700'>
          <h3 className='text-base font-medium'>Endpoint</h3>
          <div className='flex items-center gap-x-3'>
            <h4 className='px-2.5 py-0.5 text-sm border border-green-500 text-green-500 font-medium rounded-sm'>GET</h4>
            <div className=''>
              <h3 className='text-base font-medium'>Get the file tree</h3>
              <p className='text-sm mt-1.5'>Returns all files in the src directory </p>
            </div>
          </div>
        </section>
      </article>
    </main>
  )
}
