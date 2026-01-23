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
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                            {COVERAGE_AREAS.map((area, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-white font-medium">
                                    <div className="bg-brand-green p-1.5 rounded-full shrink-0">
                                        <MapPin className="text-white w-4 h-4" />
                                    </div>
                                    <span className="text-sm md:text-base leading-tight">{area}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="relative h-96 lg:h-auto bg-gray-800">
                    <img 
                        src="https://nmnofwinjufyyykyaelc.supabase.co/storage/v1/object/sign/Fumcon/mapa.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hNzRlMzZmMy0wZDFhLTQ5NWMtYWMwMS0zNjMzMDY0Y2YwZTIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJGdW1jb24vbWFwYS5wbmciLCJpYXQiOjE3NjkxOTc4ODAsImV4cCI6MTgzMjI2OTg4MH0.zYaftJqTYPVO4YzDCB3q4as_XgJm9-_JjFXzaQ_X-Uw" 
                        alt="Mapa de cobertura en Quintana Roo y Yucatán" 
                        className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-transparent lg:bg-gradient-to-l lg:from-brand-dark/20 pointer-events-none"></div>
                </div>

            </div>
        </div>
      </div>
    </section>
  );
};

export default Coverage;