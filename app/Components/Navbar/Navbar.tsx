"use client"

import Image from "next/image"
import Link from "next/link"
import phoneCall from "@/public/Images/phone-call.svg"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

type NavLink = {
  label: string;
  href: string;
};

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Expertise", href: "/expertise" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Faqs", href: "/faqs" },
  { label: "Contact Us", href: "/contact" },
];


const Navbar = () => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  // Animación del fondo
  const menuVariants: any = {
    closed: {
      // El menú está oculto dentro de un círculo de tamaño 0% 
      // en la esquina superior derecha (cerca del botón)
      clipPath: "circle(0% at 90% 5%)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        // Cuando se cierra, anima los hijos (los enlaces) en orden inverso
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    opened: {
      // El círculo se expande al 150% cubriendo toda la pantalla
      clipPath: "circle(150% at 90% 5%)",
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
        // Cuando se abre, espera 0.2s y luego anima cada hijo con 0.1s de diferencia entre ellos
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  // Animación de los enlaces
  const itemVariants: any = {
    closed: {
      opacity: 0,               // Invisible
      y: 20,                    // Desplazado 20px hacia abajo
      transition: {
        y: { stiffness: 1000 }
      }
    },
    opened: {
      opacity: 1,                // Visible
      y: 0,                      // En su posisiión original
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    }
  };


  return (
    <div className={`
      w-full transition-all py-5 duration-500 fixed top-0 left-0 z-50 fixed-nav
      ${isFixed ? "bg-black/90 backdrop-blur-md" : "bg-transparent"}    
    `}>
      <div className={`flex items-center justify-between transition-all duration-500 
        ${isFixed ? "px-[8%] lg:px-[16%]" : "px-[8%] lg:px-[5%]"}
        `}
      >
        {/* desktop logo */}
        <Link
          href="/"
          className={`text-4xl lg:text-5xl font-bold Audiowide text-white relative z-60`}
        >
          Liv<span className="text-prim-dark">ora</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex space-x-5 menu-link relative z-40">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg min-[1025px]:max-[1224px]:text-sm Rethink text-gray-200 hover:text-prim-dark transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Icons */}
        <div className="flex items-center gap-5 relative z-60">
          <Link href="#" className="hidden md:flex gap-2 text-gray-200 group">
            <Image
              src={phoneCall}
              alt="phone"
              width={24}
              height={24}
              className="invert"
            />
            <span className="Rethink font-semibold group-hover:text-white">
              +1 234 567 890
            </span>
          </Link>

          <Link href="#contact" className="Rethink font-semibold px-4 py-2 bg-white text-black hover:bg-prim-dark hover:text-white rounded-full transition-all duration-300 cursor-pointer">
            Get in Touch
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-3xl focus:outline-none text-white"
          >
            <motion.i
              animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
              className={mobileMenuOpen ? "ri-close-line" : "ri-menu-line"}
            ></motion.i>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {/* AnimatePresence detecta cuando el componente se cierra, ejecuta la animación y solo despues desmonta del dom el componente */}
        {mobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="opened"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center lg:hidden"
          >
            <div className="flex flex-col items-center space-y-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  variants={itemVariants}
                >
                  <Link
                    href={link.href}
                    className="text-4xl font-bold Rethink text-gray-100 hover:text-prim-dark transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="text-prim-dark/50 mr-4 text-2xl font-mono">0{index + 1}</span>
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div variants={itemVariants} className="pt-8">
                <Link href="#" className="flex gap-4 text-gray-200 items-center">
                  <Image src={phoneCall} alt="phone" width={32} height={32} className="invert" />
                  <span className="text-xl font-semibold">+1 234 567 890</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Navbar
