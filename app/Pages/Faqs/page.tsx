"use client"

import { useState } from "react"
import { motion, AnimatePresence, Easing } from "framer-motion"

const faqData = [
  {
    question: "How do I start a project with Form?",
    answer: "To begin, please contact us by email or our site form. We'll set up an intro call to learn your needs and vision."
  },
  {
    question: "Can I meet the team online?",
    answer: "Yes, our team is happy to meet you virtually, making it simple to connect and share ideas from anywhere."
  },
  {
    question: "What types of spaces do you design?",
    answer: "We design homes, offices, and hotels, always custom-made to fit your goals, needs, and unique brand values."
  },
  {
    question: "Does Form work with startups too?",
    answer: "We enjoy new firms thrive! Our team crafts designs to launch your vision and support your growth."
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.33, 1, 0.68, 1] as Easing
    }
  }
}

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className='px-[8%] lg:px-[16%] py-20 pb-30 relative overflow-hidden' id="faqs">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 -z-10 bg-prim/5 blur-[120px] w-96 h-96 rounded-full" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className='text-center mb-16'
      >
        <motion.span
          variants={itemVariants}
          className='text-text-light text-lg uppercase Rethink tracking-widest'
        >
          Looking for answers?
        </motion.span>

        <motion.h2
          variants={itemVariants}
          className='text-4xl lg:text-7xl text-white Rethink font-bold mt-5 leading-tight'
        >
          Frequently Asked <br /> Questions
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className='mt-8 DmSans text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed'
        >
          Form is here to shape spaces you love, guiding every project with care, skill, and open client support for lasting design excellence.
        </motion.p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="space-y-4 max-w-4xl mx-auto w-full"
      >
        {faqData.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`group overflow-hidden border-b border-white/10 transition-colors duration-500 ${isOpen ? 'border-white/30' : 'hover:border-white/20'}`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-start py-8 text-left focus:outline-none cursor-pointer group-hover:px-4 transition-all duration-300 ease-out"
              >
                <span className={`text-xl lg:text-2xl font-semibold Rethink transition-all duration-300 ${isOpen ? 'text-prim' : 'text-white'}`}>
                  {item.question}
                </span>

                <div className="relative mt-1">
                  <motion.div
                    animate={{
                      rotate: isOpen ? 180 : 0,
                      backgroundColor: isOpen ? '#ffffff' : 'rgba(255,255,255,0.05)'
                    }}
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-colors border border-white/10"
                  >
                    <motion.svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      className={isOpen ? 'text-black' : 'text-white'}
                    >
                      <motion.path
                        animate={{ d: isOpen ? "M4 9H14" : "M4 9H14M9 4V14" }}
                        transition={{ duration: 0.3 }}
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </motion.svg>
                  </motion.div>
                </div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
                  >
                    <div className="pb-8 pr-12 group-hover:px-4 transition-all duration-300">
                      <motion.p
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg font-medium DmSans text-gray-400 leading-relaxed max-w-[85%]"
                      >
                        {item.answer}
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  )
}

export default Faqs
