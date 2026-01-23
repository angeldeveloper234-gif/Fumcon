import React, { useState } from 'react';
import { Tag, ArrowRight } from 'lucide-react';
import LocationModal from './LocationModal';

const Promotion: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="promociones" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-brand-green to-brand-darkGreen rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-2xl">
            
            {/* Background Texture */}
            <div className="absolute top-0 right-0 w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
                <div className="lg:w-3/5 text-left">
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-white text-xs font-bold mb-6 tracking-wide uppercase">
                        <Tag size={14} className="text-brand-yellow" />
                        Oferta Limitada
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-none">
                        3 Sesiones <br/>
                        <span className="text-white/50 text-2xl md:text-4xl align-middle font-medium">al precio de</span> 2
                    </h2>
                    <p className="text-green-50 text-lg md:text-xl max-w-lg leading-relaxed">
                        Protección extendida para tu hogar. Incluye inspección inicial sin costo y garantía de servicio.
                    </p>
                </div>

                <div className="lg:w-2/5 flex flex-col items-center">
                    <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-sm transform hover:scale-105 transition-transform duration-300">
                        <p className="text-gray-400 text-sm font-bold uppercase tracking-wider text-center mb-2">Servicios Desde</p>
                        <div className="flex justify-center items-baseline mb-6">
                            <span className="text-5xl font-extrabold text-brand-dark">$750</span>
                            <span className="text-xl text-gray-500 font-medium ml-1">MXN</span>
                        </div>
                        <ul className="text-center space-y-2 mb-8 text-gray-600 text-sm">
                            <li className="flex items-center justify-center gap-2">✓ Inspección Gratuita</li>
                            <li className="flex items-center justify-center gap-2">✓ Productos Seguros</li>
                            <li className="flex items-center justify-center gap-2">✓ Certificado Digital</li>
                        </ul>
                        <button 
                            onClick={() => setIsModalOpen(true)}
                            className="w-full block bg-brand-yellow text-brand-dark py-4 rounded-xl font-bold text-center hover:bg-yellow-300 transition-colors shadow-lg"
                        >
                            Agendar Inspección
                        </button>
                    </div>
                </div>
            </div>

        </div>
      </div>
      <LocationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default Promotion;