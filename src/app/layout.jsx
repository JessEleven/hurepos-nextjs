import { Poppins } from 'next/font/google'
import '@/resources/css/globals.css'
import Nav from '@/components/nav'
import { ThemeChildren } from '@/providers/theme-children'

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
        <ThemeChildren>
          <div className='w-full md:w-[680px] 2xl:w-[780px] mx-auto text-neutral-900 dark:text-neutral-50'>
            <Nav />
            {children}
          </div>
        </ThemeChildren>
      </body>
    </html>
  )
}
