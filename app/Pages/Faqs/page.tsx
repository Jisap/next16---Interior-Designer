"use client"

import { useState } from "react"


const faqData = [
  {
    question: "How do I start a project with Form ?",
    answer: "To begin, please contact us by email or our site form. We'll set up an intro call to learn your needs and vision."
  },
  {
    question: "Can I meet the team online",
    answer: "Yes, our team is happy to meet you vistually, making it simple to connect and share ideas from anywhere."
  },
  {
    question: "What types of spaces do you design?",
    answer: "We design homes, offices, and hotels, always custom-made to fit your golas, needs, and unique brand values."
  },
  {
    question: "Does Form work with startups too ?",
    answer: "We enjoy new firms thrive! Our team crafts designs to launch your vision and support your growth."
  }
]


const Faqs = () => {
  return (
    <>
      <div className='px-[8%] lg:px-[16%] py-20 pb-30' id="faqs">
        <div className='text-center'>
          <span className='text-text-light text-lg uppercase Rethink'>
            Looking for answers?
          </span>

          <h2 className='text-4xl lg:text-6xl text-white Rethink font-bold mt-5'>
            Frequently Asked Questions
          </h2>

          <p className='mt-8 DmSans text-gray-300'>
            Form is here to shape spaces you love, guiding every project with care, skill, and open client support for lasting design excellence.
          </p>
        </div>


      </div>
    </>
  )
}

export default Faqs