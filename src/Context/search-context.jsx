'use client'

import { createContext, useContext, useState } from 'react'
import axios from 'axios'

const CreateSearchContext = createContext()

export function SearchContext ({ children }) {
  const [userData, setUserData] = useState(null)
  const [error, setError] = useState(null)

  const searchUser = async (username) => {
    if (!username) return

    try {
      setError(null)
      const response = await axios.get(`/api/search-user?username=${username}`)
      setUserData(response.data)
    } catch (err) {
      setUserData(null)
      setError('User not found')
    }
  }

  return (
    <CreateSearchContext.Provider value={{ userData, error, searchUser }}>
      {children}
    </CreateSearchContext.Provider>
  )
}
export const useSearch = () => useContext(CreateSearchContext)
