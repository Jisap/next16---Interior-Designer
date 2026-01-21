"use client"

import { useRef } from "react"
import Image, { StaticImageData } from "next/image"
import {
  motion,
  useScroll,
  useTransform,
  useVelocity,
  useSpring,
  useMotionValue,
  useAnimationFrame
} from "framer-motion"
import expertise1 from "@/public/Images/expertise-1.jpg"
import expertise2 from "@/public/Images/expertise-2.jpg"
import expertise3 from "@/public/Images/expertise-3.jpg"

const expertiseData = [
  {
    id: 1,
    title: "Modern facade",
    desc: "Sleek lines meet reflective glass",
    image: expertise1
  },
  {
    id: 2,
    title: "Structural craft",
    desc: "Building frameworks with precision",
    image: expertise2
  },
  {
    id: 3,
    title: "Project lead",
    desc: "Guiding vision through expertise",
    image: expertise3
  }
]

const TiltCard = ({ item, index }: { item: typeof expertiseData[0], index: number }) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        type: "spring",
        stiffness: 50
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative border border-gray-200/10 rounded-xl text-center p-8 bg-white/5 backdrop-blur-sm overflow-hidden cursor-pointer"
    >
      <div style={{ transform: "translateZ(50px)" }} className="relative z-10">
        <h3 className="text-3xl Rethink font-semibold text-white mb-2">
          {item.title}
        </h3>
        <p className="text-gray-400 DmSans mb-8">
          {item.desc}
        </p>
      </div>

      <div className="overflow-hidden rounded-lg mb-8 relative" style={{ transform: "translateZ(75px)" }}>
        <motion.div
          initial={{ scale: 1.2, filter: "grayscale(100%)" }}
          whileInView={{ scale: 1, filter: "grayscale(0%)" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image
            src={item.image}
            alt={item.title}
            className="mx-auto rounded-lg transition-transform duration-700 ease-out group-hover:scale-110"
          />
        </motion.div>

        {/* Overlay effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <motion.button
        style={{ transform: "translateZ(30px)" }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="Rethink font-medium text-lg cursor-pointer flex justify-center items-center w-full gap-3 border py-4 border-white/10 text-white hover:bg-white hover:text-black transition-all duration-500 ease-out rounded-lg relative overflow-hidden"
      >
        <span className="relative z-10 flex items-center gap-2">
          Learn More <i className="bi bi-arrow-right"></i>
        </span>
      </motion.button>
    </motion.div>
  )
}

const Expertise = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Velocity-based skew effect
  const scrollVelocity = useVelocity(scrollYProgress)
  const skewVelocity = useSpring(scrollVelocity, {
    stiffness: 100,
    damping: 30
  })
  const skew = useTransform(skewVelocity, [-1, 1], ["-5deg", "5deg"])

  const title = "Designing and shaping unique spaces"
  const titleWords = title.split(" ")

  return (
    <section
      ref={containerRef}
      className='px-[8%] lg:px-[16%] py-32 relative overflow-hidden'
      id="Expertise"
    >
      {/* Background decoration elements */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none" />

      <div className='text-center mb-20 relative z-10'>
        <motion.span
          initial={{ opacity: 0, letterSpacing: "0.5em" }}
          whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className='text-gray-400 text-sm uppercase Rethink tracking-[0.2em] block mb-4'
        >
          Our distinctive expertise
        </motion.span>

        <h2 className='text-5xl lg:text-8xl text-white Rethink font-bold leading-tight max-w-5xl mx-auto'>
          {titleWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.215, 0.61, 0.355, 1]
              }}
              className="inline-block mr-[0.3em] last:mr-0"
            >
              {word}
            </motion.span>
          ))}
        </h2>
      </div>

      <motion.div
        style={{ skewY: skew }}
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10'
      >
        {expertiseData.map((item, index) => (
          <TiltCard key={item.id} item={item} index={index} />
        ))}
      </motion.div>

      {/* Subtle floating background text */}
      <motion.div
        style={{ opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.03, 0]) }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-bold text-white whitespace-nowrap pointer-events-none select-none Rethink"
      >
        EXPERTISE
      </motion.div>
    </section>
  )
}

export default Expertise
