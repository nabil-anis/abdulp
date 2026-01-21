
import React from 'react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center glass-card px-8 py-3 rounded-2xl">
        <div className="text-2xl font-extrabold tracking-tighter">
          <span className="gradient-text">ABDULLAH.</span>
        </div>
        
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li key={item.id} className="relative">
              <a 
                href={`#${item.id}`} 
                className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                  activeSection === item.id ? 'text-blue-400 font-bold' : 'text-gray-400'
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <a 
          href="#contact" 
          className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-xl text-sm font-semibold transition-all shadow-lg shadow-blue-900/20"
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
