"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import partner1 from "@/public/Images/partner-1.webp"
import partner2 from "@/public/Images/partner-2.webp"
import partner3 from "@/public/Images/partner-3.webp"
import partner4 from "@/public/Images/partner-4.webp"
import partner5 from "@/public/Images/partner-5.webp"
import partner6 from "@/public/Images/partner-6.webp"

const partners = [
  { src: partner1, alt: "partner 1" },
  { src: partner2, alt: "partner 2" },
  { src: partner3, alt: "partner 3" },
  { src: partner4, alt: "partner 4" },
  { src: partner5, alt: "partner 5" },
  { src: partner6, alt: "partner 6" },
]

const WorkBanner = () => {
  const title = "Transform your vision with Form's expertise"
  const words = title.split(" ")

  // Variants for the container of words
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  }

  // Variants for each word
  const childVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      rotateX: -45
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      }
    },
  }

  // Variants for the partner grid items
  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 15
      }
    }
  }

  return (
    <>
      <div className="px-[8%] lg:px-[16%] py-20 work-banner overflow-hidden">
        <motion.div
          className="work-banner-content flex flex-col h-full lg:flex-row justify-center items-center gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 className="text-white Rethink text-5xl lg:text-8xl font-bold flex flex-wrap justify-center text-center">
            {words.map((word, idx) => (
              <motion.span
                key={idx}
                variants={childVariants}
                className="inline-block mr-[0.3em] last:mr-0"
                style={{ perspective: "1000px" }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>
        </motion.div>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        transition={{ staggerChildren: 0.1 }}
      >
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              transition: { duration: 0.2 }
            }}
            className="flex items-center justify-center p-10 border-gray-500/10 border-b border-r cursor-pointer group last:border-r-0 md:nth-[2n]:border-r-0 lg:nth-[2n]:border-r lg:nth-[6n]:border-r-0 transition-colors duration-300"
          >
            <motion.div
              whileHover={{
                scale: 1.1,
                filter: "brightness(1.5)",
                rotate: [0, -5, 5, 0]
              }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                className="opacity-40 group-hover:opacity-100 transition-all duration-300 grayscale group-hover:grayscale-0 group-hover:invert-0"
              />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </>
  )
}

export default WorkBanner
