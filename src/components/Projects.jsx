import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-4 max-w-4xl mx-auto">
      <motion.h2
        className="text-3xl font-bold mb-10 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <motion.a
        href="https://github.com/junaid7780/jaf-ai-assistant" // replace with your actual link
        target="_blank"
        rel="noopener noreferrer"
        className="border rounded-xl p-6 hover:shadow-lg bg-white dark:bg-zinc-800 dark:border-zinc-700 transition flex flex-col gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <img
          src="/projects/jaf.png" // put your image in public/projects/jaf.png
          alt="JAF - Your All-in-One AI Assistant"
          className="rounded shadow"
        />
        <h3 className="text-2xl font-semibold">JAF — Your All-in-One AI Assistant</h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          JAF is an advanced AI-powered personal assistant that integrates text
          generation, image creation, and content summarization into a single
          platform. Built with cutting-edge web technologies, it delivers
          seamless, responsive, and secure user experiences for productivity and
          creative tasks.
        </p>
      </motion.a>
    </section>
  );
}
