import Cardinfo from '@/components/cards/card-info'
import SearchUser from '@/components/search-user'
import { SearchContext } from '@/Context/search-context'

export default function Home () {
  return (
    <SearchContext>
      <SearchUser />
      <Cardinfo />
    </SearchContext>
  )
}
