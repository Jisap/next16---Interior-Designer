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



const Testimonial = () => {
  return (
    <>
      <div className="testimonial px-[5%] sm:px-[8%] lg:px-[12%] xl:px-[16%] py-12 sm:py-16 lg:py-20 gap-8 lg:gap-10 flex flex-col-reverse lg:flex-row" id="testimonial">
        <div className="w-full lg:w-1/2 testimonial-image relative aspect-video">
          <Image
            src={testbg}
            alt="testimonials"
            fill
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        <div className="w-full lg:w-1/2">
          <div>
            <div className="flex flex-col">
              <div className="w-full">
                <span className="text-sm sm:text-base lg:text-lg Rethink font-semibold text-gray-400 uppercase">
                  Our clients say
                </span>
              </div>

              <div className="w-full mt-3 sm:mt-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl Rethink font-semibold leading-tight">
                  Here's What <span className="text-prim">warm words our clients </span>Say
                </h1>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap items-start sm:items-center gap-4 sm:gap-5 lg:gap-6 mt-5 sm:mt-6 lg:mt-8">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl shrink-0">
                4.80
              </h1>

              <div className="flex flex-col items-start sm:items-center shrink-0">
                <div className="starts-icon flex items-center gap-1 bg-prim text-white px-3 py-1 rounded-full">
                  <i className="bi bi-star-fill text-xs"></i>
                  <i className="bi bi-star-fill text-xs"></i>
                  <i className="bi bi-star-fill text-xs"></i>
                  <i className="bi bi-star-fill text-xs"></i>
                  <i className="bi bi-star-fill text-xs"></i>
                </div>

                <p className="text-text-light text-xs sm:text-sm md:text-base mt-1">
                  2,688 reviews
                </p>
              </div>

              <p className="w-full sm:w-auto sm:flex-1 lg:max-w-[50%] font-semibold Rethink text-sm sm:text-base lg:text-base">
                From concept to reality, the team turned my vision into a stunning, livable space. I couldn't be happier with this!
              </p>
            </div>
          </div>

          <div className="mt-8 sm:mt-10">
            <Swiper
              slidesPerView={1}
              spaceBetween={0}
              loop={true}
              autoplay={{
                delay: 2000
              }}
              modules={[Autoplay]}
              speed={1500}
            >
              {
                TestimonialData.map((item, index) => (
                  <SwiperSlide key={index}>
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl text-text-light font-semibold tracking-wide Rethink leading-relaxed">
                      {item.desc}
                    </p>

                    <div className="flex items-center gap-3 mt-6 sm:mt-8">
                      <Image
                        src={item.image}
                        alt="testimonials"
                        width={50}
                        height={50}
                        className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[75px] md:h-[75px] object-cover rounded-full shrink-0"
                      />

                      <div className="flex flex-col">
                        <h3 className="text-xl sm:text-2xl font-semibold">
                          {item.name}
                        </h3>

                        <h3 className="text-sm sm:text-base font-semibold text-gray-400">
                          {item.role}
                        </h3>
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonial