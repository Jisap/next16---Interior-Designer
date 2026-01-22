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

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null)
    } else {
      setOpenIndex(index)
    }
  }

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

        <div className="space-y-6 pt-15 w-full">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`
                overflow-hidden border-b border-gray-500 transition-all duration-300 
                ${openIndex === index ? "" : ""}
              `}>
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center py-4 text-left focus:outline-none cursor-pointer"
              >
                <span className="text-2xl font-bold Rethink text-white">
                  {item.question}
                </span>

                {openIndex === index ? (
                  <i className="bi bi-dash bg-prim rounded-full px-2 py-1 text-black text-3xl transition-all duration-300 ease-in-out"></i>
                ) : (
                  <i className="bi bi-plus bg-prim rounded-full px-2 py-1 text-black text-3xl transition-all duration-300 ease-in-out"></i>
                )}
              </button>

              <div
                className={`
                  transition-all duration-500 ease-in-out overflow-hidden 
                  ${openIndex === index ? "max-h-75 opacity-100 py-3" : "max-h-0 opacity-0 py-0"}
                `}
              >
                <p className="text-lg font-medium w-[70%] DmSans text-gray-300">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>


      </div>
    </>
  )
}

export default Faqs