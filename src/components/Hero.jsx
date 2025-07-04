import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-16 px-4 max-w-4xl mx-auto text-center">
      <motion.h2
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <div className="flex flex-col items-center gap-4">
        <img
          src="/Gallery/image10.jpg"   // note: NO `public` prefix here
          alt="About Malik"
          className="w-48 h-48 object-cover rounded-full shadow"
        />
        <motion.p
          className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          I&apos;m a passionate cybersecurity learner and web developer, exploring the
          depths of ethical hacking, bug bounty, and front-end technologies. I
          believe in continuous learning, hands-on practice, and building secure
          applications that make a difference. Let&apos;s build the future together — securely.
        </motion.p>
      </div>
    </section>
  );
}
