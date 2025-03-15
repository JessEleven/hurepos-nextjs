import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon, SystemIcon } from '@/resources/assets/nav-icons'

export const themeOptions = [
  { value: 'light', label: 'Light', icon: <SunIcon /> },
  { value: 'dark', label: 'Dark', icon: <MoonIcon /> },
  { value: 'system', label: 'System', icon: <SystemIcon /> }
]

export function useThemeLogic () {
  const [mounted, setMounted] = useState(false)
  const [open, setOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const selectedOption = themeOptions.find(opt => opt.value === theme)

  return { mounted, open, setOpen, theme, setTheme, selectedOption }
}
