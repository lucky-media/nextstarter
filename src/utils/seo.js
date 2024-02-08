export const defaultData = {
  metadataBase: new URL('https://next-starter.luckymedia.dev/'),
  title: 'Next Starter',
  description: 'NextJS boilerplate with TailwindCSS and some opinionated defaults',
  twitter: {
    card: 'summary_large_image',
    creator: '@LuckyMediaDev',
  },
  alternates: {
    canonical: 'https://next-starter.luckymedia.dev/',
  },
  openGraph: {
    title: 'Next Starter',
    type: 'website',
    siteName: 'Next Starter',
    locale: 'en_EN',
    description: 'NextJS boilerplate with TailwindCSS and some opinionated defaults',
    images: [
      {
        url: '/images/meta.jpg',
        alt: 'OG Image',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export const mergeMetaData = (meta) => {
  if (!meta) return defaultData

  return mergeDeep(defaultData, meta)
}

const isObject = (item) => item && typeof item === 'object' && !Array.isArray(item)

const mergeDeep = (target, ...sources) => {
  if (!sources.length) return target
  const source = sources.shift()

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} })
        mergeDeep(target[key], source[key])
      } else {
        Object.assign(target, { [key]: source[key] })
      }
    }
  }

  return mergeDeep(target, ...sources)
}
