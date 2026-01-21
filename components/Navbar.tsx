
import React from 'react';

interface NavbarProps {
  activeSection: string;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, isDarkMode, toggleTheme }) => {
  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center glass-card px-8 py-4 rounded-3xl">
        <div className="text-2xl font-black tracking-tighter">
          <span className="text-xiaomi-orange">ABD</span>
          <span className="dark:text-white text-black">ULLAH</span>
        </div>
        
        <ul className="hidden md:flex space-x-10">
          {navItems.map((item) => (
            <li key={item.id}>
              <a 
                href={`#${item.id}`} 
                className={`text-sm font-bold transition-all ${
                  activeSection === item.id 
                    ? 'text-xiaomi-orange scale-110' 
                    : 'dark:text-gray-400 text-gray-600 hover:text-xiaomi-blue'
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="w-10 h-10 rounded-xl flex items-center justify-center transition-all bg-gray-200 dark:bg-white/10 hover:scale-110"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? (
              <i className="fa-solid fa-sun text-yellow-400"></i>
            ) : (
              <i className="fa-solid fa-moon text-xiaomi-blue"></i>
            )}
          </button>
          
          <a 
            href="#contact" 
            className="hidden sm:block bg-xiaomi-orange hover:bg-[#ff8c00] text-white px-6 py-2.5 rounded-2xl text-sm font-bold transition-all shadow-lg shadow-orange-500/20"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
