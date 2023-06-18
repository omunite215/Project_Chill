import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  return (
    <section>
      <section className='flex justify-center items-center gap-4 py-6 md:px-0 px-3'>
        <section>
          <Image src="/Decoration/PinkEllipse.svg" width={80} height={116} alt='PinkEllipse' className='md:block absolute md:w-auto w-[50px] md:h-auto h-[50px]' />
        </section>
        <section>
          <Image src="/Decoration/star.svg" width={24} height={24} alt='star' />
          <section className='flex justify-between items-center'>
            <section className='w-full flex flex-col justify-between items-center gap-3'>
            <Image src="/Decoration/lines.svg" width={24} height={24} alt='lines' className=' h-auto w-auto object-contain self-end mt-5 relative'/>
            <h1 className='text-PrimaryBlack font-RocGrotesk font-bold text-[64px] text-center'>We make products that <span className=' text-PrimaryPink flex flex-col justify-center items-center'>matter <Image src="/Decoration/Underline.svg" height={24} width={24} alt='' className=' h-auto w-auto object-contain'/></span></h1>
            <section className='flex md:self-end self-center justify-between md:absolute md:order-3 order-last md:mt-72 mt-5 gap-4 md:ml-36 ml-0 w-auto h-auto'>
            <Image src="/Decoration/CurveLine.svg" width={20} height={20} alt='FancyArrow' className=' h-fit w-fit object-contain align-top sm:block hidden' />
            <Link href="/works" className='self-end'>
          <Image src="/Decoration/FancyArrow.svg" height={24} width={24} alt='' className='h-fit w-fit object-contain self-end align-baseline'/>
            </Link>
            </section>
            <p className='font-normal font-ObjectSans text-PrimaryBlack text-[20px] leading-[28px] text-center md:w-[55%] w-full'>We are more than an agency. We want to be a team within your team, sharing knowledge, and helping one</p>
            </section>
          </section>
        </section>
      </section>
    </section>
  )
}

export default Hero