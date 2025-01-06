import Navbar from '@/components/utils/navbar'
import MyMarquee from '@/components/utils/marquee'
import HomePageHero from '@/components/hero/homePageHero'

export default function index() {
  return (
    <div
    className='w-full bg-green-500 h-[1280px]'
    style={{
      background: 'rgba(16, 14, 14, 0.20)',
      backdropFilter: 'blur(100px)',
    }}
  >

<Navbar />
<HomePageHero/>
<div className='py-[100px]'>
<MyMarquee/>
</div>
  </div>
  
  )
}
