"use client"

import Image from "next/image"
import testbg from "@/public/Images/testimonials-bg.jpg"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import test1 from "@/public/Images/testimonials-1.jpg"
import test2 from "@/public/Images/testimonials-2.jpg"


import { motion, Variants } from "framer-motion"

const TestimonialData = [
  {
    id: "1",
    desc: "A wonderfull experience! They knew what they were doing and were incredibly knowledgeable thoroughout the process.",
    image: test1,
    name: "Olivia Peterson",
    role: "Co-founder"
  },
  {
    id: "2",
    desc: "I absolutely love my the new modern living room! The clean lines, a neutral tones, and minimalist interior create a such a calming & stylish atmosphere. Highly recommed their modern interior design servies!",
    image: test2,
    name: "Morgan Dufresne",
    role: "Company owner",
  }
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as any,
    },
  },
}

const imageVariants: Variants = {
  hidden: { scale: 1.1, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1] as any,
    },
  },
}

const Testimonial = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="testimonial px-[5%] sm:px-[8%] lg:px-[12%] xl:px-[16%] py-12 sm:py-16 lg:py-20 gap-8 lg:gap-10 flex flex-col-reverse lg:flex-row overflow-hidden"
      id="testimonial"
    >
      <motion.div
        variants={imageVariants}
        className="w-full lg:w-1/2 testimonial-image relative aspect-video"
      >
        <Image
          src={testbg}
          alt="testimonials"
          fill
          className="w-full h-full object-cover rounded-2xl"
        />
      </motion.div>

      <div className="w-full lg:w-1/2">
        <div>
          <div className="flex flex-col">
            <motion.div variants={itemVariants} className="w-full">
              <span className="text-sm sm:text-base lg:text-lg Rethink font-semibold text-gray-400 uppercase tracking-widest inline-block border-b-2 border-prim pb-1">
                Our clients say
              </span>
            </motion.div>

            <motion.div variants={itemVariants} className="w-full mt-3 sm:mt-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl Rethink font-semibold leading-tight">
                Here's What <span className="text-prim relative">
                  warm words our clients
                  <motion.svg
                    viewBox="0 0 300 10"
                    className="absolute -bottom-2 left-0 w-full h-2"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                  >
                    <path d="M 0 5 Q 75 0 150 5 T 300 5" fill="none" stroke="currentColor" strokeWidth="2" className="text-prim/30" />
                  </motion.svg>
                </span> Say
              </h1>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap items-start sm:items-center gap-4 sm:gap-5 lg:gap-6 mt-5 sm:mt-6 lg:mt-8"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl shrink-0 font-bold bg-linear-to-r from-white to-gray-500 bg-clip-text text-transparent">
              4.80
            </h1>

            <div className="flex flex-col items-start sm:items-center shrink-0">
              <div className="starts-icon flex items-center gap-1 bg-prim text-white px-3 py-1 rounded-full shadow-lg shadow-prim/20">
                {[...Array(5)].map((_, i) => (
                  <motion.i
                    key={i}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.8 + (i * 0.1), type: "spring" }}
                    className="bi bi-star-fill text-xs"
                  ></motion.i>
                ))}
              </div>

              <p className="text-text-light text-xs sm:text-sm md:text-base mt-1 font-medium">
                2,688 reviews
              </p>
            </div>

            <p className="w-full sm:w-auto sm:flex-1 lg:max-w-[50%] font-semibold Rethink text-sm sm:text-base lg:text-base leading-relaxed opacity-80 border-l-2 border-prim/20 pl-4">
              From concept to reality, the team turned my vision into a stunning, livable space. I couldn't be happier with this!
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-8 sm:mt-10 bg-white/5 p-6 sm:p-8 rounded-3xl backdrop-blur-sm border border-white/10"
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            autoplay={{
              delay: 4000
            }}
            modules={[Autoplay]}
            speed={1500}
          >
            {
              TestimonialData.map((item, index) => (
                <SwiperSlide key={index}>
                  <p className="text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl text-text-light font-semibold tracking-wide Rethink leading-relaxed italic">
                    "{item.desc}"
                  </p>

                  <div className="flex items-center gap-3 mt-6 sm:mt-8">
                    <div className="relative">
                      <Image
                        src={item.image}
                        alt="testimonials"
                        width={100}
                        height={100}
                        className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[75px] md:h-[75px] object-cover rounded-full shrink-0 border-2 border-prim/30"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-prim w-6 h-6 rounded-full flex items-center justify-center border-2 border-black">
                        <i className="bi bi-quote text-white text-[10px]"></i>
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        {item.name}
                      </h3>

                      <h3 className="text-sm sm:text-base font-semibold text-prim/80">
                        {item.role}
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Testimonial