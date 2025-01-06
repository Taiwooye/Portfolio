import aboutme from '@/json/aboutme.json'
import skills from '@/json/skills.json'

type Experience = {
  role: string
  company: string
  description: string
  duration: string
}

export default function ExperienceAnSkill() {
  return (
    <section className='max-w-[1440px] m-auto p-[10px] lg:p-[0px]'>
      <h3 className='text-[22px] md:text-[40px] text-white font-[600]'>
        Experience
      </h3>
      {/* About Me */}
      <main className='mt-[24px]'>
        {aboutme.map((experience: Experience, index: number) => (
          <article
            key={index}
            className='relative flex justify-between mt-[24px] gap-[10px] py-[24px] group'
          >
            {/* Content */}
            <div className='w-[70%]'>
              <h4 className='text-[20px] md:text-[24px] font-[600]'>
                {experience.role} at {experience.company}
              </h4>
              <p className='text-[16px] font-[400] mt-[16px] josephine'>
                {experience.description}
              </p>
            </div>
            {/* Duration */}
            <div>
              <p className='text-[20px] md:text-[24px] font-[600]'>
                {experience.duration}
              </p>
            </div>
            {/* Border Animation */}
            <div className='absolute bottom-0 left-0 h-[0.5px] w-0 bg-white transition-all duration-300 group-hover:w-full'></div>
          </article>
        ))}
      </main>

      <main className='mt-[20px] md:mt-[48px]'>
        <h3 className='text-[22px] md:text-[40px] text-white font-[600]'>
          Skills
        </h3>
        <p>
          In my toolkit, every skill is a key to unlocking potential. Here are
          the core skills I use to craft efficient, scalable solutions that
          drive impact:
        </p>

        <article className=' flex gap-[24px] items-center mt-[24px] gap-[10px] py-[24px]  flex-wrap'>
          {skills.map((skill: string) => (
            <div className='bg-custom-gradient rounded-[20px]  py-[16px] px-[32px] flex justify-center items-center w-[344px]'>
              {skill}
            </div>
          ))}
        </article>
      </main>
    </section>
  )
}
