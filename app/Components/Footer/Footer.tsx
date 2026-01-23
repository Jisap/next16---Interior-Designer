"use client"

import Link from "next/link"
import { motion, Variants } from "framer-motion"

const Footer = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: "smooth" });
    window.history.pushState(null, "", href);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
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
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  const socialIconVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  }

  return (
    <footer className="bg-body border-t border-white/5">
      <motion.div
        className="px-[8%] lg:px-[16%] py-20 pb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="flex flex-col lg:flex-row justify-between gap-16">
          <motion.div variants={itemVariants} className="w-full lg:w-1/2">
            <Link href="/" className={`text-4xl lg:text-5xl font-bold Audiowide text-white`}>
              Liv<span className="text-prim-dark">ora</span>
            </Link>

            <p className="text-text-light DmSans my-6 text-lg leading-relaxed max-w-md">
              Form is an architecture and design studio crafting inspired spaces. We create sustainable, bespoke environments that reflect client values and vision.
            </p>

            <div className="flex gap-4">
              {["facebook", "behance", "instagram", "dribbble"].map((social) => (
                <motion.div
                  key={social}
                  variants={socialIconVariants}
                  whileHover={{
                    y: -5,
                    backgroundColor: "rgba(255,255,255,0.1)",
                    borderColor: "var(--prim-dark)"
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center justify-center border border-gray-500 rounded-full w-10 h-10 text-lg transition-colors duration-300 text-white cursor-pointer"
                >
                  <i className={`bi bi-${social}`}></i>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              <motion.div variants={itemVariants}>
                <h3 className="text-white font-bold Rethink text-2xl mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 bg-prim-dark rounded-full"></span>
                  Links
                </h3>

                <ul className="flex flex-col space-y-3">
                  {["home", "about", "expertise", "testimonials", "contact", "gallery"].map((link) => (
                    <li key={link}>
                      <Link
                        href={`#${link}`}
                        onClick={(e) => handleScroll(e, `#${link}`)}
                        className="text-text-light DmSans transition-all duration-300 hover:text-prim-dark hover:translate-x-2 inline-block capitalize"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h3 className="text-white font-bold Rethink text-2xl mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 bg-prim-dark rounded-full"></span>
                  Products
                </h3>

                <ul className="flex flex-col space-y-3">
                  {["Chairs", "Dressers", "Sofas", "Storage", "Tables", "Curtain"].map((item) => (
                    <li key={item}>
                      <Link href="#" className="text-text-light DmSans transition-all duration-300 hover:text-prim-dark hover:translate-x-2 inline-block">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h3 className="text-white font-bold Rethink text-2xl mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 bg-prim-dark rounded-full"></span>
                  Contact
                </h3>

                <div className="flex flex-col space-y-4">
                  <motion.div whileHover={{ x: 5 }}>
                    <Link href="mailto:info@example.com" className="text-text-light DmSans transition-all duration-300 hover:text-prim-dark break-all">
                      info@example.com
                    </Link>
                  </motion.div>
                  <p className="text-text-light DmSans opacity-80">
                    123 Design Avenue, Suite 400,<br />New York, NY 10001
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <motion.div
          variants={itemVariants}
          className="relative mt-20 pt-8"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-0 left-0 h-px bg-linear-to-r from-transparent via-gray-500 to-transparent"
          />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
            <p className="text-text-light DmSans text-sm">
              © 2026 <span className="text-prim-dark font-bold">Livora</span>. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-text-light DmSans text-sm hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="text-text-light DmSans text-sm hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}

export default Footer
