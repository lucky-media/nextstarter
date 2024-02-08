import { mergeMetaData } from 'src/utils/seo'

export default async function Page() {
  return <h1>This is the about page</h1>
}

export const metadata = mergeMetaData({
  title: 'About us - Next Starter',
  openGraph: {
    title: 'About us - Next Starter',
  },
})
