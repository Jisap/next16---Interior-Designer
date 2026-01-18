

"use client"

import Image from "next/image"
import { motion, Variants } from "framer-motion"
import about1 from "@/public/Images/About-1.jpg"
import about2 from "@/public/Images/About-2.jpg"
import about3 from "@/public/Images/About-3.jpg"

const fadeInScale: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
}

const textFadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const containerStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}


const About = () => {
  return (
    <>
      <div className="px-[8%] lg:px-[16%] py-20" id="about">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerStagger}
          className="flex flex-col justify-center items-center"
        >
          <div className="w-full lg:w-2/3 text-center">
            <motion.span
              variants={textFadeUp}
              className="text-lg Rethink font-semibold uppercase text-text-light block"
            >
              Designing space for living
            </motion.span>

            <motion.h1
              variants={textFadeUp}
              className="text-5xl md:text-7xl Rethink font-semibold mt-4"
            >
              We craft spaces with intention and care
            </motion.h1>
          </div>
        </motion.div>

        <div className="mt-20 about-wrap">
          <div className="about-content flex flex-col lg:flex-row gap-10 justify-between items-center w-full">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInScale}
              className="w-full lg:w-1/2"
            >
              <div className="w-full lg:w-[90%] overflow-hidden rounded-md group">
                <Image
                  src={about1}
                  alt="about"
                  className="w-full h-full rounded-md object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={textFadeUp}
              className="w-full lg:w-1/2 flex justify-end"
            >
              <div className="w-full lg:w-[90%]">
                <h1 className="text-5xl Rethink font-semibold">
                  Transforming spaces with creative vision
                </h1>

                <p className="text-text-light mt-5">
                  Form blends vision and detail tomake every space unique and thoughtful. Our team is driven by passion to create places where people can thrive, connectm and grow together.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="about-content flex flex-col-reverse lg:flex-row gap-10 justify-between items-center w-full mt-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={textFadeUp}
              className="w-full lg:w-1/2 flex"
            >
              <div className="w-full lg:w-[90%]">
                <h1 className="text-5xl Rethink font-semibold">
                  Elevating spaces with thoughtful design
                </h1>

                <p className="text-text-light mt-5">
                  At Form, we believe in building for people and the planet. Our work brings together sustainable ideas and timeless beauty, creating places that last for years.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInScale}
              className="w-full lg:w-1/2 flex justify-end"
            >
              <div className="w-full lg:w-[90%] overflow-hidden rounded-md group">
                <Image
                  src={about2}
                  alt="about"
                  className="w-full h-full rounded-md object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </motion.div>
          </div>

          <div className="about-content flex flex-col lg:flex-row gap-10 justify-between items-center w-full mt-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInScale}
              className="w-full lg:w-1/2"
            >
              <div className="w-full lg:w-[90%] overflow-hidden rounded-md group">
                <Image
                  src={about3}
                  alt="about"
                  className="w-full h-full rounded-md object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={textFadeUp}
              className="w-full lg:w-1/2 flex justify-end"
            >
              <div className="w-full lg:w-[90%]">
                <h1 className="text-5xl Rethink font-semibold">
                  Inventing new ways to shape the future
                </h1>

                <p className="text-text-light mt-5">
                  We value close teamwork and open creative minds. Our designers and architects work hand in hand with clients to achieve spaces that feel both fresh and lasting.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
