import React from 'react'
import Hero from './Hero/page'
import MarqueeSlider1 from './MarqueeSlider1/page'
import About from './About/page'
import Testimonial from './Testimonial/page'
import { WorkBanner } from './Work-banner/page'

const Index = () => {
  return (
    <>
      <Hero />
      <MarqueeSlider1 />
      <About />
      <WorkBanner />
      <Testimonial />
    </>
  )
}

export default Index