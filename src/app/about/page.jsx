import FileTree from '@/components/file-tree'
import { treeFile } from '@/utils/api/file-tree'

export default async function AboutPage () {
  const tree = await treeFile()

  return (
    <main className='mx-5 md:mx-0 mt-10 md:mt-[50px] block md:flex gap-x-0 md:gap-x-5'>
      <FileTree tree={tree} />
      <article className='mt-5 md:mt-0'>
        <h3 className='text-center md:text-left font-medium text-base'>File tree</h3>
        <div className='text-sm font-normal'>
          <p className='mt-2.5'>Project structure in the form of a tree,
            allowing folders to expand and collapse,
            highlighting the active folder with a different color.
          </p>
        </div>
      </article>
    </main>
  )
}
