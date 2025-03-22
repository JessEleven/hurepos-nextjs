import InfoCard from '@/components/cards/info-card'
import SearchUser from '@/components/search-user'
import { SearchContext } from '@/libs/search-lib'

export default function Home () {
  return (
    <SearchContext>
      <SearchUser />
      <InfoCard />
    </SearchContext>
  )
}
