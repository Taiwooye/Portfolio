import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';

const myList = [
  { title: 'Javascript', image: '/images/javascript.png' },
  { title: 'Next.js', image: '/images/nextj.webp' },
  { title: 'React', image: '/images/react.png' },
  { title: 'Tailwind', image: '/images/tailwind.png' },
  { title: 'TypeScript', image: '/images/typescript.jpeg' },
  { title: 'Boostrap', image: '/images/boostrap.png' },
];

export default function MyMarquee() {
  return (
    <Marquee play={true} speed={70} gradient={false} direction="left">
      <div className="flex gap-[30px]">
        {/* Iterate through the original list */}
        {myList.map((item, index) => (
  <div
  key={index}
  className="flex items-center bg-[#262626] gap-[16px] w-[328px] h-[150px] p-[20px]"
  style={{
    borderRadius: "10px",
    background: "url(<path-to-image>) lightgray 0% 0% / 100px 100px repeat, linear-gradient(180deg, rgba(255, 255, 255, 0.26) 0%, rgba(255, 255, 255, 0.00) 100%)",
    backdropFilter: "blur(25px)",
  }}
>
            <Image
              className="w-full object-cover justify-center items-center w-[100px] h-[80px]"
              width={600}
              height={400}
              src={item.image}
              alt={item.title}
              priority
            />
            <span className="text-[40px] font-[400] text-[#FFF]">{item.title}</span>
          </div>
        ))}

        {/* Add an extra item that mimics the first one to create a gap */}
        <div className="flex items-center gap-[10px] w-[10px] h-[150px] p-[0px]">
       
        </div>
      </div>
    </Marquee>
  );
}
