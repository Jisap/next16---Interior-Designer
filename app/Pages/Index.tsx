import React from 'react'
import Hero from './Hero/page'
import MarqueeSlider1 from './MarqueeSlider1/page'
import About from './About/page'
import Testimonial from './Testimonial/page'
import WorkBanner from './Work-banner/page'
import Expertise from './Our-Expertise/page'
import Faqs from './Faqs/page'
import Contact from './Contact/page'
import Gallery from './Gallery/page'

const Index = () => {
  return (
    <>
      <Hero />
      <MarqueeSlider1 />
      <About />
      <WorkBanner />
      <Expertise />
      <Testimonial />
      <Faqs />
      <Contact />
      <Gallery />
    </>
  )
}

export default Index