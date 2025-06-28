import React from "react";
import { motion } from "framer-motion";

const certs = [
  {
    title: "TryHackMe — Pre-Security",
    link: "https://tryhackme.com/",
    image: "https://tryhackme-badges.s3.amazonaws.com/badge.png",
  },
  {
    title: "TCM Security — Practical Ethical Hacking",
    link: "https://tcm-sec.com",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/TryHackMe_logo.png/600px-TryHackMe_logo.png",
  },
  {
    title: "Google Cybersecurity Certificate (Coursera)",
    link: "#",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 px-4 max-w-6xl mx-auto">
      <motion.h2
        className="text-3xl font-bold mb-10 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Certifications & Courses
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certs.map((cert, index) => (
          <motion.a
            href={cert.link}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="border rounded-xl overflow-hidden bg-white dark:bg-zinc-800 dark:border-zinc-700 shadow hover:shadow-lg transition block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-40 object-contain bg-white p-4"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-center">{cert.title}</h3>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
