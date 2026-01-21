
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-48 pb-32 flex flex-col items-center text-center">
      <div className="inline-block px-4 py-1.5 mb-8 rounded-full glass-card border-xiaomi-green/30 text-xiaomi-green text-xs font-bold uppercase tracking-widest">
        <i className="fa-solid fa-circle-dot mr-2 animate-pulse"></i>
        Active Now
      </div>
      <h1 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter leading-[0.9]">
        Crafting <br />
        <span className="text-xiaomi-orange">Bold</span> Ideas.
      </h1>
      <p className="dark:text-gray-400 text-gray-600 text-lg md:text-2xl max-w-2xl font-medium mb-12">
        I'm <span className="dark:text-white text-black font-extrabold">Abdullah</span>, a creative developer turning pixels into <span className="text-xiaomi-purple underline decoration-xiaomi-purple decoration-4 underline-offset-4">digital magic</span>.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-6">
        <a href="#projects" className="bg-xiaomi-blue text-white font-black px-10 py-5 rounded-[2rem] transition-all hover:scale-105 hover:shadow-2xl hover:shadow-xiaomi-blue/40">
          Exploration
        </a>
        <a href="#contact" className="glass-card dark:text-white text-black font-black px-10 py-5 rounded-[2rem] transition-all hover:bg-xiaomi-orange hover:text-white hover:border-transparent">
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default Hero;
