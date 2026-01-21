
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

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Background blobs for depth */}
      <div className="fixed top-0 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="fixed bottom-0 -right-20 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] -z-10 animate-pulse delay-700"></div>

      <Navbar activeSection={activeSection} />
      
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
