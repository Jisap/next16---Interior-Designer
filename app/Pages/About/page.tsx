

import Image from "next/image"
import about1 from "@/public/Images/About-1.jpg"
import about2 from "@/public/Images/About-2.jpg"
import about3 from "@/public/Images/About-3.jpg"




const About = () => {
  return (
    <>
      <div className="px-[8%] lg:px-[16%] py-20" id="about">
        <div className="flex flex-col justify-center items-center">
          <div className="w-full lg:w-2/3 text-center">
            <span className="text-lg Rethink font-semibold uppercase text-text-light">
              Designing space for living
            </span>

            <h1 className="text-5xl md:text-7xl Rethink font-semibold">
              We craft spaces with intention and care
            </h1>
          </div>
        </div>

        <div className="mt-20 about-wrap">
          <div className="about-content flex flex-col lg:flex-row gap-10 justify-between items-center w-full">
            <div className="w-full lg:w-1/2">
              <div className="w-full lg:w-[90%]">
                <Image
                  src={about1}
                  alt="about"
                  className="w-full h-full rounded-md object-cover"
                />
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex justify-end">
              <div className="w-full lg:w-[90%]">
                <h1 className="text-5xl Rethink font-semibold">
                  Transforming spaces with creative vision
                </h1>

                <p className="text-text-light mt-5">
                  Form blends vision and detail tomake every space unique and thoughtful. Our team is driven by passion to create places where people can thrive, connectm and grow together.
                </p>
              </div>
            </div>
          </div>

          <div className="about-content flex flex-col lg:flex-row gap-10 justify-between items-center w-full mt-20">
            <div className="w-full lg:w-1/2 flex">
              <div className="w-full lg:w-[90%]">
                <h1 className="text-5xl Rethink font-semibold">
                  Elevating spaces with thoughtful design
                </h1>

                <p className="text-text-light mt-5">
                  At Form, we believe in building for people and the planet. Our work brings together sustainable ideas and timeless beauty, creating places that last for years.
                </p>
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex justify-end">
              <div className="w-full lg:w-[90%]">
                <Image
                  src={about2}
                  alt="about"
                  className="w-full h-full rounded-md object-cover"
                />
              </div>
            </div>
          </div>

          <div className="about-content flex flex-col lg:flex-row gap-10 justify-between items-center w-full mt-20">
            <div className="w-full lg:w-1/2">
              <div className="w-full lg:w-[90%]">
                <Image
                  src={about3}
                  alt="about"
                  className="w-full h-full rounded-md object-cover"
                />
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex justify-end">
              <div className="w-full lg:w-[90%]">
                <h1 className="text-5xl Rethink font-semibold">
                  Inventing new ways to shape the future
                </h1>

                <p className="text-text-light mt-5">
                  We value close teamwork and open creative minds. Our designers and architects work hand in hand with clients to achieve spaces that feel both fresh and lasting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About