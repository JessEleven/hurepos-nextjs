import {
  BuildingIcon,
  LinkIcon,
  MapPinIcon,
  TwitterIcon
}
  from '@/resources/assets/user-card-icons'

function valideUrl (url) {
  // Verificar si la URL comienza con "http://" o "https://"
  if (!/^https?:\/\//i.test(url)) {
    // Agregar "https://" al principio de la URL
    url = 'https://' + url
  }
  return url
}

export default function CardSocial ({ data }) {
  const result = (data?.location || data?.blog || data?.twitter_username || data?.company)

  return (
    <div className={`flex flex-col ${result ? 'mt-4' : 'mt-0'}`}>
      <div className='grid gap-4 grid-cols-1 md:grid-cols-2 font-medium'>
        {data.location && (
          <article className='media-card'>
            <MapPinIcon />
            <h3 className='media-info'>{data.location}</h3>
          </article>
        )}

        {data.blog && (
          <article className='media-card media-hover'>
            <LinkIcon />
            <a
              datatype='Blog'
              className='media-info'
              href={valideUrl(data.blog)}
              rel='noreferrer'
              target='_blank'
            >
              {data.blog}
            </a>
          </article>
        )}

        {data.twitter_username && (
          <article className='media-card media-hover'>
            <TwitterIcon />
            <a
              data-type='X'
              className='media-info'
              href={`https://www.x.com/${data.twitter_username}`}
              rel='noreferrer'
              target='_blank'
            >
              <span>@</span>{data.twitter_username}
            </a>
          </article>
        )}

        {data.company && (
          <article className='media-card'>
            <BuildingIcon />
            <h3 className='media-info'>{data.company}</h3>
          </article>
        )}
      </div>
    </div>
  )
}
