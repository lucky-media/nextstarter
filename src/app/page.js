import HeaderSection from 'src/components/sections/HeaderSection'
import { mergeMetaData } from 'src/utils/seo'

export default async function Page() {
  return <HeaderSection />
}

export const metadata = mergeMetaData({
  title: 'Home - Next Starter',
  openGraph: {
    title: 'Home - Next Starter',
  },
})
