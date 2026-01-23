import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { NAV_LINKS, CONTACT_INFO, LOGO_LIGHT, LOGO_DARK } from '../constants';
import LocationModal from './LocationModal';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5 lg:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo FUMCON */}
            <div 
              className="flex-shrink-0 cursor-pointer select-none" 
              onClick={() => window.location.href = '#hero'}
            >
              <img 
                src={scrolled ? LOGO_LIGHT : LOGO_DARK} 
                alt="FUMCON Logo" 
                className="h-10 md:h-12 w-auto object-contain transition-all duration-300"
              />
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-1 items-center bg-white/5 backdrop-blur-sm px-2 py-1.5 rounded-full border border-white/10 mx-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 ${
                    scrolled 
                      ? 'text-gray-600 hover:text-brand-dark hover:bg-gray-100' 
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA Button Desktop */}
            <div className="hidden md:flex">
              <button
                onClick={() => setIsModalOpen(true)}
                className={`px-6 py-2.5 rounded-full font-bold transition-all transform hover:scale-105 flex items-center gap-2 text-sm shadow-lg ${
                  scrolled 
                    ? 'bg-brand-dark text-white hover:bg-brand-green' 
                    : 'bg-brand-yellow text-brand-dark hover:bg-white'
                }`}
              >
                <MessageCircle size={18} />
                Sucursales WhatsApp
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-lg transition-colors ${scrolled ? 'text-brand-dark' : 'text-white'}`}
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden bg-white absolute w-full shadow-2xl rounded-b-3xl overflow-hidden animate-in slide-in-from-top-10 fade-in duration-300">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-brand-green hover:bg-green-50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsModalOpen(true);
                }}
                className="block w-full text-center mt-4 bg-brand-green text-white px-4 py-4 rounded-xl font-bold"
              >
                Sucursales WhatsApp
              </button>
            </div>
          </div>
        )}
      </header>

      <LocationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Header;