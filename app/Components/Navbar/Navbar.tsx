"use client"

import Image from "next/image"
import Link from "next/link"
import phoneCall from "@/public/Images/phone-call.svg"
import { useEffect, useState } from "react"
import { motion, AnimatePresence, Variants } from "framer-motion"

type NavLink = {
  label: string;
  href: string;
};

const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Faqs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];


const Navbar = () => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: "smooth" });
    window.history.pushState(null, "", href);
    setMobileMenuOpen(false);
  };

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
  const menuVariants: Variants = {
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
  const itemVariants: Variants = {
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
        ${isFixed ? "px-[5%] sm:px-[8%] lg:px-[10%] xl:px-[14%] 2xl:px-[16%]" : "px-[5%] sm:px-[8%] lg:px-[5%] xl:px-[5%]"}
        `}
      >
        {/* desktop logo */}
        <Link
          href="/"
          className={`transition-all duration-500 font-bold Audiowide text-white relative z-60
            ${isFixed ? "text-3xl lg:text-4xl xl:text-5xl" : "text-4xl lg:text-5xl"}
          `}
        >
          Liv<span className="text-prim-dark">ora</span>
        </Link>

        {/* Desktop nav */}
        <nav className={`hidden lg:flex menu-link relative z-40 transition-all duration-500
          ${isFixed ? "gap-3 xl:gap-4 2xl:gap-5" : "gap-4 xl:gap-5"}
        `}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className={`Rethink text-gray-200 hover:text-prim-dark transition-all duration-500
                ${isFixed ? "text-sm lg:text-base xl:text-lg" : "text-base lg:text-lg"}
              `}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Icons */}
        <div className={`flex items-center relative z-60 transition-all duration-500
          ${isFixed ? "gap-2 lg:gap-3 xl:gap-4" : "gap-3 lg:gap-5"}
        `}>
          <Link href="#" className={`hidden md:flex gap-2 text-gray-200 group transition-all duration-500
            ${isFixed ? "text-sm xl:text-base" : "text-base"}
          `}>
            <Image
              src={phoneCall}
              alt="phone"
              width={isFixed ? 20 : 24}
              height={isFixed ? 20 : 24}
              className="invert transition-all duration-500"
            />
            <span className="Rethink font-semibold group-hover:text-white">
              +1 234 567 890
            </span>
          </Link>

          <Link href="#contact" onClick={(e) => handleScroll(e, "#contact")} className={`Rethink font-semibold bg-white text-black hover:bg-prim-dark hover:text-white rounded-full transition-all duration-300 cursor-pointer
            ${isFixed ? "px-3 py-1.5 text-sm lg:px-4 lg:py-2 lg:text-base" : "px-4 py-2 text-base"}
          `}>
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
                    onClick={(e) => handleScroll(e, link.href)}
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
