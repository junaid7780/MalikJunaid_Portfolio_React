import React from "react";
import { motion } from "framer-motion";

const galleryImages = [
  "/Gallery/image2.jpg",
  "/Gallery/image3.jpg",
  "/Gallery/image4.jpg",
  "/Gallery/image5.jpg",
  "/Gallery/image6.jpg",
  "/Gallery/image7.jpg",
  "/Gallery/image9.webp",
  "/Gallery/image10.jpg",
  "/Gallery/image11.jpg",
  "/Gallery/image12.jpg",


];

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 px-4 max-w-6xl mx-auto">
      <motion.h2
        className="text-3xl font-bold mb-10 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        My Gallery
      </motion.h2>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {galleryImages.map((img, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-lg shadow hover:shadow-xl transition"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={img}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-80 object-cover object-top rounded shadow hover:scale-105 transition duration-500"
            />


          </motion.div>
        ))}
      </div>
    </section>
  );
}
