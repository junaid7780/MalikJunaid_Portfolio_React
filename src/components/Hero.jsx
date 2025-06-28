import React from "react";
import Typed from "react-typed";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center text-center px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-4"
      >
        <img
         src="public/images/my.jpg"
         alt="Malik Junaid"
         className="w-32 h-32 rounded-full border-4 border-white dark:border-zinc-800 shadow-lg"
       />
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I’m <span className="text-blue-600 dark:text-blue-400">Malik Junaid</span>
        </h1>
        <Typed
          className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-300"
          strings={[
            "Cybersecurity Learner",
            "Web Developer",
            "Bug Bounty Enthusiast"
          ]}
          typeSpeed={50}
          backSpeed={30}
          loop
        />
      </motion.div>
    </section>
  );
}
