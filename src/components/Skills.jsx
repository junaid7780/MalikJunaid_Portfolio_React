import React from "react";
import { motion } from "framer-motion";

const skills = {
  "Web Development": [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
  ],
  "Cybersecurity": [
    "Linux",
    "Ethical Hacking",
    "Web Pentesting",
    "Burp Suite",
    "Bug Bounty",
    "TryHackMe",
  ],
  "Tools": [
    "Git",
    "VS Code",
    "Figma",
    "Netlify",
  ]
};

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-4 max-w-5xl mx-auto">
      <motion.h2
        className="text-3xl font-bold mb-10 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        My Skills
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        {Object.entries(skills).map(([category, items], i) => (
          <motion.div
            key={i}
            className="bg-white dark:bg-zinc-800 rounded-xl shadow p-6 border dark:border-zinc-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-3">{category}</h3>
            <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300">
              {items.map((skill, j) => (
                <li key={j}>{skill}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
