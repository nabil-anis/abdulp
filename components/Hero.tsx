
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-48 pb-32 flex flex-col items-center text-center">
      <div className="inline-block px-4 py-1.5 mb-6 rounded-full glass-card border-blue-500/30 text-blue-400 text-sm font-medium tracking-wide">
        Available for new projects
      </div>
      <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight">
        Building Digital <br />
        <span className="gradient-text">Experiences.</span>
      </h1>
      <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
        Hi, I'm <span className="text-white font-semibold">Abdullah</span>. I'm a developer specializing in crafting 
        high-performance, beautiful user interfaces that solve real-world problems.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <a href="#projects" className="bg-white text-black font-bold px-8 py-4 rounded-2xl transition-transform hover:scale-105">
          View My Work
        </a>
        <a href="#contact" className="glass-card text-white font-bold px-8 py-4 rounded-2xl transition-all hover:bg-white/10">
          Contact Me
        </a>
      </div>

      <div className="mt-20 animate-bounce text-gray-500">
        <i className="fa-solid fa-chevron-down text-2xl"></i>
      </div>
    </section>
  );
};

export default Hero;
