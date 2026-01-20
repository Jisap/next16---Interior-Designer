"use client"

import Image from "next/image"
import testbg from "@/public/Images/testimonials-bg.jpg"



const Testimonial = () => {
  return (
    <>
      <div className="testimonial px-[8%] lg:px-[16%] py-20 gap-10 flex flex-col-reverse lg:flex-row" id="testimonial">
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
                <span className="text-lg Rethink font-semibold text-gray-400 uppercase">
                  Our clients say
                </span>
              </div>

              <div className="w-full mt-4">
                <h1 className="text-5xl md:text-6xl Rethink font-semibold">
                  Here's What <span className="text-prim"> warm words our clients </span> Say
                </h1>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-5 mt-5">
              <h1 className="text-7xl">
                4.80
              </h1>

              <div className="flex flex-col items-center">
                <div className="starts-icon flex items-center gap-1 bg-prim text-white px-3 py-1 rounded-full">
                  <i className="bi bi-star-fill text-xs"></i>
                  <i className="bi bi-star-fill text-xs"></i>
                  <i className="bi bi-star-fill text-xs"></i>
                  <i className="bi bi-star-fill text-xs"></i>
                  <i className="bi bi-star-fill text-xs"></i>
                </div>

                <p className="text-text-light text-xs sm:text-base">
                  2,688 reviews
                </p>
              </div>

              <p className="w-full lg:w-[50%] font-semibold Rethink">
                From concept to reality, the team turned my vision into a stunning, livable space. I couldn't be happier with this!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonial