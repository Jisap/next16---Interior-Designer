"use client"

import { motion, Variants, Easing } from "framer-motion"

const containerVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as Easing,
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as Easing
    }
  }
}

const Contact = () => {
  return (
    <div className="relative overflow-hidden" id="contact">
      {/* Background with Zoom Effect */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 contact -z-10"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 -z-10" />

      <div className="px-[8%] lg:px-[16%] py-32 flex justify-center md:justify-end">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="bg-white/95 backdrop-blur-xl w-full max-w-lg p-12 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
        >
          <motion.h2
            variants={itemVariants}
            className="text-black text-5xl lg:text-6xl font-bold Rethink leading-tight mb-2"
          >
            Have <span className="text-prim">questions?</span> <br /> Get in touch
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-600 DmSans mb-8"
          >
            Fill out the form below and our team will get back to you within 24 hours.
          </motion.p>

          <div className="space-y-6">
            <motion.div variants={itemVariants}>
              <input
                type="text"
                placeholder="Name"
                className="w-full px-6 py-4 bg-gray-50 border border-gray-200 text-black Rethink font-medium focus:border-prim focus:bg-white transition-all duration-300 outline-none rounded-xl"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-6 py-4 bg-gray-50 border border-gray-200 text-black Rethink font-medium focus:border-prim focus:bg-white transition-all duration-300 outline-none rounded-xl"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-6 py-4 bg-gray-50 border border-gray-200 text-black Rethink font-medium focus:border-prim focus:bg-white transition-all duration-300 outline-none rounded-xl"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <textarea
                rows={4}
                placeholder="Message"
                className="w-full px-6 py-4 bg-gray-50 border border-gray-200 text-black Rethink font-medium focus:border-prim focus:bg-white transition-all duration-300 outline-none rounded-xl resize-none"
              />
            </motion.div>

            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full text-white Rethink text-xl py-4 rounded-xl font-bold bg-prim shadow-lg shadow-prim/20 hover:shadow-prim/40 transition-all duration-300 cursor-pointer overflow-hidden relative group"
            >
              <span className="relative z-10">Send Message</span>
              <motion.div
                className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"
              />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact