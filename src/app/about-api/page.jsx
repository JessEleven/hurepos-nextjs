import EndpointFileTree from '@/components/api-reference/endpoint-file-tree'
import EndpointGithub from '@/components/api-reference/endpoint-github'
import FileTree from '@/components/file-tree'
import { treeFile } from '@/utils/api/file-tree.js'
import { headers } from 'next/headers'

export default async function AboutPage () {
  const tree = await treeFile()
  const host = headers().get('host')
  const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http'
  const baseUrl = `${protocol}://${host}/api/file-tree?path=src`

  return (
    <main className='mx-5 md:mx-0 mt-10 md:mt-[50px] block'>
      <div className='grid md:grid-cols-2 gap-x-0 md:gap-x-5'>
        <FileTree tree={tree} />

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
        </article>
      </div>

      <article className='mt-2.5'>
        <h3 className='mt-2.5 text-sm font-normal'>The base URLs for the APIs</h3>

        <EndpointFileTree baseUrl={baseUrl} />

        <section role='region' aria-label='Endpoint file tree' className='p-3 mt-3.5 rounded-md border border-neutral-300 dark:border-neutral-700'>
          <h3 className='text-base font-medium'>Endpoint</h3>
          <div className='flex items-center gap-x-3'>
            <h4 className='px-2.5 py-0.5 text-sm border border-green-500 text-green-500 font-medium rounded-sm'>GET</h4>
            <div className=''>
              <h3 className='text-base font-medium'>Get the file tree</h3>
              <p className='text-sm mt-1.5'>Returns all files in the src directory</p>
            </div>
          </div>
        </section>

        <EndpointGithub />

        <section role='region' aria-label='Endpoint GitHub' className='p-3 mt-3.5 mb-7 md:mb-0 rounded-md border border-neutral-300 dark:border-neutral-700'>
          <h3 className='text-base font-medium'>Endpoint</h3>
          <div className='flex items-center gap-x-3'>
            <h4 className='px-2.5 py-0.5 text-sm border border-green-500 text-green-500 font-medium rounded-sm'>GET</h4>
            <div className=''>
              <h3 className='text-base font-medium'>Get the GitHub user</h3>
              <p className='text-sm mt-1.5'>return the github user if present</p>
            </div>
          </div>
        </section>
      </article>
    </main>
  )
}
