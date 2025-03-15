import { ThemeProvider } from 'next-themes'

export function ThemeChildren ({ children }) {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='system'
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  )
}
