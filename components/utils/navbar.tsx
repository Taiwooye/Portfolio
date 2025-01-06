import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Button from './button'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className='flex mx-auto max-w-[1440px]    px-[48px] py-[12px] justify-between items-center bg-custom-gradient rounded-[66px] sticky top-0 z-[3000]'>
      {/* Left side with logo and user name */}
      <Link href={'/'} className='flex items-center gap-[10px] md:gap-[16px] '>
        <div className='w-[40px] h-[40px] overflow-clip '>
          <Image
            className='w-full object-cover'
            width={100}
            height={100}
            src={'/images/individual.png'}
            alt={'gradient'}
            priority
          />
        </div>
        <span className='text-[#FFF] text-[16px] md:text-[20px] font-[400]'>
          NAME
        </span>
      </Link>

      {/* Right side menu and button */}
      <div className='flex items-center gap-[32px] josephine hidden text-[#FFF] text-[16px] md:flex'>
        <Link href='/about-me'>About Me</Link>
        <Link href='projects'>Projects</Link>

        <Button type='orange_filled' text='Contact Me' />
      </div>

      {/* Hamburger icon for small screens */}
      <div className='md:hidden flex items-center'>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className='text-[#FFF]'
        >
          <svg
            className='w-8 h-8'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className='flex flex-col items-center gap-[20px] mt-4 md:hidden w-full bg-[#000] p-[16px] rounded-[20px]'>
          <Link href='/about-me' className='text-[#FFF] font-[400] text-[16px]'>
            About Me
          </Link>
          <Link href='/projects' className='text-[#FFF] text-[14px]'>
            Projects
          </Link>
          <Button type='orange_filled' text='Contact Me' />
        </div>
      )}
    </nav>
  )
}
