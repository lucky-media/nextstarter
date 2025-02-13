import './globals.css'

import clsx from 'clsx'
import { Poppins } from 'next/font/google'
import Navigation from 'src/components/layout/Navigation'
import { mergeMetaData } from 'src/utils/seo'

const poppins = Poppins({
  weight: ['500', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export default async function Layout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Favicons */}
      <link rel="icon" href="/favicons/fav-32.ico" sizes="32x32" />
      <link rel="icon" href="/favicons/fav-57.ico" sizes="57x57" />
      <link rel="icon" href="/favicons/fav-76.ico" sizes="76x76" />
      <link rel="icon" href="/favicons/fav-96.ico" sizes="96x96" />
      <link rel="icon" href="/favicons/fav-128.ico" sizes="128x128" />
      <link rel="icon" href="/favicons/fav-192.ico" sizes="192x192" />
      <link rel="icon" href="/favicons/fav-228.ico" sizes="228x228" />

      <body className={clsx([poppins.className, 'font-sans', 'antialiased', 'flex', 'flex-col'])}>
        {/* Navigation here */}
        <Navigation />

        {children}

        {/* Footer here */}
      </body>
    </html>
  )
}

export const metadata = mergeMetaData()
