import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="text-white py-8">
      <div className="container mx-auto px-6 md:px-[8rem] flex justify-between items-center">
        <div className="text-2xl">RK.</div>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-lg">
          <a href="#" className="hover:text-blue-300 transition-colors">Projects</a>
          <a href="#" className="hover:text-blue-300 transition-colors">Resume</a>
          <a href="#" className="hover:text-blue-300 transition-colors">Contact</a>
        </nav>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-6 py-4">
          <div className="flex flex-col space-y-4">
          <a href="#" className="hover:text-blue-300 transition-colors">Projects</a>
          <a href="#" className="hover:text-blue-300 transition-colors">Resume</a>
          <a href="#" className="hover:text-blue-300 transition-colors">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;