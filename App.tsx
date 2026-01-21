
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
    document.documentElement.classList.toggle('light');
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 400;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative selection:bg-xiaomi-orange selection:text-white">
      {/* Dynamic Funky Backgrounds */}
      <div className="fixed inset-0 funky-bg-1 pointer-events-none -z-10"></div>
      <div className="fixed inset-0 funky-bg-2 pointer-events-none -z-10"></div>
      
      {/* Xiaomi Blobs */}
      <div className="fixed top-1/4 -left-20 w-80 h-80 bg-xiaomi-orange/10 rounded-full blur-[100px] -z-10 animate-pulse"></div>
      <div className="fixed bottom-1/4 -right-20 w-96 h-96 bg-xiaomi-blue/10 rounded-full blur-[120px] -z-10 animate-pulse delay-1000"></div>

      <Navbar activeSection={activeSection} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
      <main className="max-w-7xl mx-auto px-6 lg:px-12">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
