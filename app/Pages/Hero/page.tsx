"use client"


import CountUp from "react-countup"
import { motion, Variants } from "framer-motion"

const stats = [
  { end: 73, duration: 2, suffix: "+", label: "Finished projects" },
  { end: 1685, duration: 2, suffix: "+", label: "Satisfied clients" },
  { end: 5, duration: 5, suffix: "K", label: "Dreams realized" },
  { end: 15, duration: 5, suffix: "+", label: "Yrs of experience" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

const maskVariants: Variants = {
  hidden: { y: "100%" },
  visible: {
    y: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const boxRevealVariants: Variants = {
  hidden: {
    clipPath: "inset(100% 0% 0% 0%)",
    opacity: 0,
  },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.8
    }
  }
};

const Hero = () => {
  return (
    <>
      <motion.div
        className="hero-header w-full min-h-screen flex flex-col pt-45 md:pt-45 lg:justify-center lg:pt-0 px-6 sm:px-12 md:px-24 overflow-hidden relative"
        id="home"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Cinematic Background Reveal */}
        <motion.div
          className="absolute inset-0 -z-10 bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: "url(/Images/Hero-bg.jpg)" }}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: {
              duration: 2.5,
              ease: [0.16, 1, 0.3, 1]
            }
          }}
        />
        <div className="hero-content w-full lg:w-1/2">
          <div className="overflow-hidden">
            <motion.h1
              variants={maskVariants}
              className="text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight"
            >
              Strong foundations, <br /> lasting results
            </motion.h1>
          </div>

          <motion.p
            variants={itemVariants}
            className="my-5 w-full lg:w-1/2 text-lg text-gray-100 [text-shadow:0_2px_8px_rgba(0,0,0,0.9),0_0_12px_rgba(0,0,0,0.7)] lg:[text-shadow:none]"
          >
            Our team crafts thoughtful, modern spaces that balance beauty, purpose, and sustainability for every client we serve.
          </motion.p>

          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="Rethink font-semibold px-8 py-4 text-xl bg-prim mt-4 text-white hover:bg-black rounded-full transition-colors duration-300 cursor-pointer shadow-lg"
          >
            Get Started
          </motion.button>
        </div>

        <motion.div
          variants={boxRevealVariants}
          className="relative md:absolute bottom-0 right-0 p-8 md:p-10 flex flex-col rounded-tl-3xl bg-black text-white shadow-2xl mt-auto md:mt-0 self-end -mr-[10%] md:mr-0 w-[calc(100%+8%)] md:w-auto"
        >
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-4xl md:text-5xl mb-5 font-semibold"
          >
            About our studio
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="w-full lg:w-[70%] text-text-light "
          >
            An architecture and interiors studio shaping unique, enduring spaces for clients to thrive.
          </motion.p>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-10"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 1.8
                }
              }
            }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col"
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl Rethink font-bold text-prim">
                  <CountUp
                    start={0}
                    end={stat.end}
                    duration={stat.duration}
                  />
                  {stat.suffix}
                </h2>

                <p className="text-text-light text-xs sm:text-sm md:text-base lg:text-lg whitespace-nowrap">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div >
    </>
  )
}

export default Hero
