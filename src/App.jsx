import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Gallery from "./components/Gallery";   
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import { ThemeProvider } from "./components/ThemeContext";
import "./index.css";

function App() {
  return (
    <ThemeProvider>
      <main className="min-h-screen bg-white dark:bg-zinc-900 text-zinc-800 dark:text-white transition-colors duration-500">
        <Hero />
        <About />
        <Projects />
        <Gallery />    
        <Skills />
        <Certifications />
        <Contact />
      </main>
    </ThemeProvider>
  );
}

export default App;

