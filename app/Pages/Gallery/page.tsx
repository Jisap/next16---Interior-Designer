"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import gallery1 from "@/public/Images/gallery-1.jpg";
import gallery2 from "@/public/Images/gallery-2.jpg";
import gallery3 from "@/public/Images/gallery-3.jpg";
import gallery4 from "@/public/Images/gallery-4.jpg";
import gallery5 from "@/public/Images/gallery-5.jpg";
import gallery6 from "@/public/Images/gallery-6.jpg";

const galleryImages = [
  { src: gallery1, alt: "Interior Design 1", className: "md:col-span-2 md:row-span-2" },
  { src: gallery2, alt: "Interior Design 2", className: "md:col-span-1 md:row-span-1" },
  { src: gallery3, alt: "Interior Design 3", className: "md:col-span-1 md:row-span-1" },
  { src: gallery4, alt: "Interior Design 4", className: "md:col-span-1 md:row-span-2" },
  { src: gallery5, alt: "Interior Design 5", className: "md:col-span-1 md:row-span-1" },
  { src: gallery6, alt: "Interior Design 6", className: "md:col-span-2 md:row-span-1" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
  hover: {
    scale: 0.98,
    transition: { duration: 0.3 }
  }
};

const Gallery = () => {
  return (
    <section className="py-24 bg-body overflow-hidden" id="gallery">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="text-prim font-medium tracking-widest uppercase text-sm mb-4 block Audiowide">
            Our Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold Rethink text-white mb-6">
            Visualizing <span className="text-prim italic">Excellence</span>
          </h2>
          <div className="w-24 h-1 bg-prim mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[250px]"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className={`relative group overflow-hidden rounded-2xl cursor-pointer h-[350px] md:h-full ${image.className}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-black/60 z-10 flex items-center justify-center p-6"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="text-center"
                >
                  <p className="text-white font-bold text-2xl Rethink mb-2">{image.alt}</p>
                  <span className="text-prim text-sm Audiowide tracking-[0.2em] font-medium">View Project</span>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-text-light text-lg DmSans max-w-2xl mx-auto">
            Explore our curated selection of space transformations where every details matters.
            Follow us for daily inspiration on <span className="text-prim underline cursor-pointer font-bold">Instagram</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
