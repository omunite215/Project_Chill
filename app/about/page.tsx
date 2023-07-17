import Hero from '@/Common_Components/Hero'
import Carousel from './AboutComponents/Carousel'
import React from 'react'
import { Address } from '@/Common_Components'
import Content from './AboutComponents/Content'

const page = () => {
  return (
    <section className=' flex flex-col justify-start items-center gap-24'>
      <Hero title='About Us' heading='Learn more AboutUs' image='/Decoration/FancyArrowRed.svg' underLine='/Decoration/UnderlineRed.svg' lastWordColor='#EB0028'/>
      <Carousel/>
      <Content/>
      <Address/>

    </section>
  )
}

export default page