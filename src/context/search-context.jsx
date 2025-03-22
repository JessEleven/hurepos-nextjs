'use client'

import { createContext, useContext, useState } from 'react'
import axios from 'axios'

const CreateSearchContext = createContext()

export function SearchContext ({ children }) {
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const searchUser = async (username) => {
    if (!username) return

    try {
      setError(null)
      setLoading(true)

      const response = await axios.get(`/api/search-user?username=${username}`)
      setUserData(response.data)

      setLoading(false)
    } catch (err) {
      setUserData(null)
      setLoading(false)

      setError('User not found')

      setTimeout(() => {
        setError(null)
      }, 2500)
    }
  }

  return (
    <CreateSearchContext.Provider value={{ userData, error, loading, searchUser }}>
      {children}
    </CreateSearchContext.Provider>
  )
}
export const useSearch = () => useContext(CreateSearchContext)
