import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'

const myList = [
  { title: 'Javascript', image: '/images/javascript.png' },
  { title: 'Next.js', image: '/images/nextj.webp' },
  { title: 'React', image: '/images/react.png' },
  { title: 'Tailwind', image: '/images/tailwind.svg' },
  { title: 'TypeScript', image: '/images/typescript.jpg' },
  { title: 'Boostrap', image: '/images/bootstrap.png' },
]

export default function MyMarquee() {
  return (
    <>
      <main className='flex justify-center w-full p-[10px] my-[40px]'>
        <div>
          <h3 className='text-[22px] md:text-[40px] text-center text-white font-[600]'>
            Tools and Technologies I&apos;ve Mastered
          </h3>

          <p className='mt-[24px] josephine text-center'>
            Great work starts with the right tools. Here are some of the
            technologies I&apos;ve mastered to bring each project to life:
          </p>
        </div>
      </main>

      <Marquee play={true} speed={70} gradient={false} direction='left'>
        <div className='flex gap-[30px]'>
          {/* Iterate through the original list */}
          {myList.map((item, index) => (
            <div
              key={index}
              className='flex items-center  gap-[40px] w-[328px]  p-[20px]  rounded-[10px] bg-custom-gradient'
            >
              <div className=' w-[150px] h-[150px]  '>
                <Image
                  className='w-full h-full object-contain'
                  width={600}
                  height={400}
                  src={item.image}
                  alt={item.title}
                  priority
                />
              </div>
              <span className='text-[40px] font-[400] text-[#FFF]'>
                {item.title}
              </span>
            </div>
          ))}

          {/* Add an extra item that mimics the first one to create a gap */}
          <div className='flex items-center gap-[10px] w-[10px] h-[150px] p-[0px]'></div>
        </div>
      </Marquee>
    </>
  )
}
