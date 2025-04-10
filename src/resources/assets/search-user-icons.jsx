export const LoaderIcon = (props) => (
  <svg
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
    strokeLinecap='round'
    strokeLinejoin='round'
    strokeWidth={2}
    className='icon icon-tabler icons-tabler-outline icon-tabler-loader'
    {...props}
  >
    <path stroke='none' d='M0 0h24v24H0z' />
    <path d='M12 6V3M16.25 7.75 18.4 5.6M18 12h3M16.25 16.25l2.15 2.15M12 18v3M7.75 16.25 5.6 18.4M6 12H3M7.75 7.75 5.6 5.6' />
  </svg>
)

export const SearchIcon = (props) => (
  <svg
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
    strokeLinecap='round'
    strokeLinejoin='round'
    strokeWidth={2}
    {...props}
  >
    <circle cx={11} cy={11} r={8} />
    <path d='m21 21-4.3-4.3' />
  </svg>
)
