import React from 'react'

export default function HomePageHero() {
  return (
    <div className='mx-auto max-w-[866px] flex flex-col items-center gp-[24px] py-[100px]'>
<button className='justify-center items-center gap-[10px] p-[16px] rounded-[20px] h-[52px] w-[206px]
 flex border-[1px] border-[#17D70D] text-[#17D70D] text-[16px]'
  style={{ fontFamily: '"Josefin Sans", sans-serif' }}>Available for work</button>
<div className='p-[10px]'>
<h1 className='text-[#FFF] text-center text-[20px] md:text-[48px] font-[400] md:font-[600]'
style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}>Turning Ideas into Reality, One Line of Code at a Time</h1>
<p className='text-center text-[12px] font-[400] md:font-[500] md:text-[16px]' style={{ fontFamily: '"Josefin Sans", sans-serif' }}>
I’m <span className='text-[#D7610D] text-[12px] font-[400] md:font-[700] md:text-[16px]'
 
>OYEDOKUN TAIWO</span>, a frontend developer with a passion for crafting digital
 experiences that leave a mark. Is there anything too hard for me to design? I don’t think so. I be guru for this industry,
 whether you’re doubting or you trust me, bring your work and let me show you how amazing I am. 
</p>
</div>
<div className='flex gap-[24px] items-center p-[24px]'>
<button className='justify-center items-center gap-[10px] flex bg-[#D7610D] rounded-[20px] w-[169px] p-[8px] border-[#FFF] text-[#FFF]'>Contact Me</button>
<button className='justify-center items-center gap-[10px] flex rounded-[20px] w-[169px] border p-[8px] text-[#FFF]'>My Resume</button>
</div>
    </div>
  )
}
