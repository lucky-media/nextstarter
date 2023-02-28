import '../styles/globals.css'

import { Poppins } from 'next/font/google'
import { DefaultSeo } from 'next-seo'

const poppins = Poppins({
  weight: ['500', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'en_EN',
          url: '',
          site_name: 'Next Starter',
          description: 'Website description here',
        }}
      />
      <div className={`${poppins.variable} font-sans`}>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
