import MyMarquee from '@/components/utils/marquee'
import HomePageHero from '@/components/hero/homePageHero'
import SocialsAndContactUs from '@/components/socialsAndContactUs'
import Projects from '@/components/projectList'

export default function index() {
  return (
    <>
      <HomePageHero />
      <Projects />
      <MyMarquee />

      <SocialsAndContactUs />
    </>
  )
}
