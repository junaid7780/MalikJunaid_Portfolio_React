import React, { useState } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // simulate submit success (use a real API if you wish)
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="py-16 px-4 max-w-4xl mx-auto">
      <motion.h2
        className="text-3xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Contact Me
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        className="space-y-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="flex-1 px-4 py-2 rounded border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="flex-1 px-4 py-2 rounded border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800"
          />
        </div>
        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          required
          className="w-full px-4 py-2 rounded border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800"
        ></textarea>
        <button
          type="submit"
          className="flex items-center justify-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-purple-600 hover:to-blue-600 transition"
        >
          <Send size={16} /> Send Message
        </button>
        {sent && (
          <motion.p
            className="text-green-600 dark:text-green-400 mt-2 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            ✅ Message sent successfully!
          </motion.p>
        )}
      </motion.form>

      <motion.div
        className="mt-10 flex justify-center gap-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <a href="https://github.com/junaid7780" target="_blank" rel="noopener noreferrer">
          <Github className="hover:text-blue-600 transition" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <Linkedin className="hover:text-blue-600 transition" />
        </a>
        <a href="mailto:your@email.com">
          <Mail className="hover:text-blue-600 transition" />
        </a>
      </motion.div>
    </section>
  );
}
