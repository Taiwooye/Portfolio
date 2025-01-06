import MyMarquee from '@/components/utils/marquee'
import HomePageHero from '@/components/hero/homePageHero'
import SocialsAndContactUs from '@/components/socialsAndContactUs'

export default function index() {
  return (
    <>
      <HomePageHero />

      <MyMarquee />

      <SocialsAndContactUs />
    </>
  )
}
