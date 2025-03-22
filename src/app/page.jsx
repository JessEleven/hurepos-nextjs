import InfoCard from '@/components/cards/info-card'
import SearchUser from '@/components/search-user'
import { SearchContext } from '@/context/search-context'

export default function Home () {
  return (
    <SearchContext>
      <SearchUser />
      <InfoCard />
    </SearchContext>
  )
}
