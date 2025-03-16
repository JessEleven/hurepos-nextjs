import {
  BuildingIcon,
  LinkIcon,
  MapPinIcon,
  TwitterIcon
}
  from '@/resources/assets/user-card-icons'

export default function CardSocial () {
  return (
    <div className='flex flex-col mt-4'>
      <div className='grid gap-4 grid-cols-1 md:grid-cols-2 font-medium'>
        <article className='media-card'>
          <MapPinIcon />
          <h3 className='media-info'>Location</h3>
        </article>

        <article className='media-card media-hover'>
          <LinkIcon />
          <a
            datatype='Blog'
            className='media-info'
            href='#'
            rel='noreferrer'
            target='_blank'
          >
            Blog
          </a>
        </article>

        <article className='media-card media-hover'>
          <TwitterIcon />
          <a
            data-type='Twitter'
            className='media-info'
            href='#'
            rel='noreferrer'
            target='_blank'
          >
            <span>@</span>Twitter
          </a>
        </article>

        <article className='media-card'>
          <BuildingIcon />
          <h3 className='media-info'>Company</h3>
        </article>
      </div>
    </div>
  )
}
