"use client"

import Link from "next/link"


const Footer = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: "smooth" });
    window.history.pushState(null, "", href);
  };

  return (
    <>
      <div className="px-[8%] lg:px-[16%] py-20 pb-8">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          <div className="w-full lg:w-1/2">
            <Link href="/" className={`text-4xl lg:text-5xl font-bold Audiowide text-white`}>
              Liv<span className="text-prim-dark">ora</span>
            </Link>

            <p className="text-text-light DmSans my-5">
              Form is an architecture and design studio crafting inspired spaces. We create sustainable, bespoke environments that reflect client values and vision.
            </p>

            <div className="flex gap-2">
              <i className="bi bi-facebook border border-gray-500 rounded-full px-2 py-1 text-lg transition-all duration-300 text-white hover:-translate-y-1 cursor-pointer"></i>
              <i className="bi bi-behance border border-gray-500 rounded-full px-2 py-1 text-lg transition-all duration-300 text-white hover:-translate-y-1 cursor-pointer"></i>
              <i className="bi bi-instagram border border-gray-500 rounded-full px-2 py-1 text-lg transition-all duration-300 text-white hover:-translate-y-1 cursor-pointer"></i>
              <i className="bi bi-dribbble border border-gray-500 rounded-full px-2 py-1 text-lg transition-all duration-300 text-white hover:-translate-y-1 cursor-pointer"></i>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="">
                <h3 className="text-white font-bold Rethink text-2xl mb-5">
                  Links
                </h3>

                <div className="flex flex-col space-y-2">
                  <Link href="#home" onClick={(e) => handleScroll(e, "#home")} className="text-text-light DmSans transition-all duration-300 hover:text-white hover:ml-2">Home</Link>
                  <Link href="#about" onClick={(e) => handleScroll(e, "#about")} className="text-text-light DmSans transition-all duration-300 hover:text-white hover:ml-2">About</Link>
                  <Link href="#expertise" onClick={(e) => handleScroll(e, "#expertise")} className="text-text-light DmSans transition-all duration-300 hover:text-white hover:ml-2">Expertise</Link>
                  <Link href="#testimonials" onClick={(e) => handleScroll(e, "#testimonials")} className="text-text-light DmSans transition-all duration-300 hover:text-white hover:ml-2">Testimonials</Link>
                  <Link href="#contact" onClick={(e) => handleScroll(e, "#contact")} className="text-text-light DmSans transition-all duration-300 hover:text-white hover:ml-2">Contact</Link>
                  <Link href="#gallery" onClick={(e) => handleScroll(e, "#gallery")} className="text-text-light DmSans transition-all duration-300 hover:text-white hover:ml-2">Gallery</Link>
                </div>
              </div>

              <div className="">
                <h3 className="text-white font-bold Rethink text-2xl mb-5">
                  Top Products
                </h3>

                <div className="flex flex-col space-y-2">
                  <Link href="#" className="text-text-light DmSans transition-all duration-300 hover:text-white hover:ml-2">Chairs</Link>
                  <Link href="#" className="text-text-light DmSans transition-all duration-300 hover:text-white hover:ml-2">Dressers</Link>
                  <Link href="#" className="text-text-light DmSans transition-all duration-300 hover:text-white hover:ml-2">Sofas</Link>
                  <Link href="#" className="text-text-light DmSans transition-all duration-300 hover:text-white hover:ml-2">Storage</Link>
                  <Link href="#" className="text-text-light DmSans transition-all duration-300 hover:text-white hover:ml-2">Tables</Link>
                  <Link href="#" className="text-text-light DmSans transition-all duration-300 hover:text-white hover:ml-2">Curtain</Link>
                </div>
              </div>

              <div className="">
                <h3 className="text-white font-bold Rethink text-2xl mb-5">
                  Contact
                </h3>

                <div className="flex flex-col">
                  <Link href="" className="text-text-light DmSans transition-all duration-300 hover:text-white hover:ml-2">
                    info@example.com
                  </Link>
                  <p className="text-text-light mt-5 DmSans">
                    123 Design Avenue, Suite 400, New York, NY 10001
                  </p>

                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t text-center border-gray-500 mt-10">
          <p className="text-text-light mt-5 DmSans">
            © 2026 Livora. All rights reserved.
          </p>
        </div>
      </div>
    </>
  )
}

export default Footer