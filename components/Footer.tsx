import React from 'react';
import { NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-800 pb-12 mb-12">
            
            {/* Logo FUMCON */}
            <div className="flex flex-col items-start mb-8 md:mb-0 select-none">
                 <span className="text-[0.6rem] font-bold uppercase tracking-wider mb-0.5 leading-none text-gray-400">
                    Servicios y Soluciones Integrales
                </span>
                <div className="relative flex items-center">
                    <span className="font-black text-3xl tracking-tighter leading-none text-white">
                        FUMCON
                    </span>
                    <div className="h-3 w-8 bg-brand-yellow ml-1.5 rounded-sm transform -skew-x-12"></div>
                </div>
                <span className="text-[0.55rem] font-bold uppercase tracking-[0.15em] mt-0.5 leading-none text-gray-400">
                    Del Sureste S.A. de C.V.
                </span>
            </div>
            
            <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm font-medium text-gray-400">
                {NAV_LINKS.map((link) => (
                    <a 
                        key={link.label}
                        href={link.href} 
                        className="hover:text-brand-yellow transition-colors"
                    >
                        {link.label}
                    </a>
                ))}
            </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-medium">
            <p>&copy; {new Date().getFullYear()} FUMCON del Sureste S.A. de C.V. Todos los derechos reservados.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
                <span className="hover:text-gray-300 cursor-pointer transition-colors">Aviso de Privacidad</span>
                <span className="hover:text-gray-300 cursor-pointer transition-colors">Términos y Condiciones</span>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;