import Link from 'next/link'
import Button from './utils/button'
import { social } from './utils/social'
import { ReactNode } from 'react'
import ArrowUp from '@/icons/arrowUp'
import Copy from '@/icons/copy'
import { toast } from 'react-toastify'
import { handleDownloadResume } from './utils/resumeDownload'

type Social = {
  icon: () => ReactNode
  link: string
}

export default function SocialsAndContactUs() {
  const copyToClipboard = () => {
    navigator.clipboard.writeText('+2347065868215')
    toast.success('Link copied to clipboard!')
  }

  return (
    <section
      id='contact'
      className='max-w-[1440px] m-auto p-[10px] lg:p-[0px] mt-[20px] md:mt-[48px]'
    >
      {/* Heading */}
      <h2 className='text-center md:text-[40px] text-[22px] font-[600]'>
        Let’s Build Something Together
      </h2>
      <p className='text-[16px] font-[400] text-center'>
        If you have a vision, a challenge, or even just a spark of an idea,
        I&apos;d love to help bring it to life.
        <br />
        Let&apos;s create something remarkable.
      </p>

      {/* Buttons */}
      <main className='mt-[48px] flex flex-wrap justify-center gap-[24px]'>
        <Button
          type='white_border'
          text='My Resume'
          iconRight={<ArrowUp />}
          onClick={handleDownloadResume}
        />
        <Button
          type='white_border'
          text='+2347065868215'
          iconRight={<Copy />}
          onClick={copyToClipboard}
        />
      </main>

      {/* Social Links */}
      <main className='mt-[20px] md:mt-[48px] flex justify-center gap-[16px]'>
        {social.map((item: Social, index: number) => (
          <Link
            key={index}
            href={item.link}
            target='_blank'
            rel='noopener noreferrer'
          >
            <div
              className='w-[64px] h-[64px] bg-custom-gradient flex justify-center items-center rounded-[4px] 
              transition-transform transform hover:scale-110 '
            >
              {item.icon()}
            </div>
          </Link>
        ))}
      </main>

      <div>
        <p className='mt-[20px] josephine text-[16px] font-[500] text-center'>
          Last updated: 10th November, 2024.
        </p>
        <p className='mt-[20px] josephine text-[16px] font-[500] text-center'>
          © 2023 Oyedokun Taiwo. All Rights Reserved.
        </p>
      </div>
    </section>
  )
}
