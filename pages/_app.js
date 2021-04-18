import '../styles/globals.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/700.css'

import { DefaultSeo } from 'next-seo'

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
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
