
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5 mt-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h3 className="text-2xl font-black gradient-text">ABDULLAH.</h3>
          <p className="text-gray-500 text-sm mt-2">Crafting excellence in every pixel.</p>
        </div>

        <div className="flex gap-6">
          <a href="#" className="w-12 h-12 flex items-center justify-center rounded-xl glass-card text-gray-400 hover:text-blue-400 transition-colors">
            <i className="fa-brands fa-github text-xl"></i>
          </a>
          <a href="#" className="w-12 h-12 flex items-center justify-center rounded-xl glass-card text-gray-400 hover:text-blue-400 transition-colors">
            <i className="fa-brands fa-linkedin text-xl"></i>
          </a>
          <a href="#" className="w-12 h-12 flex items-center justify-center rounded-xl glass-card text-gray-400 hover:text-blue-400 transition-colors">
            <i className="fa-brands fa-twitter text-xl"></i>
          </a>
        </div>

        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Abdullah. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
