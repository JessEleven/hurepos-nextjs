import { Poppins } from 'next/font/google'
import '@/resources/css/globals.css'
import Nav from '@/components/nav'
import { ThemeProvider } from 'next-themes'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'optional'
})

export const metadata = {
  title: 'Hurepos',
  icons: [{ rel: 'icon', url: '/logo.svg' }],
  description: 'Hurepos created with next.js'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${poppins.className} bg-neutral-50 dark:bg-neutral-800`}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
          <div className='w-full md:w-[675px] 2xl:w-[775px] mx-auto text-neutral-900 dark:text-neutral-50'>
            <Nav />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
