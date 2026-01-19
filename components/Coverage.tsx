import React from 'react';
import { MapPin } from 'lucide-react';
import { COVERAGE_AREAS } from '../constants';

const Coverage: React.FC = () => {
  return (
    <section id="cobertura" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-dark rounded-[3rem] overflow-hidden relative">
            <div className="grid lg:grid-cols-2">
                
                <div className="p-12 lg:p-16 flex flex-col justify-center relative z-10">
                    <h2 className="text-4xl font-bold text-white mb-6">Cobertura Regional</h2>
                    <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                        Desplegamos unidades móviles equipadas desde nuestros centros operativos. Llegamos a tu ubicación con respuesta rápida.
                    </p>

                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                        <ul className="space-y-4">
                            {COVERAGE_AREAS.map((area, idx) => (
                                <li key={idx} className="flex items-center gap-4 text-white font-medium border-b border-white/5 pb-2 last:border-0 last:pb-0">
                                    <div className="bg-brand-green p-1.5 rounded-full">
                                        <MapPin className="text-white w-4 h-4" />
                                    </div>
                                    {area}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="relative h-96 lg:h-auto bg-gray-800">
                    <img 
                        src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200" 
                        alt="Mapa de cobertura" 
                        className="w-full h-full object-cover opacity-80 mix-blend-overlay"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent lg:bg-gradient-to-l"></div>
                    
                    {/* Floating Map Marker UI */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                        <div className="relative">
                            <span className="w-4 h-4 bg-brand-yellow rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-ping"></span>
                            <MapPin size={48} className="text-brand-yellow relative z-10 drop-shadow-lg" fill="currentColor" />
                        </div>
                        <div className="mt-4 bg-white px-4 py-2 rounded-lg shadow-xl font-bold text-brand-dark text-sm whitespace-nowrap">
                            Operando Ahora
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </div>
    </section>
  );
};

export default Coverage;