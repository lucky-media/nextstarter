import Head from 'next/head'
import Navigation from '@/components/Navigation'

export default function Layout({ children, title = null }) {
  const dev = process.env.NODE_ENV === 'development'

  return (
    <>
      <Head>
        <title>{title} - Next Starter</title>

        {/* Favicons */}
        <link rel="icon" href="/favicons/fav-32.ico" sizes="32x32" />
        <link rel="icon" href="/favicons/fav-57.ico" sizes="57x57" />
        <link rel="icon" href="/favicons/fav-76.ico" sizes="76x76" />
        <link rel="icon" href="/favicons/fav-96.ico" sizes="96x96" />
        <link rel="icon" href="/favicons/fav-128.ico" sizes="128x128" />
        <link rel="icon" href="/favicons/fav-192.ico" sizes="192x192" />
        <link rel="icon" href="/favicons/fav-228.ico" sizes="228x228" />
      </Head>
      <div className={`font-sans antialiased flex flex-col ${dev ? 'debug-screens' : null}`}>
        {/* Navigation here */}
        <Navigation />

        {children}

        {/* Footer here */}
      </div>
    </>
  )
}
