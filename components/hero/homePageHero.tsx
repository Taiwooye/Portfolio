import React from 'react'
import Button from '../utils/button'
import Navbar from '../utils/navbar'
import ArrowUp from '@/icons/arrowUp'
import { handleDownloadResume } from '../utils/resumeDownload'

export default function HomePageHero() {
  return (
    <section className='bg-[rgba(16, 14, 14, 0.20)] py-[30px]'>
      <Navbar />
      <div className='mx-auto max-w-[866px] flex flex-col items-center gp-[24px]  py-[50px]  '>
        <Button type='green_border' text='Available for work' />

        <div className='p-[10px]'>
          <h1 className=' text-center text-[22px] md:text-[48px] font-[600]'>
            Turning Ideas into Reality, One Line of Code at a Time
          </h1>
          <p className='text-center text-[16px] josephine  '>
            I’m{' '}
            <span className='text-[#D7610D] text-[12px] font-[700] text-[16px]'>
              Oduwaye Emeka
            </span>
            , a frontend developer with a passion for crafting digital
            experiences that leave a mark. Is there anything too hard for me to
            design? I don’t think so. I be guru for this industry, whether
            you’re doubting or you trust me, bring your work and let me show you
            how amazing I am.
          </p>
        </div>
        <div className='flex gap-[24px] items-center p-[24px]'>
          <Button
            type='white_border'
            text='My Resume'
            iconRight={<ArrowUp />}
            onClick={handleDownloadResume}
          />
        </div>
      </div>
    </section>
  )
}
